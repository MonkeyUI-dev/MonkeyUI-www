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
          <div className="logo nav-logo">MonkeyUI</div>
          <nav className="nav-links" aria-label="Primary">
            <a href="#evidence">{t("nav.evidence")}</a>
            <a href="#how">{t("nav.how")}</a>
            <a href="#faq">{t("nav.faq")}</a>
          </nav>
          <div className="nav-actions">
            <a className="nav-github" href="https://github.com/MonkeyUI-dev/MonkeyUI" target="_blank" rel="noreferrer" aria-label="GitHub">
              <svg height="20" width="20" viewBox="0 0 16 16" fill="currentColor">
                <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"></path>
              </svg>
            </a>
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
          </div>
          <div className="hero-copy">
            <h1>
              {t("hero.title")} <br className="hidden sm:block" />
              {t("hero.titleMore")} <span className="accent">{t("hero.titleAccent")}</span> {t("hero.titleEnd")}
            </h1>
            <p className="lead">{t("hero.lead")}</p>
            <div className="cta-row">
              <a className="btn primary" href="#apply">{t("hero.ctaPrimary")}</a>
              <a className="btn subtle" href="#demo">{t("hero.ctaSecondary")}</a>
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
          </div>
          <div className="step-grid">
            <article>
              <div className="step-head">
                <span className="step-num">{t("steps.step1Num")}</span>
                <h3>{t("steps.step1Title")}</h3>
              </div>
              <p>{t("steps.step1Desc")}</p>
            </article>
            <article>
              <div className="step-head">
                <span className="step-num">{t("steps.step2Num")}</span>
                <h3>{t("steps.step2Title")}</h3>
              </div>
              <p dangerouslySetInnerHTML={{ __html: t.raw("steps.step2Desc") }} />
            </article>
            <article>
              <div className="step-head">
                <span className="step-num">{t("steps.step3Num")}</span>
                <h3>{t("steps.step3Title")}</h3>
              </div>
              <p>{t("steps.step3Desc")}</p>
            </article>
          </div>
        </section>

        {/* ── FAQ ── */}
        <section className="faq" id="faq" aria-label="FAQ">
          <div className="section-head">
            <h2>{t("faq.title")}</h2>
            <p>{t("faq.subtitle")}</p>
          </div>
          <div className="faq-grid">
            {[0, 1, 2, 3, 4, 5].map((i) => (
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
            <p dangerouslySetInnerHTML={{ __html: t.raw("applySection.subtitle") }} />
          </div>
          <div className="cta-panel">
            <form className="cta-form" action="#" method="post">
              <label className="sr-only" htmlFor="apply-contact">{t("applySection.contactLabel")}</label>
              <input id="apply-contact" name="contact_id" type="text" placeholder={t("applySection.contactPlaceholder")} required />
              <button className="btn primary" type="submit">{t("applySection.submitButton")}</button>
            </form>
            <div className="cta-foot">
              <p className="cta-small">{t("applySection.privacyNote")}</p>
              <a className="cta-dm" href={t("applySection.dmUrl")} target="_blank" rel="noreferrer">{t("applySection.dmLink")}</a>
            </div>
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
