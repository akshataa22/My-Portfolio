"use client";

import type { Body, Constraint, Engine } from "matter-js";
import { useEffect, useRef } from "react";
import type { BucketListItem } from "@/data/types";
import { cn } from "@/lib/cn";

type Matter = typeof import("matter-js");

type Simulation = {
  matter: Matter;
  engine: Engine;
  pills: Body[];
};

const pillColors = ["bg-accent/30", "bg-coffee/40", "bg-sage/30", "bg-sky/30", "bg-surface-strong"];

const WALL_THICKNESS = 200;
const FRAME_MS = 1000 / 60;
const PRESETTLE_STEPS = 600;

function buildWalls(matter: Matter, width: number, height: number) {
  const wallOptions = { isStatic: true };
  const wallHeight = height * 4;
  return {
    ground: matter.Bodies.rectangle(width / 2, height + WALL_THICKNESS / 2, width * 3, WALL_THICKNESS, wallOptions),
    left: matter.Bodies.rectangle(-WALL_THICKNESS / 2, height - wallHeight / 2, WALL_THICKNESS, wallHeight, wallOptions),
    right: matter.Bodies.rectangle(width + WALL_THICKNESS / 2, height - wallHeight / 2, WALL_THICKNESS, wallHeight, wallOptions),
  };
}

function createPillBody(matter: Matter, pill: HTMLElement, boardWidth: number, dropOrder: number) {
  const { offsetWidth: width, offsetHeight: height } = pill;
  return matter.Bodies.rectangle(
    width / 2 + Math.random() * Math.max(boardWidth - width, 0),
    -height * (dropOrder * 1.5 + 1),
    width,
    height,
    {
      angle: (Math.random() - 0.5) * 0.8,
      chamfer: { radius: height / 2 - 1 },
      friction: 0.4,
      restitution: 0.35,
    },
  );
}

function toBoardPoint(board: HTMLElement, event: PointerEvent) {
  const rect = board.getBoundingClientRect();
  return { x: event.clientX - rect.left - board.clientLeft, y: event.clientY - rect.top - board.clientTop };
}

export function BucketListBoard({ items }: { items: BucketListItem[] }) {
  const boardRef = useRef<HTMLDivElement>(null);
  const pillRefs = useRef<HTMLLIElement[]>([]);

  useEffect(() => {
    const board = boardRef.current;
    if (!board) return;

    const pillElements = pillRefs.current;
    let simulation: Simulation | null = null;
    let dragConstraint: Constraint | null = null;
    let isCancelled = false;
    let isOnScreen = false;
    let frameId = 0;
    let resizeObserver: ResizeObserver | undefined;

    function renderPills() {
      simulation?.pills.forEach((body, index) => {
        const pill = pillElements[index];
        const x = body.position.x - pill.offsetWidth / 2;
        const y = body.position.y - pill.offsetHeight / 2;
        pill.style.transform = `translate(${x}px, ${y}px) rotate(${body.angle}rad)`;
      });
    }

    function tick() {
      if (!simulation) return;
      simulation.matter.Engine.update(simulation.engine, FRAME_MS);
      renderPills();
      frameId = requestAnimationFrame(tick);
    }

    function setRunning(shouldRun: boolean) {
      cancelAnimationFrame(frameId);
      if (shouldRun && simulation) frameId = requestAnimationFrame(tick);
    }

    async function createSimulation(boardElement: HTMLDivElement) {
      const matter = await import("matter-js");
      if (isCancelled) return;

      const { clientWidth: width, clientHeight: height } = boardElement;
      const engine = matter.Engine.create({ gravity: { y: 1.2 } });
      const walls = buildWalls(matter, width, height);
      const pills = pillElements.map((pill, index) => createPillBody(matter, pill, width, index));

      matter.Composite.add(engine.world, [...Object.values(walls), ...pills]);
      simulation = { matter, engine, pills };

      if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
        for (let step = 0; step < PRESETTLE_STEPS; step += 1) matter.Engine.update(engine, FRAME_MS);
      }

      renderPills();
      boardElement.dataset.simulated = "";
      setRunning(isOnScreen);

      resizeObserver = new ResizeObserver(([entry]) => {
        const { width: newWidth, height: newHeight } = entry.contentRect;
        matter.Body.setPosition(walls.ground, { x: newWidth / 2, y: newHeight + WALL_THICKNESS / 2 });
        matter.Body.setPosition(walls.right, { x: newWidth + WALL_THICKNESS / 2, y: walls.right.position.y });
      });
      resizeObserver.observe(boardElement);
    }

    function startDrag(event: PointerEvent) {
      if (!simulation || !board) return;
      const point = toBoardPoint(board, event);
      const [body] = simulation.matter.Query.point(simulation.pills, point);
      if (!body) return;

      board.setPointerCapture(event.pointerId);
      dragConstraint = simulation.matter.Constraint.create({
        pointA: point,
        bodyB: body,
        pointB: { x: point.x - body.position.x, y: point.y - body.position.y },
        length: 0,
        stiffness: 0.2,
        damping: 0.1,
      });
      simulation.matter.Composite.add(simulation.engine.world, dragConstraint);
    }

    function moveDrag(event: PointerEvent) {
      if (dragConstraint && board) dragConstraint.pointA = toBoardPoint(board, event);
    }

    function endDrag() {
      if (!simulation || !dragConstraint) return;
      simulation.matter.Composite.remove(simulation.engine.world, dragConstraint);
      dragConstraint = null;
    }

    const loadObserver = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        loadObserver.disconnect();
        void createSimulation(board);
      },
      { rootMargin: "300px 0px" },
    );

    const visibilityObserver = new IntersectionObserver(
      ([entry]) => {
        isOnScreen = entry.isIntersecting;
        setRunning(isOnScreen);
      },
      { threshold: 0.4 },
    );

    loadObserver.observe(board);
    visibilityObserver.observe(board);
    board.addEventListener("pointerdown", startDrag);
    board.addEventListener("pointermove", moveDrag);
    board.addEventListener("pointerup", endDrag);
    board.addEventListener("pointercancel", endDrag);

    return () => {
      isCancelled = true;
      cancelAnimationFrame(frameId);
      loadObserver.disconnect();
      visibilityObserver.disconnect();
      resizeObserver?.disconnect();
      board.removeEventListener("pointerdown", startDrag);
      board.removeEventListener("pointermove", moveDrag);
      board.removeEventListener("pointerup", endDrag);
      board.removeEventListener("pointercancel", endDrag);
    };
  }, []);

  return (
    <div
      ref={boardRef}
      className="group bg-dot-grid relative min-h-80 flex-1 overflow-hidden rounded-2xl border border-line bg-background"
    >
      <ul className="absolute inset-0 flex flex-wrap content-end justify-center gap-2 p-4 group-data-simulated:p-0">
        {items.map((item, index) => (
          <li
            key={item.label}
            ref={(pill) => {
              if (pill) pillRefs.current[index] = pill;
            }}
            data-cursor="grab"
            className={cn(
              "touch-none rounded-full px-5 py-2.5 font-medium whitespace-nowrap text-ink select-none",
              "group-data-simulated:absolute group-data-simulated:top-0 group-data-simulated:left-0",
              pillColors[index % pillColors.length],
              item.isDone && "text-muted line-through decoration-2",
            )}
          >
            {item.label}
            <span className="sr-only">{item.isDone ? " (done)" : " (not yet)"}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
