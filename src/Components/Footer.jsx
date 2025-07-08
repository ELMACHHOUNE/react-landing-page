import React from "react";
import {
  IconBrandGithub,
  IconBrandTwitter,
  IconBrandLinkedin,
} from "@tabler/icons-react";

const Footer = () => (
  <footer className="py-8 px-4 bg-gradient-to-tl from-primary via-secondary to-accent text-light">
    <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
      {/* Logo and Brand */}
      <div className="flex items-center gap-3">
        <img src="/logo.svg" alt="BusinessApp Logo" className="h-8 w-8" />
        <span className="font-bold text-lg tracking-wide">BusinessApp</span>
      </div>
      {/* Legal, Links, and Socials */}
      <div className="flex flex-col md:flex-row items-center gap-2 md:gap-6 text-sm">
        <span className="text-grayish">
          &copy; {new Date().getFullYear()} BusinessApp. All rights reserved.
        </span>
        <a href="/privacy" className="hover:underline text-light">
          Privacy Policy
        </a>
        <a href="/terms" className="hover:underline text-light">
          Terms of Service
        </a>
        <span className="text-grayish">Legal mentions</span>
        {/* Social Media Icons */}
        <div className="flex items-center gap-3 mt-2 md:mt-0">
          <a
            href="https://github.com/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="hover:text-accent transition"
          >
            <IconBrandGithub size={22} />
          </a>
          <a
            href="https://twitter.com/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Twitter"
            className="hover:text-accent transition"
          >
            <IconBrandTwitter size={22} />
          </a>
          <a
            href="https://linkedin.com/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="hover:text-accent transition"
          >
            <IconBrandLinkedin size={22} />
          </a>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
