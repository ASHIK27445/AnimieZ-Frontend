import { useState } from "react";
import "./NoirLanDiningPage.css";

type Feature = {
  number: string;
  title: string;
  description: string;
  label: string;
};

const features: Feature[] = [
  { number: "01", title: "Order management", description: "Manage and monitor restaurant orders from one clear operational view, so the team can stay focused on the work in front of them.", label: "See order flow" },
  { number: "02", title: "Inventory management", description: "Track stock levels, usage, availability, and inventory movement without relying on disconnected spreadsheets.", label: "Explore inventory" },
  { number: "03", title: "Supplier management", description: "Keep supplier information and supplier-related operations organized in the same system as the rest of the business.", label: "Manage suppliers" },
  { number: "04", title: "Purchase orders", description: "Create, track, and manage purchase orders with a dependable record of what the restaurant needs to buy.", label: "Track purchasing" },
  { number: "05", title: "Employee management", description: "Manage restaurant employees, roles, and permissions from one central place built for managers.", label: "Organize your team" },
  { number: "06", title: "Reports and analytics", description: "Monitor operational information and use the data available in Noir-lan-Dining to make better decisions.", label: "View insights" },
];

const audiences = [
  ["Independent restaurants", "Bring the daily details of one restaurant into a system that is easy to understand and maintain."],
  ["Cafes", "Keep inventory, purchasing, suppliers, and people organized while the team keeps service moving."],
  ["Fast-food restaurants", "Create a repeatable operational rhythm with visibility into the work behind every order."],
  ["Growing restaurant businesses", "Replace scattered processes with a central source of operational information as the business grows."],
];

const faqs = [
  ["What is Noir-lan-Dining?", "Noir-lan-Dining is a restaurant management platform that brings orders, inventory, suppliers, purchasing, employees, and operational reports into one centralized system."],
  ["Who can use Noir-lan-Dining?", "It is designed for restaurant owners, managers, and restaurant businesses, including independent restaurants, cafes, fast-food restaurants, and growing teams."],
  ["What restaurant operations can be managed?", "The platform covers order management, inventory management, supplier management, purchase orders, employee management, and reports and analytics."],
  ["Can I manage inventory and suppliers?", "Yes. Noir-lan-Dining supports inventory monitoring and supplier information management in the same operational workspace."],
  ["Can I create and track purchase orders?", "Yes. Purchase orders can be created, tracked, and managed through the platform."],
  ["Can I manage employees and permissions?", "Yes. Employee records, roles, and permissions are part of the management experience."],
  ["Does Noir-lan-Dining provide reports and analytics?", "Yes. Reports and analytics help managers monitor the operational information available in the platform."],
  ["Is there a free trial?", "Trial availability has not been finalized yet. Contact the Noir-lan-Dining team for the latest access options."],
  ["How can I get started?", "Use the Get Started button to register when the account flow is connected, or contact the team to begin the setup conversation."],
];

function Arrow() {
  return <span aria-hidden="true" className="arrow">-&gt;</span>;
}

function ProductMockup() {
  return (
    <div className="product-shell" aria-label="Noir-lan-Dining product preview">
      <div className="mockup-topbar"><span className="window-dots"><i /><i /><i /></span><span>noir-lan-dining.app</span><span className="topbar-status">Workspace / Operations</span></div>
      <div className="mockup-body">
        <aside className="mockup-sidebar"><div className="mock-logo"><b>N</b><span>noir-lan<br />dining</span></div><small>MAIN MENU</small><strong className="active-nav">Overview</strong><span>Orders</span><span>Inventory</span><span>Suppliers</span><span>Purchase orders</span><span>Employees</span><div className="sidebar-bottom"><small>WORKSPACE</small><span>Settings</span><span>Help center</span></div></aside>
        <div className="mockup-content"><div className="mock-header"><div><span className="eyebrow">Wednesday, August 26</span><h3>Good morning, team.</h3></div><button className="avatar">NL</button></div><div className="mock-banner"><div><span className="eyebrow">Operations at a glance</span><h4>One view for the work that keeps your restaurant moving.</h4></div><span className="banner-mark">N</span></div><div className="mock-grid"><div className="mock-card large"><div className="card-label">TODAY'S WORKFLOW <span>...</span></div><div className="workflow-row"><span className="workflow-icon orange">O</span><div><b>Orders</b><small>Keep today&apos;s activity visible</small></div><em>Open <Arrow /></em></div><div className="workflow-row"><span className="workflow-icon yellow">I</span><div><b>Inventory</b><small>Review stock and availability</small></div><em>Review <Arrow /></em></div><div className="workflow-row"><span className="workflow-icon blue">P</span><div><b>Purchasing</b><small>Stay ahead of what is needed</small></div><em>View <Arrow /></em></div></div><div className="mock-card"><div className="card-label">TEAM <span>...</span></div><div className="team-number">12</div><small>Employees in your workspace</small><div className="avatars"><i>AK</i><i>RM</i><i>JT</i><i>+9</i></div></div><div className="mock-card"><div className="card-label">SUPPLIERS <span>...</span></div><div className="supplier-lines"><span /><span /><span /><span /></div><small>Information kept in one place</small></div></div></div>
      </div>
    </div>
  );
}

function CtaButton({ children, secondary = false }: { children: string; secondary?: boolean }) {
  return <a className={secondary ? "button button-secondary" : "button"} href={children === "Log in" ? "/login" : "#contact"}>{children}<Arrow /></a>;
}

export default function NoirLanDiningPage() {
  const [openFaq, setOpenFaq] = useState(0);

  return (
    <main className="noir-page">
      <nav className="site-nav"><a className="brand" href="#top"><span className="brand-mark">N</span><span>noir-lan<br /><b>dining</b></span></a><div className="nav-links"><a href="#features">Features</a><a href="#solutions">Solutions</a><a href="#how-it-works">How it works</a><a href="#pricing">Pricing</a></div><div className="nav-actions"><a href="/login">Log in</a><CtaButton>Get started</CtaButton></div><a className="mobile-start" href="#contact">Start <Arrow /></a></nav>

      <section className="hero" id="top"><div className="hero-copy"><p className="kicker">The operating system for modern restaurants <span>●</span></p><h1>Run the restaurant.<br /><i>Not the paperwork.</i></h1><p className="hero-description">Noir-lan-Dining brings orders, inventory, suppliers, purchasing, employees, and analytics into one calm, centralized workspace for your whole operation.</p><div className="hero-actions"><CtaButton>Get started</CtaButton><a className="text-link" href="#features">Explore features <Arrow /></a></div><div className="trusted-note"><span className="mini-avatars"><i>R</i><i>C</i><i>F</i></span><span>Built for the people<br />behind every service.</span></div></div><div className="hero-visual"><div className="scribble">Everything<br /><i>in one place.</i></div><ProductMockup /></div></section>

      <section className="intro section-band"><div className="section-label">01 / A clearer way to operate</div><div className="intro-content"><h2>Your restaurant is one business.<br /><i>Your tools should be too.</i></h2><div><p>Noir-lan-Dining replaces a collection of disconnected processes with one centralized system. Owners and managers get the operational context they need, without chasing it across different tools.</p><a className="text-link" href="#how-it-works">See how it works <Arrow /></a></div></div><div className="capability-strip"><span>Orders</span><b>+</b><span>Inventory</span><b>+</b><span>Purchasing</span><b>+</b><span>People</span><b>+</b><span>Insight</span></div></section>

      <section className="features section-band" id="features"><div className="section-label">02 / Everything that matters</div><div className="section-heading"><h2>Less switching.<br /><i>More running.</i></h2><p>The everyday work of a restaurant, organized around the way your team actually operates.</p></div><div className="feature-grid">{features.map((feature) => <article className="feature-card" key={feature.number}><span className="feature-number">{feature.number}</span><div className="feature-icon">{feature.number === "01" ? "↗" : feature.number === "02" ? "◒" : feature.number === "03" ? "⌁" : feature.number === "04" ? "□" : feature.number === "05" ? "∴" : "⌁"}</div><h3>{feature.title}</h3><p>{feature.description}</p><a className="card-link" href="#contact">{feature.label} <Arrow /></a></article>)}</div></section>

      <section className="connection section-band" id="solutions"><div className="section-label">03 / One platform</div><div className="connection-layout"><div><h2>Every part of the operation<br /><i>speaks to the next.</i></h2><p>When the details live together, managers can move from what happened to what needs to happen next, without losing the thread.</p><CtaButton>Get started</CtaButton></div><div className="flow-map"><div className="flow-line" />{["Orders", "Inventory", "Purchasing", "Suppliers", "Employees", "Reports & analytics"].map((item, index) => <div className="flow-step" key={item}><span>0{index + 1}</span><b>{item}</b>{index < 5 && <Arrow />}</div>)}</div></div></section>

      <section className="showcase section-band"><div className="section-label">04 / The workspace</div><div className="showcase-heading"><h2>A steady view of<br /><i>what is moving.</i></h2><p>Bring the right operational information into one place, so the next decision is easier to make.</p></div><ProductMockup /><div className="showcase-footer"><span>One workspace. The whole operation.</span><a className="text-link" href="#contact">Explore the platform <Arrow /></a></div></section>

      <section className="how section-band" id="how-it-works"><div className="section-label">05 / How it works</div><div className="section-heading"><h2>Start where you are.<br /><i>Build from there.</i></h2><p>A straightforward path from setup to a more organized daily operation.</p></div><div className="steps">{[["01", "Create an account", "Set up your restaurant and create the workspace your team will use."], ["02", "Configure your operation", "Add the restaurant information, inventory, suppliers, employees, and other required data."], ["03", "Manage the daily work", "Use Noir-lan-Dining to manage the operational details that keep the day moving."], ["04", "Monitor and learn", "Review the operational information available through reports and analytics."]].map(([number, title, description]) => <article className="step" key={number}><span>{number}</span><div><h3>{title}</h3><p>{description}</p></div><Arrow /></article>)}</div></section>

      <section className="benefits section-band"><div className="section-label">06 / A better rhythm</div><div className="benefits-layout"><h2>Make room for the<br /><i>work that matters.</i></h2><div className="benefit-list">{["Save time", "Reduce manual work", "Improve inventory visibility", "Manage purchasing efficiently", "Keep operations organized", "Make better decisions with data"].map((benefit, index) => <div key={benefit}><span>0{index + 1}</span><b>{benefit}</b><Arrow /></div>)}</div></div></section>

      <section className="audience section-band"><div className="section-label">07 / Who it is for</div><div className="audience-heading"><h2>Made for the people<br /><i>behind the counter.</i></h2><p>From a focused independent restaurant to a growing business, keep the operation legible as it changes.</p></div><div className="audience-grid">{audiences.map(([title, description], index) => <article key={title}><span>0{index + 1}</span><h3>{title}</h3><p>{description}</p></article>)}</div></section>

      <section className="use-case section-band"><div className="section-label">08 / A day in the operation</div><div className="use-case-layout"><div><h2>From order<br /><i>to next move.</i></h2><p>A practical workflow, held together in one place.</p></div><div className="use-case-flow">{["An order is received", "Operations are updated", "Inventory is monitored", "Low stock is identified", "Purchase orders are managed", "Supplier information stays current", "Managers review what matters"].map((item, index) => <div key={item}><span>0{index + 1}</span><b>{item}</b>{index < 6 && <Arrow />}</div>)}</div></div></section>

      <section className="pricing section-band" id="pricing"><div className="section-label">09 / Pricing</div><div className="pricing-copy"><h2>A plan that can<br /><i>grow with you.</i></h2><p>Pricing is being finalized. Tell us about your operation and we will help you find the right starting point.</p><CtaButton>Contact us</CtaButton></div><div className="pricing-card"><div><span className="eyebrow">Noir-lan-Dining</span><h3>Let&apos;s talk about your operation.</h3><p>Get a clear introduction to the platform and the account options available for your team.</p></div><a href="mailto:hello@noirlandining.com" className="button button-dark">Contact the team <Arrow /></a></div></section>

      <section className="testimonials section-band"><div className="section-label">10 / In their words</div><div className="empty-testimonial"><span className="quote-mark">“</span><h2>Real stories from restaurant teams<br /><i>will live here.</i></h2><p>Customer testimonials will be added as Noir-lan-Dining teams share their experience.</p></div></section>

      <section className="faq section-band"><div className="section-label">11 / Questions, answered</div><div className="faq-layout"><h2>Good to<br /><i>know.</i></h2><div className="faq-list">{faqs.map(([question, answer], index) => <div className={`faq-item ${openFaq === index ? "open" : ""}`} key={question}><button onClick={() => setOpenFaq(openFaq === index ? -1 : index)} aria-expanded={openFaq === index}><span>{question}</span><b>{openFaq === index ? "-" : "+"}</b></button>{openFaq === index && <p>{answer}</p>}</div>)}</div></div></section>

      <section className="final-cta" id="contact"><div className="final-blob">N</div><p className="kicker">A clearer way to run your restaurant <span>●</span></p><h2>Let&apos;s make the<br /><i>work feel lighter.</i></h2><p>Bring your operation into one place and take the next step with Noir-lan-Dining.</p><CtaButton>Get started</CtaButton></section>

      <footer className="site-footer"><div className="footer-brand"><a className="brand" href="#top"><span className="brand-mark">N</span><span>noir-lan<br /><b>dining</b></span></a><p>The operating system for<br />modern restaurants.</p></div><div className="footer-links"><div><b>Product</b><a href="#features">Features</a><a href="#solutions">Solutions</a><a href="#how-it-works">How it works</a><a href="#pricing">Pricing</a></div><div><b>Company</b><a href="#contact">About</a><a href="mailto:hello@noirlandining.com">Contact</a></div><div><b>Resources</b><a href="mailto:hello@noirlandining.com">Help center</a><a href="mailto:hello@noirlandining.com">Documentation</a></div><div><b>Legal</b><a href="#contact">Privacy policy</a><a href="#contact">Terms of service</a></div></div><div className="footer-bottom"><span>© 2026 Noir-lan-Dining. All rights reserved.</span><span>Built for better days in the restaurant.</span></div></footer>
    </main>
  );
}
