// Edit this file to update site content — everything renders from here.
export const profile = {
  name: "Nikhil Reddy",
  title: "AI Software Engineer",
  location: "Hyderabad, India",
  tagline:
    "Building agentic AI platforms, RAG pipelines, and observability-first LLM systems.",
  summary:
    "AI Software Engineer with 2 years of experience building production agentic AI platforms, RAG pipelines, and observability-first LLM systems on AWS at HashedIn by Deloitte. Deep hands-on with Python, LangChain, LangGraph, Kedro, and FastAPI; instrumented production agents end-to-end with tracing, logging, metrics, evaluation pipelines, and guardrails using LangSmith, Weights & Biases, OpenTelemetry, Prometheus, Grafana, and GuardrailsAI.",
  email: "gvdnikhil@gmail.com",
  linkedin: "https://linkedin.com/in/gvdnikhil",
  github: "https://github.com/",
};

export const skills = [
  {
    group: "LLM & Agentic AI",
    items: [
      "LangChain",
      "LangGraph",
      "Kedro",
      "Anthropic Claude API",
      "OpenAI API",
      "Tool / Function Calling",
      "Multi-Agent Orchestration",
      "ReAct",
      "MCP",
    ],
  },
  {
    group: "RAG & Retrieval",
    items: ["Vector Search", "Embeddings", "Hybrid Retrieval", "NVIDIA Reranking", "Semantic Chunking"],
  },
  {
    group: "Vector & Data Stores",
    items: ["Milvus", "PGVector", "FAISS", "PostgreSQL", "MySQL", "Redis"],
  },
  {
    group: "LLM Observability & Evaluation",
    items: ["LangSmith", "Weights & Biases", "OpenTelemetry", "Golden Datasets", "Cost & Latency Tracing"],
  },
  {
    group: "Observability & Monitoring",
    items: ["Prometheus", "Grafana", "ELK Stack", "Distributed Tracing"],
  },
  {
    group: "Safety & Guardrails",
    items: ["GuardrailsAI", "Schema Constraints", "Output Validation", "Prompt-Injection Defenses"],
  },
  {
    group: "Backend & Cloud",
    items: ["FastAPI", "Django", "Spring Boot", "AWS", "Docker", "Kubernetes", "Terraform", "GitHub Actions"],
  },
];

export const experience = [
  {
    company: "HashedIn by Deloitte",
    role: "Software Engineer — AI / Backend",
    location: "Hyderabad, India",
    period: "Sep 2024 — Present",
    bullets: [
      "Cut clinical document authoring time from days to minutes with an LLM-driven generation pipeline using OpenAI models, Kedro workflows, and LangGraph multi-agent editing agents, deployed on AWS with CI/CD via GitHub Actions.",
      "Improved semantic retrieval accuracy ~20% on enterprise financial queries with a hybrid RAG pipeline over Milvus + MySQL with NVIDIA reranking, exposed via scalable FastAPI microservices.",
      "Built an agentic system generating multi-cloud Terraform modules and CI/CD pipelines from natural language, grounded via PGVector + FAISS retrieval over internal IaC standards — cutting provisioning cycles from days to minutes.",
      "Instrumented production agents with tracing, logging, and metrics using LangSmith and OpenTelemetry GenAI conventions; built Grafana dashboards over Prometheus tracking p95 latency, token cost, and tool-call success rates.",
      "Reduced hallucinations by integrating GuardrailsAI validation, schema constraints, and allow-listed tool usage into production LLM pipelines.",
    ],
  },
  {
    company: "HashedIn by Deloitte",
    role: "Full-Stack Development Intern",
    location: "Hyderabad, India",
    period: "Jun 2024 — Sep 2024",
    bullets: [
      "Built FastAPI + PostgreSQL backend services for a hotel management platform, integrating LangChain-powered conversational recommendations.",
      "Developed secure REST APIs with Spring Boot and JWT for a ticket-booking system spanning booking, auth, and admin workflows.",
      "Implemented Angular frontend modules across scheduling, booking, and payment flows with 85%+ unit-test coverage.",
    ],
  },
];

export const projects = [
  {
    name: "AI-Assist DevOps — Infrastructure Code Generator",
    stack: "LangChain, PGVector, FAISS, Terraform, Python",
    description:
      "LLM-driven infrastructure automation platform generating Terraform modules and CI/CD pipelines from architecture inputs, with semantic retrieval over IaC documentation for contextual code generation.",
    link: null,
  },
  {
    name: "Conversational AI Expense Assistant",
    stack: "LangChain, FastAPI, Redis, Milvus, MySQL",
    description:
      "Enterprise conversational assistant querying financial datasets via hybrid vector + SQL retrieval, with Redis-backed session memory for scalable multi-turn conversations.",
    link: null,
  },
  {
    name: "Observability-First RAG Assistant",
    stack: "FastAPI, LangGraph, FAISS, sentence-transformers",
    description:
      "A personal RAG agent that shows its work — retrieved chunks, tool calls, latency, token cost, and guardrail verdicts, live, for every answer.",
    link: null,
    status: "in progress",
  },
];

export const education = {
  school: "Sree Vidyanikethan Engineering College",
  degree: "B.Tech, Computer Science — GPA 8.54 / 10",
  period: "2020 — 2024",
};

export const certifications = [
  {
    name: "Claude Certified Architect — Foundations",
    issuer: "Anthropic, 2026",
    link: "https://verify.skilljar.com/c/jm9z3um2zuoy",
  },
];
