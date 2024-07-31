import Navigation from "../../components/molecules/navigation/Navigation.jsx";
import Home from "../../components/molecules/home/Home.jsx";
import Episodes from "../../components/molecules/episodes/Episodes.jsx";
import Features from "../../components/molecules/features/Features.jsx";
import Categories from "../../components/molecules/categories/categories.jsx";
import Pricing from "../../components/molecules/pricing/Pricing.jsx";
import Footer from "../../components/molecules/footer/Footer.jsx";

const Landing = () => {
  return (
    <main className=" max-w-[1440px] mx-auto rounded-bl-[6rem]">
      <Navigation />
      <Home />
      <Episodes />
      <Features />
      <Categories />
      <Pricing />
      <Footer />
    </main>
  );
};

export default Landing;
