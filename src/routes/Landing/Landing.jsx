import Navigation from "../navigation/Navigation.jsx";
import Home from "../home/Home.jsx";
import Episodes from "../episodes/Episodes.jsx";
import Features from "../features/Features.jsx";
import Categories from "../categories/categories.jsx";
import Pricing from "../pricing/Pricing.jsx";

const Landing = () => {
return(
    <main className=" max-w-[1440px] mx-auto">
       <Navigation />
       <Home />
       <Episodes />
       <Features/>
        <Categories />
        <Pricing />
      
    </main>
)
}

export default Landing;