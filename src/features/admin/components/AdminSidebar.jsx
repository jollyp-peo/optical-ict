"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

import {
  SquaresFour,
  ClipboardText,
  Envelope,
  Gear,
  SignOut,
  List,
  X,
} from "@phosphor-icons/react";

import { useAuth } from "@/features/auth/context/AuthContext";

const navItems = [
  {
    label: "Dashboard",
    href: "/admin/dashboard",
    icon: SquaresFour,
  },
  {
    label: "Bookings",
    href: "/admin/dashboard",
    icon: ClipboardText,
  },
  {
    label: "Messages",
    href: "/admin/dashboard",
    icon: Envelope,
  },
  {
    label: "Settings",
    href: "/admin/settings",
    icon: Gear,
  },
];

export default function AdminSidebar() {
  const pathname = usePathname();
  const { logout } = useAuth();
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleLogout = () => {
    logout();
    window.location.href = "/admin/login";
  };

  const NavLink = ({ item }) => {
    const Icon = item.icon;
    const isActive = pathname === item.href;

    return (
      <Link
        href={item.href}
        onClick={() => setMobileOpen(false)}
        className={`
          flex
          items-center
          gap-3
          rounded-xl
          px-4
          py-3
          text-sm
          font-medium
          transition
          ${isActive
            ? "bg-yellow-400/10 text-yellow-400"
            : "text-slate-400 hover:bg-slate-800 hover:text-slate-200"
          }
        `}
      >
        <Icon size={20} weight={isActive ? "duotone" : "regular"} />
        {item.label}
      </Link>
    );
  };

  return (
    <>
      {/* Mobile toggle */}

      <button
        type="button"
        onClick={() => setMobileOpen(!mobileOpen)}
        className="
          fixed
          left-4
          top-4
          z-50
          rounded-xl
          bg-slate-950
          p-2.5
          text-slate-200
          lg:hidden
        "
      >
        {mobileOpen ? <X size={20} /> : <List size={20} />}
      </button>

      {/* Overlay */}

      {mobileOpen && (
        <div
          className="fixed inset-0 z-30 bg-slate-950/50 lg:hidden"
          onClick={() => setMobileOpen(false)}
        />
      )}

      {/* Sidebar */}

      <aside
        className={`
          fixed
          inset-y-0
          left-0
          z-40
          w-64

          transform
          transition-transform
          duration-300

          ${mobileOpen ? "translate-x-0" : "-translate-x-full"}
          lg:translate-x-0

          border-r
          border-slate-800
          bg-slate-950
        `}
      >
        <div className="flex h-full flex-col">
          {/* Logo */}

          <div className="flex items-center gap-3 border-b border-slate-800 px-6 py-5">
            <img
              src="/images/brand/optimal.logo.webp"
              alt="Optimal ICT"
              className="h-8 w-8 rounded-lg object-contain"
            />
            <div>
              <span className="block text-sm font-bold text-white">
                Optimal ICT
              </span>
              <span className="text-xs font-medium uppercase tracking-wider text-slate-500">
                Admin
              </span>
            </div>
          </div>

          {/* Navigation */}

          <nav className="flex-1 space-y-1 px-4 py-6">
            {navItems.map((item) => (
              <NavLink key={item.label} item={item} />
            ))}
          </nav>

          {/* Logout */}

          <div className="border-t border-slate-800 p-4">
            <button
              type="button"
              onClick={handleLogout}
              className="
                flex
                w-full
                items-center
                gap-3
                rounded-xl
                px-4
                py-3
                text-sm
                font-medium
                text-slate-400
                transition
                hover:bg-red-500/10
                hover:text-red-400
              "
            >
              <SignOut size={20} />
              Logout
            </button>
          </div>
        </div>
      </aside>
    </>
  );
}