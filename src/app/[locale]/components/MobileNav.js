"use client";

import { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import { useTranslations } from "next-intl";
import LanguageSwitcher from "./LanguageSwitcher";

export default function MobileNav() {
  const t = useTranslations();
  const [isOpen, setIsOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  // Ensure portal only renders after mount (SSR safety)
  useEffect(() => {
    setMounted(true);
  }, []);

  // Close menu on escape key
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === "Escape") setIsOpen(false);
    };
    document.addEventListener("keydown", handleEscape);
    return () => document.removeEventListener("keydown", handleEscape);
  }, []);

  const handleLinkClick = () => {
    setIsOpen(false);
  };

  // Only the backdrop is portaled to body (to escape nav-pill's backdrop-filter containing block)
  const backdrop = mounted
    ? createPortal(
        <div
          className={`mobile-backdrop ${isOpen ? "is-visible" : ""}`}
          onClick={() => setIsOpen(false)}
          aria-hidden="true"
        />,
        document.body
      )
    : null;

  return (
    <>
      <button
        className={`mobile-hamburger ${isOpen ? "is-open" : ""}`}
        onClick={() => setIsOpen(!isOpen)}
        aria-label={isOpen ? "Close menu" : "Open menu"}
        aria-expanded={isOpen}
      >
        <span className="hamburger-line" />
        <span className="hamburger-line" />
        <span className="hamburger-line" />
      </button>

      {backdrop}

      {/* Dropdown panel – rendered inline, positioned relative to nav-pill */}
      <div className={`mobile-menu ${isOpen ? "is-open" : ""}`}>
        <nav className="mobile-menu-links" aria-label="Mobile navigation">
          <a href="#evidence" onClick={handleLinkClick}>
            {t("nav.evidence")}
          </a>
          <a href="#how" onClick={handleLinkClick}>
            {t("nav.how")}
          </a>
          <a href="#faq" onClick={handleLinkClick}>
            {t("nav.faq")}
          </a>
        </nav>
        <hr className="mobile-menu-divider" />
        <a
          className="mobile-menu-signin"
          href="#apply"
          onClick={handleLinkClick}
        >
          {t("nav.apply")}
        </a>
      </div>
    </>
  );
}
