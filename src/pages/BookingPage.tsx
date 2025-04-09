
import Navbar from "@/components/Navbar";
import ConsultationForm from "@/components/ConsultationForm";
import Footer from "@/components/Footer";

const BookingPage = () => {
  return (
    <div className="min-h-screen bg-black">
      <Navbar />
      <div className="pt-16 md:pt-24">
        <ConsultationForm />
      </div>
      <Footer />
    </div>
  );
};

export default BookingPage;
