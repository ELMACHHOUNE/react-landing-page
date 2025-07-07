import React from "react";
import {
  IconBrandGithub,
  IconBrandTwitter,
  IconBrandLinkedin,
} from "@tabler/icons-react";

const Footer = () => (
  <footer className="py-8 px-4 bg-[#1B3C53] text-[#F9F3EF]">
    <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
      {/* Logo and Brand */}
      <div className="flex items-center gap-3">
        <img src="/logo.svg" alt="BusinessApp Logo" className="h-8 w-8" />
        <span className="font-bold text-lg tracking-wide">BusinessApp</span>
      </div>
      {/* Legal, Links, and Socials */}
      <div className="flex flex-col md:flex-row items-center gap-2 md:gap-6 text-sm">
        <span className="text-[#D2C1B6]">
          &copy; {new Date().getFullYear()} BusinessApp. All rights reserved.
        </span>
        <a href="/privacy" className="hover:underline text-[#F9F3EF]">
          Privacy Policy
        </a>
        <a href="/terms" className="hover:underline text-[#F9F3EF]">
          Terms of Service
        </a>
        <span className="text-[#D2C1B6]">Legal mentions</span>
        {/* Social Media Icons */}
        <div className="flex items-center gap-3 mt-2 md:mt-0">
          <a
            href="https://github.com/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="hover:text-[#D2C1B6] transition"
          >
            <IconBrandGithub size={22} />
          </a>
          <a
            href="https://twitter.com/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Twitter"
            className="hover:text-[#D2C1B6] transition"
          >
            <IconBrandTwitter size={22} />
          </a>
          <a
            href="https://linkedin.com/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="hover:text-[#D2C1B6] transition"
          >
            <IconBrandLinkedin size={22} />
          </a>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
