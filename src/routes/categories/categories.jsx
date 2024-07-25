import Button from "../../components/atoms/Button/Button";
import PodCard from "./PodCard";

const Categories = () => {
    return(
        <section className="bg-[#320E3B] bg-opacity-5 py-[5rem]">
            <div className="px-2">
            <h1 className="font-[700] text-center md:leading-[3.064rem] text-[2.375rem] leading-[3.188rem] text-[#1E1E1E]">
                Explore our podcast by{" "}
                <span className="text-[#320E3B]">categories</span> you like
            </h1>
            </div>

        <div className=" gap-4 flex flex-wrap justify-between px-10 md:px-8 py-9 ">
          <Button>All</Button>
          <Button>Health</Button>
          <Button>News</Button>
          <Button>Entertainment</Button>
          <Button>Technology</Button>
          <Button>Business</Button>
          <Button>True Crime</Button>
          <Button>Sports</Button>
          <Button>Educational</Button>
        </div>
        <div className="flex flex-wrap gap-8 md:gap-12 p-8 md:p-4 justify-center items-center ">
          {podcastList.map((podcast) => (
            <PodCard key={podcast.id} podcast={podcast} />
          ))}
        </div>
      </section>
    )
}
const podcastList = [
    {
      id: 1,
      img: "/images/Frame 71.png",
      headtext: "Feminine Health",
      episodes: " 17 episodes",
      time: "120 mins",
    },
    {
      id: 2,
      img:"/images//Frame 80 (1).png",
      headtext: "Empowerment",
      episodes: " 17 episodes",
      time: "120 mins",
    },
    {
      id: 3,
      img: "/images/Frame 80 (2).png",
      headtext: "Design",
      episodes: " 17 episodes",
      time: "120 mins",
    },
    {
      id: 4,
      img: "/images/Frame 80 (3).png",
      headtext: "Sport today",
      episodes: " 17 episodes",
      time: "120 mins",
    },
    {
      id: 5,
      img: "/images/Frame 80 (4).png",
      headtext: "Car reviews",
      episodes: "17 episodes",
      time: "120 mins",
    },
    {
      id: 6,
      img: "/images/Frame 80 (5).png",
      headtext: "Business talk",
      episodes: "17 episodes",
      time: "120 mins",
    },
    {
      id: 7,
      img: "images/Frame 80 (6).png",
      headtext: "Almost got away",
      episodes: "17 episodes",
      time: "120 mins",
    },
    {
      id: 8,
      img: "images/Frame 80 (6).png",
      headtext: "Ace that paper",
      episodes: "17 episodes",
      time: "120 mins",
    },
  ];

  export default Categories;