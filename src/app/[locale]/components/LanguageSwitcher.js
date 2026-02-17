"use client";

import { useState, useRef, useEffect } from "react";
import { useLocale, useTranslations } from "next-intl";
import { useRouter, usePathname } from "@/i18n/navigation";

export default function LanguageSwitcher() {
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();
  const t = useTranslations("languageSwitcher");

  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  const switchLocale = (newLocale) => {
    router.replace(pathname, { locale: newLocale });
    setIsOpen(false);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const languageLabel = {
    en: t("en"),
    "zh-CN": t("zh-CN"),
  };

  return (
    <div className="lang-switcher" ref={dropdownRef}>
      <button
        className={`lang-trigger ${isOpen ? "is-open" : ""}`}
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Toggle language menu"
        aria-expanded={isOpen}
      >
        <span className="lang-text">{languageLabel[locale]}</span>
        <svg
          className="lang-arrow"
          width="10"
          height="6"
          viewBox="0 0 10 6"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M1 1L5 5L9 1"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </button>

      {isOpen && (
        <div className="lang-dropdown">
          <button
            className={`lang-option ${locale === "en" ? "active" : ""}`}
            onClick={() => switchLocale("en")}
          >
            {t("en")}
            {locale === "en" && <span className="check">✓</span>}
          </button>
          <button
            className={`lang-option ${locale === "zh-CN" ? "active" : ""}`}
            onClick={() => switchLocale("zh-CN")}
          >
            {t("zh-CN")}
            {locale === "zh-CN" && <span className="check">✓</span>}
          </button>
        </div>
      )}
    </div>
  );
}
