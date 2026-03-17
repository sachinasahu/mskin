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

  const timeSlots = [
    "09:00 AM", "09:30 AM", "10:00 AM", "10:30 AM", "11:00 AM", "11:30 AM",
    "12:00 PM", "02:00 PM", "02:30 PM", "03:00 PM", "03:30 PM", "04:00 PM",
    "04:30 PM", "05:00 PM", "05:30 PM"
  ];

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus(null);
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
    }
  };

  const setVal = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  return (
    <div className="min-h-screen">
      <section className="bg-gradient-to-br from-emerald-50 to-teal-50 dark:from-zinc-950 dark:to-emerald-950 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-zinc-900 dark:text-white break-words leading-tight">
            Book an Appointment
          </h1>
          <p className="text-zinc-600 dark:text-zinc-400 mt-3 text-base sm:text-lg">
            Fill in your details and we’ll confirm shortly.
          </p>
        </div>
      </section>

      <section className="py-12 bg-white dark:bg-zinc-900">
        <div className="max-w-3xl mx-auto px-4">
          {status && (
            <div className={`mb-6 p-4 rounded-lg ${status.ok ? "bg-emerald-100 text-emerald-800 dark:bg-emerald-900/30 dark:text-emerald-400" : "bg-rose-100 text-rose-800 dark:bg-rose-900/30 dark:text-rose-400"}`}>
              <div className="font-semibold mb-1">{status.msg}</div>
              {status.appointmentId && (
                <div className="text-sm">
                  Your Appointment ID: <span className="font-mono font-bold">{status.appointmentId}</span>
                </div>
              )}
            </div>
          )}

          <form onSubmit={submit} className="grid grid-cols-1 gap-6">
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium mb-2">Full Name *</label>
                <input name="name" required value={form.name} onChange={setVal} className="w-full px-4 py-3 rounded-lg border bg-white dark:bg-zinc-900" />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Email *</label>
                <input type="email" name="email" required value={form.email} onChange={setVal} className="w-full px-4 py-3 rounded-lg border bg-white dark:bg-zinc-900" />
              </div>
            </div>

            <div className="grid md:grid-cols-3 gap-4">
              <div>
                <label className="block text-sm font-medium mb-2">Phone *</label>
                <input name="phone" required value={form.phone} onChange={setVal} className="w-full px-4 py-3 rounded-lg border bg-white dark:bg-zinc-900" placeholder="10-digit number" />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Date *</label>
                <input type="date" name="date" required value={form.date} onChange={setVal} className="w-full px-4 py-3 rounded-lg border bg-white dark:bg-zinc-900" />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Time Slot *</label>
                <select name="time" required value={form.time} onChange={setVal} className="w-full px-4 py-3 rounded-lg border bg-white dark:bg-zinc-900">
                  <option value="">Select a time</option>
                  {timeSlots.map((slot) => (
                    <option key={slot} value={slot}>{slot}</option>
                  ))}
                </select>
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">Service *</label>
              <select name="service" value={form.service} onChange={setVal} className="w-full px-4 py-3 rounded-lg border bg-white dark:bg-zinc-900">
                {["General Consultation", "Acne Treatment", "Anti-Aging", "Skin Screening", "Cosmetic Procedure"].map((s) => (
                  <option key={s} value={s}>{s}</option>
                ))}
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">Notes</label>
              <textarea name="notes" value={form.notes} onChange={setVal} rows={5} className="w-full px-4 py-3 rounded-lg border bg-white dark:bg-zinc-900" />
            </div>

            <button type="submit" className="px-8 py-4 bg-emerald-600 hover:bg-emerald-700 text-white rounded-lg font-semibold">
              Submit Request
            </button>
          </form>
        </div>
      </section>
    </div>
  );
}
