import { experience } from "@/data/experience";
import { profile } from "@/data/profile";
import { projects } from "@/data/projects";
import { skillCategories, skills } from "@/data/skills";

type CommandResult = { kind: "output"; text: string } | { kind: "clear" };

const commandDescriptions: Record<string, string> = {
  help: "list available commands",
  whoami: "who is this person?",
  skills: "the tech I work with",
  projects: "things I've built",
  experience: "where I've worked",
  contact: "how to reach me",
  coffee: "brew a fresh cup",
  ls: "peek at my files",
  date: "current time in Mumbai",
  echo: "repeat after me",
  clear: "clean the screen",
};

const fileSystem: Record<string, string> = {
  "about.md": profile.summary,
  "secret.txt": "I still google how to center a div. Don't tell anyone. 🤫",
  "resume.pdf": `It's binary, silly. Grab it here instead: ${profile.resumePath}`,
};

const commandHandlers: Record<string, (args: string[]) => string> = {
  help: () =>
    Object.entries(commandDescriptions)
      .map(([command, description]) => `${command.padEnd(12)}${description}`)
      .join("\n") + "\n\npsst… try `sudo hire-akshata`",
  whoami: () => `${profile.name}\n${profile.role} · ${profile.location}`,
  skills: () =>
    skillCategories
      .map((category) => {
        const names = skills.filter((skill) => skill.category === category).map((skill) => skill.name);
        return `${category.padEnd(11)}${names.join(", ")}`;
      })
      .join("\n"),
  projects: () => projects.map((project) => `${project.emoji} ${project.title.padEnd(16)}${project.tagline}`).join("\n"),
  experience: () =>
    experience.map((entry) => `${entry.commitHash}  ${entry.role} @ ${entry.company} (${entry.period})`).join("\n"),
  contact: () =>
    [
      `email     ${profile.email}`,
      `linkedin  ${profile.socials.linkedin.href}`,
      `github    ${profile.socials.github.href}`,
      `twitter   ${profile.socials.twitter.href}`,
    ].join("\n"),
  coffee: () => "☕ brewing…\n   ( (\n    ) )\n  ........\n  |      |]\n  \\      /\n   `----'\nEnjoy! +10 productivity.",
  ls: () => Object.keys(fileSystem).join("   "),
  cat: ([fileName]) =>
    fileName && fileName in fileSystem ? fileSystem[fileName] : `cat: ${fileName ?? ""}: No such file`,
  date: () =>
    new Intl.DateTimeFormat("en-IN", { timeZone: profile.timeZone, dateStyle: "full", timeStyle: "short" }).format(
      new Date(),
    ),
  echo: (args) => args.join(" "),
  sudo: (args) =>
    args.join(" ") === "hire-akshata"
      ? `[sudo] password for recruiter: ********\nAccess granted ✓\nNext step: email ${profile.email} 💌`
      : "Nice try. Only `sudo hire-akshata` works here.",
};

export const terminalWelcome = `Welcome to akshata-os v1.0 ☕\nType \`help\` to see what I can do.`;

export function runTerminalCommand(input: string): CommandResult {
  const [command, ...args] = input.trim().split(/\s+/);
  const normalizedCommand = command.toLowerCase();

  if (normalizedCommand === "clear") return { kind: "clear" };

  const handler = commandHandlers[normalizedCommand];
  return {
    kind: "output",
    text: handler ? handler(args) : `command not found: ${command}. Try \`help\`.`,
  };
}
