import Plan from "./Plan";
import { useState } from "react";

const Pricing = () => {

  const defaultPlan = planlist.filter((plan)=> plan.category == "monthly");
  
  const [planListItems, setPlanListItems] = useState(defaultPlan);
  const [isActive, setIsActive ] = useState('monthly');

  const yearlyPlan = () => {
    const plan = planlist.filter((plan)=> plan.category == "yearly");
    setPlanListItems(plan);
    setIsActive('yearly');
  }
  const monthlyPlan = () => {
    const plan = planlist.filter((plan)=> plan.category == "monthly");
    setPlanListItems(plan);
    setIsActive('monthly');
  }

    return(
        <section id="pricing">
            <h1 className=" md:text-[2.25rem] text-[1.25rem] font-[600] text-center  md:leading-[3.064rem]">
            Our <span className="text-[#320E3B] font-[700]">pricing</span> is
            simple with no hidden charges
            </h1>
        <div>
          <div className="flex justify-center p-6">
            <button onClick={monthlyPlan} className={isActive == 'monthly' ? `border-[#320E3B] border-[1px] px-[1.938rem] py-[0.625rem] bg-[#320E3B] text-[#FFFFFF] leading-[1.362rem] text-[1rem] font-[400] rounded-tl-[0.625rem] rounded-bl-[0.625rem]` : `border-[#320E3B] border-[1px] px-[1.938rem] py-[0.625rem] text-[#320E3B] leading-[1.362rem] text-[1rem] font-[400] rounded-tl-[0.625rem] rounded-bl-[0.625rem]`}>
              Monthly
            </button>
            <button onClick={yearlyPlan} className={isActive == 'yearly' ? `border-[#320E3B] border-[1px] px-[1.938rem] py-[0.625rem] bg-[#320E3B] text-[#FFFFFF] leading-[1.362rem] text-[1rem] font-[400] rounded-tr-[0.625rem] rounded-br-[0.625rem]` : `border-[#320E3B] border-[1px] px-[1.938rem] py-[0.625rem] text-[#320E3B] leading-[1.362rem] text-[1rem] font-[400] rounded-tr-[0.625rem] rounded-br-[0.625rem]`}>
              Yearly
            </button>
          </div>
        </div>
        <div className="py-[4.438rem] flex flex-col justify-center items-center gap-5 px-[1rem] md:flex-row md:justify-between">
          {planListItems.map((item) => (
            <Plan key={item.id} plans={item} />
          ))}
        </div>
      </section>
    )
}
const planlist = [
    {
      id: "1",
      plan: "Basic",
      description: "Multistreaming sample",
      price: "Free",
      channels: "2 Channels",
      user: "1 User",
      episodes: "12 Episodes",
      category:"monthly"
    },
    {
      id: "2",
      plan: "Popular",
      description: "Essential tool to get started",
      price: "N5000",
      channels: "Up to 15 Channels",
      user: "3 Users",
      episodes: "Unlimited Episodes",
      downloads: "300 Monthly downloads",
      category:"monthly"
    },
    {
      id: "3",
      plan: "Premium",
      description: "Essential tool to get started",
      price: "N10,000",
      channels: "Up to 60 Channels",
      user: "9 Users",
      episodes: "Unlimited Episodes",
      downloads: "600 Monthly downloads",
      category:"monthly"
    },
    {
      id: "4",
      plan: "Basic",
      description: "Multistreaming sample",
      price: "N50,000",
      channels: "2 Channels",
      user: "1 User",
      episodes: "12 Episodes",
      category:"yearly"
    },
    {
      id: "5",
      plan: "Popular",
      description: "Essential tool to get started",
      price: "N100,000",
      channels: "Up to 15 Channels",
      user: "3 Users",
      episodes: "Unlimited Episodes",
      downloads: "300 Monthly downloads",
      category:"yearly"
    },
    {
      id: "6",
      plan: "Premium",
      description: "Essential tool to get started",
      price: "N200,000",
      channels: "Up to 60 Channels",
      user: "9 Users",
      episodes: "Unlimited Episodes",
      downloads: "600 Monthly downloads",
      category:"yearly"
    },
  ];

export default Pricing;