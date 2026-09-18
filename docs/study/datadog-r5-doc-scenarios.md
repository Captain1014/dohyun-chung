# Datadog R5 — Doc-Based Scenarios (Agent · Integrations · Metrics)

> Companion to `datadog-r5-cheatsheet.md`.
> For each official troubleshooting doc, one **expected interview scenario** + a **short how-to-approach**.
> **Rule:** every fix follows the linked Datadog doc. Approach = *scope, check, one step, update*.

---

## Quick Index

| # | Bucket | Customer says… | Doc |
| --- | --- | --- | --- |
| A1 | Agent | "Installed it, Agent won't start / keeps restarting" | [Agent Troubleshooting](https://docs.datadoghq.com/agent/troubleshooting/) |
| A2 | Agent | "One integration shows a warning / no data for one check" | [Agent Check Status](https://docs.datadoghq.com/agent/troubleshooting/agent_check_status/) |
| A3 | Agent | "Agent looks healthy but nothing shows in the UI" | [Check Agent Site](https://docs.datadoghq.com/agent/troubleshooting/site/) |
| I1 | Integration | "Enabled Postgres/nginx but it never reports" | [Getting Integrations Working](https://docs.datadoghq.com/agent/troubleshooting/integrations/) |
| I2 | Integration | "AWS metrics missing / IAM / IMDSv2 error" | [AWS Integration Troubleshooting](https://docs.datadoghq.com/integrations/guide/aws-integration-troubleshooting/) |
| I3 | Integration | "OCI integration stopped / credential error" | [OCI Integration Troubleshooting](https://docs.datadoghq.com/integrations/guide/oci-integration-troubleshooting/) |
| M1 | Metrics | "My custom metric never appears" | [Custom Metrics](https://docs.datadoghq.com/metrics/custom_metrics/) |
| M2 | Metrics | "Graph value looks wrong (count vs rate)" | [Metrics Types](https://docs.datadoghq.com/metrics/types/) |
| M3 | Metrics | "General: where do metrics come from / not visible" | [Metrics Overview](https://docs.datadoghq.com/metrics/) |
| M4 | Metrics | "Kubernetes HPA won't autoscale on my metric" | [Custom Metrics Server & HPA](https://docs.datadoghq.com/containers/troubleshooting/hpa/) |
| M5 | Metrics | "Trace metrics don't match ingested traces" | [APM Troubleshooting](https://docs.datadoghq.com/tracing/troubleshooting/) |

---

## Agent

### A1 — Agent won't start / startup loop / proxy / API key

**Customer says:** "I ran the install script but no data. Sometimes the Agent restarts by itself."

**Approach (follow the checklist in order):**

1. Internet reachable (directly or via proxy)? If proxy, is the Agent configured for it?
2. Is `api_key` in `datadog.yaml` the correct key for this org?
3. Does `site` match the org's site?
4. Only **one** Agent running on the host?
5. Did they **restart** the Agent after editing YAML?
6. All yes, then `sudo datadog-agent status`, then Agent logs, then debug mode, then **flare**.
7. Container stops right after start, usually **hostname detection** (see note below).

**Doc:** [Agent Troubleshooting](https://docs.datadoghq.com/agent/troubleshooting/)

> Note (containers): if logs show `unable to reliably determine the hostname`, follow [Hostname Detection in Containers](https://docs.datadoghq.com/agent/troubleshooting/hostname_containers/).

### A2 — One specific check is failing (warning / exception)

**Customer says:** "Host metrics are fine, but the `postgres` check shows a warning."

**Approach:**

1. Run `sudo -u dd-agent datadog-agent check <CHECK_NAME>` (add `--check-rate` for rate metrics).
2. Read the error the check prints (bad param, auth, connection).
3. On systemd, use `sudo systemctl status datadog-agent` and `sudo journalctl -u datadog-agent` for service-level errors.
4. Fix the check's `conf.yaml`, then restart, then re-run `status`.

**Doc:** [Troubleshoot an Agent Check](https://docs.datadoghq.com/agent/troubleshooting/agent_check_status/)

### A3 — Agent healthy but no data in the UI (region/site mismatch)

**Customer says:** "`status` looks green but I see nothing in Datadog."

**Approach:**

1. Confirm which site the org uses (e.g. `datadoghq.com` vs `datadoghq.eu`).
2. Run `sudo datadog-agent status`, check Forwarder **Endpoints** against the org site.
3. Set `site:` in `datadog.yaml` (or `DD_SITE`) to match, then restart, then `status`, then Metrics Explorer.

**Doc:** [Check Agent Site](https://docs.datadoghq.com/agent/troubleshooting/site/)

---

## Integrations

### I1 — Integration configured but not reporting

**Customer says:** "I enabled the nginx integration but no nginx metrics."

**Approach:** run `sudo datadog-agent status`, then split on **Running Checks**.

**Listed under Running Checks but not in app:**

1. Check for warnings/errors under that check's entry.
2. Check Metrics Explorer for host metrics (`system.cpu.user`).
3. Still empty, pull logs + `status` for support.

**NOT listed under Running Checks:**

1. Config in the right place & name: `conf.d/<name>.d/conf.yaml` (not `conf.yaml.example`).
2. Validate the YAML (indentation, `- item` list syntax).
3. Restart the Agent after every change, then re-run `status`.
4. Still missing, check `/var/log/datadog/agent.log`.

**Doc:** [Getting Integrations Working](https://docs.datadoghq.com/agent/troubleshooting/integrations/)

### I2 — AWS integration: missing metrics / IAM / IMDSv2

**Customer says:** "EC2 metrics stopped, or I get an IAM/AssumeRole error."

**Approach (crawler integration = fix in UI, not `conf.d`):**

1. Open the AWS integration tile, go to the **Issues** tab.
2. `sts:AssumeRole` error, check the IAM role **trust policy**: correct role name (no stray spaces), Datadog AWS account principal, and **External ID** matches the tile.
3. **Missing metrics**, confirm the resource's **region is enabled** in the tile and `DatadogAWSIntegrationRole` has required permissions (incl. `SecurityAudit`).
4. Bulk fix, use **Resolve All AWS Permissions Issues** (CloudFormation QuickStart).

**Doc:** [AWS Integration Troubleshooting](https://docs.datadoghq.com/integrations/guide/aws-integration-troubleshooting/)

### I3 — OCI integration: credentials / stack / region

**Customer says:** "OCI integration stopped, or I get a 403."

**Approach:**

1. Open the OCI integration tile, go to the **Issues** tab.
2. **Invalid Datadog API/App key** or credential mismatch, **reapply the existing ORM stack** in the tenancy (do **not** modify it).
3. **403**, in OCI verify `dd-svc-policy` and `dd-dynamic-group` have all **read-only** permissions.
4. **Missing region data**, forwarder function not found, reapply the ORM stack (one subnet OCID per region).

**Doc:** [OCI Integration Troubleshooting](https://docs.datadoghq.com/integrations/guide/oci-integration-troubleshooting/)

---

## Metrics

### M1 — Custom metric never appears (naming / timestamp limits)

**Customer says:** "I'm sending a custom metric but it never shows up."

**Approach:**

1. **Naming:** must start with a letter; only ASCII alphanumerics, `_`, `.`; max 200 chars; **case-sensitive**; no Unicode.
2. **Timestamp window:** points can't be more than **10 min in the future** or **1 hr in the past**, else dropped.
3. Older backfill needed, enable **[Historical Metrics Ingestion](https://docs.datadoghq.com/metrics/custom_metrics/historical_metrics/)** on the Metrics Summary page.
4. Confirm the metric name in Metrics Summary / Explorer.

**Doc:** [Custom Metrics](https://docs.datadoghq.com/metrics/custom_metrics/)

### M2 — Graph value looks wrong (submission type / DogStatsD mapping)

**Customer says:** "My counter graph looks like a rate, the numbers are off."

**Approach:**

1. Identify the in-app type: **COUNT / RATE / GAUGE / DISTRIBUTION**.
2. Remember DogStatsD `count`/`increment` map to **RATE** in-app (per-second), not raw count.
3. Use **`as_count()` / `as_rate()`** modifiers in the graph to switch representation.

**Doc:** [Metrics Types](https://docs.datadoghq.com/metrics/types/)

### M3 — General: where metrics come from / not visible

**Customer says:** "Metrics aren't showing; how are they even collected?"

**Approach:**

1. Confirm submission source: **Agent check**, **DogStatsD**, or **API**.
2. Check Metrics Explorer / Metrics Summary for the name.
3. If host metrics missing entirely, drop back to the **Agent** bucket (A1/A3).

**Doc:** [Metrics Overview](https://docs.datadoghq.com/metrics/)

### M4 — Kubernetes HPA won't autoscale on a Datadog metric

**Customer says:** "My HPA using an external Datadog metric isn't scaling."

**Approach:**

1. Cluster Agent running with `DD_EXTERNAL_METRICS_PROVIDER_ENABLED=true` and valid `DD_API_KEY`/`DD_APP_KEY` (and `DD_SITE`).
2. Run `kubectl get apiservices`, confirm `v1beta1.external.metrics.k8s.io` is **Available: True** (aggregation layer + RBAC + Service on **8443**).
3. Run `kubectl describe hpa`, look at the metric status/errors.
4. `Returned series slice empty` means metric name typo or metric doesn't exist in Datadog; verify the query in Metrics Summary (invalid query = ignored).

**Doc:** [Troubleshooting Custom Metrics Server and HPA](https://docs.datadoghq.com/containers/troubleshooting/hpa/)

### M5 — Trace metrics don't match ingested traces

**Customer says:** "Trace metrics and the traces I see don't add up."

**Approach:**

1. Distinguish **trace metrics** (based on 100% of traffic) vs **ingested/indexed spans** (subject to sampling/retention filters).
2. Check ingestion sampling rate and retention filters.
3. Confirm you're querying the right **trace metric namespace** (`trace.*`) vs a custom span-based metric.

**Doc:** [APM Troubleshooting](https://docs.datadoghq.com/tracing/troubleshooting/)

---

## 30-Second Triage (say this out loud)

```text
1. Which bucket? host/nothing = AGENT, one product = INTEGRATION, graph/query = METRICS
2. Scope: one host or all? when did it start? what changed?
3. One check at a time: status, check the check, the tile Issues tab, Metrics Summary
4. Fix per the doc, restart if Agent-side, verify in status, verify in UI
5. Stuck, flare (Agent) or reapply stack (AWS/OCI), escalate with evidence
```
