"use client";

import Link from "next/link";
import {
  LayoutDashboard,
  FolderKanban,
  Lightbulb,
  Handshake,
  Briefcase,
  MessageSquare,
  Settings,
} from "lucide-react";

const links = [
  {
    href: "/dashboard",
    label: "Dashboard",
    icon: LayoutDashboard,
  },
  {
    href: "/collections",
    label: "Collections",
    icon: FolderKanban,
  },
  {
    href: "/solutions",
    label: "Solutions",
    icon: Lightbulb,
  },
  {
    href: "/partners",
    label: "Partners",
    icon: Handshake,
  },
  {
    href: "/opportunities",
    label: "Opportunities",
    icon: Briefcase,
  },
  {
    href: "/feedback",
    label: "Feedback",
    icon: MessageSquare,
  },
  {
    href: "/settings",
    label: "Settings",
    icon: Settings,
  },
];

export default function Sidebar() {
  return (
    <aside className="w-64 bg-black text-white min-h-screen p-6">
      <h1 className="text-2xl font-bold mb-8">
        FUTOROLOGY
      </h1>

      <nav className="space-y-4">
        {links.map((link) => {
          const Icon = link.icon;

          return (
            <Link
              key={link.href}
              href={link.href}
              className="flex items-center gap-3 p-3 rounded-lg hover:bg-gray-800"
            >
              <Icon size={20} />
              {link.label}
            </Link>
          );
        })}
      </nav>
    </aside>
  );
}