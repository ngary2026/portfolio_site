"use client"
import React, { useEffect, useRef, useState } from "react";
import { Mail } from "lucide-react";

interface Props {
  professionalEmail?: string;
  schoolEmail?: string;
}

export default function ContactMenu({
  professionalEmail = "garyneranti@gmail.com",
  schoolEmail = "nerantigary@bison.howard.edu",
}: Props) {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    function onDocClick(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setOpen(false);
      }
    }

    document.addEventListener("mousedown", onDocClick);
    return () => document.removeEventListener("mousedown", onDocClick);
  }, []);

  return (
    <div className="relative" ref={ref}>
      <button
        onClick={() => setOpen((v) => !v)}
        className="flex items-center gap-2 px-4 py-2 bg-neutral-900 text-white rounded-full hover:bg-neutral-800 transition-colors"
        aria-haspopup="menu"
        aria-expanded={open}
      >
        <Mail className="w-4 h-4" />
        Get in Touch
      </button>

      {open && (
        <div className="absolute right-0 mt-2 w-72 bg-white text-neutral-900 rounded-xl shadow-lg ring-1 ring-black/5 overflow-hidden z-50">
          <a
            href={`mailto:${professionalEmail}`}
            className="block px-4 py-3 hover:bg-neutral-50"
            onClick={() => setOpen(false)}
          >
            <div className="text-sm font-medium">Professional</div>
            <div className="text-xs text-neutral-500">{professionalEmail}</div>
          </a>

          <a
            href={`mailto:${schoolEmail}`}
            className="block px-4 py-3 hover:bg-neutral-50"
            onClick={() => setOpen(false)}
          >
            <div className="text-sm font-medium">School</div>
            <div className="text-xs text-neutral-500">{schoolEmail}</div>
          </a>
        </div>
      )}
    </div>
  );
}
