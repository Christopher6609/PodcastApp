import Button from "../../components/atoms/Button/Button";
import Card from "./Card";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faArrowLeft,
    faArrowRight,
    
  } from "@fortawesome/free-solid-svg-icons";

const Features = () => {
    return(
        <div className="py-[2rem] px-[1rem]" id="features">
        <div className=" md:flex justify-between items-start ">
          <div className=" p-4 md:p-0 text-center md:text-start  w-full md:w-[23.813rem]">
            <h2 className="text-[2.375rem] leading-[3.188rem] font-[700] text-[#1E1E1E]">
              People like us because we offer the best{" "}
              <span className="text-[#320E3B]">service</span>
            </h2>
            <p className="text-[1rem] leading-[1.313rem] font-[400] opacity-50 py-5">
              These are our major selling point and why we stand out among other
              podcasting platform
            </p>
            <Button>
            <FontAwesomeIcon
                className="text-white w-4 h-4 px-2"
                icon={faArrowRight}
              />Learn More</Button>
              
              
         
          </div>

          <div className="flex md:justify-start justify-center items-center flex-wrap md:gap-[4rem] gap-6 md:w-[52.875rem] ">
            {cardlist.map((item) => (
              <Card  key={item.id} item={item} />
            ))}
          </div>
        </div>
      </div>
    )
}
const cardlist = [
    {
      id: 1,
      img: "/images/Frame 9.png",
      text: "Interesting Contents",
      subtext:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In.Lorem ipsum dolor sit amet, consectetur adipiscing elit. In.",
    },
    {
      id: 2,
      img: "/images/Frame 7.png",
      text: "All platform supported",
      subtext:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In.Lorem ipsum dolor sit amet, consectetur adipiscing elit. In.",
    },
    {
      id: 3,
      img: "/images/Frame 8.png",
      text: "High Quality audio",
      subtext:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In.Lorem ipsum dolor sit amet, consectetur adipiscing elit. In.",
    },
    {
      id: 4,
      img: "/images/Frame 45.png",
      text: "Different Categories",
      subtext:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In.Lorem ipsum dolor sit amet, consectetur adipiscing elit. In.",
    },
  ];

export default Features;