"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

export default function AppointmentsPage() {
  const router = useRouter();
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    date: "",
    time: "",
    service: "General Consultation",
    notes: "",
  });
  const [status, setStatus] = useState<{ ok: boolean; msg: string; appointmentId?: string } | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const timeSlots = [
    "09:00 AM", "09:30 AM", "10:00 AM", "10:30 AM", "11:00 AM", "11:30 AM",
    "12:00 PM", "02:00 PM", "02:30 PM", "03:00 PM", "03:30 PM", "04:00 PM",
    "04:30 PM", "05:00 PM", "05:30 PM"
  ];

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus(null);
    setIsLoading(true);
    try {
      const res = await fetch("/api/appointments", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      const data = await res.json();
      setStatus({
        ok: res.ok,
        msg: data.message || (res.ok ? "Booked!" : "Failed"),
        appointmentId: data.appointmentId,
      });
      if (res.ok) {
        setForm({ name: "", email: "", phone: "", date: "", time: "", service: "General Consultation", notes: "" });
        setTimeout(() => {
          router.push("/appointments");
        }, 1500);
      }
    } catch (err) {
      setStatus({ ok: false, msg: "Network error" });
    } finally {
      setIsLoading(false);
    }
  };

  const setVal = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  return (
    <div style={{ background: "var(--pearl)", minHeight: "100vh", paddingTop: "120px" }}>
      <section style={{ padding: "0 72px 80px" }}>
        <div style={{ maxWidth: "800px", margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: "64px" }} className="reveal is-visible">
            <span className="eyebrow" style={{ justifyContent: "center" }}>Schedule Visit</span>
            <h1 className="display-heading philosophy-heading">
              Book an <em style={{ color: "var(--copper)" }}>Appointment</em>
            </h1>
            <p className="philosophy-desc" style={{ maxWidth: "600px", margin: "0 auto" }}>
              Fill in your details and we’ll confirm shortly. Take the first step toward lasting skin health.
            </p>
          </div>

          <div className="reveal is-visible" style={{ background: "var(--white)", padding: "48px 40px", borderRadius: "4px", border: "1px solid var(--border)" }}>
            {status && (
              <div style={{ marginBottom: "24px", padding: "16px", background: status.ok ? "var(--sage-tint)" : "#ffebee", color: status.ok ? "var(--forest)" : "#c62828", borderRadius: "4px", fontSize: "14px" }}>
                <div style={{ fontWeight: 600, marginBottom: "4px" }}>{status.msg}</div>
                {status.appointmentId && (
                  <div style={{ fontSize: "13px" }}>
                    Your Appointment ID: <span style={{ fontFamily: "monospace", fontWeight: "bold" }}>{status.appointmentId}</span>
                  </div>
                )}
              </div>
            )}

            <form onSubmit={submit} style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "20px" }}>
                <div>
                  <label style={{ display: "block", color: "var(--ink)", fontSize: "13px", marginBottom: "8px", letterSpacing: "0.5px", fontWeight: 500 }}>FULL NAME *</label>
                  <input name="name" required value={form.name} onChange={setVal} style={{ width: "100%", padding: "14px 16px", background: "var(--pearl)", border: "1px solid var(--border)", color: "var(--ink)", borderRadius: "3px", fontSize: "15px", outline: "none" }} />
                </div>
                <div>
                  <label style={{ display: "block", color: "var(--ink)", fontSize: "13px", marginBottom: "8px", letterSpacing: "0.5px", fontWeight: 500 }}>EMAIL ADDRESS *</label>
                  <input type="email" name="email" required value={form.email} onChange={setVal} style={{ width: "100%", padding: "14px 16px", background: "var(--pearl)", border: "1px solid var(--border)", color: "var(--ink)", borderRadius: "3px", fontSize: "15px", outline: "none" }} />
                </div>
              </div>

              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: "20px" }}>
                <div>
                  <label style={{ display: "block", color: "var(--ink)", fontSize: "13px", marginBottom: "8px", letterSpacing: "0.5px", fontWeight: 500 }}>PHONE *</label>
                  <input name="phone" required value={form.phone} onChange={setVal} style={{ width: "100%", padding: "14px 16px", background: "var(--pearl)", border: "1px solid var(--border)", color: "var(--ink)", borderRadius: "3px", fontSize: "15px", outline: "none" }} placeholder="10-digit number" />
                </div>
                <div>
                  <label style={{ display: "block", color: "var(--ink)", fontSize: "13px", marginBottom: "8px", letterSpacing: "0.5px", fontWeight: 500 }}>DATE *</label>
                  <input type="date" name="date" required value={form.date} onChange={setVal} style={{ width: "100%", padding: "14px 16px", background: "var(--pearl)", border: "1px solid var(--border)", color: "var(--ink)", borderRadius: "3px", fontSize: "15px", outline: "none" }} />
                </div>
                <div>
                  <label style={{ display: "block", color: "var(--ink)", fontSize: "13px", marginBottom: "8px", letterSpacing: "0.5px", fontWeight: 500 }}>TIME SLOT *</label>
                  <select name="time" required value={form.time} onChange={setVal} style={{ width: "100%", padding: "14px 16px", background: "var(--pearl)", border: "1px solid var(--border)", color: "var(--ink)", borderRadius: "3px", fontSize: "15px", outline: "none" }}>
                    <option value="">Select a time</option>
                    {timeSlots.map((slot) => (
                      <option key={slot} value={slot}>{slot}</option>
                    ))}
                  </select>
                </div>
              </div>

              <div>
                <label style={{ display: "block", color: "var(--ink)", fontSize: "13px", marginBottom: "8px", letterSpacing: "0.5px", fontWeight: 500 }}>SERVICE *</label>
                <select name="service" value={form.service} onChange={setVal} style={{ width: "100%", padding: "14px 16px", background: "var(--pearl)", border: "1px solid var(--border)", color: "var(--ink)", borderRadius: "3px", fontSize: "15px", outline: "none" }}>
                  {["General Consultation", "Acne Treatment", "Anti-Aging", "Skin Screening", "Cosmetic Procedure"].map((s) => (
                    <option key={s} value={s}>{s}</option>
                  ))}
                </select>
              </div>

              <div>
                <label style={{ display: "block", color: "var(--ink)", fontSize: "13px", marginBottom: "8px", letterSpacing: "0.5px", fontWeight: 500 }}>NOTES</label>
                <textarea name="notes" value={form.notes} onChange={setVal} rows={5} style={{ width: "100%", padding: "14px 16px", background: "var(--pearl)", border: "1px solid var(--border)", color: "var(--ink)", borderRadius: "3px", fontSize: "15px", outline: "none", resize: "none" }} />
              </div>

              <button 
                type="submit" 
                disabled={isLoading}
                className="btn-copper"
                style={{ width: "100%", justifyContent: "center", marginTop: "12px", border: "none", cursor: isLoading ? "not-allowed" : "pointer", opacity: isLoading ? 0.7 : 1 }}
              >
                {isLoading ? "Processing..." : "Submit Request"}
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}
