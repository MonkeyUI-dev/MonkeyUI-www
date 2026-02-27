import Image from "next/image";
import { useTranslations } from "next-intl";
import VideoPlayer from "./components/VideoPlayer";
import LanguageSwitcher from "./components/LanguageSwitcher";
import MobileNav from "./components/MobileNav";
import AuroraBackground from "./components/AuroraBackground";
import ScrollReveal from "./components/ScrollReveal";
import ShinyText from "./components/ShinyText";
import SocialIcons from "./components/SocialIcons";

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
          <MobileNav />
        </div>
      </header>

      <main>
        {/* ── Hero ── */}
        <section className="hero" aria-label="Hero">
          <AuroraBackground />
          <div className="doodles hero-doodles" aria-hidden="true">
            <span className="blob blob-hero-1"></span>
            <span className="blob blob-hero-2"></span>
          </div>
          <div className="hero-copy">
            <h1>
              {t("hero.title")} <br className="hidden sm:block" />
              {t("hero.titleMore")} <ShinyText>{t("hero.titleAccent")}</ShinyText> {t("hero.titleEnd")}
            </h1>
            <p className="lead">{t("hero.lead")}</p>
            <div className="cta-row">
              <a className="btn primary" href={t("hero.ctaPrimaryUrl")} target="_blank" rel="noreferrer">{t("hero.ctaPrimary")}</a>
              <a className="btn subtle" href="#demo">{t("hero.ctaSecondary")}</a>
            </div>
            <a className="hero-link" href="#apply">{t("hero.heroLink")}</a>
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
          <ScrollReveal className="section-head">
            <h2>{t("evidence.title")}</h2>
            <p>{t("evidence.subtitle")}</p>
          </ScrollReveal>
          <ScrollReveal className="card" delay={0.15}>
            <div className="compare">
              <figure>
                <figcaption>{t("evidence.before")}</figcaption>
                <Image
                  src="/before.png"
                  alt={t("evidence.beforeAlt")}
                  fill
                  sizes="(max-width: 640px) 100vw, 50vw"
                />
              </figure>
              <figure>
                <figcaption>{t("evidence.after")}</figcaption>
                <Image
                  src="/after.png"
                  alt={t("evidence.afterAlt")}
                  fill
                  sizes="(max-width: 640px) 100vw, 50vw"
                />
              </figure>
            </div>
          </ScrollReveal>
        </section>

        {/* ── Demo ── */}
        <section className="demo" id="demo" aria-label="Demo">
          <div className="doodles demo-doodles" aria-hidden="true">
            <span className="sparkle sparkle-demo-1"></span>
            <svg className="doodle doodle-loop" viewBox="0 0 140 140" aria-hidden="true" focusable="false">
              <path d="M30 70 C30 35, 110 35, 110 70 C110 105, 30 105, 30 70 Z" />
            </svg>
          </div>
          <ScrollReveal className="section-head">
            <h2>{t("demo.title")}</h2>
            <p>{t("demo.subtitle")}</p>
          </ScrollReveal>
          <ScrollReveal variant="scale" delay={0.1}>
            <VideoPlayer />
          </ScrollReveal>
        </section>

        {/* ── How it works ── */}
        <section className="steps" id="how" aria-label="How it works">
          <ScrollReveal className="section-head">
            <h2>{t("steps.title")}</h2>
          </ScrollReveal>
          <div className="step-grid">
            <ScrollReveal tag="article" delay={0}>
              <div className="step-head">
                <span className="step-num">{t("steps.step1Num")}</span>
                <h3>{t("steps.step1Title")}</h3>
              </div>
              <p>{t("steps.step1Desc")}</p>
            </ScrollReveal>
            <ScrollReveal tag="article" delay={0.12}>
              <div className="step-head">
                <span className="step-num">{t("steps.step2Num")}</span>
                <h3>{t("steps.step2Title")}</h3>
              </div>
              <p dangerouslySetInnerHTML={{ __html: t.raw("steps.step2Desc") }} />
            </ScrollReveal>
            <ScrollReveal tag="article" delay={0.24}>
              <div className="step-head">
                <span className="step-num">{t("steps.step3Num")}</span>
                <h3>{t("steps.step3Title")}</h3>
              </div>
              <p>{t("steps.step3Desc")}</p>
            </ScrollReveal>
          </div>
        </section>

        {/* ── FAQ ── */}
        <section className="faq" id="faq" aria-label="FAQ">
          <ScrollReveal className="section-head">
            <h2>{t("faq.title")}</h2>
            <p>{t("faq.subtitle")}</p>
          </ScrollReveal>
          <div className="faq-grid">
            {[0, 1, 2, 3, 4, 5].map((i) => (
              <ScrollReveal tag="details" key={i} delay={i * 0.08} open>
                <summary>{t(`faq.items.${i}.question`)}</summary>
                <p>{t(`faq.items.${i}.answer`)}</p>
              </ScrollReveal>
            ))}
          </div>
        </section>

        {/* ── Apply ── */}
        <ScrollReveal tag="section" className="apply" id="apply" aria-label="Apply">
          <div className="section-head">
            <h2>{t("applySection.title")}</h2>
            <p dangerouslySetInnerHTML={{ __html: t.raw("applySection.subtitle") }} />
            <ul className="apply-list">
              {t.raw("applySection.applyList").map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          </div>
          <div className="cta-panel">
            <div className="cta-form">
              <a className="btn primary" href={t("applySection.formUrl")} target="_blank" rel="noreferrer">{t("applySection.submitButton")}</a>
            </div>
            <div className="cta-foot">
              <p className="cta-small">{t("applySection.privacyNote")}</p>
              <SocialIcons xUrl={t("applySection.xUrl")} xiaohongshuUrl={t("applySection.xiaohongshuUrl")} />
            </div>
          </div>
        </ScrollReveal>
      </main>

      <footer className="footer">
        <p>{t("footer.tagline")}</p>
        <p>{t("footer.note")}</p>
      </footer>
    </div>
  );
}
