import { useState, useRef } from "react";

const fields = [
  { name: "name", label: "Name", type: "text", required: true },
  { name: "email", label: "Email", type: "email", required: true },
  { name: "gig", label: "Project type", type: "select", required: true,
    options: ["Web app", "E-commerce", "Mobile app", "Design / UX", "Automation / Bot", "Audit / Security", "Other"] },
  { name: "budget", label: "Budget", type: "select", required: false,
    options: ["< $1k", "$1k – $5k", "$5k – $15k", "$15k+", "Not sure yet"] },
  { name: "message", label: "Project details", type: "textarea", required: false, rows: 4 },
];

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", gig: "", budget: "", message: "" });
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    if (!form.name.trim() || !form.email.trim() || !form.gig) {
      setError("Please fill in name, email, and project type.");
      return;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email.trim())) {
      setError("Please enter a valid email address.");
      return;
    }

    setLoading(true);
    setError("");

    // Submit via Formspree (updates form action with your Formspree endpoint)
    const formEl = document.getElementById("contactForm");
    const formData = new FormData(formEl);
    formData.append("_subject", `Gig inquiry — ${form.gig} (${form.budget || "budget open"})`);
    formData.append("name", form.name);
    formData.append("email", form.email);
    formData.append("gig", form.gig);
    formData.append("budget", form.budget || "");
    formData.append("message", form.message);

    try {
      const res = await fetch(formEl.action, {
        method: "POST",
        body: formData,
        headers: { "Accept": "application/json" },
      });
      if (!res.ok) throw new Error("Submission failed");
    } catch {
      setError("Failed to send. Please email me directly at officialletterpro.com@gmail.com");
      setLoading(false);
      return;
    }
    setLoading(false);
    setSent(true);
  };

  const renderField = (f) => {
    const common = {
      name: f.name,
      value: form[f.name],
      onChange: handleChange,
      placeholder: f.name === "name" ? "Jane Doe" : f.name === "email" ? "jane@example.com" : undefined,
    };
    if (f.type === "textarea") {
      return <textarea {...common} rows={f.rows} placeholder="What are you building? Timeline, goals, anything useful…" />;
    }
    if (f.type === "select") {
      return (
        <select {...common} required={f.required}>
          <option value="" disabled>Select…</option>
          {f.options.map(o => <option key={o} value={o}>{o}</option>)}
        </select>
      );
    }
    return <input {...common} type={f.type} required={f.required} />;
  };

  return (
    <footer id="contact" className="contact section-pad">
      <p className="section-kicker">03 / CONTACT</p>
      <div className="contact-grid">
        <div className="contact-copy">
          <h2>Have an idea?<br/><em>Let’s build it.</em></h2>
          <p className="contact-lede">I take on a limited number of freelance projects each quarter. Tell me what you need, and I’ll get back to you within two business days.</p>
          <div className="contact-meta">
            <span>📍 Lagos, Nigeria</span>
            <span>⏱ Response within 48h</span>
            <span>🔗 <a href="https://github.com/Tobby1234566" target="_blank" rel="noreferrer">GitHub ↗</a></span>
          </div>
        </div>

        <form id="contactForm" action="https://formspree.io/f/YOUR_FORM_ID" onSubmit={handleSubmit} className="contact-form" noValidate>
          {sent ? (
            <div className="form-success">
              <span className="form-success__mark">✓</span>
              <h3>Message sent.</h3>
              <p>Thanks for reaching out! I’ll review your inquiry and get back to you within 48 hours.</p>
            </div>
          ) : (
            <>
              <div className="form-row">
                <label className="field"><span>Name *</span>{renderField(fields[0])}</label>
                <label className="field"><span>Email *</span>{renderField(fields[1])}</label>
              </div>
              <div className="form-row">
                <label className="field"><span>Project type *</span>{renderField(fields[2])}</label>
                <label className="field"><span>Budget</span>{renderField(fields[3])}</label>
              </div>
              <label className="field field-full"><span>Project details</span>{renderField(fields[4])}</label>
              {error && <p className="form-error">{error}</p>}
              <button type="submit" className="button primary light" disabled={loading}>
                {loading ? "Sending..." : "Send inquiry ↗"}
              </button>
            </>
          )}
        </form>
      </div>
      <div className="footer-row">
        <span>© 2026 Tobby</span>
        <a href="https://github.com/Tobby1234566" target="_blank" rel="noreferrer">GitHub ↗</a>
        <span>Lagos, Nigeria</span>
      </div>
    </footer>
  );
}