import Button from "../../components/atoms/Button/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faCheck,
  } from "@fortawesome/free-solid-svg-icons";
import Pricing from "./Pricing";

const Plan = ({plans}) => {
    const {plan,description,price,channels,user,episodes,downloads} = plans;
    return(
        <div className="border-[#320E3B] border-[1px] w-[19.625rem] rounded-[0.625rem] px-[1.813rem] py-[2.375rem]">
              <div className="mb-[2.188rem] flex flex-col gap-[0.313rem]">
                <h1 className="text-[2.25rem] font-[700] leading-[3.064rem]">
                  {plan}
                </h1>
                <p className=" text-[1rem] text-[#1E1E1E] font-[400] leading-[1.362rem] ">
                  {description}
                </p>
              </div>
              <div className="py-3">
                <h2 className="text-[2rem] font-[600] leading-[2.724rem] text-[#1E1E1E]">
                  {price}
                </h2>
              </div>
              <ul className="text-[1rem] font-[400] flex flex-col gap-[0.625rem]">
                <li>
                  {" "}
                  <FontAwesomeIcon icon={faCheck} /> {channels}
                </li>
                <li>
                  <FontAwesomeIcon icon={faCheck} /> {user}
                </li>
                <li>
                  <FontAwesomeIcon icon={faCheck} /> {episodes}
                </li>
                <li>
                  <FontAwesomeIcon icon={faCheck} /> {downloads}
                </li>
              </ul>
              <div className="mt-[3.688rem] flex justify-center">
                <Button>Get Started for Free</Button>
              </div>
            </div>
    )
}

export default Plan;