import "./App.css";
import "./styles/styles.css";

import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import HomePage from "./components/HomePage";
import Footer from "./components/footer";
import CarruselGenreSection from "./components/CarruselGenreSection";
import UserReviewsSection from "./components/UserReviewsSection";
import ScrollToTopButton from "./components/ScrollToTopButton";
import ContactUs from "./components/ContactUs";

function App() {
  return (
    <div className="flex flex-col bg-primary min-h-screen overflow-x-hidden text-white">
      <Header />
      <main className="flex flex-grow justify-center items-center">
        <HomePage />
      </main>
      <HeroSection />
      <CarruselGenreSection />
      <UserReviewsSection />
      <ContactUs />
      <Footer />
      <ScrollToTopButton />
    </div>
  );
}

export default App;
