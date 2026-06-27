import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Classes from "@/components/Classes";
import Gallery from "@/components/Gallery";
import News from "@/components/News";
import BookingForm from "@/components/BookingForm";
import Location from "@/components/Location";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Classes />
        <Gallery />
        {/* <News /> */}
        <BookingForm />
        <Location />
      </main>
      <Footer />
    </>
  );
}
