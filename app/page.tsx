import Hero from "./components/Hero";
import Services from "./components/Services";
import SkinCareGuide from "./components/SkinCareGuide";
import WhyChooseUs from "./components/WhyChooseUs";
import DoctorProfile from "./components/DoctorProfile";
import AppointmentForm from "./components/AppointmentForm";

export default function Home() {
  return (
    <div>
      <Hero />
      <SkinCareGuide />
      <Services />
      <WhyChooseUs />
      <DoctorProfile />
      <AppointmentForm />
    </div>
  );
}

