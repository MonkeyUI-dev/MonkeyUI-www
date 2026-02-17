import Image from "next/image";
import { useTranslations } from "next-intl";
import VideoPlayer from "./components/VideoPlayer";
import LanguageSwitcher from "./components/LanguageSwitcher";

export default function Home() {
  const t = useTranslations();

  return (
    <div className="page">
      {/* ── Navigation ── */}
      <header className="nav">
        <div className="nav-pill">
          <div className="logo nav-logo">Design Monkey</div>
          <nav className="nav-links" aria-label="Primary">
            <a href="#evidence">{t("nav.evidence")}</a>
            <a href="#how">{t("nav.how")}</a>
            <a href="#faq">{t("nav.faq")}</a>
          </nav>
          <div className="nav-actions">
            <LanguageSwitcher />
            <a className="btn ghost nav-apply" href="#apply">{t("nav.apply")}</a>
          </div>
        </div>
      </header>

      <main>
        {/* ── Hero ── */}
        <section className="hero" aria-label="Hero">
          <div className="doodles hero-doodles" aria-hidden="true">
            <span className="blob blob-hero-1"></span>
            <span className="blob blob-hero-2"></span>
            <span className="sparkle sparkle-hero-1"></span>
            <svg className="doodle doodle-arrow-hero" viewBox="0 0 120 120" aria-hidden="true" focusable="false">
              <path d="M10 90 C40 40, 80 40, 110 20" />
              <path d="M92 22 L110 20 L104 38" />
            </svg>
          </div>
          <div className="hero-copy">
            <p className="eyebrow">{t("hero.eyebrow")}</p>
            <h1>{t("hero.title")} <span className="accent">{t("hero.titleAccent")}</span></h1>
            <p className="lead">{t("hero.lead")}</p>
            <div className="cta-row">
              <a className="btn primary" href="#apply">{t("hero.ctaPrimary")}</a>
              <a className="btn subtle" href="#demo">{t("hero.ctaSecondary")}</a>
            </div>
            <div className="meta">
              <div>
                <span className="kicker">{t("hero.bestFitLabel")}</span>
                <p>{t("hero.bestFitDesc")}</p>
              </div>
              <div>
                <span className="kicker">{t("hero.zeroDesignLabel")}</span>
                <p>{t("hero.zeroDesignDesc")}</p>
              </div>
            </div>
          </div>
        </section>

        {/* ── Evidence ── */}
        <section className="evidence" id="evidence" aria-label="Evidence">
          <div className="doodles evidence-doodles" aria-hidden="true">
            <span className="blob blob-evidence-1"></span>
            <span className="blob blob-evidence-2"></span>
            <svg className="doodle doodle-zigzag" viewBox="0 0 140 60" aria-hidden="true" focusable="false">
              <path d="M10 10 L40 50 L70 10 L100 50 L130 10" />
            </svg>
          </div>
          <div className="section-head">
            <h2>{t("evidence.title")}</h2>
            <p>{t("evidence.subtitle")}</p>
          </div>
          <div className="card">
            <div className="compare">
              <figure>
                <figcaption>{t("evidence.before")}</figcaption>
                <Image
                  src="/before.jpeg"
                  alt={t("evidence.beforeAlt")}
                  fill
                  sizes="(max-width: 640px) 100vw, 50vw"
                />
              </figure>
              <figure>
                <figcaption>{t("evidence.after")}</figcaption>
                <Image
                  src="/after.jpeg"
                  alt={t("evidence.afterAlt")}
                  fill
                  sizes="(max-width: 640px) 100vw, 50vw"
                />
              </figure>
            </div>
          </div>
        </section>

        {/* ── Demo ── */}
        <section className="demo" id="demo" aria-label="Demo">
          <div className="doodles demo-doodles" aria-hidden="true">
            <span className="sparkle sparkle-demo-1"></span>
            <svg className="doodle doodle-loop" viewBox="0 0 140 140" aria-hidden="true" focusable="false">
              <path d="M30 70 C30 35, 110 35, 110 70 C110 105, 30 105, 30 70 Z" />
            </svg>
          </div>
          <div className="section-head">
            <h2>{t("demo.title")}</h2>
            <p>{t("demo.subtitle")}</p>
          </div>
          <VideoPlayer />
        </section>

        {/* ── How it works ── */}
        <section className="steps" id="how" aria-label="How it works">
          <div className="section-head">
            <h2>{t("steps.title")}</h2>
            <p>{t("steps.subtitle")}</p>
          </div>
          <div className="step-grid">
            <article>
              <span>01</span>
              <h3>{t("steps.step1Title")}</h3>
              <p>{t("steps.step1Desc")}</p>
            </article>
            <article>
              <span>02</span>
              <h3>{t("steps.step2Title")}</h3>
              <p>{t("steps.step2Desc")}</p>
            </article>
            <article>
              <span>03</span>
              <h3>{t("steps.step3Title")}</h3>
              <p>{t("steps.step3Desc")}</p>
            </article>
          </div>
        </section>

        {/* ── What you'll need ── */}
        <section className="effort" aria-label="User effort">
          <div className="section-head">
            <h2>{t("effort.title")}</h2>
            <p>{t("effort.subtitle")}</p>
          </div>
          <div className="effort-grid">
            <div className="effort-card">
              <h3>{t("effort.referenceTitle")}</h3>
              <ul>
                {[0, 1, 2].map((i) => (
                  <li key={i}>{t(`effort.referenceItems.${i}`)}</li>
                ))}
              </ul>
            </div>
            <div className="effort-card">
              <h3>{t("effort.timeTitle")}</h3>
              <ul>
                {[0, 1, 2].map((i) => (
                  <li key={i}>{t(`effort.timeItems.${i}`)}</li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* ── FAQ ── */}
        <section className="faq" id="faq" aria-label="FAQ">
          <div className="section-head">
            <h2>{t("faq.title")}</h2>
            <p>{t("faq.subtitle")}</p>
          </div>
          <div className="faq-grid">
            {[0, 1, 2, 3].map((i) => (
              <details key={i} open>
                <summary>{t(`faq.items.${i}.question`)}</summary>
                <p>{t(`faq.items.${i}.answer`)}</p>
              </details>
            ))}
          </div>
        </section>

        {/* ── Apply ── */}
        <section className="apply" id="apply" aria-label="Apply">
          <div className="section-head">
            <h2>{t("applySection.title")}</h2>
            <p>{t("applySection.subtitle")}</p>
          </div>
          <div className="cta-panel">
            <form className="cta-form" action="mailto:hello@designmonkey.ai" method="post" encType="text/plain">
              <label className="sr-only" htmlFor="apply-email">{t("applySection.emailLabel")}</label>
              <input id="apply-email" name="email" type="email" placeholder={t("applySection.emailPlaceholder")} required />
              <button className="btn primary" type="submit">{t("applySection.submitButton")}</button>
            </form>
          </div>
        </section>
      </main>

      <footer className="footer">
        <p>{t("footer.tagline")}</p>
        <p>{t("footer.note")}</p>
      </footer>
    </div>
  );
}
