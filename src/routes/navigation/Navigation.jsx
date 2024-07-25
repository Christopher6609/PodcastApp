import { Fragment } from "react";
import Button from "../../components/atoms/Button/Button";
const Navigation = () => {
    return (
        <Fragment >
             <div className=" h-[6.25rem] justify-between items-center md:flex hidden  bg-[#d5c6f9] ">
                <div className="w-[39rem] h-[32.375rem] absolute md:-top-[0.4rem] md:-left-[10rem] -z-10 md:block">
                    <img className="w-full h-full object-contain" src="/images/Group 2.png"  />
                </div>

                <div>
                  <h1 className="text-[2rem] text-[Mono]">Podcast</h1>
                </div>
        <div>
          <ul className="list-none flex text-[1rem] font-[400] leading-[1.362rem] text-[#1E1E1E] gap-16">
            <li>
              <a href="#home">Home</a>
            </li>
            <li>
              <a href="#episodes">Episodes</a>
            </li>
            <li>
              <a href="#">Features</a>
            </li>
            <li>
              <a href="#">Pricing</a>
            </li>
            <li>
              <a href="#">Categories</a>
            </li>
          </ul>
        </div>
        <div className=" flex gap-5">
          <Button>Login</Button>
          <Button>Sign Up</Button>
        </div>
        </div>
        </Fragment>
    )
}

export default Navigation;