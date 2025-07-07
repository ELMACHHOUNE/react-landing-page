"use client";
import React, { useState } from "react";
import { HoveredLink, Menu, MenuItem } from "./ui/navbar-menu";
import { cn } from "../lib/utils";

export default function Navbar({ className }) {
  const [active, setActive] = useState(null);
  return (
    <div
      className={cn("fixed top-10 inset-x-0 max-w-2xl mx-auto z-50", className)}
    >
      <Menu setActive={setActive}>
        <MenuItem setActive={setActive} active={active} item="Home">
          <div className="flex flex-col space-y-4 text-sm">
            <HoveredLink href="/">Landing</HoveredLink>
          </div>
        </MenuItem>
        <MenuItem setActive={setActive} active={active} item="Course Content">
          <div className="flex flex-col space-y-4 text-sm">
            <HoveredLink href="#syllabus">Syllabus</HoveredLink>
            <HoveredLink href="#modules">Modules</HoveredLink>
            <HoveredLink href="#lessons">Lessons</HoveredLink>
            <HoveredLink href="#projects">Projects</HoveredLink>
          </div>
        </MenuItem>
        <MenuItem setActive={setActive} active={active} item="Resources">
          <div className="flex flex-col space-y-4 text-sm">
            <HoveredLink href="https://react.dev/" target="_blank">
              React Docs
            </HoveredLink>
            <HoveredLink href="#community">Community</HoveredLink>
            <HoveredLink href="#tools">Tools</HoveredLink>
            <HoveredLink href="#faq">FAQ</HoveredLink>
          </div>
        </MenuItem>
        <MenuItem setActive={setActive} active={active} item="About">
          <div className="flex flex-col space-y-4 text-sm">
            <HoveredLink href="#about">About the Course</HoveredLink>
            <HoveredLink href="#instructor">Instructor</HoveredLink>
            <HoveredLink href="#testimonials">Testimonials</HoveredLink>
          </div>
        </MenuItem>
        <MenuItem setActive={setActive} active={active} item="Help">
          <div className="flex flex-col space-y-4 text-sm">
            <HoveredLink href="#getting-started">Getting Started</HoveredLink>
            <HoveredLink href="#support">Support</HoveredLink>
            <HoveredLink href="#contact">Contact</HoveredLink>
          </div>
        </MenuItem>
      </Menu>
    </div>
  );
}
