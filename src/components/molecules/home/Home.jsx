import Button from "../../atoms/Button/Button";
import {useContext} from 'react';
import { UserContext } from "../../../context/userContext";

const Home = () => {
    const {currentUser} = useContext(UserContext);

    return(
        <div className="flex justify-between md:min-h-[40rem] md:w-full py-[1.5rem] px-[1rem]" id="home">
            <div className="md:w-[40.125rem]">
          <div className="w-full text-center md:text-left md:w-full py-[3rem] md:py-[5.438rem] ">
          {currentUser ? <h1 className="text-[0.875rem]">Welcome <span className="text-[1rem] font-bold">{currentUser.displayName}!</span></h1>:null}
            <h1 className="text-[#1E1E1E] text-[2rem] md:text-[3rem] leading-normal md:leading-[4.375rem] font-[700]">
              Talk,Listen,Get Inspired On Our{" "}
              <span className="text-[#320E3B]">Platform</span>
            </h1>
            <p className="text-[#1E1E1E] text-[1rem] md:text-[1.5rem] leading-[2.043rem] font-[400]">
              Find all your favourite podcast here listen in and enjoy catch up
              on all your missed episode. Only here
            </p>
          </div>
          <div className="flex md:justify-start justify-center gap-3">
            <Button>Start Listening</Button>
          </div>
          <div className="flex items-center gap-3 md:py-4">
            <div className="md:w-[6rem] w-[4rem] md:h-[1.875rem] h-[4rem]">
              <img className="object-contain w-full h-full" src="/images/Frame 37.png" />
            </div>
            <p className="text-[0.875rem]">+500k users worldwide</p>
          </div>
        </div>
        <div className=" md:w-[60rem] relative md:block hidden">
          <div className=" w-[10rem] h-[13rem] md:w-[18rem] md:h-[21rem] absolute md:right-[17rem] ">
            <img className="object-contain w-full h-full" src="/images/Frame 6guy.png" />
          </div>
          <div className=" w-[10rem] h-[13rem] md:w-[18rem] md:h-[21rem] absolute translate-y-3/4 md:right-[3rem] ">
            <img className="object-contain w-full h-full" src="/images/Frame 7girl.png" />
          </div>
          <div className=" w-[10rem] h-[13rem] md:w-[18rem] md:h-[21rem] absolute translate-y-[20rem] md:right-[18rem]">
            <img className="object-contain w-full h-full" src="/images/Frame 35media length.png" />
          </div>
        </div>
        </div>
    )
}

export default Home;