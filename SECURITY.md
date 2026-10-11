# Security Policy

## Scope

This policy covers security vulnerabilities in NOVASPLOIT-UI code and its release/packaging process. NOVASPLOIT-UI is a community-maintained derivative of eDEX-UI; vulnerabilities may also originate in upstream code or third-party dependencies.

## Supported versions

Security fixes are best-effort. Until releases are listed in this section, assume that only the latest published release or the current default branch may receive attention. This is not a guarantee of ongoing maintenance.

| Version | Security support |
| --- | --- |
| Latest release | Best-effort |
| Older releases | Not guaranteed |

## Reporting a vulnerability

**Please do not report an exploitable vulnerability in a public issue.**

If GitHub Private Vulnerability Reporting is enabled for this repository, use the repository's **Security → Advisories → Report a vulnerability** workflow. Otherwise, contact the repository maintainer privately through a verified contact method listed on the repository profile.

Include, where possible:

- A concise description and potential impact.
- Affected version, commit, operating system, and runtime versions.
- Minimal reproduction steps or a proof of concept that does not expose real users or data.
- Any suggested mitigation.

Please allow reasonable time for investigation and a fix before public disclosure. Do not include passwords, access tokens, private keys, personal data, or other secrets in a report.

## Dependency and upstream issues

If the issue is clearly in eDEX-UI or another dependency, check that project's current security-reporting process as well. Please avoid assuming that an upstream project is actively maintained just because its source remains available.
