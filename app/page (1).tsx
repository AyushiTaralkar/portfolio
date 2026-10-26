"use client";

import { useState } from "react";
import dynamic from "next/dynamic";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowDownRight, ArrowRight, ArrowUpRight, Moon, Sun, Sparkles, Activity, Palette, Compass, ChartNoAxesCombined, Code2, FlaskConical, Heart, Plane, Waves, Music2, Brush, Utensils, Stethoscope, Brain, Workflow, Database, Menu, X } from "lucide-react";

const BrainScene = dynamic(() => import("@/components/BrainScene"), { ssr: false, loading: () => <div className="brain-fallback">building connections<span>· · ·</span></div> });

const skills = [
  { id: "ai", n: "01", label: "AI & ML", icon: Brain, title: "Make intelligence useful.", copy: "I like taking AI beyond a model call — retrieval, context, tool use, evaluation, and the product decisions around it.", proof: ["Composio Research Agent", "Field-to-Record"], cta: "Explore AI & ML" },
  { id: "ux", n: "02", label: "UI / UX", icon: Palette, title: "Make complex feel clear.", copy: "I care about the moment a technical system becomes something a person can understand, trust, and actually use.", proof: ["Artha Sage", "Portfolio experiments"], cta: "Explore UI / UX" },
  { id: "product", n: "03", label: "Product", icon: Compass, title: "Start with the real problem.", copy: "I work backwards from friction: who has it, what they need, and what the smallest useful solution could look like.", proof: ["Artha Sage", "Field-to-Record"], cta: "Explore product thinking" },
  { id: "analytics", n: "04", label: "Analytics", icon: ChartNoAxesCombined, title: "Turn information into direction.", copy: "From structured data to useful summaries, I enjoy finding the signal that helps someone make a better next move.", proof: ["Artha Sage", "SQL & data workflows"], cta: "Explore analytics" },
  { id: "engineering", n: "05", label: "Engineering", icon: Code2, title: "Build the thing behind the idea.", copy: "Python, APIs, data stores, retrieval, and practical architecture — I learn by building, breaking, and fixing.", proof: ["CalQuity", "PayRecover"], cta: "Explore engineering" },
  { id: "experiments", n: "06", label: "Experiments", icon: FlaskConical, title: "Follow the interesting question.", copy: "I prototype, test assumptions, and get comfortable being a beginner when an idea is worth exploring.", proof: ["Computer vision", "GenAI Club builds"], cta: "See experiments" }
];

const projects = [
  { n: "01", name: "Artha Sage", type: "PERSONAL FINANCE COPILOT", desc: "A calmer way for students to understand where their pocket money goes — and ask better questions about it.", tags: ["Product", "Analytics", "UI/UX"], accent: "sage", mark: "₹", visual: "dashboard" },
  { n: "02", name: "Composio Research Agent", type: "TOOL-USING AI AGENT", desc: "A research workflow that connects tools, gathers evidence, and turns scattered information into a useful report.", tags: ["AI/ML", "Systems", "UX"], accent: "agent", mark: "↗", visual: "agent" },
  { n: "03", name: "Field-to-Record", type: "VOICE → STRUCTURED CLINICAL NOTES", desc: "A human-reviewed workflow that turns responder dictation into structured records and a traceable audit trail.", tags: ["NLP", "Workflow", "AI"], accent: "clinical", mark: "✳", visual: "clinical" }
];

function NeuralGraphic() {
  const nodes = Array.from({ length: 22 }, (_, i) => ({ x: 18 + ((i * 37) % 65), y: 15 + ((i * 29) % 70) }));
  return <svg viewBox="0 0 300 190" className="neural-graphic" aria-hidden="true">
    {nodes.map((a, i) => nodes.slice(i + 1).filter(b => Math.hypot(a.x-b.x, a.y-b.y) < 28).map((b, j) => <line key={`${i}-${j}`} x1={`${a.x}%`} y1={`${a.y}%`} x2={`${b.x}%`} y2={`${b.y}%`} />))}
    {nodes.map((p, i) => <circle key={i} cx={`${p.x}%`} cy={`${p.y}%`} r={i % 5 === 0 ? 3 : 1.8} className={i % 5 === 0 ? "hot-node" : ""} />)}
  </svg>;
}

export default function Home() {
  const [activeSkill, setActiveSkill] = useState("ai");
  const [dark, setDark] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const reduceMotion = useReducedMotion();
  const skill = skills.find(s => s.id === activeSkill) || skills[0];
  const SkillIcon = skill.icon;
  const fade = reduceMotion ? {} : { initial: { opacity: 0, y: 22 }, whileInView: { opacity: 1, y: 0 }, viewport: { once: true, amount: 0.16 }, transition: { duration: 0.65 } };

  return <main className={dark ? "site dark-site" : "site"}>
    <nav className="nav">
      <a href="#home" className="wordmark">Ayushi <span>:)</span></a>
      <div className={`nav-links ${menuOpen ? "nav-open" : ""}`}>
        {[["Home","#home"],["Projects","#projects"],["Skills","#skills"],["About","#about"],["Journal","#journal"]].map(([label,href]) => <a key={label} href={href} onClick={() => setMenuOpen(false)}>{label}</a>)}
      </div>
      <div className="nav-actions">
        <button className="icon-button theme-button" aria-label="Toggle color theme" onClick={() => setDark(!dark)}>{dark ? <Sun size={17}/> : <Moon size={17}/>}</button>
        <a className="nav-cta" href="mailto:hello@ayushitaralkar.dev">Let’s connect <ArrowUpRight size={15}/></a>
        <button className="icon-button menu-button" aria-label="Toggle navigation" onClick={() => setMenuOpen(!menuOpen)}>{menuOpen ? <X/> : <Menu/>}</button>
      </div>
    </nav>

    <section id="home" className="hero section-wrap">
      <div className="hero-copy">
        <div className="eyebrow"><span className="live-dot"/> VIT · COMPUTER SCIENCE · HEALTH INFORMATICS</div>
        <p className="hero-kicker">Curious mind. Builder hands.</p>
        <h1>I build <span className="underline-word">AI-powered</span> experiences that people <em>actually use.</em></h1>
        <p className="hero-sub">Developer, designer, and product thinker who loves turning complex problems into simple, meaningful solutions.</p>
        <div className="pills">{["AI / ML","UI / UX","Product","Analytics","Engineering"].map(t => <span key={t}>{t}</span>)}</div>
        <div className="hero-actions"><a className="button button-dark" href="#projects">Explore my work <ArrowRight size={17}/></a><a className="button button-outline" href="https://github.com/AyushiTaralkar" target="_blank" rel="noreferrer">View GitHub <ArrowUpRight size={16}/></a></div>
        <div className="hero-footnote"><span className="scribble">currently collecting problems worth solving ↗</span><span className="tiny-index">PORTFOLIO / 2026</span></div>
      </div>
      <div className="hero-art">
        <div className="art-grid"/>
        <div className="orbit orbit-one"/><div className="orbit orbit-two"/>
        <div className="profile-placeholder"><div className="profile-sun"/><div className="profile-initials">AT</div><span>YOUR PHOTO<br/>GOES HERE</span></div>
        <div className="float-chip chip-ai"><span className="chip-icon"><Sparkles size={17}/></span><div><b>Think</b><small>find the signal</small></div></div>
        <div className="float-chip chip-design"><span className="chip-icon pink"><Palette size={17}/></span><div><b>Design</b><small>make it human</small></div></div>
        <div className="float-chip chip-build"><span className="chip-icon yellow"><Code2 size={17}/></span><div><b>Build</b><small>make it real</small></div></div>
        <div className="float-chip chip-measure"><span className="chip-icon green"><Activity size={17}/></span><div><b>Measure</b><small>learn + improve</small></div></div>
        <div className="robot" aria-label="Decorative friendly robot"><div className="robot-antenna"/><div className="robot-face"><i/><i/></div><div className="robot-mouth"/><div className="robot-body"><span>✳</span></div><div className="robot-arm left"/><div className="robot-arm right"/></div>
        <div className="polaroid"><div className="polaroid-image"><Stethoscope size={24}/><ArrowRight size={16}/><Code2 size={24}/></div><span>medicine → computer science</span><small>the plot twist ✎</small></div>
        <div className="art-stamp">IDEAS<br/>IN MOTION</div>
      </div>
      <a className="scroll-cue" href="#skills"><span>SCROLL TO EXPLORE</span><ArrowDownRight size={16}/></a>
    </section>

    <section id="skills" className="skills-section">
      <div className="skills-inner">
        <div className="section-label light-label"><span>02 / THE WAY I THINK</span><span>AN INTERACTIVE MAP OF MY BRAIN</span></div>
        <div className="skills-heading"><h2>How my mind<br/>builds <em>products.</em></h2><p>Different disciplines. One curious brain.<br/>Pick a thread and see where it leads.</p></div>
        <div className="skills-layout">
          <div className="skill-menu">{skills.map(s => <button key={s.id} className={activeSkill === s.id ? "skill-tab selected" : "skill-tab"} onClick={() => setActiveSkill(s.id)}><span>{s.n}</span><s.icon size={17}/><b>{s.label}</b><ArrowUpRight size={14} className="tab-arrow"/></button>)}</div>
          <div className="brain-stage"><div className="brain-glow"/><BrainScene/><div className="brain-label label-top">CURIOSITY <span>↗</span></div><div className="brain-label label-bottom">CONNECTIONS, NOT SILOS</div><div className="orbit-caption">{skill.label.toUpperCase()}</div></div>
          <motion.div key={skill.id} className="skill-detail" initial={reduceMotion ? false : {opacity:0, x:12}} animate={{opacity:1,x:0}} transition={{duration:.28}}>
            <div className="detail-top"><span className="detail-number">{skill.n} / 06</span><span className="detail-icon"><SkillIcon size={18}/></span></div>
            <h3>{skill.title}</h3><p>{skill.copy}</p>
            <div className="proof-label">PROOF OF WORK</div>
            <div className="proof-links">{skill.proof.map(p => <a href="#projects" key={p}>{p}<ArrowUpRight size={14}/></a>)}</div>
            <a className="detail-cta" href="#projects">{skill.cta}<ArrowRight size={16}/></a>
          </motion.div>
        </div>
        <div className="skills-note">I don’t think in job titles. I think in problems, people, and possibilities. <span>✳</span></div>
      </div>
    </section>

    <section id="projects" className="projects-section section-wrap">
      <motion.div className="section-heading" {...fade}>
        <div><div className="section-label"><span>03 / SELECTED WORK</span><span>BUILT WITH INTENTION</span></div><h2>Real problems.<br/><em>Thoughtful solutions.</em></h2></div>
        <p>Not just demos. Small attempts at making something useful, with the messy thinking and systems work included.</p>
      </motion.div>
      <div className="project-grid">
        {projects.map((p, i) => <motion.article key={p.name} className={`project-card ${p.accent}`} {...fade} transition={{duration:.55, delay:i*.1}}>
          <div className="project-card-top"><span>{p.n} — {p.type}</span><a href={p.accent === "sage" ? "https://github.com/AyushiTaralkar" : "https://github.com/AyushiTaralkar"} target="_blank" rel="noreferrer" aria-label={`Open ${p.name} on GitHub`}><ArrowUpRight size={18}/></a></div>
          <div className={`project-visual ${p.visual}`}>
            {p.visual === "dashboard" && <><div className="dash-window"><div className="dash-top"><span/><span/><span/><small>artha / overview</small></div><div className="dash-body"><div className="dash-balance"><small>AVAILABLE BALANCE</small><b>₹ 4,280<span>.00</span></b><em>↑ 12% this month</em></div><div className="dash-bars">{[35,52,42,75,48,85,61].map((h,j)=><i key={j} style={{height:`${h}%`}}/>)}</div><div className="dash-row"><span>Food & coffee</span><b>₹ 1,240</b></div><div className="dash-row"><span>Travel</span><b>₹ 680</b></div></div></div><div className="hand-note">better money habits ↗</div><div className="coin coin-one">₹</div><div className="coin coin-two">✳</div></>}
            {p.visual === "agent" && <div className="agent-flow"><div className="flow-node source"><Sparkles size={18}/><b>Question</b><small>What matters?</small></div><div className="flow-line"/><div className="flow-tools"><span><Database size={14}/> Search</span><span><Workflow size={14}/> Connect</span><span><Activity size={14}/> Verify</span></div><div className="flow-line"/><div className="flow-node output"><span className="output-icon">↗</span><b>Research brief</b><small>Evidence → insight</small></div><div className="agent-orbit"/></div>}
            {p.visual === "clinical" && <div className="clinical-flow"><div className="clinical-step"><span className="step-icon">◉</span><b>Voice note</b><small>“Administered…”</small></div><ArrowRight/><div className="clinical-step"><span className="step-icon">⌘</span><b>Extract</b><small>Entities + times</small></div><ArrowRight/><div className="clinical-step"><span className="step-icon">✓</span><b>Human review</b><small>Confirm & correct</small></div><div className="audit-stamp">AUDIT TRAIL<br/><strong>SHA-256</strong></div></div>}
          </div>
          <div className="project-content"><div className="project-title-row"><h3>{p.name}</h3><span className="project-mark">{p.mark}</span></div><p>{p.desc}</p><div className="project-tags">{p.tags.map(t => <span key={t}>{t}</span>)}</div><div className="project-bottom"><span>CONCEPT → BUILD → ITERATE</span><a href="https://github.com/AyushiTaralkar" target="_blank" rel="noreferrer">Explore project <ArrowUpRight size={15}/></a></div></div>
        </motion.article>)}
      </div>
      <div className="projects-footer"><span>MORE IDEAS ARE IN THE WORKSHOP.</span><a href="https://github.com/AyushiTaralkar" target="_blank" rel="noreferrer">Browse all repositories <ArrowUpRight size={16}/></a></div>
    </section>

    <section id="about" className="about-section section-wrap">
      <div className="about-top"><div className="section-label"><span>04 / OUTSIDE THE CODE</span><span>THE REAL ME</span></div><h2>A slightly <em>unexpected</em><br/>route here.</h2></div>
      <div className="about-card">
        <div className="about-photo"><div className="photo-shape"><div className="photo-monogram">A.</div><span>ROOM TO BE<br/>MORE THAN ONE THING</span></div><span className="photo-caption">work in progress, always ✳</span></div>
        <div className="about-copy"><p className="about-quote">“I used to prepare for medicine. Now I build technology for people.”</p><p>I took a detour through pre-med before finding my way to computer science. It taught me that changing direction isn’t starting over — sometimes it’s how you find the questions you really want to work on.</p><p>These days, I’m studying Computer Science with a Health Informatics focus at VIT, building AI projects, asking too many “what if?” questions, and learning by making things real.</p><a className="text-link" href="mailto:hello@ayushitaralkar.dev">Have a good problem for me? <ArrowUpRight size={15}/></a></div>
      </div>
      <div className="interests"><span className="interests-label">THINGS THAT MAKE ME, ME</span><div className="interest-list">
        {[{icon:Stethoscope,label:"Medicine → CS"},{icon:Plane,label:"Travel"},{icon:Waves,label:"Swimming"},{icon:Music2,label:"Music"},{icon:Brush,label:"Art"},{icon:Utensils,label:"Good food"}].map(x=><div className="interest" key={x.label}><span><x.icon size={19}/></span><b>{x.label}</b></div>)}
      </div></div>
    </section>

    <section id="journal" className="journal-section section-wrap">
      <div className="journal-copy"><span className="section-label">05 / NOTES FROM THE PROCESS</span><h2>Still figuring<br/>things <em>out.</em></h2><p>Every project leaves me with better questions than I started with. That’s usually a good sign.</p></div>
      <div className="journal-note"><span className="note-pin">✳</span><small>FIELD NOTE Nº 001</small><h3>Build it. Get stuck.<br/>Figure it out.</h3><p>My favourite part of learning is the bit right after “this should work” — when it doesn’t, and I have to understand why.</p><span className="note-sign">— Ayushi, probably at 1 AM</span></div>
    </section>

    <footer className="footer section-wrap">
      <div className="footer-cta"><span className="section-label">HAVE SOMETHING INTERESTING?</span><h2>Let’s make<br/><em>something matter.</em></h2><a className="button button-dark" href="mailto:hello@ayushitaralkar.dev">Start a conversation <ArrowUpRight size={17}/></a></div>
      <div className="footer-bottom"><a href="#home" className="wordmark">Ayushi <span>:)</span></a><span>MADE WITH CURIOSITY, NOT A MASTER PLAN.</span><div><a href="https://github.com/AyushiTaralkar" target="_blank" rel="noreferrer">GitHub ↗</a><a href="https://www.linkedin.com/in/ayushi-taralkar-33416427a/" target="_blank" rel="noreferrer">LinkedIn ↗</a></div><span>© 2026</span></div>
    </footer>
  </main>;
}
