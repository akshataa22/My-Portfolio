"use client";

import { Menu } from "lucide-react";
import { useRef } from "react";
import type { NavItem } from "@/data/types";

type MobileNavMenuProps = {
  items: NavItem[];
  resumePath: string;
  linkClassName: string;
};

export function MobileNavMenu({ items, resumePath, linkClassName }: MobileNavMenuProps) {
  const menuRef = useRef<HTMLDetailsElement>(null);
  const closeMenu = () => menuRef.current?.removeAttribute("open");

  return (
    <details ref={menuRef} className="relative md:hidden">
      <summary
        aria-label="Open menu"
        className="grid size-9 list-none place-items-center rounded-full border border-line bg-background [&::-webkit-details-marker]:hidden"
      >
        <Menu className="size-4" aria-hidden />
      </summary>
      <ul className="absolute top-12 right-0 flex w-48 flex-col gap-1 rounded-3xl border border-line bg-background p-2 shadow-lg">
        {items.map((item) => (
          <li key={item.href}>
            <a href={item.href} onClick={closeMenu} className={`${linkClassName} block`}>
              {item.label}
            </a>
          </li>
        ))}
        <li>
          <a
            href={resumePath}
            target="_blank"
            rel="noopener noreferrer"
            onClick={closeMenu}
            className={`${linkClassName} block font-medium text-accent`}
          >
            Resume ↗
          </a>
        </li>
      </ul>
    </details>
  );
}
