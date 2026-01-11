import type { Route } from "./+types/docs";
import { Link } from "react-router";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Documentation | vuln-pkg" },
    {
      name: "description",
      content:
        "Complete documentation for vuln-pkg - the package manager for deliberately-vulnerable applications.",
    },
  ];
}

function TerminalWindow({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className="code-block overflow-hidden my-4">
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
      <div className="p-4 font-mono text-sm overflow-x-auto">{children}</div>
    </div>
  );
}

function CodeBlock({ children }: { children: React.ReactNode }) {
  return (
    <code className="bg-[var(--color-bg-code)] text-[var(--color-terminal-amber)] px-1.5 py-0.5 rounded text-sm">
      {children}
    </code>
  );
}

function SectionHeading({
  id,
  children,
}: {
  id: string;
  children: React.ReactNode;
}) {
  return (
    <h2
      id={id}
      className="text-xl font-semibold mt-12 mb-6 scroll-mt-20 group"
    >
      <span className="text-[var(--color-terminal-green)]">#</span>{" "}
      <a href={`#${id}`} className="hover:text-[var(--color-terminal-green)]">
        {children}
      </a>
    </h2>
  );
}

function SubHeading({
  id,
  children,
}: {
  id: string;
  children: React.ReactNode;
}) {
  return (
    <h3
      id={id}
      className="text-lg font-semibold mt-8 mb-4 scroll-mt-20 text-[var(--color-text-primary)]"
    >
      <span className="text-[var(--color-terminal-green)]">##</span>{" "}
      <a href={`#${id}`} className="hover:text-[var(--color-terminal-green)]">
        {children}
      </a>
    </h3>
  );
}

const tableOfContents = [
  { id: "overview", title: "Overview" },
  { id: "installation", title: "Installation" },
  { id: "quick-start", title: "Quick Start" },
  { id: "commands", title: "Commands" },
  { id: "global-options", title: "Global Options" },
  { id: "how-it-works", title: "How It Works" },
  { id: "manifest-format", title: "Manifest Format" },
  { id: "examples", title: "Examples" },
  { id: "troubleshooting", title: "Troubleshooting" },
];

export default function Docs() {
  return (
    <div className="crt-screen grid-bg min-h-screen">
      <div className="noise-overlay" />

      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-[var(--color-bg-deep)]/90 backdrop-blur-sm border-b border-[var(--color-text-dim)]">
        <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Link to="/" className="glow-text font-bold hover:opacity-80">
              vuln-pkg
            </Link>
            <span className="text-[var(--color-text-dim)] text-xs">v1.0</span>
          </div>
          <div className="flex items-center gap-6 text-sm">
            <Link
              to="/docs"
              className="text-[var(--color-terminal-green)] transition-colors"
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

      <div className="max-w-6xl mx-auto px-4 pt-24 pb-16 flex gap-8">
        {/* Sidebar */}
        <aside className="hidden lg:block w-56 shrink-0">
          <div className="sticky top-24">
            <h4 className="text-xs uppercase tracking-wider text-[var(--color-text-dim)] mb-4">
              On this page
            </h4>
            <nav className="space-y-2">
              {tableOfContents.map((item) => (
                <a
                  key={item.id}
                  href={`#${item.id}`}
                  className="block text-sm text-[var(--color-text-muted)] hover:text-[var(--color-terminal-green)] transition-colors"
                >
                  {item.title}
                </a>
              ))}
            </nav>
          </div>
        </aside>

        {/* Main Content */}
        <main className="flex-1 min-w-0">
          <h1 className="text-3xl font-bold mb-2 terminal-line">
            <span className="text-[var(--color-terminal-green)]">//</span>{" "}
            Documentation
          </h1>
          <p className="text-[var(--color-text-muted)] mb-8 terminal-line stagger-1">
            Everything you need to know about vuln-pkg
          </p>

          {/* Overview */}
          <SectionHeading id="overview">Overview</SectionHeading>
          <p className="text-[var(--color-text-muted)] mb-4">
            <strong className="text-[var(--color-text-primary)]">
              vuln-pkg
            </strong>{" "}
            is a package manager for deliberately-vulnerable applications used
            in security training and penetration testing. Think of it as{" "}
            <CodeBlock>npm install</CodeBlock> but for security labs.
          </p>
          <p className="text-[var(--color-text-muted)] mb-4">
            Browse a catalog of intentionally vulnerable apps, pick one, and
            have it running in seconds with a clean URL. Whether you're
            practicing for OSCP, running a CTF, or teaching a security workshop,
            vuln-pkg eliminates the friction of setting up vulnerable
            environments.
          </p>

          <div className="bg-[var(--color-bg-surface)] border border-[var(--color-text-dim)] p-4 my-6">
            <h4 className="text-[var(--color-terminal-green)] font-semibold mb-3">
              Key Features
            </h4>
            <ul className="space-y-2 text-sm text-[var(--color-text-muted)]">
              <li className="flex items-start gap-2">
                <span className="text-[var(--color-terminal-green)]">•</span>
                <span>
                  <strong className="text-[var(--color-text-primary)]">
                    Zero-config DNS
                  </strong>{" "}
                  via sslip.io - works immediately without any local DNS setup
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[var(--color-terminal-green)]">•</span>
                <span>
                  <strong className="text-[var(--color-text-primary)]">
                    Traefik reverse proxy
                  </strong>{" "}
                  for clean subdomain URLs (e.g.,{" "}
                  <CodeBlock>http://dvwa.127.0.0.1.sslip.io</CodeBlock>)
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[var(--color-terminal-green)]">•</span>
                <span>
                  <strong className="text-[var(--color-text-primary)]">
                    Simple CLI
                  </strong>{" "}
                  to list, search, install, run, stop, and remove vulnerable apps
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[var(--color-terminal-green)]">•</span>
                <span>
                  <strong className="text-[var(--color-text-primary)]">
                    Multiple apps
                  </strong>{" "}
                  running simultaneously
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[var(--color-terminal-green)]">•</span>
                <span>
                  <strong className="text-[var(--color-text-primary)]">
                    Custom packages
                  </strong>{" "}
                  - build your own vulnerable labs from Dockerfiles or Git
                  repositories
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[var(--color-terminal-green)]">•</span>
                <span>
                  <strong className="text-[var(--color-text-primary)]">
                    JSON output
                  </strong>{" "}
                  for automation
                </span>
              </li>
            </ul>
          </div>

          {/* Installation */}
          <SectionHeading id="installation">Installation</SectionHeading>

          <SubHeading id="requirements">Requirements</SubHeading>
          <ul className="space-y-2 text-[var(--color-text-muted)] mb-6">
            <li className="flex items-center gap-2">
              <span className="text-[var(--color-terminal-green)]">✓</span>
              <span>
                Docker <span className="text-[var(--color-text-dim)]">(running)</span>
              </span>
            </li>
          </ul>

          <SubHeading id="quick-install">Quick Install - Linux/macOS (Recommended)</SubHeading>
          <TerminalWindow title="terminal">
            <div className="break-all">
              <span className="text-[var(--color-terminal-green)]">$ </span>
              curl -fsSL https://raw.githubusercontent.com/neutrino2211/vuln-pkg/main/install.sh | bash
            </div>
          </TerminalWindow>
          <p className="text-[var(--color-text-muted)] text-sm mb-4">
            This will automatically detect your OS and architecture, download the latest release, and install it to <CodeBlock>/usr/local/bin</CodeBlock> (or <CodeBlock>~/.local/bin</CodeBlock> if you don't have write access).
          </p>

          <h4 className="text-[var(--color-text-primary)] font-semibold mb-2 mt-6">Install Options</h4>
          <TerminalWindow title="terminal">
            <div className="space-y-3">
              <div className="text-[var(--color-text-dim)]"># Install a specific version</div>
              <div className="break-all">
                <span className="text-[var(--color-terminal-green)]">$ </span>
                VULN_PKG_VERSION=v0.1.0 curl -fsSL https://raw.githubusercontent.com/neutrino2211/vuln-pkg/main/install.sh | bash
              </div>
              <div className="text-[var(--color-text-dim)] mt-2"># Install to a custom directory</div>
              <div className="break-all">
                <span className="text-[var(--color-terminal-green)]">$ </span>
                VULN_PKG_INSTALL_DIR=~/bin curl -fsSL https://raw.githubusercontent.com/neutrino2211/vuln-pkg/main/install.sh | bash
              </div>
            </div>
          </TerminalWindow>

          <SubHeading id="windows-install">Windows Install</SubHeading>
          <TerminalWindow title="powershell">
            <div className="break-all">
              <span className="text-[var(--color-terminal-cyan)]">PS&gt; </span>
              irm https://raw.githubusercontent.com/neutrino2211/vuln-pkg/main/install.ps1 | iex
            </div>
          </TerminalWindow>
          <p className="text-[var(--color-text-muted)] text-sm mb-4">
            This installs vuln-pkg to <CodeBlock>%LOCALAPPDATA%\vuln-pkg</CodeBlock>.
          </p>

          <h4 className="text-[var(--color-text-primary)] font-semibold mb-2 mt-6">Windows Install Options</h4>
          <TerminalWindow title="powershell">
            <div className="space-y-3">
              <div className="text-[var(--color-text-dim)]"># Install a specific version</div>
              <div className="break-all">
                <span className="text-[var(--color-terminal-cyan)]">PS&gt; </span>
                $env:VULN_PKG_VERSION="v0.1.0"; irm https://raw.githubusercontent.com/neutrino2211/vuln-pkg/main/install.ps1 | iex
              </div>
              <div className="text-[var(--color-text-dim)] mt-2"># Install to a custom directory</div>
              <div className="break-all">
                <span className="text-[var(--color-terminal-cyan)]">PS&gt; </span>
                $env:VULN_PKG_INSTALL_DIR="C:\tools"; irm https://raw.githubusercontent.com/neutrino2211/vuln-pkg/main/install.ps1 | iex
              </div>
            </div>
          </TerminalWindow>

          <SubHeading id="download-releases">Download from Releases</SubHeading>
          <p className="text-[var(--color-text-muted)] mb-4">
            Download pre-built binaries from the{" "}
            <a
              href="https://github.com/neutrino2211/vuln-pkg/releases"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[var(--color-terminal-cyan)] hover:underline"
            >
              GitHub Releases
            </a>{" "}
            page.
          </p>
          <div className="bg-[var(--color-bg-surface)] border border-[var(--color-text-dim)] p-4 text-sm mb-6">
            <p className="text-[var(--color-text-muted)] mb-2">Available binaries:</p>
            <ul className="space-y-1 text-[var(--color-text-muted)]">
              <li><CodeBlock>vuln-pkg-linux-x86_64.tar.gz</CodeBlock> - Linux x86_64 (static binary)</li>
              <li><CodeBlock>vuln-pkg-linux-aarch64.tar.gz</CodeBlock> - Linux ARM64</li>
              <li><CodeBlock>vuln-pkg-darwin-x86_64.tar.gz</CodeBlock> - macOS Intel</li>
              <li><CodeBlock>vuln-pkg-darwin-aarch64.tar.gz</CodeBlock> - macOS Apple Silicon</li>
              <li><CodeBlock>vuln-pkg-windows-x86_64.zip</CodeBlock> - Windows x86_64</li>
            </ul>
          </div>

          <SubHeading id="build-from-source">Build from Source</SubHeading>
          <p className="text-[var(--color-text-muted)] mb-4">
            Requires the Rust toolchain.
          </p>
          <TerminalWindow title="terminal">
            <div className="space-y-1">
              <div>
                <span className="text-[var(--color-terminal-green)]">$ </span>
                git clone https://github.com/neutrino2211/vuln-pkg.git
              </div>
              <div>
                <span className="text-[var(--color-terminal-green)]">$ </span>
                cd vuln-pkg
              </div>
              <div>
                <span className="text-[var(--color-terminal-green)]">$ </span>
                cargo build --release
              </div>
              <div className="mt-3 text-[var(--color-text-dim)]">
                # Binary will be at target/release/vuln-pkg
              </div>
            </div>
          </TerminalWindow>

          {/* Quick Start */}
          <SectionHeading id="quick-start">Quick Start</SectionHeading>
          <TerminalWindow title="terminal">
            <div className="space-y-2">
              <div className="text-[var(--color-text-dim)]">
                # List available vulnerable applications
              </div>
              <div>
                <span className="text-[var(--color-terminal-green)]">$ </span>
                vuln-pkg list
              </div>
              <div className="mt-3 text-[var(--color-text-dim)]">
                # Search for SQL injection labs
              </div>
              <div>
                <span className="text-[var(--color-terminal-green)]">$ </span>
                vuln-pkg search sqli
              </div>
              <div className="mt-3 text-[var(--color-text-dim)]">
                # Run DVWA (Damn Vulnerable Web Application)
              </div>
              <div>
                <span className="text-[var(--color-terminal-green)]">$ </span>
                vuln-pkg run dvwa
              </div>
              <div className="mt-3 text-[var(--color-text-dim)]">
                # The app is now available at http://dvwa.127.0.0.1.sslip.io
              </div>
            </div>
          </TerminalWindow>

          {/* Commands */}
          <SectionHeading id="commands">Commands</SectionHeading>

          <SubHeading id="cmd-list">list</SubHeading>
          <p className="text-[var(--color-text-muted)] mb-4">
            List all available vulnerable applications from the manifest.
          </p>
          <TerminalWindow title="terminal">
            <div>
              <span className="text-[var(--color-terminal-green)]">$ </span>
              vuln-pkg list
            </div>
            <div>
              <span className="text-[var(--color-terminal-green)]">$ </span>
              vuln-pkg --json list
            </div>
          </TerminalWindow>

          <SubHeading id="cmd-search">search</SubHeading>
          <p className="text-[var(--color-text-muted)] mb-4">
            Search for applications by name, description, or tags.
          </p>
          <TerminalWindow title="terminal">
            <div className="space-y-1">
              <div>
                <span className="text-[var(--color-terminal-green)]">$ </span>
                vuln-pkg search sqli
              </div>
              <div>
                <span className="text-[var(--color-terminal-green)]">$ </span>
                vuln-pkg search owasp
              </div>
              <div>
                <span className="text-[var(--color-terminal-green)]">$ </span>
                vuln-pkg search CVE-2021
              </div>
              <div>
                <span className="text-[var(--color-terminal-green)]">$ </span>
                vuln-pkg --json search api
              </div>
            </div>
          </TerminalWindow>
          <p className="text-[var(--color-text-dim)] text-sm mt-2">
            The search is case-insensitive and matches against application name, description text, and tags (CVEs, vulnerability types, etc.).
          </p>

          <SubHeading id="cmd-install">install</SubHeading>
          <p className="text-[var(--color-text-muted)] mb-4">
            Pull the Docker image for an application without starting it.
          </p>
          <TerminalWindow title="terminal">
            <div>
              <span className="text-[var(--color-terminal-green)]">$ </span>
              vuln-pkg install {"<app>"}
            </div>
          </TerminalWindow>

          <SubHeading id="cmd-run">run</SubHeading>
          <p className="text-[var(--color-text-muted)] mb-4">
            Start a vulnerable application. This will:
          </p>
          <ol className="list-decimal list-inside text-[var(--color-text-muted)] mb-4 space-y-1">
            <li>Pull the Docker image if needed</li>
            <li>Create the vuln-pkg Docker network</li>
            <li>Start Traefik reverse proxy (if not already running)</li>
            <li>Create and start the application container</li>
          </ol>
          <TerminalWindow title="terminal">
            <div>
              <span className="text-[var(--color-terminal-green)]">$ </span>
              vuln-pkg run {"<app>"}
            </div>
          </TerminalWindow>

          <SubHeading id="cmd-stop">stop</SubHeading>
          <p className="text-[var(--color-text-muted)] mb-4">
            Stop a running application without removing it.
          </p>
          <TerminalWindow title="terminal">
            <div>
              <span className="text-[var(--color-terminal-green)]">$ </span>
              vuln-pkg stop {"<app>"}
            </div>
          </TerminalWindow>

          <SubHeading id="cmd-remove">remove</SubHeading>
          <p className="text-[var(--color-text-muted)] mb-4">
            Stop and remove an application container.
          </p>
          <TerminalWindow title="terminal">
            <div>
              <span className="text-[var(--color-terminal-green)]">$ </span>
              vuln-pkg remove {"<app>"}
            </div>
            <div className="mt-2 text-[var(--color-text-dim)]">
              # Also remove the Docker image
            </div>
            <div>
              <span className="text-[var(--color-terminal-green)]">$ </span>
              vuln-pkg remove {"<app>"} --purge
            </div>
          </TerminalWindow>

          <SubHeading id="cmd-rebuild">rebuild</SubHeading>
          <p className="text-[var(--color-text-muted)] mb-4">
            Rebuild a custom application (dockerfile or git type). Useful when
            you've updated the Dockerfile or want to pull the latest changes
            from a git repository.
          </p>
          <TerminalWindow title="terminal">
            <div>
              <span className="text-[var(--color-terminal-green)]">$ </span>
              vuln-pkg rebuild {"<app>"}
            </div>
          </TerminalWindow>
          <p className="text-[var(--color-text-dim)] text-sm mt-2">
            Note: This command only works with custom packages (
            <CodeBlock>type: dockerfile</CodeBlock> or{" "}
            <CodeBlock>type: git</CodeBlock>). For prebuilt packages, use{" "}
            <CodeBlock>remove --purge</CodeBlock> followed by{" "}
            <CodeBlock>install</CodeBlock>.
          </p>

          <SubHeading id="cmd-status">status</SubHeading>
          <p className="text-[var(--color-text-muted)] mb-4">
            Show the status of all managed applications.
          </p>
          <TerminalWindow title="terminal">
            <div>
              <span className="text-[var(--color-terminal-green)]">$ </span>
              vuln-pkg status
            </div>
            <div>
              <span className="text-[var(--color-terminal-green)]">$ </span>
              vuln-pkg --json status
            </div>
          </TerminalWindow>

          <SubHeading id="cmd-manifest">manifest</SubHeading>
          <p className="text-[var(--color-text-muted)] mb-4">
            Manage manifests - view information, list accepted manifests, or forget previously accepted ones.
          </p>
          <TerminalWindow title="terminal">
            <div className="space-y-2">
              <div className="text-[var(--color-text-dim)]"># Show manifest information and contents</div>
              <div>
                <span className="text-[var(--color-terminal-green)]">$ </span>
                vuln-pkg manifest show
              </div>
              <div className="text-[var(--color-text-dim)] mt-2"># List all accepted manifests</div>
              <div>
                <span className="text-[var(--color-terminal-green)]">$ </span>
                vuln-pkg manifest accepted
              </div>
              <div className="text-[var(--color-text-dim)] mt-2"># Forget (un-accept) a manifest</div>
              <div>
                <span className="text-[var(--color-terminal-green)]">$ </span>
                vuln-pkg manifest forget
              </div>
              <div>
                <span className="text-[var(--color-terminal-green)]">$ </span>
                vuln-pkg manifest forget https://example.com/custom-manifest.yml
              </div>
            </div>
          </TerminalWindow>

          {/* Global Options */}
          <SectionHeading id="global-options">Global Options</SectionHeading>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-[var(--color-text-dim)]">
                  <th className="text-left py-3 pr-4 text-[var(--color-terminal-green)]">
                    Option
                  </th>
                  <th className="text-left py-3 text-[var(--color-text-primary)]">
                    Description
                  </th>
                </tr>
              </thead>
              <tbody className="text-[var(--color-text-muted)]">
                <tr className="border-b border-[var(--color-text-dim)]/30">
                  <td className="py-3 pr-4">
                    <CodeBlock>--json</CodeBlock>
                  </td>
                  <td>Output in JSON format for automation</td>
                </tr>
                <tr className="border-b border-[var(--color-text-dim)]/30">
                  <td className="py-3 pr-4">
                    <CodeBlock>-y, --yes</CodeBlock>
                  </td>
                  <td>Auto-accept new manifests without prompting (for scripting)</td>
                </tr>
                <tr className="border-b border-[var(--color-text-dim)]/30">
                  <td className="py-3 pr-4">
                    <CodeBlock>--manifest-url {"<URL>"}</CodeBlock>
                  </td>
                  <td>
                    Custom manifest URL (default: official vuln-pkg manifest)
                  </td>
                </tr>
                <tr className="border-b border-[var(--color-text-dim)]/30">
                  <td className="py-3 pr-4">
                    <CodeBlock>--resolve-address {"<IP>"}</CodeBlock>
                  </td>
                  <td>IP address for hostname resolution (default: 127.0.0.1)</td>
                </tr>
                <tr className="border-b border-[var(--color-text-dim)]/30">
                  <td className="py-3 pr-4">
                    <CodeBlock>--domain {"<DOMAIN>"}</CodeBlock>
                  </td>
                  <td>Custom domain suffix (e.g., lab.local)</td>
                </tr>
                <tr>
                  <td className="py-3 pr-4">
                    <CodeBlock>--https</CodeBlock>
                  </td>
                  <td>Enable HTTPS with self-signed certificates</td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* How It Works */}
          <SectionHeading id="how-it-works">How It Works</SectionHeading>

          <SubHeading id="zero-config-dns">Zero-Config DNS</SubHeading>
          <p className="text-[var(--color-text-muted)] mb-4">
            By default, vuln-pkg uses{" "}
            <a
              href="https://sslip.io"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[var(--color-terminal-cyan)] hover:underline"
            >
              sslip.io
            </a>{" "}
            for DNS resolution. sslip.io is a free service that resolves any
            hostname containing an IP address to that IP:
          </p>
          <ul className="space-y-1 text-[var(--color-text-muted)] mb-4 ml-4">
            <li>
              <CodeBlock>dvwa.127.0.0.1.sslip.io</CodeBlock> → 127.0.0.1
            </li>
            <li>
              <CodeBlock>webgoat.192.168.1.100.sslip.io</CodeBlock> →
              192.168.1.100
            </li>
          </ul>

          <SubHeading id="custom-domain">Custom Domain (Advanced)</SubHeading>
          <p className="text-[var(--color-text-muted)] mb-4">
            If you prefer cleaner URLs like{" "}
            <CodeBlock>dvwa.lab.local</CodeBlock>, you can use the{" "}
            <CodeBlock>--domain</CodeBlock> flag:
          </p>
          <TerminalWindow title="terminal">
            <div>
              <span className="text-[var(--color-terminal-green)]">$ </span>
              vuln-pkg --domain lab.local run dvwa
            </div>
          </TerminalWindow>
          <p className="text-[var(--color-text-dim)] text-sm mt-2">
            This requires setting up local DNS resolution (e.g., dnsmasq,
            /etc/hosts, or systemd-resolved) to point *.lab.local to 127.0.0.1.
          </p>

          <SubHeading id="traefik-proxy">Traefik Reverse Proxy</SubHeading>
          <p className="text-[var(--color-text-muted)] mb-4">
            vuln-pkg uses Traefik as a reverse proxy to route requests to the
            correct container based on the hostname. This enables:
          </p>
          <ul className="space-y-1 text-[var(--color-text-muted)] mb-4 ml-4">
            <li>• Clean subdomain-based URLs without port numbers</li>
            <li>• Multiple apps running simultaneously on port 80</li>
            <li>• Optional HTTPS support</li>
          </ul>
          <p className="text-[var(--color-text-muted)]">
            When apps are running, the Traefik dashboard is available at{" "}
            <CodeBlock>http://traefik.127.0.0.1.sslip.io</CodeBlock>
          </p>

          <SubHeading id="multi-port">Multi-Port Applications</SubHeading>
          <p className="text-[var(--color-text-muted)] mb-4">
            Applications with multiple ports get additional subdomains:
          </p>
          <ul className="space-y-1 text-[var(--color-text-muted)] mb-4 ml-4">
            <li>
              First port: <CodeBlock>{"<app>.<domain>"}</CodeBlock>
            </li>
            <li>
              Additional ports:{" "}
              <CodeBlock>{"<app>-<port>.<domain>"}</CodeBlock>
            </li>
          </ul>

          <SubHeading id="manifest-trust">Manifest Trust</SubHeading>
          <p className="text-[var(--color-text-muted)] mb-4">
            When you use a manifest for the first time, vuln-pkg will display information about it and ask you to accept or reject it:
          </p>
          <TerminalWindow title="manifest prompt">
            <pre className="text-[var(--color-text-muted)] text-xs">
{`════════════════════════════════════════════════════════════
  NEW MANIFEST
════════════════════════════════════════════════════════════

  URL:      https://example.com/manifest.yml
  Author:   Security Lab Team
  Email:    security@example.com
  Website:  https://github.com/example/vuln-lab
  About:    Custom vulnerable apps for internal training

  Contains 5 application(s) available:
    - custom-sqli
    - custom-xss
    ...

════════════════════════════════════════════════════════════

  ⚠ This manifest has not been accepted before.
  Review the information above and decide whether to trust it.

  Accept this manifest? [y/N/show]:`}
            </pre>
          </TerminalWindow>
          <p className="text-[var(--color-text-muted)] mt-4 mb-2">Options:</p>
          <ul className="space-y-1 text-[var(--color-text-muted)] mb-4 ml-4">
            <li>• <strong className="text-[var(--color-text-primary)]">y/yes</strong> - Accept the manifest and remember the choice</li>
            <li>• <strong className="text-[var(--color-text-primary)]">n/no</strong> (or just Enter) - Reject and abort</li>
            <li>• <strong className="text-[var(--color-text-primary)]">show</strong> - Display the full manifest YAML for inspection</li>
          </ul>
          <p className="text-[var(--color-text-muted)] mb-4">
            Once accepted, the manifest is remembered. Use <CodeBlock>-y</CodeBlock> flag to auto-accept for scripting:
          </p>
          <TerminalWindow title="terminal">
            <div>
              <span className="text-[var(--color-terminal-green)]">$ </span>
              vuln-pkg -y --manifest-url https://example.com/manifest.yml list
            </div>
          </TerminalWindow>

          {/* Manifest Format */}
          <SectionHeading id="manifest-format">Manifest Format</SectionHeading>
          <p className="text-[var(--color-text-muted)] mb-4">
            vuln-pkg reads application definitions from a YAML manifest. A manifest contains metadata about the author and a list of applications.
          </p>

          <SubHeading id="manifest-metadata">Manifest Metadata</SubHeading>
          <p className="text-[var(--color-text-muted)] mb-4">
            Every manifest should include metadata to help users identify and trust it:
          </p>
          <TerminalWindow title="manifest.yml">
            <pre className="text-[var(--color-text-muted)]">
              {`meta:
  author: "Security Lab Team"
  email: "security@example.com"
  url: "https://github.com/example/vuln-lab"
  description: "Custom vulnerable apps for internal training"

apps:
  # ... application definitions`}
            </pre>
          </TerminalWindow>

          <SubHeading id="manifest-prebuilt">
            Prebuilt Packages (Default)
          </SubHeading>
          <p className="text-[var(--color-text-muted)] mb-4">
            Pull and run existing Docker images from registries:
          </p>
          <TerminalWindow title="manifest.yml">
            <pre className="text-[var(--color-text-muted)]">
              {`apps:
  - name: dvwa
    version: "1.0"
    image: vulnerables/web-dvwa:latest
    description: Damn Vulnerable Web Application
    ports:
      - 80
    tags:
      - CVE-2021-12345
    env:
      - MYSQL_ROOT_PASSWORD=root`}
            </pre>
          </TerminalWindow>

          <SubHeading id="manifest-dockerfile">Dockerfile Packages</SubHeading>
          <p className="text-[var(--color-text-muted)] mb-4">
            Build custom images from inline Dockerfiles or remote URLs:
          </p>
          <TerminalWindow title="manifest.yml">
            <pre className="text-[var(--color-text-muted)]">
              {`apps:
  # Inline Dockerfile
  - name: custom-sqli-lab
    version: "1.0"
    type: dockerfile
    dockerfile: |
      FROM php:8.0-apache
      RUN docker-php-ext-install mysqli pdo pdo_mysql
      COPY vuln-app/ /var/www/html/
      EXPOSE 80
    ports: [80]
    tags:
      - SQL-Injection
    description: Custom SQL injection lab

  # Remote Dockerfile
  - name: remote-vuln-app
    version: "1.0"
    type: dockerfile
    dockerfile_url: https://example.com/Dockerfile
    context_url: https://example.com/context.tar.gz
    ports: [8080]`}
            </pre>
          </TerminalWindow>

          <SubHeading id="manifest-git">Git Packages</SubHeading>
          <p className="text-[var(--color-text-muted)] mb-4">
            Clone a repository and build from its Dockerfile:
          </p>
          <TerminalWindow title="manifest.yml">
            <pre className="text-[var(--color-text-muted)]">
              {`apps:
  - name: git-vuln-lab
    version: "1.0"
    type: git
    repo: https://github.com/user/vulnerable-app.git
    ref: main                     # Branch, tag, or commit
    dockerfile_path: ./Dockerfile # Optional
    ports: [3000]
    tags:
      - Custom
    description: Build from git repository`}
            </pre>
          </TerminalWindow>

          <SubHeading id="manifest-fields">Fields Reference</SubHeading>
          <div className="overflow-x-auto mb-6">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-[var(--color-text-dim)]">
                  <th className="text-left py-3 pr-4 text-[var(--color-terminal-green)]">Field</th>
                  <th className="text-left py-3 pr-4 text-[var(--color-text-primary)]">Required</th>
                  <th className="text-left py-3 text-[var(--color-text-primary)]">Description</th>
                </tr>
              </thead>
              <tbody className="text-[var(--color-text-muted)]">
                <tr className="border-b border-[var(--color-text-dim)]/30">
                  <td className="py-2 pr-4"><CodeBlock>name</CodeBlock></td>
                  <td className="py-2 pr-4">Yes</td>
                  <td>Unique identifier for the app</td>
                </tr>
                <tr className="border-b border-[var(--color-text-dim)]/30">
                  <td className="py-2 pr-4"><CodeBlock>version</CodeBlock></td>
                  <td className="py-2 pr-4">Yes</td>
                  <td>Version string</td>
                </tr>
                <tr className="border-b border-[var(--color-text-dim)]/30">
                  <td className="py-2 pr-4"><CodeBlock>type</CodeBlock></td>
                  <td className="py-2 pr-4">No</td>
                  <td>Package type: prebuilt (default), dockerfile, or git</td>
                </tr>
                <tr className="border-b border-[var(--color-text-dim)]/30">
                  <td className="py-2 pr-4"><CodeBlock>ports</CodeBlock></td>
                  <td className="py-2 pr-4">Yes</td>
                  <td>List of container ports to expose</td>
                </tr>
                <tr className="border-b border-[var(--color-text-dim)]/30">
                  <td className="py-2 pr-4"><CodeBlock>tags</CodeBlock></td>
                  <td className="py-2 pr-4">No</td>
                  <td>Tags for categorization (CVEs, vulnerability types)</td>
                </tr>
                <tr className="border-b border-[var(--color-text-dim)]/30">
                  <td className="py-2 pr-4"><CodeBlock>description</CodeBlock></td>
                  <td className="py-2 pr-4">No</td>
                  <td>Human-readable description</td>
                </tr>
                <tr>
                  <td className="py-2 pr-4"><CodeBlock>env</CodeBlock></td>
                  <td className="py-2 pr-4">No</td>
                  <td>Environment variables</td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* Examples */}
          <SectionHeading id="examples">Examples</SectionHeading>

          <SubHeading id="example-multiple">Run Multiple Apps</SubHeading>
          <TerminalWindow title="terminal">
            <div className="space-y-1">
              <div>
                <span className="text-[var(--color-terminal-green)]">$ </span>
                vuln-pkg run dvwa
              </div>
              <div>
                <span className="text-[var(--color-terminal-green)]">$ </span>
                vuln-pkg run webgoat
              </div>
              <div>
                <span className="text-[var(--color-terminal-green)]">$ </span>
                vuln-pkg run juice-shop
              </div>
            </div>
          </TerminalWindow>

          <SubHeading id="example-custom-manifest">Custom Manifest</SubHeading>
          <TerminalWindow title="terminal">
            <div className="space-y-1">
              <div>
                <span className="text-[var(--color-terminal-green)]">$ </span>
                vuln-pkg --manifest-url file:///path/to/manifest.yml list
              </div>
              <div>
                <span className="text-[var(--color-terminal-green)]">$ </span>
                vuln-pkg --manifest-url https://example.com/apps.yml run myapp
              </div>
            </div>
          </TerminalWindow>

          <SubHeading id="example-remote">Remote Access</SubHeading>
          <p className="text-[var(--color-text-muted)] mb-4">
            If running vuln-pkg on a remote server accessible at 192.168.1.100:
          </p>
          <TerminalWindow title="terminal">
            <div className="space-y-1">
              <div>
                <span className="text-[var(--color-terminal-green)]">$ </span>
                vuln-pkg --resolve-address 192.168.1.100 run dvwa
              </div>
              <div className="text-[var(--color-text-dim)]">
                # Access at http://dvwa.192.168.1.100.sslip.io from any machine
              </div>
            </div>
          </TerminalWindow>

          <SubHeading id="example-https">Enable HTTPS</SubHeading>
          <TerminalWindow title="terminal">
            <div className="space-y-1">
              <div>
                <span className="text-[var(--color-terminal-green)]">$ </span>
                vuln-pkg --https run dvwa
              </div>
              <div className="text-[var(--color-text-dim)]">
                # Access at https://dvwa.127.0.0.1.sslip.io
              </div>
            </div>
          </TerminalWindow>

          <SubHeading id="example-scripting">Scripting with Auto-Accept</SubHeading>
          <TerminalWindow title="terminal">
            <div className="space-y-1">
              <div className="text-[var(--color-text-dim)]"># Auto-accept manifests in CI/CD</div>
              <div>
                <span className="text-[var(--color-terminal-green)]">$ </span>
                vuln-pkg -y --manifest-url $MANIFEST_URL run $APP_NAME
              </div>
            </div>
          </TerminalWindow>

          {/* Troubleshooting */}
          <SectionHeading id="troubleshooting">Troubleshooting</SectionHeading>

          <SubHeading id="ts-docker">Cannot connect to Docker</SubHeading>
          <p className="text-[var(--color-text-muted)] mb-4">
            Ensure Docker is running:
          </p>
          <TerminalWindow title="terminal">
            <div>
              <span className="text-[var(--color-terminal-green)]">$ </span>
              docker info
            </div>
          </TerminalWindow>

          <SubHeading id="ts-not-accessible">App not accessible</SubHeading>
          <ol className="list-decimal list-inside text-[var(--color-text-muted)] mb-4 space-y-2">
            <li>
              Check the app is running: <CodeBlock>vuln-pkg status</CodeBlock>
            </li>
            <li>
              Verify Traefik is running:{" "}
              <CodeBlock>docker ps | grep vuln-pkg-traefik</CodeBlock>
            </li>
            <li>Check the Traefik dashboard for routing issues</li>
            <li>Ensure you have internet connectivity (for sslip.io DNS)</li>
          </ol>

          <SubHeading id="ts-port">Port 80/443 already in use</SubHeading>
          <p className="text-[var(--color-text-muted)] mb-4">
            Stop any services using port 80 or 443 (e.g., nginx, apache) before
            running vuln-pkg, as Traefik needs these ports.
          </p>
          <TerminalWindow title="terminal">
            <div className="text-[var(--color-text-dim)]">
              # Check what's using port 80
            </div>
            <div>
              <span className="text-[var(--color-terminal-green)]">$ </span>
              sudo lsof -i :80
            </div>
          </TerminalWindow>

          <SubHeading id="ts-slow">Container starts but app doesn't load</SubHeading>
          <p className="text-[var(--color-text-muted)] mb-4">
            Some apps take time to initialize. Check container logs:
          </p>
          <TerminalWindow title="terminal">
            <div>
              <span className="text-[var(--color-terminal-green)]">$ </span>
              docker logs vuln-pkg-{"<appname>"}
            </div>
          </TerminalWindow>

          {/* Security Warning */}
          <div className="border border-[var(--color-terminal-amber)] bg-[var(--color-bg-surface)] p-6 mt-12">
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
                  with a public IP, ensure proper network segmentation. The
                  Traefik dashboard is exposed without authentication by
                  default.
                </p>
              </div>
            </div>
          </div>
        </main>
      </div>

      {/* Footer */}
      <footer className="border-t border-[var(--color-text-dim)] py-8">
        <div className="max-w-6xl mx-auto px-4 text-center text-sm text-[var(--color-text-dim)]">
          <p className="mb-2">
            <span className="text-[var(--color-terminal-green)]">
              vuln-pkg
            </span>{" "}
            — The NPM for your home lab
          </p>
          <p>MIT License</p>
        </div>
      </footer>
    </div>
  );
}
