import { Fragment } from "react";
import { Outlet } from "react-router-dom";
import Button from "../../atoms/Button/Button";
import { useNavigate } from "react-router-dom";


const Navigation = () => {

  const navigate = useNavigate();
  const logoNavigationHandler = () => navigate('/');
  const loginNavigationHandler = () => navigate('/auth/login');
  const signupNavigationHandler = () => navigate('/auth/signup');

    return (
      
        <Fragment >
             <div className=" h-[6.25rem] justify-between items-center md:flex hidden px-[1rem] bg-[#d5c6f9] ">
                <div className="w-[39rem] h-[32.375rem] absolute md:-top-[0.4rem] md:-left-[10rem] -z-10 md:block">
                    <img className="w-full h-full object-contain" src="/images/Group 2.png"  /> 
                </div>

                <div>
                <span onClick={logoNavigationHandler} className="hover:cursor-pointer"> <h1 className="text-[2rem] text-[Mono]">Podcast</h1></span>
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
              <a href="#features">Features</a>
            </li>
            <li>
              <a href="#pricing">Pricing</a>
            </li>
            <li>
              <a href="#categories">Categories</a>
            </li>
          </ul>
        </div>
        <div className=" flex gap-5">
          <span onClick={loginNavigationHandler}><Button>Login</Button></span>
          <span onClick={signupNavigationHandler}><Button type="button">Sign Up</Button>
          </span>
        </div>
        </div>

        <Outlet />


        </Fragment>
    )
}

export default Navigation;