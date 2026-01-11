import type { Route } from "./+types/home";
import { Link } from "react-router";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "vuln-pkg | The NPM for your home lab" },
    {
      name: "description",
      content:
        "One command to spin up any vulnerable application for security training. No configuration, no port conflicts, no hassle.",
    },
    { property: "og:title", content: "vuln-pkg | The NPM for your home lab" },
    {
      property: "og:description",
      content:
        "One command to spin up any vulnerable application for security training.",
    },
    { name: "theme-color", content: "#0a0a0a" },
  ];
}

const ASCII_LOGO = `
██╗   ██╗██╗   ██╗██╗     ███╗   ██╗      ██████╗ ██╗  ██╗ ██████╗
██║   ██║██║   ██║██║     ████╗  ██║      ██╔══██╗██║ ██╔╝██╔════╝
██║   ██║██║   ██║██║     ██╔██╗ ██║█████╗██████╔╝█████╔╝ ██║  ███╗
╚██╗ ██╔╝██║   ██║██║     ██║╚██╗██║╚════╝██╔═══╝ ██╔═██╗ ██║   ██║
 ╚████╔╝ ╚██████╔╝███████╗██║ ╚████║      ██║     ██║  ██╗╚██████╔╝
  ╚═══╝   ╚═════╝ ╚══════╝╚═╝  ╚═══╝      ╚═╝     ╚═╝  ╚═╝ ╚═════╝
`.trim();

const features = [
  {
    icon: "⚡",
    title: "Zero-Config DNS",
    description:
      "Works immediately via sslip.io. No /etc/hosts editing, no dnsmasq setup.",
    command: "http://dvwa.127.0.0.1.sslip.io",
  },
  {
    icon: "🔀",
    title: "Traefik Routing",
    description:
      "Clean subdomain URLs without port numbers. Multiple apps on port 80.",
    command: "http://traefik.127.0.0.1.sslip.io",
  },
  {
    icon: "📦",
    title: "Custom Packages",
    description:
      "Build your own labs from Dockerfiles or Git repos. Full flexibility.",
    command: "type: dockerfile | git",
  },
  {
    icon: "🔧",
    title: "JSON Output",
    description: "First-class automation support. Script your security labs.",
    command: "vuln-pkg --json status",
  },
];

const commands = [
  { cmd: "list", desc: "Show available vulnerable applications" },
  { cmd: "search <query>", desc: "Search apps by name, description, or tags" },
  { cmd: "install <app>", desc: "Pull Docker image without starting" },
  { cmd: "run <app>", desc: "Start a vulnerable application" },
  { cmd: "stop <app>", desc: "Stop without removing" },
  { cmd: "remove <app>", desc: "Stop and remove container" },
  { cmd: "rebuild <app>", desc: "Rebuild custom package" },
  { cmd: "status", desc: "Show status of all apps" },
  { cmd: "manifest", desc: "Manage manifests (show, accepted, forget)" },
];

function TerminalWindow({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className="code-block overflow-hidden">
      <div className="flex items-center gap-2 px-4 py-2 bg-[var(--color-bg-elevated)] border-b border-[var(--color-text-dim)]">
        <div className="flex gap-1.5">
          <span className="w-3 h-3 rounded-full bg-[#ff5f56]" />
          <span className="w-3 h-3 rounded-full bg-[#ffbd2e]" />
          <span className="w-3 h-3 rounded-full bg-[#27c93f]" />
        </div>
        <span className="text-[var(--color-text-muted)] text-xs ml-2">
          {title}
        </span>
      </div>
      <div className="p-4 font-mono text-sm">{children}</div>
    </div>
  );
}

function FeatureCard({
  icon,
  title,
  description,
  command,
  delay,
}: {
  icon: string;
  title: string;
  description: string;
  command: string;
  delay: number;
}) {
  return (
    <div
      className={`feature-card terminal-line stagger-${delay}`}
      style={{ animationDelay: `${delay * 0.1}s` }}
    >
      <div className="flex items-start gap-4">
        <span className="text-2xl">{icon}</span>
        <div className="flex-1">
          <h3 className="text-[var(--color-terminal-green)] font-semibold mb-2">
            {title}
          </h3>
          <p className="text-[var(--color-text-muted)] text-sm mb-3">
            {description}
          </p>
          <code className="text-xs text-[var(--color-terminal-amber)] bg-[var(--color-bg-code)] px-2 py-1 rounded">
            {command}
          </code>
        </div>
      </div>
    </div>
  );
}

export default function Home() {
  return (
    <div className="crt-screen grid-bg min-h-screen">
      <div className="noise-overlay" />

      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-[var(--color-bg-deep)]/90 backdrop-blur-sm border-b border-[var(--color-text-dim)]">
        <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="glow-text font-bold">vuln-pkg</span>
          </div>
          <div className="flex items-center gap-6 text-sm">
            <Link
              to="/docs"
              className="text-[var(--color-text-muted)] hover:text-[var(--color-terminal-green)] transition-colors"
            >
              Docs
            </Link>
            <a
              href="https://github.com/neutrino2211/vuln-pkg"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[var(--color-text-muted)] hover:text-[var(--color-terminal-green)] transition-colors"
            >
              GitHub
            </a>
          </div>
        </div>
      </nav>

      <main className="max-w-6xl mx-auto px-4 pt-24 pb-16">
        {/* Hero Section */}
        <section className="text-center mb-20">
          <div className="mb-8 overflow-hidden">
            <pre className="ascii-art glow-text inline-block text-left terminal-line">
              {ASCII_LOGO}
            </pre>
          </div>

          <h1 className="text-2xl md:text-3xl font-bold mb-4 terminal-line stagger-2">
            <span className="text-[var(--color-text-primary)]">The </span>
            <span className="glow-text-amber">NPM</span>
            <span className="text-[var(--color-text-primary)]">
              {" "}
              for your home lab
            </span>
          </h1>

          <p className="text-[var(--color-text-muted)] max-w-2xl mx-auto mb-8 terminal-line stagger-3">
            One command to spin up any vulnerable application for security
            training.
            <br />
            No configuration, no port conflicts, no hassle.
          </p>

          {/* Quick Start Terminal */}
          <div className="max-w-2xl mx-auto mb-8 terminal-line stagger-4">
            <TerminalWindow title="terminal">
              <div className="text-left space-y-2">
                <div>
                  <span className="text-[var(--color-terminal-green)]">$ </span>
                  <span className="text-[var(--color-text-primary)]">
                    vuln-pkg run dvwa
                  </span>
                </div>
                <div className="command-output space-y-1 pl-2">
                  <div>
                    <span className="text-[var(--color-text-dim)]">[*]</span>{" "}
                    Fetching manifest...
                  </div>
                  <div>
                    <span className="success">[+]</span> Loaded 5 applications
                  </div>
                  <div>
                    <span className="text-[var(--color-text-dim)]">[*]</span>{" "}
                    Ensuring vuln-pkg network exists
                  </div>
                  <div>
                    <span className="text-[var(--color-text-dim)]">[*]</span>{" "}
                    Starting Traefik reverse proxy
                  </div>
                  <div>
                    <span className="success">[+]</span> Traefik running
                  </div>
                  <div>
                    <span className="text-[var(--color-text-dim)]">[*]</span>{" "}
                    Creating container for dvwa
                  </div>
                  <div>
                    <span className="success">[+]</span> Started dvwa
                  </div>
                  <div className="mt-3 pt-2 border-t border-[var(--color-text-dim)]">
                    <span className="text-[var(--color-text-muted)]">
                      {"  -> "}
                    </span>
                    <span className="info">http://dvwa.127.0.0.1.sslip.io</span>
                  </div>
                </div>
              </div>
            </TerminalWindow>
          </div>

          <p className="text-xs text-[var(--color-text-dim)] terminal-line stagger-5 mb-8">
            That's it. DVWA is now running.
          </p>

          <div className="flex flex-wrap justify-center gap-4 terminal-line stagger-6">
            <Link to="/docs" className="btn-terminal">
              Read the Docs
            </Link>
            <a
              href="https://github.com/neutrino2211/vuln-pkg"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-terminal"
              style={{
                borderColor: "var(--color-text-muted)",
                color: "var(--color-text-muted)",
              }}
            >
              View Source
            </a>
          </div>
        </section>

        {/* Features Grid */}
        <section className="mb-20">
          <h2 className="text-xl font-semibold mb-8 terminal-line">
            <span className="text-[var(--color-terminal-green)]">//</span>{" "}
            Features
          </h2>
          <div className="grid md:grid-cols-2 gap-4">
            {features.map((feature, idx) => (
              <FeatureCard key={feature.title} {...feature} delay={idx + 1} />
            ))}
          </div>
        </section>

        {/* Commands Section */}
        <section className="mb-20">
          <h2 className="text-xl font-semibold mb-8 terminal-line">
            <span className="text-[var(--color-terminal-green)]">//</span>{" "}
            Commands
          </h2>

          <div className="terminal-line stagger-2">
            <TerminalWindow title="vuln-pkg --help">
              <div className="space-y-1">
                <div className="text-[var(--color-text-muted)] mb-4">
                  Package manager for deliberately-vulnerable applications
                </div>
                <div className="text-[var(--color-terminal-amber)] mb-2">
                  USAGE:
                </div>
                <div className="pl-4 mb-4">
                  vuln-pkg [OPTIONS] {"<COMMAND>"}
                </div>
                <div className="text-[var(--color-terminal-amber)] mb-2">
                  COMMANDS:
                </div>
                {commands.map((c) => (
                  <div key={c.cmd} className="pl-4 flex">
                    <span className="text-[var(--color-terminal-green)] w-36 shrink-0">
                      {c.cmd}
                    </span>
                    <span className="text-[var(--color-text-muted)]">
                      {c.desc}
                    </span>
                  </div>
                ))}
                <div className="text-[var(--color-terminal-amber)] mt-4 mb-2">
                  OPTIONS:
                </div>
                <div className="pl-4 space-y-1">
                  <div className="flex">
                    <span className="text-[var(--color-terminal-cyan)] w-36 shrink-0">
                      --json
                    </span>
                    <span className="text-[var(--color-text-muted)]">
                      Output in JSON format
                    </span>
                  </div>
                  <div className="flex">
                    <span className="text-[var(--color-terminal-cyan)] w-36 shrink-0">
                      -y, --yes
                    </span>
                    <span className="text-[var(--color-text-muted)]">
                      Auto-accept new manifests
                    </span>
                  </div>
                  <div className="flex">
                    <span className="text-[var(--color-terminal-cyan)] w-36 shrink-0">
                      --manifest-url
                    </span>
                    <span className="text-[var(--color-text-muted)]">
                      Custom manifest URL
                    </span>
                  </div>
                  <div className="flex">
                    <span className="text-[var(--color-terminal-cyan)] w-36 shrink-0">
                      --resolve-address
                    </span>
                    <span className="text-[var(--color-text-muted)]">
                      IP for hostname resolution
                    </span>
                  </div>
                  <div className="flex">
                    <span className="text-[var(--color-terminal-cyan)] w-36 shrink-0">
                      --domain
                    </span>
                    <span className="text-[var(--color-text-muted)]">
                      Custom domain suffix
                    </span>
                  </div>
                  <div className="flex">
                    <span className="text-[var(--color-terminal-cyan)] w-36 shrink-0">
                      --https
                    </span>
                    <span className="text-[var(--color-text-muted)]">
                      Enable HTTPS with self-signed certs
                    </span>
                  </div>
                </div>
              </div>
            </TerminalWindow>
          </div>
        </section>

        {/* Use Cases */}
        <section className="mb-20">
          <h2 className="text-xl font-semibold mb-8 terminal-line">
            <span className="text-[var(--color-terminal-green)]">//</span> Use
            Cases
          </h2>

          <div className="grid md:grid-cols-3 gap-4">
            <div className="feature-card terminal-line stagger-1">
              <div className="text-2xl mb-3">🎯</div>
              <h3 className="text-[var(--color-terminal-green)] font-semibold mb-2">
                OSCP Prep
              </h3>
              <p className="text-[var(--color-text-muted)] text-sm">
                Practice on real vulnerable apps. DVWA, WebGoat, Juice Shop -
                all one command away.
              </p>
            </div>
            <div className="feature-card terminal-line stagger-2">
              <div className="text-2xl mb-3">🏁</div>
              <h3 className="text-[var(--color-terminal-green)] font-semibold mb-2">
                CTF Hosting
              </h3>
              <p className="text-[var(--color-text-muted)] text-sm">
                Spin up challenges instantly. Custom manifests for your team's
                private CTF.
              </p>
            </div>
            <div className="feature-card terminal-line stagger-3">
              <div className="text-2xl mb-3">📚</div>
              <h3 className="text-[var(--color-terminal-green)] font-semibold mb-2">
                Security Training
              </h3>
              <p className="text-[var(--color-text-muted)] text-sm">
                Teaching a workshop? Students get identical environments with
                zero setup time.
              </p>
            </div>
          </div>
        </section>

        {/* Requirements */}
        <section className="mb-20">
          <h2 className="text-xl font-semibold mb-8 terminal-line">
            <span className="text-[var(--color-terminal-green)]">//</span>{" "}
            Requirements
          </h2>

          <div className="terminal-line stagger-1 max-w-lg">
            <div className="bg-[var(--color-bg-surface)] border border-[var(--color-text-dim)] p-6">
              <ul className="space-y-3 text-sm">
                <li className="flex items-center gap-3">
                  <span className="text-[var(--color-terminal-green)]">✓</span>
                  <span>
                    <strong className="text-[var(--color-text-primary)]">
                      Docker
                    </strong>{" "}
                    <span className="text-[var(--color-text-muted)]">
                      (running)
                    </span>
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Installation */}
        <section className="mb-20">
          <h2 className="text-xl font-semibold mb-8 terminal-line">
            <span className="text-[var(--color-terminal-green)]">//</span>{" "}
            Installation
          </h2>

          <div className="space-y-6">
            {/* Quick Install - Linux/macOS */}
            <div className="terminal-line stagger-1 max-w-2xl">
              <h3 className="text-[var(--color-text-primary)] font-semibold mb-3">
                Linux / macOS{" "}
                <span className="text-[var(--color-terminal-green)] text-sm font-normal">
                  (Recommended)
                </span>
              </h3>
              <TerminalWindow title="terminal">
                <div className="space-y-2">
                  <div>
                    <span className="text-[var(--color-terminal-green)]">
                      ${" "}
                    </span>
                    <span className="text-[var(--color-text-primary)] break-all">
                      curl -fsSL
                      https://raw.githubusercontent.com/neutrino2211/vuln-pkg/main/install.sh
                      | bash
                    </span>
                  </div>
                </div>
              </TerminalWindow>
              <p className="text-[var(--color-text-dim)] text-xs mt-2">
                Automatically detects your OS/arch and installs to
                /usr/local/bin
              </p>
            </div>

            {/* Windows Install */}
            <div className="terminal-line stagger-2 max-w-2xl">
              <h3 className="text-[var(--color-text-primary)] font-semibold mb-3">
                Windows
              </h3>
              <TerminalWindow title="powershell">
                <div className="space-y-2">
                  <div>
                    <span className="text-[var(--color-terminal-cyan)]">
                      PS&gt;{" "}
                    </span>
                    <span className="text-[var(--color-text-primary)] break-all">
                      irm
                      https://raw.githubusercontent.com/neutrino2211/vuln-pkg/main/install.ps1
                      | iex
                    </span>
                  </div>
                </div>
              </TerminalWindow>
              <p className="text-[var(--color-text-dim)] text-xs mt-2">
                Installs to %LOCALAPPDATA%\vuln-pkg
              </p>
            </div>

            {/* Download from Releases */}
            <div className="terminal-line stagger-3 max-w-2xl">
              <h3 className="text-[var(--color-text-primary)] font-semibold mb-3">
                Download from Releases
              </h3>
              <p className="text-[var(--color-text-muted)] text-sm mb-3">
                Download pre-built binaries from{" "}
                <a
                  href="https://github.com/neutrino2211/vuln-pkg/releases"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[var(--color-terminal-cyan)] hover:underline"
                >
                  GitHub Releases
                </a>
              </p>
              <div className="bg-[var(--color-bg-surface)] border border-[var(--color-text-dim)] p-4 text-sm">
                <ul className="space-y-1 text-[var(--color-text-muted)]">
                  <li>
                    <code className="text-[var(--color-terminal-amber)]">
                      vuln-pkg-linux-x86_64.tar.gz
                    </code>{" "}
                    - Linux x86_64
                  </li>
                  <li>
                    <code className="text-[var(--color-terminal-amber)]">
                      vuln-pkg-linux-aarch64.tar.gz
                    </code>{" "}
                    - Linux ARM64
                  </li>
                  <li>
                    <code className="text-[var(--color-terminal-amber)]">
                      vuln-pkg-darwin-x86_64.tar.gz
                    </code>{" "}
                    - macOS Intel
                  </li>
                  <li>
                    <code className="text-[var(--color-terminal-amber)]">
                      vuln-pkg-darwin-aarch64.tar.gz
                    </code>{" "}
                    - macOS Apple Silicon
                  </li>
                  <li>
                    <code className="text-[var(--color-terminal-amber)]">
                      vuln-pkg-windows-x86_64.zip
                    </code>{" "}
                    - Windows x86_64
                  </li>
                </ul>
              </div>
            </div>

            {/* Build from Source */}
            <div className="terminal-line stagger-4 max-w-2xl">
              <h3 className="text-[var(--color-text-primary)] font-semibold mb-3">
                Build from Source
              </h3>
              <p className="text-[var(--color-text-muted)] text-sm mb-3">
                Requires the Rust toolchain.
              </p>
              <TerminalWindow title="terminal">
                <div className="space-y-1">
                  <div>
                    <span className="text-[var(--color-terminal-green)]">
                      ${" "}
                    </span>
                    git clone https://github.com/neutrino2211/vuln-pkg.git
                  </div>
                  <div>
                    <span className="text-[var(--color-terminal-green)]">
                      ${" "}
                    </span>
                    cd vuln-pkg
                  </div>
                  <div>
                    <span className="text-[var(--color-terminal-green)]">
                      ${" "}
                    </span>
                    cargo build --release
                  </div>
                </div>
              </TerminalWindow>
            </div>
          </div>
        </section>

        {/* Security Warning */}
        <section className="mb-16">
          <div className="border border-[var(--color-terminal-amber)] bg-[var(--color-bg-surface)] p-6 terminal-line">
            <div className="flex items-start gap-4">
              <span className="text-2xl">⚠️</span>
              <div>
                <h3 className="text-[var(--color-terminal-amber)] font-semibold mb-2">
                  Security Notice
                </h3>
                <p className="text-[var(--color-text-muted)] text-sm">
                  This tool manages{" "}
                  <strong className="text-[var(--color-text-primary)]">
                    intentionally vulnerable
                  </strong>{" "}
                  containers for educational purposes. Never expose these
                  containers to untrusted networks. When using --resolve-address
                  with a public IP, ensure proper network segmentation.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-[var(--color-text-dim)] py-8">
        <div className="max-w-6xl mx-auto px-4 text-center text-sm text-[var(--color-text-dim)]">
          <p className="mb-2">
            <span className="text-[var(--color-terminal-green)]">vuln-pkg</span>{" "}
            — The NPM for your home lab
          </p>
          <p>MIT License</p>
        </div>
      </footer>
    </div>
  );
}
