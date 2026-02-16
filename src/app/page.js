import Image from "next/image";
import VideoPlayer from "./components/VideoPlayer";

export default function Home() {
  return (
    <div className="page">
      {/* ── Navigation ── */}
      <header className="nav">
        <div className="nav-pill">
          <div className="logo nav-logo">Design Monkey</div>
          <nav className="nav-links" aria-label="Primary">
            <a href="#evidence">Evidence</a>
            <a href="#how">How it works</a>
            <a href="#faq">FAQ</a>
          </nav>
          <a className="btn ghost nav-apply" href="#apply">Apply</a>
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
            <p className="eyebrow">Seed-user program · 10 spots</p>
            <h1>Turn reference designs into reusable <span className="accent">style DNA</span></h1>
            <p className="lead">
              Bring your own reference image. Design Monkey extracts the style DNA and injects it into your IDE via MCP,
              so AI-generated UI looks consistent and less &quot;AI-ish&quot; with far fewer prompt iterations.
            </p>
            <div className="cta-row">
              <a className="btn primary" href="#apply">Apply to be a seed user</a>
              <a className="btn subtle" href="#demo">Watch 15s demo</a>
            </div>
            <div className="meta">
              <div>
                <span className="kicker">Best fit</span>
                <p>Developers building real pages in the next 7 days.</p>
              </div>
              <div>
                <span className="kicker">Zero design skills</span>
                <p>Pick a good reference and let the style DNA do the rest.</p>
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
            <h2>Before / After</h2>
            <p>Same requirement. Left: no style injection. Right: with Design Monkey.</p>
          </div>
          <div className="card">
            <div className="compare">
              <figure>
                <figcaption>Before</figcaption>
                <Image
                  src="/before.jpeg"
                  alt="UI without style injection"
                  fill
                  sizes="(max-width: 640px) 100vw, 50vw"
                />
              </figure>
              <figure>
                <figcaption>After</figcaption>
                <Image
                  src="/after.jpeg"
                  alt="UI with style DNA applied"
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
            <h2>15-second workflow demo</h2>
            <p>Reference → extraction → IDE generation, in one smooth pass.</p>
          </div>
          <VideoPlayer />
        </section>

        {/* ── How it works ── */}
        <section className="steps" id="how" aria-label="How it works">
          <div className="section-head">
            <h2>How it works</h2>
            <p>Three steps from inspiration to production-quality UI.</p>
          </div>
          <div className="step-grid">
            <article>
              <span>01</span>
              <h3>Choose a reference</h3>
              <p>Pick a single UI image with consistent style and common components.</p>
            </article>
            <article>
              <span>02</span>
              <h3>Extract style DNA</h3>
              <p>We derive color, typography, radii, shadow, spacing, and component vibe.</p>
            </article>
            <article>
              <span>03</span>
              <h3>Generate in your IDE</h3>
              <p>Connect MCP and let AI-generated UI match the reference by default.</p>
            </article>
          </div>
        </section>

        {/* ── What you'll need ── */}
        <section className="effort" aria-label="User effort">
          <div className="section-head">
            <h2>What you&apos;ll need</h2>
            <p>Set expectations clearly for a smooth first run.</p>
          </div>
          <div className="effort-grid">
            <div className="effort-card">
              <h3>Reference quality matters</h3>
              <ul>
                <li>1 clear image with consistent visual style.</li>
                <li>Include buttons, forms, and cards if possible.</li>
                <li>A second reference may be needed if style is unstable.</li>
              </ul>
            </div>
            <div className="effort-card">
              <h3>Time budget</h3>
              <ul>
                <li>10–20 minutes for setup + first generation.</li>
                <li>Try it on a real page within 7 days.</li>
                <li>Share feedback so we can improve the extractor.</li>
              </ul>
            </div>
          </div>
        </section>

        {/* ── FAQ ── */}
        <section className="faq" id="faq" aria-label="FAQ">
          <div className="section-head">
            <h2>FAQ</h2>
            <p>Short answers for seed users who are ready to build.</p>
          </div>
          <div className="faq-grid">
            <details open>
              <summary>Do I need design skills?</summary>
              <p>No. Picking a good reference is enough.</p>
            </details>
            <details open>
              <summary>What makes a good reference image?</summary>
              <p>A clear image with consistent visual style. Including buttons, forms, and cards helps.</p>
            </details>
            <details open>
              <summary>Which IDEs are supported?</summary>
              <p>Cursor, GitHub Copilot, and mainstream IDEs.</p>
            </details>
            <details open>
              <summary>I don&apos;t have a real page to build right now. Should I apply?</summary>
              <p>Probably not. We prioritize applicants who can try it on a real task within 7 days.</p>
            </details>
          </div>
        </section>

        {/* ── Apply ── */}
        <section className="apply" id="apply" aria-label="Apply">
          <div className="section-head">
            <h2>Apply to be a seed user</h2>
            <p>Selection is based on a real use case, reference quality, and willingness to give feedback.</p>
          </div>
          <div className="cta-panel">
            <form className="cta-form" action="mailto:hello@designmonkey.ai" method="post" encType="text/plain">
              <label className="sr-only" htmlFor="apply-email">Email address</label>
              <input id="apply-email" name="email" type="email" placeholder="Entry your email address" required />
              <button className="btn primary" type="submit">Apply</button>
            </form>
          </div>
        </section>
      </main>

      <footer className="footer">
        <p>Design Monkey · Style DNA for AI-generated UI</p>
        <p>Seed-user program — limited to 10 teams.</p>
      </footer>
    </div>
  );
}
