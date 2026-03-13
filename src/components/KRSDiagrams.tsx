"use client";

import { useState } from "react";

// ─── TOKENS ───────────────────────────────────────────────
const C = {
  navy: "#0F1E3C",
  blue: "#1B4FD8",
  blueMid: "#2563EB",
  blueLight: "#3B82F6",
  accent: "#38BDF8",
  accentGlow: "rgba(56,189,248,0.15)",
  success: "#10B981",
  warn: "#F59E0B",
  border: "rgba(59,130,246,0.25)",
  borderBright: "rgba(56,189,248,0.5)",
  text: "#E2E8F0",
  textMuted: "#64748B",
  textDim: "#94A3B8",
  bg: "#060D1F",
  bgCard: "#0B1628",
  bgHover: "#112040",
};

const font = `'IBM Plex Mono', 'Fira Code', monospace`;
const fontSans = `'DM Sans', 'Inter', sans-serif`;

// ─── SHARED STYLES (theme-aware via CSS vars) ──────────────
const cardStyle: React.CSSProperties = {
  background: "var(--diagram-card)",
  border: "1px solid var(--diagram-border)",
  borderRadius: 12,
  padding: "24px 28px",
  position: "relative",
  overflow: "hidden",
};

const tagStyle: React.CSSProperties = {
  display: "inline-block",
  fontSize: 10,
  letterSpacing: "0.12em",
  textTransform: "uppercase",
  color: "var(--diagram-tag-color)",
  background: "var(--diagram-tag-bg)",
  border: "1px solid var(--diagram-tag-border)",
  borderRadius: 4,
  padding: "2px 8px",
  fontFamily: font,
};

const labelStyle: React.CSSProperties = {
  fontFamily: font,
  fontSize: 11,
  color: "var(--diagram-text-muted)",
  letterSpacing: "0.08em",
  textTransform: "uppercase",
};

function SectionHeader({ tag, title, sub }: { tag: string; title: string; sub: string }) {
  return (
    <div style={{ marginBottom: 32 }}>
      <span style={tagStyle}>{tag}</span>
      <h2 style={{ fontFamily: font, fontSize: 22, fontWeight: 700, color: "var(--diagram-text)", margin: "10px 0 6px", letterSpacing: "-0.02em" }}>
        {title}
      </h2>
      <p style={{ fontFamily: fontSans, fontSize: 13, color: "var(--diagram-text-dim)", margin: 0 }}>{sub}</p>
    </div>
  );
}

// ─── DIAGRAM 1: MULTI-TENANT ARCHITECTURE ─────────────────
export function MultiTenantDiagram() {
  const tenants = [
    { name: "Tenant A", sub: "Franchise Seoul", color: "#3B82F6" },
    { name: "Tenant B", sub: "Franchise Tokyo", color: "#8B5CF6" },
    { name: "Tenant C", sub: "Franchise NYC", color: "#10B981" },
  ];
  const layers = [
    { label: "REST API Gateway", detail: "/api/rest/custom/onboarding/provision", icon: "⬡" },
    { label: "kiss_onboarding", detail: "DB creation · Module install · Regional config", icon: "◈" },
    { label: "ir.rule Isolation Layer", detail: "53 records in ir_rule_multi_company.xml", icon: "⬢", highlight: true },
    { label: "Odoo 18 ORM", detail: "All queries scoped by company_id", icon: "◆" },
  ];

  return (
    <div style={cardStyle}>
      <div style={{ position: "absolute", top: 0, right: 0, width: 200, height: 200, background: "radial-gradient(circle, rgba(59,130,246,0.06) 0%, transparent 70%)", pointerEvents: "none" }} />
      <SectionHeader tag="Section 1 · Architecture" title="Multi-tenant Isolation Design" sub="How Company A and Company B share infrastructure but never see each other's data" />

      {/* Tenant boxes */}
      <div style={{ display: "flex", gap: 12, marginBottom: 24 }}>
        {tenants.map((t) => (
          <div key={t.name} style={{ flex: 1, background: `${t.color}12`, border: `1px solid ${t.color}40`, borderRadius: 8, padding: "12px 14px", textAlign: "center" }}>
            <div style={{ fontFamily: font, fontSize: 12, fontWeight: 700, color: t.color }}>{t.name}</div>
            <div style={{ fontFamily: fontSans, fontSize: 11, color: "var(--diagram-text-dim)", marginTop: 3 }}>{t.sub}</div>
          </div>
        ))}
      </div>

      {/* Arrow down */}
      <div style={{ textAlign: "center", color: "var(--diagram-text-muted)", fontSize: 18, marginBottom: 12, letterSpacing: 2 }}>↓ ↓ ↓</div>

      {/* Stack layers */}
      <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
        {layers.map((l) => (
          <div key={l.label} style={{
            display: "flex", alignItems: "center", gap: 14,
            background: l.highlight ? `rgba(56,189,248,0.07)` : "var(--diagram-row)",
            border: l.highlight ? `1px solid ${C.borderBright}` : "1px solid var(--diagram-border)",
            borderRadius: 8, padding: "12px 16px",
          }}>
            <span style={{ fontSize: 18, width: 24, textAlign: "center", flexShrink: 0 }}>{l.icon}</span>
            <div style={{ flex: 1 }}>
              <div style={{ fontFamily: font, fontSize: 12, fontWeight: 700, color: l.highlight ? C.accent : "var(--diagram-text)" }}>{l.label}</div>
              <div style={{ fontFamily: fontSans, fontSize: 11, color: "var(--diagram-text-muted)", marginTop: 2 }}>{l.detail}</div>
            </div>
            {l.highlight && <span style={{ ...tagStyle, fontSize: 9 }}>Key Design</span>}
          </div>
        ))}
      </div>

      {/* Trade-off note */}
      <div style={{ marginTop: 20, padding: "12px 16px", background: "rgba(245,158,11,0.06)", border: "1px solid rgba(245,158,11,0.2)", borderRadius: 8, display: "flex", gap: 10 }}>
        <span style={{ color: C.warn, fontSize: 14 }}>⚡</span>
        <div>
          <span style={{ fontFamily: font, fontSize: 11, color: C.warn }}>Trade-off: </span>
          <span style={{ fontFamily: fontSans, fontSize: 12, color: "var(--diagram-text-dim)" }}>Higher upfront complexity (50+ record rules) → zero manual setup per new tenant</span>
        </div>
      </div>

      {/* Result */}
      <div style={{ marginTop: 10, padding: "12px 16px", background: "rgba(16,185,129,0.06)", border: "1px solid rgba(16,185,129,0.2)", borderRadius: 8, display: "flex", gap: 10 }}>
        <span style={{ color: C.success, fontSize: 14 }}>✓</span>
        <span style={{ fontFamily: fontSans, fontSize: 12, color: "var(--diagram-text-dim)" }}>Result: New tenant onboarded via single API call in <strong style={{ color: C.success }}>&lt; 30 minutes</strong></span>
      </div>
    </div>
  );
}

// ─── DIAGRAM 2: ATOMIC TRANSACTION FLOW ───────────────────
export function AtomicFlowDiagram() {
  const [active, setActive] = useState<number | null>(null);

  const steps = [
    { id: 1, label: "create_receiving_from_po()", type: "trigger", detail: "Single RPC call. The only entry point.", color: C.blueLight },
    { id: 2, label: "stock.picking validation", type: "step", detail: "Validates warehouse receipt against PO quantities and product specs", color: "#8B5CF6" },
    { id: 3, label: "_sync_product_and_inventory_onhand", type: "step", detail: "Real-time inventory count updated across all warehouse locations", color: "#F59E0B" },
    { id: 4, label: "_create_vendor_bill", type: "step", detail: "Accounting entry auto-generated and linked to PO + receipt", color: "#EC4899" },
    { id: 5, label: "Purchase Order status update", type: "step", detail: "PO marked as received. Downstream reports reflect immediately.", color: C.success },
  ];

  const phase1Steps = [
    "User manually validates stock.picking",
    "User opens separate invoice screen",
    "User manually creates vendor bill",
    "User returns to PO to update status",
    "Risk: any step skipped = broken report",
  ];

  return (
    <div style={cardStyle}>
      <div style={{ position: "absolute", top: 0, left: 0, width: 300, height: 300, background: "radial-gradient(circle, rgba(139,92,246,0.05) 0%, transparent 70%)", pointerEvents: "none" }} />
      <SectionHeader tag="Section 5 · Reliability" title="Atomic Transaction Flow" sub="All 4 operations succeed together or roll back together — no partial state possible" />

      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 24 }}>
        {/* Phase 1 — Before */}
        <div>
          <div style={{ ...labelStyle, marginBottom: 12 }}>Phase 1 · Before (fragmented)</div>
          <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
            {phase1Steps.map((s, i) => (
              <div key={i} style={{ display: "flex", gap: 8, alignItems: "flex-start" }}>
                <span style={{ fontFamily: font, fontSize: 11, color: C.warn, flexShrink: 0, marginTop: 1 }}>{i + 1}.</span>
                <span style={{ fontFamily: fontSans, fontSize: 12, color: i === 4 ? C.warn : "var(--diagram-text-dim)", fontStyle: i === 4 ? "italic" : "normal" }}>{s}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Phase 2 — After */}
        <div>
          <div style={{ ...labelStyle, marginBottom: 12 }}>Phase 2 · After (atomic)</div>
          <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
            {steps.map((step, i) => (
              <div
                key={step.id}
                onMouseEnter={() => setActive(i)}
                onMouseLeave={() => setActive(null)}
                style={{
                  cursor: "pointer",
                  padding: "10px 12px",
                  borderRadius: 7,
                  border: active === i ? `1px solid ${step.color}80` : "1px solid var(--diagram-border)",
                  background: active === i ? `${step.color}10` : "var(--diagram-row)",
                  transition: "all 0.15s ease",
                  position: "relative",
                }}
              >
                <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                  {step.type === "trigger"
                    ? <span style={{ fontFamily: font, fontSize: 10, color: step.color, background: `${step.color}20`, padding: "1px 6px", borderRadius: 3 }}>CALL</span>
                    : <span style={{ width: 6, height: 6, borderRadius: "50%", background: step.color, flexShrink: 0, display: "inline-block" }} />
                  }
                  <span style={{ fontFamily: font, fontSize: 11, color: active === i ? step.color : "var(--diagram-text)", fontWeight: step.type === "trigger" ? 700 : 400 }}>{step.label}</span>
                </div>
                {active === i && (
                  <div style={{ fontFamily: fontSans, fontSize: 11, color: "var(--diagram-text-dim)", marginTop: 6, paddingLeft: step.type === "trigger" ? 40 : 14 }}>{step.detail}</div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Atomic guarantee banner */}
      <div style={{ marginTop: 20, padding: "14px 18px", background: "linear-gradient(135deg, rgba(16,185,129,0.08), rgba(59,130,246,0.06))", border: "1px solid rgba(16,185,129,0.25)", borderRadius: 8 }}>
        <div style={{ fontFamily: font, fontSize: 11, color: C.success, marginBottom: 4 }}>ATOMICITY GUARANTEE</div>
        <div style={{ fontFamily: fontSans, fontSize: 12, color: "var(--diagram-text-dim)" }}>
          Steps 2–5 are wrapped in a single DB transaction. If <em>any</em> step fails, all changes roll back.
          Result: <strong style={{ color: C.success }}>0% cross-entity inconsistency</strong> by architectural design.
        </div>
      </div>
    </div>
  );
}

// ─── DIAGRAM 3: STAKEHOLDER COMMUNICATION HUB ─────────────
export function StakeholderDiagram() {
  const groups = [
    { id: "biz", label: "In-house Biz Team", sub: "10 people", color: "#F59E0B", icon: "◎", pos: { top: 0, left: "50%", transform: "translateX(-50%)" }, tension: "High expectations · low technical vocab" },
    { id: "idev", label: "In-house Dev Team", sub: "3 people", color: "#3B82F6", icon: "◈", pos: { bottom: 0, left: 0 }, tension: "Outnumbered · quality concerns" },
    { id: "vdev", label: "India Vendor Dev", sub: "10 people", color: "#8B5CF6", icon: "⬡", pos: { bottom: 0, right: 0 }, tension: "Scope-bound · context gaps" },
    { id: "vpm", label: "India Vendor PM", sub: "1 person", color: "#EC4899", icon: "◆", pos: { top: "42%", right: 0, transform: "translateY(-50%)" }, tension: "Bottleneck · limited authority" },
  ];

  return (
    <div style={cardStyle}>
      <SectionHeader tag="Section 2 · Orchestration" title="Stakeholder Communication Hub" sub="All 4 groups maintained trust in TPM. Direct communication between groups had broken down." />

      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 24 }}>
        {/* Hub diagram */}
        <div>
          <div style={{ position: "relative", height: 280 }}>
            {/* Connection lines */}
            <svg style={{ position: "absolute", inset: 0, width: "100%", height: "100%", pointerEvents: "none" }}>
              <line x1="50%" y1="50%" x2="50%" y2="14%" stroke="var(--diagram-border)" strokeWidth="1" strokeDasharray="4 4" />
              <line x1="50%" y1="50%" x2="15%" y2="86%" stroke="var(--diagram-border)" strokeWidth="1" strokeDasharray="4 4" />
              <line x1="50%" y1="50%" x2="85%" y2="86%" stroke="var(--diagram-border)" strokeWidth="1" strokeDasharray="4 4" />
              <line x1="50%" y1="50%" x2="86%" y2="46%" stroke="var(--diagram-border)" strokeWidth="1" strokeDasharray="4 4" />
            </svg>

            {/* Center: TPM */}
            <div style={{
              position: "absolute", top: "50%", left: "50%",
              transform: "translate(-50%, -50%)",
              width: 72, height: 72, borderRadius: "50%",
              background: `linear-gradient(135deg, ${C.blue}, ${C.accent}30)`,
              border: `2px solid ${C.accent}`,
              display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center",
              boxShadow: `0 0 20px ${C.accentGlow}`,
              zIndex: 2,
            }}>
              <div style={{ fontFamily: font, fontSize: 11, fontWeight: 700, color: C.accent }}>TPM</div>
              <div style={{ fontFamily: fontSans, fontSize: 9, color: "var(--diagram-text-dim)" }}>Me</div>
            </div>

            {/* Group nodes */}
            {groups.map((g) => (
              <div
                key={g.id}
                style={{
                  position: "absolute", ...g.pos,
                  width: 90, padding: "8px 10px",
                  background: "var(--diagram-row)",
                  border: "1px solid var(--diagram-border)",
                  borderRadius: 8, textAlign: "center",
                  zIndex: 1,
                }}
              >
                <div style={{ fontSize: 16, marginBottom: 2 }}>{g.icon}</div>
                <div style={{ fontFamily: font, fontSize: 10, color: "var(--diagram-text)", fontWeight: 600, lineHeight: 1.3 }}>{g.label}</div>
                <div style={{ fontFamily: fontSans, fontSize: 10, color: "var(--diagram-text-muted)" }}>{g.sub}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Right: group list */}
        <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
          {groups.map((g) => (
            <div key={g.id} style={{ padding: "10px 14px", background: "var(--diagram-row)", border: "1px solid var(--diagram-border)", borderRadius: 8 }}>
              <div style={{ fontFamily: font, fontSize: 11, color: g.color }}>{g.label}</div>
              <div style={{ fontFamily: fontSans, fontSize: 11, color: "var(--diagram-text-muted)", marginTop: 3 }}>{g.tension}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

// ─── DIAGRAM 4: EXPORT PIPELINE ARCHITECTURE ──────────────
export function ExportPipelineDiagram() {
  const sources = ["Payroll", "Inventory", "Transactions", "HR", "Purchase", "POS Sales", "Stock", "+14 more"];
  const steps = [
    { label: "ExportManager", detail: "Single entry point. Normalizes all data into common shape.", color: C.accent, icon: "⬡" },
    { label: "Lazy Load", detail: "Rows fetched only on export trigger — UI stays responsive", color: "#8B5CF6", icon: "◎" },
    { label: "Chunk Processor", detail: "1,000 rows/batch — no browser timeout on 50k+ rows", color: "#F59E0B", icon: "◈" },
    { label: "Export Output", detail: "File downloaded. Audit-ready.", color: C.success, icon: "◆" },
  ];

  return (
    <div style={cardStyle}>
      <SectionHeader tag="Section 4 · Efficiency" title="Centralized Export Pipeline" sub="Designed and implemented independently — normalizes 20+ data sources into one consistent export flow" />

      {/* Sources */}
      <div style={{ marginBottom: 16 }}>
        <div style={{ ...labelStyle, marginBottom: 10 }}>20+ data sources (before: each had its own export logic)</div>
        <div style={{ display: "flex", flexWrap: "wrap", gap: 6 }}>
          {sources.map((s) => (
            <span key={s} style={{
              fontFamily: font, fontSize: 10,
              color: "var(--diagram-text-dim)", background: "var(--diagram-row)",
              border: "1px solid var(--diagram-border)", borderRadius: 4, padding: "3px 9px"
            }}>{s}</span>
          ))}
        </div>
      </div>

      {/* Arrow */}
      <div style={{ textAlign: "center", color: "var(--diagram-text-muted)", fontSize: 14, marginBottom: 14 }}>↓ all funnel into ↓</div>

      {/* Pipeline steps */}
      <div style={{ display: "flex", alignItems: "stretch", gap: 0 }}>
        {steps.map((step, i) => (
          <div key={step.label} style={{ flex: 1, display: "flex", alignItems: "stretch" }}>
            <div style={{
              flex: 1, padding: "14px 12px",
              background: `${step.color}0D`,
              border: `1px solid ${step.color}40`,
              borderRadius: i === 0 ? "8px 0 0 8px" : i === steps.length - 1 ? "0 8px 8px 0" : 0,
              borderLeft: i > 0 ? "none" : undefined,
              textAlign: "center",
            }}>
              <div style={{ fontSize: 18, marginBottom: 6 }}>{step.icon}</div>
              <div style={{ fontFamily: font, fontSize: 11, color: step.color, fontWeight: 700, marginBottom: 6 }}>{step.label}</div>
              <div style={{ fontFamily: fontSans, fontSize: 11, color: "var(--diagram-text-muted)", lineHeight: 1.5 }}>{step.detail}</div>
            </div>
            {i < steps.length - 1 && (
              <div style={{ display: "flex", alignItems: "center", color: "var(--diagram-text-muted)", fontSize: 16, padding: "0 2px", background: "transparent", border: "1px solid var(--diagram-border)", borderLeft: "none", borderRight: "none" }}>→</div>
            )}
          </div>
        ))}
      </div>

      {/* Metrics row */}
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 10, marginTop: 16 }}>
        {[
          { label: "Export Steps", before: "4+ manual", after: "1 click", color: C.success },
          { label: "Dev Time / New Screen", before: "Days", after: "< 1 hour", color: C.accent },
          { label: "Reliability", before: "Frequent timeout", after: "10k+ rows ✓", color: "#8B5CF6" },
        ].map((m) => (
          <div key={m.label} style={{ padding: "10px 12px", background: "var(--diagram-row)", border: "1px solid var(--diagram-border)", borderRadius: 8 }}>
            <div style={{ fontFamily: font, fontSize: 10, color: "var(--diagram-text-muted)", marginBottom: 6 }}>{m.label}</div>
            <div style={{ display: "flex", gap: 6, alignItems: "center" }}>
              <span style={{ fontFamily: fontSans, fontSize: 11, color: C.warn, textDecoration: "line-through" }}>{m.before}</span>
              <span style={{ color: "var(--diagram-text-muted)", fontSize: 10 }}>→</span>
              <span style={{ fontFamily: font, fontSize: 11, color: m.color, fontWeight: 700 }}>{m.after}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

