"use client";

import { useState } from "react";
import Image from "next/image";
import dynamic from "next/dynamic";
import { motion, AnimatePresence } from "framer-motion";
import {
  Brain,
  LayoutGrid,
  Lightbulb,
  LineChart,
  Code,
  FlaskConical,
  ExternalLink,
  ArrowRight,
  Sparkles,
  GitFork,
  Layers,
} from "lucide-react";

// Optional 3D fallback mode
const BrainScene3D = dynamic(() => import("./BrainScene"), {
  ssr: false,
  loading: () => <div className="brain-fallback">Loading 3D neural grid...</div>,
});

export type ProjectBadgeType = "impl" | "proto" | "uiux" | "analytics";

export interface CategoryProject {
  title: string;
  badge: string;
  badgeType: ProjectBadgeType;
  desc: string;
  stack: string[];
  repoUrl: string;
  caseStudyUrl?: string;
  isFigma?: boolean;
}

export interface SkillCategory {
  id: string;
  n: string;
  label: string;
  sub: string;
  icon: any;
  iconBg: string;
  iconColor: string;
  color: string;
  heading: string;
  desc: string;
  projects: CategoryProject[];
  fullLink?: string;
  // Position coordinates in percentage of center container
  hub: { x: number; y: number };
  labelPos: { x: number; y: number };
  // SVG arrow path connecting label to hub
  arrowPath: string;
  arrowMarkerId: string;
}

const skillsData: SkillCategory[] = [
  {
    id: "ai",
    n: "01",
    label: "AI & ML",
    sub: "Models, NLP, RAG, agents",
    icon: Brain,
    iconBg: "#e0e7ff",
    iconColor: "#4338ca",
    color: "#6366f1",
    heading: "Make intelligence useful.",
    desc: "I build applied AI systems beyond isolated model calls — combining autonomous tool-using agents, evaluation workflows, and multimodal deep learning pipelines for clinical and practical applications.",
    fullLink: "https://github.com/AyushiTaralkar?tab=repositories&q=agent+OR+model+OR+RAG",
    hub: { x: 42, y: 34 },
    labelPos: { x: 38, y: 11 },
    arrowPath: "M 220,55 Q 235,95 245,140",
    arrowMarkerId: "arrow-ai",
    projects: [
      {
        title: "Composio Research Agent",
        badge: "Implemented Feature",
        badgeType: "impl",
        desc: "Autonomous AI research agent evaluating app integrations across authentication, APIs, MCP protocols, and buildability.",
        stack: ["Python", "Composio", "LangChain", "OpenAI"],
        repoUrl: "https://github.com/AyushiTaralkar/composio-app-research-agent",
      },
      {
        title: "Genetic Disorder Detection in IVF Embryos",
        badge: "Research Prototype",
        badgeType: "proto",
        desc: "Custom CNN deep learning model classifying microscopic embryo imagery to evaluate developmental viability and detect abnormalities.",
        stack: ["TensorFlow", "Keras", "CNN", "OpenCV"],
        repoUrl: "https://github.com/AyushiTaralkar/Genetic-Disorder-detection-in-IVF-Embryo-CNN-Model",
      },
      {
        title: "Real-Time Mood Detector",
        badge: "Research Prototype",
        badgeType: "proto",
        desc: "Computer vision and deep learning system analyzing webcam facial expressions with DeepFace and overlaying real-time emotion classifications.",
        stack: ["Python", "OpenCV", "DeepFace", "CNN"],
        repoUrl: "https://github.com/AyushiTaralkar/Mood-Detector",
      },
      {
        title: "SignTales (Sign Language Model)",
        badge: "Research Prototype",
        badgeType: "proto",
        desc: "Accessibility and educational tool converting written text into expressive, easy-to-understand sign language representations for the Deaf community.",
        stack: ["Python", "Computer Vision", "NLP", "Streamlit"],
        repoUrl: "https://github.com/AyushiTaralkar/AyushiTaralkar-Sign-Language-model",
      },
      {
        title: "ArthaSage AI",
        badge: "Implemented Feature",
        badgeType: "impl",
        desc: "Intelligent personal finance copilot combining CSV statement ingestion, analytics dashboards, and conversational RAG.",
        stack: ["Python", "Streamlit", "LangChain", "RAG", "Plotly"],
        repoUrl: "https://github.com/AyushiTaralkar/Expense-Tracking-RAG",
      },
    ],
  },
  {
    id: "ux",
    n: "02",
    label: "UI & UX",
    sub: "Flows, visuals, interfaces",
    icon: LayoutGrid,
    iconBg: "#e0f2fe",
    iconColor: "#0284c7",
    color: "#38bdf8",
    heading: "Make complex systems feel clear.",
    desc: "I craft human-centered digital interfaces where complex data, models, and workflows are abstracted into intuitive user journeys, accessible layouts, and polished visual systems.",
    fullLink: "https://my-portfolio-seven-pink-73.vercel.app/#uiux-projects",
    hub: { x: 33, y: 50 },
    labelPos: { x: 12, y: 43 },
    arrowPath: "M 85,185 Q 135,195 190,215",
    arrowMarkerId: "arrow-ux",
    projects: [
      {
        title: "IMAGINE AI",
        badge: "UI/UX Concept & Implementation",
        badgeType: "uiux",
        desc: "Mobile-responsive image generation interface powered by DALL-E 2 with creative prompt assistance and visual galleries.",
        stack: ["Figma", "Node.js", "Express", "DALL-E 2"],
        repoUrl: "https://github.com/AyushiTaralkar/Imagine_AI",
        caseStudyUrl: "https://www.figma.com/design/HwomNLG1sKE32VEs2TX8U1/IMAGINE---AI?node-id=0-1&p=f&t=xaf9JidlrZ8un5NR-0",
      },
      {
        title: "Travel Buddy",
        badge: "UI/UX Concept",
        badgeType: "uiux",
        desc: "Interactive travel companion website featuring custom itineraries, destination curation, and community review flows.",
        stack: ["Figma", "Wireframing", "Design System", "Prototyping"],
        repoUrl: "https://www.figma.com/design/wh4lDtwTRRiazXzSBdvd5w/TRAVEL-BUDDY?node-id=0-1&p=f&t=7Y8l0uyKbbMlwBT7-0",
        isFigma: true,
      },
      {
        title: "Mental Health App",
        badge: "UI/UX Concept",
        badgeType: "uiux",
        desc: "Compassionate mobile wellness concept with daily mood check-ins, guided breathing exercises, and emergency care workflows.",
        stack: ["Figma", "User Research", "Mobile Design", "Interaction"],
        repoUrl: "https://www.figma.com/design/qdDKSZckSpXY0TEQhlJS6r/Untitled?t=xaf9JidlrZ8un5NR-0",
        isFigma: true,
      },
      {
        title: "Surraag – Hindustani Music Platform",
        badge: "UI/UX Concept",
        badgeType: "uiux",
        desc: "Immersive website designed for A.R. Rahman's band member, showcasing concert archives, tour dates, and an interactive music showcase.",
        stack: ["Figma", "Editorial UI", "Visual Design", "Prototyping"],
        repoUrl: "https://www.figma.com/design/zxGyi4gsofFuWSVirBAz4L/surraag?t=7Y8l0uyKbbMlwBT7-0",
        isFigma: true,
      },
      {
        title: "AI Education Platform",
        badge: "UI/UX Concept",
        badgeType: "uiux",
        desc: "Personalized AI learning platform interface delivering adaptive curriculum, student progress analytics, and interactive exercises.",
        stack: ["Figma", "EdTech UX", "Dashboard Design", "Information Architecture"],
        repoUrl: "https://www.figma.com/design/JgQakjChJ4JEmL7Nqp66iw/Untitled?t=7Y8l0uyKbbMlwBT7-0",
        isFigma: true,
      },
    ],
  },
  {
    id: "product",
    n: "03",
    label: "Product",
    sub: "Problems, trade-offs, value",
    icon: Lightbulb,
    iconBg: "#fef3c7",
    iconColor: "#d97706",
    color: "#f59e0b",
    heading: "Start with the real problem.",
    desc: "I work backwards from user friction — prioritizing core workflows, balancing architectural trade-offs, and shipping solutions that deliver measurable value.",
    fullLink: "https://github.com/AyushiTaralkar",
    hub: { x: 62, y: 36 },
    labelPos: { x: 67, y: 12 },
    arrowPath: "M 395,58 Q 375,95 365,145",
    arrowMarkerId: "arrow-product",
    projects: [
      {
        title: "ArthaSage AI",
        badge: "Implemented Feature",
        badgeType: "impl",
        desc: "Personal finance copilot solving student budgeting friction through effortless CSV imports, spending summaries, and proactive conversational advice.",
        stack: ["Python", "Streamlit", "LangChain", "RAG", "Plotly"],
        repoUrl: "https://github.com/AyushiTaralkar/Expense-Tracking-RAG",
      },
      {
        title: "Composio Research Agent",
        badge: "Implemented Feature",
        badgeType: "impl",
        desc: "Product research workflow assessing third-party tool integrations for authentication ergonomics, API reliability, and developer experience.",
        stack: ["Python", "Composio SDK", "LangChain", "Agent Evaluation"],
        repoUrl: "https://github.com/AyushiTaralkar/composio-app-research-agent",
      },
      {
        title: "Field-to-Record",
        badge: "Implemented Feature",
        badgeType: "impl",
        desc: "Offline-first clinical tool turning first-responder voice dictation into structured, timestamped medical records with human review and audit trails.",
        stack: ["Python", "FastAPI", "React", "SQLite", "Speech Recognition"],
        repoUrl: "https://github.com/AyushiTaralkar/Field-to-record",
      },
      {
        title: "Healthcare Appointment & Follow-up Manager",
        badge: "Implemented Feature",
        badgeType: "impl",
        desc: "Patient care coordination system reducing missed follow-ups through automated scheduling reminders and clinician dashboard views.",
        stack: ["Python", "Flask", "SQL", "HTML/CSS/JS"],
        repoUrl: "https://github.com/AyushiTaralkar/healthcare-appointment-followup-manager",
      },
    ],
  },
  {
    id: "analytics",
    n: "04",
    label: "Analytics",
    sub: "Data, patterns, insights",
    icon: LineChart,
    iconBg: "#f3e8ff",
    iconColor: "#9333ea",
    color: "#a855f7",
    heading: "Turn information into direction.",
    desc: "From raw telemetry and health metrics to exploratory dashboards, I uncover actionable signals that inform clinical models and product decisions.",
    fullLink: "https://github.com/AyushiTaralkar?tab=repositories&q=Data+OR+Analytics+OR+Prediction",
    hub: { x: 69, y: 51 },
    labelPos: { x: 84, y: 46 },
    arrowPath: "M 485,195 Q 445,210 405,220",
    arrowMarkerId: "arrow-analytics",
    projects: [
      {
        title: "ArthaSage AI Analytics",
        badge: "Implemented Feature",
        badgeType: "impl",
        desc: "Multi-dimensional financial analytics engine computing monthly burn rates, category distributions, and spending trends from transaction records.",
        stack: ["Pandas", "Plotly", "Data Modeling", "Python"],
        repoUrl: "https://github.com/AyushiTaralkar/Expense-Tracking-RAG",
      },
      {
        title: "Netflix Data Analytics",
        badge: "Analytics Pipeline",
        badgeType: "analytics",
        desc: "Exploratory data analysis tracking content release velocity, genre evolution, runtime metrics, and international licensing patterns across streaming libraries.",
        stack: ["Python", "Pandas", "Matplotlib", "Seaborn", "Jupyter"],
        repoUrl: "https://github.com/AyushiTaralkar/Netflix-Data-Analytics",
      },
      {
        title: "Diabetes Risk Prediction",
        badge: "Research Prototype",
        badgeType: "proto",
        desc: "Predictive analytics pipeline modeling the correlation between clinical biomarkers, mood metrics, and overall diabetes risk scores.",
        stack: ["Scikit-Learn", "Pandas", "Correlation Analysis", "Python"],
        repoUrl: "https://github.com/AyushiTaralkar/Diabetes-Prediction-ML",
      },
      {
        title: "Customer Purchase Prediction",
        badge: "Analytics Pipeline",
        badgeType: "analytics",
        desc: "Predictive consumer analytics notebook evaluating classification algorithms to forecast buyer conversion and basket propensity.",
        stack: ["Python", "Scikit-Learn", "Pandas", "Feature Engineering"],
        repoUrl: "https://github.com/AyushiTaralkar/Customer-purchase-prediction",
      },
    ],
  },
  {
    id: "engineering",
    n: "05",
    label: "Engineering",
    sub: "APIs, backend, databases",
    icon: Code,
    iconBg: "#dcfce7",
    iconColor: "#059669",
    color: "#10b981",
    heading: "Build the system behind the idea.",
    desc: "Reliable APIs, structured schemas, offline-first architectures, and clean component systems — I write robust, maintainable code designed to scale.",
    fullLink: "https://github.com/AyushiTaralkar",
    hub: { x: 37, y: 68 },
    labelPos: { x: 16, y: 84 },
    arrowPath: "M 115,365 Q 165,355 215,310",
    arrowMarkerId: "arrow-eng",
    projects: [
      {
        title: "Field-to-Record Backend & Engine",
        badge: "Implemented Feature",
        badgeType: "impl",
        desc: "Robust offline-first architecture with localized speech-to-text inference, transactional SQLite stores, and tamper-evident audit trails.",
        stack: ["FastAPI", "Python", "SQLite", "REST APIs", "React"],
        repoUrl: "https://github.com/AyushiTaralkar/Field-to-record",
      },
      {
        title: "Healthcare Appointment & Follow-up Manager",
        badge: "Implemented Feature",
        badgeType: "impl",
        desc: "Backend patient management system featuring structured relational database schemas, automated scheduling logic, and role-based access.",
        stack: ["Python", "Flask", "SQL", "Relational DB"],
        repoUrl: "https://github.com/AyushiTaralkar/healthcare-appointment-followup-manager",
      },
      {
        title: "Composio App Research Agent",
        badge: "Implemented Feature",
        badgeType: "impl",
        desc: "Modular agent architecture orchestrating multi-step API tool use, token lifecycle management, and schema validation.",
        stack: ["Python", "Composio", "REST APIs", "LangChain"],
        repoUrl: "https://github.com/AyushiTaralkar/composio-app-research-agent",
      },
      {
        title: "Personal Portfolio (Next.js & Three.js)",
        badge: "Implemented Feature",
        badgeType: "impl",
        desc: "Production-ready portfolio web app built with Next.js App Router, React Three Fiber 3D simulations, Framer Motion, and Tailwind CSS.",
        stack: ["Next.js", "React 18", "TypeScript", "Three.js", "Tailwind"],
        repoUrl: "https://github.com/AyushiTaralkar/my_Portfolio",
      },
    ],
  },
  {
    id: "experiments",
    n: "06",
    label: "Experiments",
    sub: "Prototypes, debugging, learning",
    icon: FlaskConical,
    iconBg: "#ede9fe",
    iconColor: "#6366f1",
    color: "#818cf8",
    heading: "Follow the interesting question.",
    desc: "Rapid prototyping, hypothesis testing, and getting comfortable being a beginner — exploring novel intersections of computer vision, NLP, and healthcare.",
    fullLink: "https://github.com/AyushiTaralkar?tab=repositories",
    hub: { x: 63, y: 69 },
    labelPos: { x: 70, y: 86 },
    arrowPath: "M 415,370 Q 390,350 365,315",
    arrowMarkerId: "arrow-exp",
    projects: [
      {
        title: "Real-Time Mood Detector",
        badge: "Research Prototype",
        badgeType: "proto",
        desc: "Edge computer vision experiments evaluating CNN feature extractors under varying ambient lighting and camera angles.",
        stack: ["OpenCV", "Python", "DeepFace", "Real-time Video"],
        repoUrl: "https://github.com/AyushiTaralkar/Mood-Detector",
      },
      {
        title: "SignTales Accessibility Prototype",
        badge: "Research Prototype",
        badgeType: "proto",
        desc: "Experimental NLP-to-gesture mapping pipeline exploring accessibility tools for cross-modal educational communication.",
        stack: ["Python", "NLP", "Computer Vision", "Streamlit"],
        repoUrl: "https://github.com/AyushiTaralkar/AyushiTaralkar-Sign-Language-model",
      },
      {
        title: "Behavioral Diabetes Prediction",
        badge: "Research Prototype",
        badgeType: "proto",
        desc: "Hypothesis exploration testing whether combining emotional and mood indicators with clinical data improves early risk detection.",
        stack: ["Scikit-Learn", "Python", "Predictive Modeling", "Pandas"],
        repoUrl: "https://github.com/AyushiTaralkar/Behavioral-Diabetes-Prediction",
      },
      {
        title: "Weather Agent Workflow",
        badge: "Research Prototype",
        badgeType: "proto",
        desc: "Experimental tool-calling agent querying dynamic meteorological endpoints and generating automated natural language forecasts.",
        stack: ["Python", "Agentic Tool Calling", "APIs"],
        repoUrl: "https://github.com/AyushiTaralkar/Weather-Agent",
      },
    ],
  },
];

export default function InteractiveBrainSection() {
  const [activeId, setActiveId] = useState("ai");
  const [view3D, setView3D] = useState(false);

  const activeIndex = skillsData.findIndex((s) => s.id === activeId);
  const activeSkill = skillsData[activeIndex >= 0 ? activeIndex : 0];

  const handleKeyDown = (e: React.KeyboardEvent, id: string) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      setActiveId(id);
    } else if (e.key === "ArrowDown" || e.key === "ArrowRight") {
      e.preventDefault();
      const nextIdx = (activeIndex + 1) % skillsData.length;
      setActiveId(skillsData[nextIdx].id);
    } else if (e.key === "ArrowUp" || e.key === "ArrowLeft") {
      e.preventDefault();
      const prevIdx = (activeIndex - 1 + skillsData.length) % skillsData.length;
      setActiveId(skillsData[prevIdx].id);
    }
  };

  return (
    <section id="skills" className="brain-section-container" aria-label="Interactive Mind and Skill Map">
      <div className="brain-section-inner">
        {/* Header matching visual identity */}
        <div className="brain-section-header">
          <div className="brain-header-titles">
            <h2 className="brain-main-title">How My Mind Builds Products</h2>
            <p className="brain-main-subtitle">
              A mix of logic, creativity and data — powered by real repositories and verified work.
            </p>
          </div>

          <div className="brain-explore-hint">
            <span>Click or use arrows to explore →</span>
            <svg
              className="doodle-arrow"
              width="38"
              height="40"
              viewBox="0 0 45 48"
              fill="none"
              aria-hidden="true"
            >
              <path
                d="M 38 6 C 30 14, 18 20, 22 34 C 23 38, 20 42, 14 44 M 14 44 L 20 43 M 14 44 L 17 38"
                stroke="#818cf8"
                strokeWidth="2.2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
        </div>

        {/* 3-Column Interactive Layout */}
        <div className="brain-grid-layout">
          {/* Column 1: Left Navigation Pills (Accessible tablist) */}
          <div className="brain-nav-column" role="tablist" aria-label="Product building disciplines">
            {skillsData.map((item) => {
              const IconComp = item.icon;
              const isActive = item.id === activeId;
              return (
                <button
                  key={item.id}
                  id={`tab-${item.id}`}
                  role="tab"
                  aria-selected={isActive}
                  aria-controls={`panel-${item.id}`}
                  tabIndex={isActive ? 0 : -1}
                  onClick={() => setActiveId(item.id)}
                  onKeyDown={(e) => handleKeyDown(e, item.id)}
                  className={`skill-pill-btn ${isActive ? "active" : ""}`}
                >
                  <div
                    className="skill-pill-icon"
                    style={{
                      backgroundColor: item.iconBg,
                      color: item.iconColor,
                    }}
                  >
                    <IconComp size={20} strokeWidth={2.2} />
                  </div>
                  <div className="skill-pill-text">
                    <div className="skill-pill-title-row">
                      <span className="skill-pill-num">{item.n}</span>
                      <strong className="skill-pill-label">{item.label}</strong>
                    </div>
                    <span className="skill-pill-sub">{item.sub}</span>
                  </div>
                </button>
              );
            })}
          </div>

          {/* Column 2: Center Interactive Crystalline Brain */}
          <div className="brain-center-stage">
            {view3D ? (
              <div className="brain-3d-wrapper">
                <BrainScene3D activeSkill={activeId} />
              </div>
            ) : (
              <div className="brain-visual-wrapper">
                {/* Background ambient radial aura */}
                <div className="brain-back-aura" />

                {/* Crystalline Glass Brain Image */}
                <div className="brain-img-holder">
                  <Image
                    src="/crystalline-brain.jpg"
                    alt="Crystalline faceted glass human brain with luminous fiber core and orbital rings"
                    fill
                    sizes="(max-width: 768px) 100vw, 560px"
                    priority
                    className="crystalline-brain-img"
                  />
                </div>

                {/* Interactive SVG Leader Lines & Curved Arrows */}
                <svg
                  className="brain-overlay-svg"
                  viewBox="0 0 580 430"
                  fill="none"
                  preserveAspectRatio="xMidYMid meet"
                  aria-hidden="true"
                >
                  <defs>
                    {skillsData.map((s) => (
                      <marker
                        key={s.id}
                        id={s.arrowMarkerId}
                        viewBox="0 0 10 10"
                        refX="6"
                        refY="5"
                        markerWidth="6"
                        markerHeight="6"
                        orient="auto-start-reverse"
                      >
                        <path
                          d="M 1 1 L 9 5 L 1 9 z"
                          fill={activeId === s.id ? s.color : "rgba(226, 232, 240, 0.45)"}
                        />
                      </marker>
                    ))}
                  </defs>

                  {skillsData.map((s) => {
                    const isActive = s.id === activeId;
                    return (
                      <g key={s.id} onClick={() => setActiveId(s.id)} className="svg-arrow-group">
                        <path
                          d={s.arrowPath}
                          stroke={isActive ? s.color : "rgba(226, 232, 240, 0.45)"}
                          strokeWidth={isActive ? "2.4" : "1.4"}
                          strokeDasharray={isActive ? "none" : "3 3"}
                          markerEnd={`url(#${s.arrowMarkerId})`}
                          className={isActive ? "arrow-active" : "arrow-idle"}
                        />
                      </g>
                    );
                  })}
                </svg>

                {/* Interactive Clickable Labels Around the Brain */}
                {skillsData.map((s) => {
                  const isActive = s.id === activeId;
                  return (
                    <button
                      key={s.id}
                      onClick={() => setActiveId(s.id)}
                      className={`brain-orbit-label ${isActive ? "active" : ""}`}
                      style={{
                        left: `${s.labelPos.x}%`,
                        top: `${s.labelPos.y}%`,
                        color: isActive ? s.color : "#cbd5e1",
                      }}
                      aria-label={`Select category: ${s.label}`}
                    >
                      <span className="orbit-label-text">{s.label}</span>
                      {isActive && (
                        <motion.span
                          layoutId="activeUnderline"
                          className="orbit-label-underline"
                          style={{ backgroundColor: s.color }}
                        />
                      )}
                    </button>
                  );
                })}

                {/* Glowing Neural Hub Dots on the Brain */}
                {skillsData.map((s) => {
                  const isActive = s.id === activeId;
                  return (
                    <div
                      key={s.id}
                      onClick={() => setActiveId(s.id)}
                      className={`brain-hub-dot ${isActive ? "active" : ""}`}
                      style={{
                        left: `${s.hub.x}%`,
                        top: `${s.hub.y}%`,
                        backgroundColor: s.color,
                        boxShadow: isActive
                          ? `0 0 16px 4px ${s.color}, 0 0 30px ${s.color}`
                          : `0 0 8px ${s.color}`,
                      }}
                      role="button"
                      tabIndex={0}
                      aria-label={`Activate ${s.label} node`}
                      onKeyDown={(e) => {
                        if (e.key === "Enter" || e.key === " ") {
                          setActiveId(s.id);
                        }
                      }}
                    >
                      {isActive && <span className="hub-ping" style={{ borderColor: s.color }} />}
                    </div>
                  );
                })}
              </div>
            )}

            {/* View Switcher Toggle */}
            <div className="view-toggle-wrap" role="group" aria-label="Brain visualization mode">
              <button
                type="button"
                className={`view-mode-pill ${!view3D ? "selected" : ""}`}
                onClick={() => setView3D(false)}
                aria-pressed={!view3D}
              >
                ✦ Crystalline View
              </button>
              <button
                type="button"
                className={`view-mode-pill ${view3D ? "selected" : ""}`}
                onClick={() => setView3D(true)}
                aria-pressed={view3D}
              >
                ⟲ 3D Wireframe
              </button>
            </div>
          </div>

          {/* Column 3: Brushed Titanium Detail Card with Real Repositories */}
          <div className="brain-titanium-column">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeSkill.id}
                id={`panel-${activeSkill.id}`}
                role="tabpanel"
                aria-labelledby={`tab-${activeSkill.id}`}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -12 }}
                transition={{ duration: 0.22 }}
                className="titanium-card"
              >
                <div className="titanium-sheen" />
                <div className="titanium-content">
                  {/* Category Header */}
                  <div className="titanium-header-row">
                    <div>
                      <span className="titanium-category-pill" style={{ borderColor: activeSkill.color, color: activeSkill.color }}>
                        {activeSkill.n} · {activeSkill.label.toUpperCase()}
                      </span>
                      <h3 className="titanium-heading">{activeSkill.heading}</h3>
                    </div>
                  </div>
                  <p className="titanium-desc">{activeSkill.desc}</p>

                  {/* Projects List with Verified Badges & Repos */}
                  <div className="titanium-proof-block">
                    <div className="titanium-proof-header">
                      <span className="titanium-proof-title">RELEVANT PROJECTS & REPOSITORIES</span>
                      <span className="titanium-project-count">{activeSkill.projects.length} artifacts</span>
                    </div>

                    <div className="titanium-projects-scroll">
                      {activeSkill.projects.map((proj, idx) => (
                        <div key={idx} className="project-item-card">
                          <div className="project-item-top">
                            <h4 className="project-item-title">{proj.title}</h4>
                            <span className={`status-badge ${proj.badgeType}`}>
                              {proj.badge}
                            </span>
                          </div>

                          <p className="project-item-desc">{proj.desc}</p>

                          <div className="project-item-bottom">
                            <div className="project-stack-tags">
                              {proj.stack.map((t) => (
                                <span key={t} className="stack-tag">
                                  {t}
                                </span>
                              ))}
                            </div>

                            <div className="project-links-row">
                              <a
                                href={proj.repoUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="project-link-btn"
                                aria-label={`View ${proj.title} repository on GitHub`}
                              >
                                <span>{proj.isFigma ? "View Figma" : "View Project"}</span>
                                <ExternalLink size={12} />
                              </a>

                              {proj.caseStudyUrl && (
                                <a
                                  href={proj.caseStudyUrl}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="project-link-sub"
                                  aria-label={`View ${proj.title} Figma Design`}
                                >
                                  <span>Figma ↗</span>
                                </a>
                              )}
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Card Footer Link */}
                  {activeSkill.fullLink && (
                    <a
                      href={activeSkill.fullLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="titanium-cta-btn"
                    >
                      <span>Explore all on GitHub</span>
                      <ArrowRight size={15} />
                    </a>
                  )}
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
