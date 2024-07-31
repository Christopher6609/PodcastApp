import EpisodeCard from "./EpisodeCard";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";

const Episodes = () => {
  return (
    <div className="py-9 px-[1rem] relative" id="episodes">
      <h1 className=" md:text-[2.25rem] text-[1.25rem] font-[600] text-center md:leading-[3.064rem]">
        We have listed the top podcast for this week
      </h1>
      <div className="w-[15rem] h-[28rem] absolute md:-top-[0.4rem] md:-left-[10rem] -z-10 md:block">
        <img
          className="w-full h-full object-contain"
          src="/images//Group 1.png"
        />
      </div>
      <div className="flex flex-col justify-center pt-[5.699rem]">
        <div className="flex justify-between md:gap-5 overflow-hidden">
          {slides.map((episode) => (
            <EpisodeCard key={episode.id} episode={episode} />
          ))}
        </div>
        <div className=" flex justify-center pt-[4.887rem] gap-8">
          <FontAwesomeIcon className="text-[1.5rem]" icon={faArrowLeft} />
          <FontAwesomeIcon className="text-[1.5rem]" icon={faArrowRight} />
        </div>
      </div>
    </div>
  );
};

const slides = [
  {
    id: 1,
    img: "/images/image 7.png",
  },
  {
    id: 2,
    img: "/images/image 8.png",
  },
  {
    id: 3,
    img: "/images/image 9.png",
  },
  {
    id: 4,
    img: "/images/image 10.png",
  },
  {
    id: 5,
    img: "/images/image 7.png",
  },
  {
    id: 6,
    img: "/images/image 8.png",
  },
  {
    id: 7,
    img: "/images/image 9.png",
  },
  {
    id: 8,
    img: "/images/image 10.png",
  },
];

export default Episodes;
