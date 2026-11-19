export const profile = {
  name: "Pravin Sakhare",
  first: "Pravin",
  last: "Sakhare",
  role: "DevOps Engineer · Cloud Ops",
  location: "Pune, India",
  relocation: "Open to relocation",
  email: "sakharepravin.dev@gmail.com",
  linkedin: "https://linkedin.com/in/pravinsakhare",
  github: "https://github.com/pravinsakhare",
  summary:
    "Cloud Operations Engineer who has kept multi-region SaaS production alive on AWS and Kubernetes — incident triage, escalation and 24/7 on-call. AWS Certified Cloud Practitioner, now hunting for a Systems Engineer role.",
};

export const stats = [
  { value: "99.8%", label: "uptime held across multi-region prod" },
  { value: "<10m", label: "first response on P1–P3 incidents" },
  { value: "30→5", label: "minutes per SSL request after automation" },
  { value: "24/7", label: "on-call rotation — morning, noon & 3am" },
];

export const experience = [
  {
    role: "Cloud Operations Engineer",
    company: "Acoustic Marketing India Pvt. Ltd.",
    period: "Feb 2026 – Aug 2026",
    place: "Pune",
    tag: "prod",
    points: [
      "Watched multi-region SaaS dashboards (Grafana, Datadog, Icinga, CloudWatch, Prometheus) and ran first-level triage on P1–P3 incidents in Jira — under 10 min first response, 1–2 hr resolution.",
      "Escalated and coordinated with SRE, DevOps and DBA teams across regions, and contributed to root cause analysis for major incidents.",
      "Kept 99.8% uptime with a monthly 24/7 on-call rotation across morning, afternoon and night shifts.",
      "Troubleshot Kubernetes during major incidents (pod restarts, diagnostics) and wrote the team's Kubernetes troubleshooting SOP.",
      "Ran the SSL/TLS lifecycle for client subdomains with AWS ACM, Route 53 and load balancers — provisioning, renewal, deprovisioning.",
      "Co-built a Bash automation for bulk SSL operations across hundreds of domains: ~30 min → ~5 min per request.",
    ],
  },
  {
    role: "Growth Associate",
    company: "Talenlio International Pvt. Ltd.",
    period: "May 2025 – Jul 2025",
    place: "Pune",
    tag: "people",
    points: [
      "Worked with the IT team to understand platform architecture, tech stack and cloud infrastructure.",
      "Coordinated hiring for 15+ cloud and software engineering roles with international clients.",
      "Engaged 500+ HR professionals for technical talent sourcing across India.",
    ],
  },
];

export const projects = [
  {
    title: "Kubernetes CI/CD Platform Lab",
    blurb:
      "Dockerised app shipped by a GitHub Actions pipeline that tags images (latest + git SHA), pushes to Docker Hub and updates the Kubernetes manifest. Runs on kind with probes, limits, namespaces and an HPA (50% CPU, 1–5 replicas) — load-tested, Metrics Server TLS bug fixed, runbook written.",
    tags: ["Kubernetes", "Docker", "GitHub Actions", "HPA"],
    github: "https://github.com/pravinsakhare/platform-engineering-lab-Kubernetes",
    terminal: ["$ kubectl get hpa", "NAME   TARGETS   MIN  MAX  REPLICAS", "web    48%/50%   1    5    4  ✓"],
    tone: "primary" as const,
  },
  {
    title: "PixelFlare Photo Studio",
    blurb:
      "Full-stack photo studio site designed in Figma. DynamoDB for data, S3 for media, CloudFront as CDN and EC2 + Apache2 for hosting.",
    tags: ["AWS", "DynamoDB", "CloudFront", "TypeScript"],
    github: "https://github.com/pravinsakhare/pixelflare-photo-studio",
    live: "https://gzzmonk.me/",
    terminal: ["$ aws s3 sync ./media s3://pixelflare", "upload: 248 files", "cloudfront: invalidated ✓"],
    tone: "secondary" as const,
  },
  {
    title: "Secure Static Website on EC2",
    blurb:
      "Production-ready static site on EC2 with auto-renewing Let's Encrypt SSL, Apache virtual hosts, HTTPS redirects, Route 53 DNS and AWS security best practices.",
    tags: ["EC2", "Apache", "Route 53", "SSL/TLS"],
    github: "https://github.com/pravinsakhare/aws-secure-website-deployment-guide",
    terminal: ["$ certbot renew --dry-run", "Congratulations, all renewals", "succeeded 🔒"],
    tone: "accent" as const,
  },
];

export const skillGroups = [
  { name: "Cloud (AWS)", items: ["EC2", "VPC", "IAM", "S3", "RDS", "Route 53", "ACM", "CloudFront", "CloudWatch"] },
  { name: "Monitoring", items: ["Prometheus", "Grafana", "Datadog", "Icinga", "CloudWatch"] },
  { name: "Containers & CI/CD", items: ["Docker", "Kubernetes", "GitHub Actions", "Jenkins", "CloudFormation"] },
  { name: "Linux & Scripting", items: ["Linux", "Bash", "Python", "Git", "GitHub"] },
  { name: "Networking", items: ["TCP/IP", "DNS", "HTTP/HTTPS", "Load Balancing", "SSL/TLS"] },
  { name: "Ops", items: ["Incident Response", "Triage & Escalation", "RCA", "SOP Writing", "Jira"] },
];

export const marquee = [
  "AWS", "Kubernetes", "Docker", "Linux", "Bash", "Python", "Grafana", "Prometheus",
  "Datadog", "GitHub Actions", "Route 53", "CloudFront", "Jenkins", "Icinga",
];

export const credentials = [
  { title: "AWS Certified Cloud Practitioner", meta: "Amazon Web Services · valid 2025 – 2028", emoji: "☁️" },
  { title: "AWS re/Start Graduate", meta: "AWS School, Pune · 2025", emoji: "🎓" },
  { title: "BCA — Cloud Computing", meta: "DY Patil International University · 2022 – 2025 · GPA 8.64", emoji: "📚" },
];
