"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import {
  Calendar,
  ClipboardList,
  CircleCheck,
  CalendarX,
  ShieldCheck,
  Droplet,
  Sun,
  Zap,
  Sparkles,
  Scissors,
  User,
  ArrowRight,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";

export default function AppointmentsPage() {
  const router = useRouter();
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    date: "",
    time: "",
    service: "Acne Treatment",
    notes: "",
  });
  const [status, setStatus] = useState<{
    ok: boolean;
    msg: string;
    appointmentId?: string;
  } | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const timeSlots = [
    "09:00 AM",
    "09:30 AM",
    "10:00 AM",
    "10:30 AM",
    "11:00 AM",
    "11:30 AM",
    "12:00 PM",
    "02:00 PM",
    "02:30 PM",
    "03:00 PM",
    "03:30 PM",
    "04:00 PM",
    "04:30 PM",
    "05:00 PM",
    "05:30 PM",
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
        setForm({
          name: "",
          email: "",
          phone: "",
          date: "",
          time: "",
          service: "General Consultation",
          notes: "",
        });
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

  const setVal = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >,
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const setService = (service: string) => {
    setForm({ ...form, service });
  };

  return (
    <div className="bg-[oklch(0.99_0.005_95)] text-[#2C2C2C] w-full min-h-screen">
      <main className="container py-12">
        <div className="text-center flex flex-col items-center gap-2">
          <h1 className="font-serif font-bold text-[#2C2C2C] text-4xl leading-10">
            Book Your Appointment
          </h1>
          <div className="rounded-full bg-[#C9A84C] w-20 h-1" />
          <p className="text-[#2C2C2C]/60 text-base leading-6 mt-1">
            Choose your preferred date, time, and treatment
          </p>
        </div>

        <div className="grid md:grid-cols-5 mt-12 gap-8">
          <div className="md:col-span-3">
            <Card className="shadow-sm hover:shadow-md transition-shadow duration-300 rounded-2xl border-[#1A6B6B]/10 p-6 md:p-8 gap-8">
              <CardHeader className="p-0 gap-0 mb-8 hidden md:block">
                <div className="flex justify-between items-center">
                  <div className="flex flex-col items-center flex-1 gap-2">
                    <div className="size-10 shadow-md font-semibold rounded-full bg-[#1A6B6B] text-white text-sm leading-5 flex justify-center items-center">
                      1
                    </div>
                    <span className="font-semibold text-[#1A6B6B] text-xs leading-4 text-center">
                      Select Treatment
                    </span>
                  </div>
                  <div className="bg-[#1A6B6B] mb-6 flex-1 h-0.5" />
                  <div className="flex flex-col items-center flex-1 gap-2">
                    <div className="size-10 shadow-md font-semibold rounded-full bg-[#1A6B6B] text-white text-sm leading-5 flex justify-center items-center">
                      2
                    </div>
                    <span className="font-semibold text-[#1A6B6B] text-xs leading-4 text-center">
                      Choose Date & Time
                    </span>
                  </div>
                  <div className="bg-[#1A6B6B] mb-6 flex-1 h-0.5" />
                  <div className="flex flex-col items-center flex-1 gap-2">
                    <div className="size-10 shadow-md font-semibold rounded-full bg-[#1A6B6B] text-white text-sm leading-5 flex justify-center items-center">
                      3
                    </div>
                    <span className="font-semibold text-[#1A6B6B] text-xs leading-4 text-center">
                      Your Details
                    </span>
                  </div>
                </div>
              </CardHeader>

              {status && (
                <div
                  className={`mb-6 p-4 rounded-md text-sm font-medium ${status.ok ? "bg-[#1A6B6B]/10 text-[#1A6B6B]" : "bg-red-50 text-red-600"}`}
                >
                  <div className="font-semibold mb-1">{status.msg}</div>
                  {status.appointmentId && (
                    <div className="text-xs">
                      Your Appointment ID:{" "}
                      <span className="font-mono font-bold">
                        {status.appointmentId}
                      </span>
                    </div>
                  )}
                </div>
              )}

              <form onSubmit={submit} className="flex flex-col gap-6">
                <div className="flex flex-col gap-3">
                  <Label className="font-medium text-[#2C2C2C] text-sm">
                    1. Treatment Type
                  </Label>
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                    {[
                      { id: "Acne Treatment", icon: Droplet, label: "Acne" },
                      {
                        id: "Skin Brightening",
                        icon: Sun,
                        label: "Brightening",
                      },
                      { id: "Laser Therapy", icon: Zap, label: "Laser" },
                      { id: "Anti-Aging", icon: Sparkles, label: "Anti-Aging" },
                      { id: "Hair Restoration", icon: Scissors, label: "Hair" },
                      {
                        id: "General Consultation",
                        icon: User,
                        label: "General",
                      },
                    ].map((svc) => (
                      <button
                        key={svc.id}
                        type="button"
                        onClick={() => setService(svc.id)}
                        className={`group transition-all duration-300 hover:-translate-y-0.5 hover:shadow-md font-medium rounded-full text-sm leading-5 flex px-4 py-3 justify-center items-center gap-2 border-solid border ${
                          form.service === svc.id
                            ? "bg-[#1A6B6B] text-white border-[#1A6B6B] shadow-md"
                            : "bg-white text-[#2C2C2C]/80 border-[#1A6B6B]/20 hover:border-[#1A6B6B]/50 hover:bg-neutral-50"
                        }`}
                      >
                        <svc.icon
                          className={`size-4 transition-transform duration-300 group-hover:scale-110 ${form.service === svc.id ? "text-white" : "text-[#1A6B6B]"}`}
                        />
                        {svc.label}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="bg-[#1A6B6B]/10 h-px w-full my-2" />

                <div className="flex flex-col gap-4">
                  <Label className="font-medium text-[#2C2C2C] text-sm">
                    2. Choose Date & Time
                  </Label>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="flex flex-col gap-2">
                      <Label className="text-xs text-[#2C2C2C]/70">
                        Date *
                      </Label>
                      <Input
                        type="date"
                        name="date"
                        required
                        value={form.date}
                        onChange={setVal}
                        className="border-[#1A6B6B]/20 hover:border-[#1A6B6B]/50 focus:border-[#1A6B6B] transition-colors duration-300"
                      />
                    </div>
                    <div className="flex flex-col gap-2">
                      <Label className="text-xs text-[#2C2C2C]/70">
                        Time Slot *
                      </Label>
                      <Select
                        name="time"
                        required
                        value={form.time}
                        onChange={setVal}
                        className="border-[#1A6B6B]/20 hover:border-[#1A6B6B]/50 focus:border-[#1A6B6B] transition-colors duration-300 w-full"
                      >
                        <option value="" disabled>
                          Select a time
                        </option>
                        {timeSlots.map((slot) => (
                          <option key={slot} value={slot}>
                            {slot}
                          </option>
                        ))}
                      </Select>
                    </div>
                  </div>
                </div>

                <div className="bg-[#1A6B6B]/10 h-px w-full my-2" />

                <div className="flex flex-col gap-4">
                  <Label className="font-medium text-[#2C2C2C] text-sm">
                    3. Your Details
                  </Label>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="flex flex-col gap-2">
                      <Label className="text-xs text-[#2C2C2C]/70">
                        Full Name *
                      </Label>
                      <Input
                        name="name"
                        required
                        value={form.name}
                        onChange={setVal}
                        className="border-[#1A6B6B]/20 hover:border-[#1A6B6B]/50 focus:border-[#1A6B6B] transition-colors duration-300"
                        placeholder="Jane Doe"
                      />
                    </div>
                    <div className="flex flex-col gap-2">
                      <Label className="text-xs text-[#2C2C2C]/70">
                        Email Address *
                      </Label>
                      <Input
                        type="email"
                        name="email"
                        required
                        value={form.email}
                        onChange={setVal}
                        className="border-[#1A6B6B]/20 hover:border-[#1A6B6B]/50 focus:border-[#1A6B6B] transition-colors duration-300"
                        placeholder="jane@example.com"
                      />
                    </div>
                  </div>
                  <div className="flex flex-col gap-2">
                    <Label className="text-xs text-[#2C2C2C]/70">
                      Phone Number *
                    </Label>
                    <Input
                      type="tel"
                      name="phone"
                      required
                      value={form.phone}
                      onChange={setVal}
                      className="border-[#1A6B6B]/20 hover:border-[#1A6B6B]/50 focus:border-[#1A6B6B] transition-colors duration-300"
                      placeholder="+91 98765 43210"
                    />
                  </div>
                  <div className="flex flex-col gap-2">
                    <Label className="text-xs text-[#2C2C2C]/70">
                      Notes (Optional)
                    </Label>
                    <Textarea
                      name="notes"
                      value={form.notes}
                      onChange={setVal}
                      rows={3}
                      className="border-[#1A6B6B]/20 hover:border-[#1A6B6B]/50 focus:border-[#1A6B6B] transition-colors duration-300"
                      placeholder="Any specific concerns?"
                    />
                  </div>
                </div>

                <div className="mt-4 flex justify-end">
                  <Button
                    type="submit"
                    disabled={isLoading}
                    className="group shadow-sm hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300 font-semibold rounded-full bg-[#C9A84C] hover:bg-[#b0923f] text-white px-8 py-6 w-full md:w-auto"
                  >
                    {isLoading ? "Processing..." : "Confirm Appointment"}
                    {!isLoading && (
                      <ArrowRight className="size-4 ml-2 group-hover:translate-x-1 transition-transform" />
                    )}
                  </Button>
                </div>
              </form>
            </Card>
          </div>

          <div className="md:col-span-2">
            <Card className="group bg-[#FAF8F5] shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 rounded-2xl border-[#1A6B6B]/10 p-0 overflow-hidden">
              <div className="bg-[#1A6B6B] w-full h-1.5" />
              <div className="flex p-8 flex-col gap-6">
                <div className="flex items-center gap-2">
                  <ClipboardList className="size-5 text-[#1A6B6B] group-hover:scale-110 transition-transform duration-300" />
                  <h3 className="font-serif font-bold text-[#2C2C2C] text-xl">
                    Booking Summary
                  </h3>
                </div>
                <div className="flex flex-col gap-4">
                  <div className="border-[#1A6B6B]/10 border-b pb-3 flex justify-between items-center">
                    <span className="text-[#2C2C2C]/60 text-sm">Treatment</span>
                    <span className="font-medium text-[#1A6B6B] text-sm text-right max-w-[150px]">
                      {form.service || "Not selected"}
                    </span>
                  </div>
                  <div className="border-[#1A6B6B]/10 border-b pb-3 flex justify-between items-center">
                    <span className="text-[#2C2C2C]/60 text-sm">Date</span>
                    <span
                      className={`font-medium text-sm ${form.date ? "text-[#2C2C2C]" : "text-[#2C2C2C]/40"}`}
                    >
                      {form.date || "Not selected"}
                    </span>
                  </div>
                  <div className="border-[#1A6B6B]/10 border-b pb-3 flex justify-between items-center">
                    <span className="text-[#2C2C2C]/60 text-sm">Time</span>
                    <span
                      className={`font-medium text-sm ${form.time ? "text-[#2C2C2C]" : "text-[#2C2C2C]/40"}`}
                    >
                      {form.time || "Not selected"}
                    </span>
                  </div>
                </div>
                <div className="rounded-lg bg-[#1A6B6B]/10 flex px-4 py-3 items-center gap-2 mt-2">
                  <CircleCheck className="size-5 shrink-0 text-[#1A6B6B]" />
                  <span className="font-medium text-[#1A6B6B] text-sm">
                    Free consultation included
                  </span>
                </div>
              </div>
            </Card>

            <div className="grid grid-cols-1 gap-4 mt-6">
              <div className="group flex items-center gap-3 bg-white p-4 rounded-xl border border-[#1A6B6B]/10 hover:shadow-md hover:-translate-y-1 transition-all duration-300 cursor-pointer">
                <div className="size-10 rounded-full bg-[#1A6B6B]/10 group-hover:bg-[#1A6B6B]/20 transition-colors duration-300 flex justify-center items-center shrink-0">
                  <CircleCheck className="size-5 text-[#1A6B6B] group-hover:scale-110 transition-transform duration-300" />
                </div>
                <div className="flex flex-col">
                  <span className="font-semibold text-[#2C2C2C] text-sm">
                    Instant Confirmation
                  </span>
                  <span className="text-[#2C2C2C]/55 text-xs">
                    Booked in seconds
                  </span>
                </div>
              </div>
              <div className="group flex items-center gap-3 bg-white p-4 rounded-xl border border-[#1A6B6B]/10 hover:shadow-md hover:-translate-y-1 transition-all duration-300 cursor-pointer">
                <div className="size-10 rounded-full bg-[#1A6B6B]/10 group-hover:bg-[#1A6B6B]/20 transition-colors duration-300 flex justify-center items-center shrink-0">
                  <CalendarX className="size-5 text-[#1A6B6B] group-hover:scale-110 transition-transform duration-300" />
                </div>
                <div className="flex flex-col">
                  <span className="font-semibold text-[#2C2C2C] text-sm">
                    Free Cancellation
                  </span>
                  <span className="text-[#2C2C2C]/55 text-xs">
                    Up to 24hrs before
                  </span>
                </div>
              </div>
              <div className="group flex items-center gap-3 bg-white p-4 rounded-xl border border-[#1A6B6B]/10 hover:shadow-md hover:-translate-y-1 transition-all duration-300 cursor-pointer">
                <div className="size-10 rounded-full bg-[#1A6B6B]/10 group-hover:bg-[#1A6B6B]/20 transition-colors duration-300 flex justify-center items-center shrink-0">
                  <ShieldCheck className="size-5 text-[#1A6B6B] group-hover:scale-110 transition-transform duration-300" />
                </div>
                <div className="flex flex-col">
                  <span className="font-semibold text-[#2C2C2C] text-sm">
                    Certified Experts
                  </span>
                  <span className="text-[#2C2C2C]/55 text-xs">
                    Trusted specialists
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
