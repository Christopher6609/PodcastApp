import Button from "../../atoms/Button/Button";
import PodCard from "./PodCard";
import StepCard from "./StepCard";

const Categories = () => {
  return (
    <>
      <section
        className="bg-[#dbd2f0] bg-opacity-30 py-[5rem] px-[1rem] md:rounded-tr-[6rem] rounded-tr-[3rem] "
        id="categories"
      >
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
      <section className="md:py-[7.813rem] px-[1rem] py-[4.813rem]">
        <div className="md:flex justify-between items-start">
          <div className=" p-4 md:p-0 text-center md:text-start  w-full md:w-[24.188rem]">
            <h2 className="text-[2.375rem] leading-[3.188rem] font-[500] text-[#1E1E1E]">
              Here is how we make{" "}
              <span className="text-[#320E3B] font-[700]">podcasting</span>{" "}
              easier{" "}
            </h2>
            <p className="text-[1rem] leading-[1.313rem] font-[400] opacity-50 py-5">
              The following steps to be followed to record your podcast easily.
              The following steps to be followed to record your podcast easily
            </p>
            <Button> Start Recording </Button>
          </div>
          <div className="flex flex-wrap gap-4 justify-center items-center md:gap-[3.75rem] md:w-[59.5rem] py-[1.25rem]">
            {steplist.map((item) => (
              <StepCard key={item.id} item={item} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
};
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
    img: "/images//Frame 80 (1).png",
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

const steplist = [
  {
    id: "1",
    img: "/images//bi_person.png",
    text: "Create an account",
    subtext: "Set up your account to start enjoying our seamless service",
  },
  {
    id: "2",
    img: "/images/bi_mic.png",
    text: "Record your podcast",
    subtext: "Record easily and everything is easy and simple to use",
  },
  {
    id: "3",
    img: "/images/Frame 6.png",
    text: "Edit your podcast",
    subtext: "Remove unwanted noise an just edit where its requried",
  },
  {
    id: "4",
    img: "/images/bi_cloud-upload.png",
    text: "Upload your podcast",
    subtext: "Remove unwanted noise an just edit where its requried",
  },
];

export default Categories;
