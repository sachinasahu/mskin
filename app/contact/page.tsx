"use client";

import { useState } from "react";
import { MapPin, Phone, Mail, Clock, Navigation, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
  };

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >,
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="bg-white text-neutral-950 w-full min-h-screen overflow-visible">
      <section className="relative bg-[linear-gradient(135deg,#1A6B6B_0%,#2C8A8A_55%,#1A6B6B_100%)] w-full overflow-hidden">
        <div className="container text-center flex flex-col items-center py-16">
          <span className="inline-flex font-medium uppercase rounded-full text-[#C9A84C] text-xs leading-4 tracking-widest border-white/30 border mb-4 px-4 py-1 items-center gap-2">
            <MapPin className="size-3.5" />
            Get In Touch
          </span>
          <h1 className="leading-tight font-serif font-semibold text-white text-5xl">
            Visit Us & See Our Work
          </h1>
          <p className="max-w-xl leading-relaxed text-[#EAF4F4] text-base mt-4">
            Reach out to our dermatology specialists, explore our patient
            transformations, and discover the difference of expert,
            compassionate skin care.
          </p>
        </div>
      </section>

      <main className="container py-12">
        <div className="grid md:grid-cols-5 gap-8">
          <div className="md:col-span-3">
            <Card className="border-t-[#1A6B6B] shadow-sm border-t-4 p-8 gap-6">
              <CardHeader className="p-0 gap-2">
                <CardTitle className="font-serif font-semibold text-[#2C2C2C] text-2xl">
                  Send Us a Message
                </CardTitle>
                <CardDescription className="text-neutral-500 text-sm">
                  Fill in the form below and our team will respond within 24
                  hours.
                </CardDescription>
              </CardHeader>
              <form onSubmit={handleSubmit}>
                <CardContent className="p-0 gap-4 mt-6">
                  {submitted && (
                    <div className="mb-6 p-4 bg-[#1A6B6B]/10 text-[#1A6B6B] rounded-md text-sm font-medium">
                      ✓ Message sent successfully! We will get back to you soon.
                    </div>
                  )}

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                    <div className="flex flex-col gap-2">
                      <Label className="font-medium text-[#2C2C2C] text-sm">
                        Full Name
                      </Label>
                      <Input
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Jane Doe"
                        className="border-neutral-200"
                      />
                    </div>
                    <div className="flex flex-col gap-2">
                      <Label className="font-medium text-[#2C2C2C] text-sm">
                        Email
                      </Label>
                      <Input
                        type="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="jane@email.com"
                        className="border-neutral-200"
                      />
                    </div>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                    <div className="flex flex-col gap-2">
                      <Label className="font-medium text-[#2C2C2C] text-sm">
                        Phone Number
                      </Label>
                      <Input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="+91 98765 43210"
                        className="border-neutral-200"
                      />
                    </div>
                    <div className="flex flex-col gap-2">
                      <Label className="font-medium text-[#2C2C2C] text-sm">
                        Select Service
                      </Label>
                      <Select
                        name="service"
                        value={formData.service}
                        onChange={handleChange}
                        className="border-neutral-200 w-full"
                      >
                        <SelectTrigger>
                          <SelectValue placeholder="Choose a service" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="acne">Acne Treatment</SelectItem>
                          <SelectItem value="laser">Laser Therapy</SelectItem>
                          <SelectItem value="antiaging">Anti-Aging</SelectItem>
                          <SelectItem value="pigment">
                            Pigmentation Care
                          </SelectItem>
                          <SelectItem value="hair">Hair Restoration</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                  <div className="flex flex-col gap-2 mb-6">
                    <Label className="font-medium text-[#2C2C2C] text-sm">
                      Message
                    </Label>
                    <Textarea
                      name="message"
                      required
                      value={formData.message}
                      onChange={handleChange}
                      rows={5}
                      placeholder="Tell us how we can help your skin..."
                      className="min-h-32 border-neutral-200"
                    />
                  </div>
                </CardContent>
                <CardFooter className="p-0">
                  <Button
                    type="submit"
                    className="font-semibold rounded-lg bg-[#C9A84C] hover:bg-[#C9A84C]/90 text-white text-base py-6 w-full"
                  >
                    <Send className="size-4 mr-2" />
                    Send Message
                  </Button>
                </CardFooter>
              </form>
            </Card>
          </div>

          <div className="md:col-span-2 flex flex-col gap-4">
            <Card className="p-6 flex flex-row items-start gap-4 shadow-sm border-transparent">
              <div className="size-11 shrink-0 rounded-full bg-[#1A6B6B]/10 flex justify-center items-center">
                <MapPin className="size-5 text-[#1A6B6B]" />
              </div>
              <div className="flex flex-col gap-1">
                <p className="font-semibold text-[#2C2C2C] text-sm">Address</p>
                <p className="leading-relaxed text-neutral-500 text-sm">
                  Unit-4, Madhusudhan Nagar, Next to Truptee Restaurant,
                  Bhubaneswar, Odisha 751001
                </p>
              </div>
            </Card>
            <Card className="p-6 flex flex-row items-start gap-4 shadow-sm border-transparent">
              <div className="size-11 shrink-0 rounded-full bg-[#1A6B6B]/10 flex justify-center items-center">
                <Phone className="size-5 text-[#1A6B6B]" />
              </div>
              <div className="flex flex-col gap-1">
                <p className="font-semibold text-[#2C2C2C] text-sm">Phone</p>
                <a
                  href="tel:+917657015719"
                  className="font-medium text-[#1A6B6B] text-sm hover:underline"
                >
                  +91 76570 15719
                </a>
              </div>
            </Card>
            <Card className="p-6 flex flex-row items-start gap-4 shadow-sm border-transparent">
              <div className="size-11 shrink-0 rounded-full bg-[#1A6B6B]/10 flex justify-center items-center">
                <Mail className="size-5 text-[#1A6B6B]" />
              </div>
              <div className="flex flex-col gap-1">
                <p className="font-semibold text-[#2C2C2C] text-sm">Email</p>
                <a
                  href="mailto:drmanojsskinclinic@gmail.com"
                  className="font-medium text-[#1A6B6B] text-sm hover:underline break-all"
                >
                  drmanojsskinclinic@gmail.com
                </a>
              </div>
            </Card>
            <Card className="p-6 flex flex-row items-start gap-4 shadow-sm border-transparent">
              <div className="size-11 shrink-0 rounded-full bg-[#1A6B6B]/10 flex justify-center items-center">
                <Clock className="size-5 text-[#1A6B6B]" />
              </div>
              <div className="flex flex-col gap-2 w-full">
                <p className="font-semibold text-[#2C2C2C] text-sm">
                  Clinic Hours
                </p>
                <table className="text-neutral-500 text-sm w-full">
                  <tbody>
                    <tr className="border-neutral-200/60 border-b flex py-1 justify-between">
                      <td>Mon – Fri</td>
                      <td className="font-medium text-[#2C2C2C]">
                        9:00 AM – 6:00 PM
                      </td>
                    </tr>
                    <tr className="border-neutral-200/60 border-b flex py-1 justify-between">
                      <td>Saturday</td>
                      <td className="font-medium text-[#2C2C2C]">
                        10:00 AM – 3:00 PM
                      </td>
                    </tr>
                    <tr className="flex py-1 justify-between">
                      <td>Sunday</td>
                      <td className="font-medium text-[#C9A84C]">Closed</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </Card>
            <div className="relative rounded-2xl border-[#1A6B6B] border-2 overflow-hidden mt-2 group">
              <iframe
                width="100%"
                height="100%"
                frameBorder="0"
                title="Dr Manoj's Skin Clinic Location"
                src="https://maps.google.com/maps?q=20.28376074462255,85.83487535145416&hl=en&z=17&output=embed"
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full h-44 object-cover"
              ></iframe>
              <a
                href="https://maps.google.com/maps?q=20.28376074462255,85.83487535145416"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#1A6B6B]/70 hover:bg-[#1A6B6B]/90 transition-colors flex absolute inset-0 justify-center items-center opacity-0 group-hover:opacity-100 cursor-pointer"
              >
                <span className="font-medium rounded-full bg-[#1A6B6B] text-white text-xs px-4 py-2 flex items-center gap-2">
                  <Navigation className="size-4 text-[#C9A84C]" />
                  Open in Google Maps
                </span>
              </a>
            </div>
          </div>
        </div>

        <section className="flex mt-16 flex-col items-center">
          <h2 className="font-serif font-semibold text-[#2C2C2C] text-3xl">
            Patient Results Gallery
          </h2>
          <div className="rounded-full bg-[#C9A84C] mt-3 w-24 h-1" />
          <p className="max-w-xl text-center text-neutral-500 text-sm mt-4 mb-8">
            Real transformations and a glimpse inside our clinic. Visible
            results from our trusted treatments.
          </p>
          <div className="columns-1 sm:columns-2 md:columns-3 gap-4">
            <div className="break-inside-avoid shadow-sm rounded-2xl mb-4 overflow-hidden">
              <img
                src="/images/Acne_Treatment.png"
                alt="Acne treatment"
                className="object-cover w-full"
              />
            </div>
            <div className="break-inside-avoid shadow-sm rounded-2xl mb-4 overflow-hidden">
              <img
                src="/images/Anti_Aging_Treatments.png"
                alt="Anti Aging"
                className="object-cover w-full"
              />
            </div>
            <div className="break-inside-avoid shadow-sm rounded-2xl mb-4 overflow-hidden">
              <img
                src="/images/Skin_Rejuvenation.png"
                alt="Skin Rejuvenation"
                className="object-cover w-full"
              />
            </div>
            <div className="break-inside-avoid shadow-sm rounded-2xl mb-4 overflow-hidden">
              <img
                src="/images/hair_treatment.png"
                alt="Hair treatment"
                className="object-cover w-full"
              />
            </div>
            <div className="break-inside-avoid shadow-sm rounded-2xl mb-4 overflow-hidden">
              <img
                src="/images/Pigmentation.png"
                alt="Pigmentation"
                className="object-cover w-full"
              />
            </div>
            <div className="break-inside-avoid shadow-sm rounded-2xl mb-4 overflow-hidden">
              <img
                src="/images/Dermatological.png"
                alt="Dermatological"
                className="object-cover w-full"
              />
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
