import { Fragment } from "react";
import { Outlet } from "react-router-dom";
import Button from "../../atoms/Button/Button";
import { useNavigate } from "react-router-dom";
import { useContext, useState } from "react";
import { UserContext } from "../../../context/userContext";
import { signUserOut } from "../../../utils/firebase/firebase.js";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faClose} from "@fortawesome/free-solid-svg-icons";

const Navigation = () => {
  const navigate = useNavigate();
  const logoNavigationHandler = () => navigate("/");
  const loginNavigationHandler = () => navigate("/auth/login");
  const signupNavigationHandler = () => navigate("/auth/signup");
  const { currentUser } = useContext(UserContext);
const [navIcon, setNavIcon] = useState(faBars);
const [navView, setNavView] = useState('top-[-100%]')

  const navIconToggle = () => {
      const change = navIcon === faBars ? faClose : faBars;
      const view = navView === 'top-[-100%]' ? 'top-[13.5%]' : 'top-[-100%]'
      setNavIcon(change);
      setNavView(view);
  }
  return (
    <Fragment>
      <div className=" h-[6.25rem] justify-between items-center flex md:flex px-[1rem] bg-[#d5c6f9]  ">
        <div className="md:w-[39rem] h-[32.375rem] absolute md:-top-[0.4rem] md:-left-[10rem] -z-10 md:block ">
          <img
            className="w-full h-full object-contain"
            src="/images/Group 2.png"
          />
        </div>
        <div className="text-[1.5rem] flex items-center justify-center hover:cursor-pointer md:hidden" ><FontAwesomeIcon onClick={navIconToggle} icon={navIcon}/></div>
        <div className="md:w-[10rem]">
          <span
            onClick={logoNavigationHandler}
            className="hover:cursor-pointer"
          >
            {" "}
            <h1 className="text-[2rem] text-[Mono]">Podcast</h1>
          </span>
        </div>
        <div className={ `md:static absolute duration-500 bg-[#d5c6f9] md:min-h-fit min-h-[45vh] md:w-auto left-0 w-full flex items-center px-2 ${navView}`} >
          <ul className="list-none flex md:flex-row flex-col text-[1rem] font-[400] leading-[1.362rem] text-[#1E1E1E] md:gap-[4vw] gap-8">
            <li>
              <a className="hover:text-[#FFF]" href="#home">
                Home
              </a>
            </li>
            <li>
              <a className="hover:text-[#FFF]" href="#episodes">
                Episodes
              </a>
            </li>
            <li>
              <a className="hover:text-[#FFF]" href="#features">
                Features
              </a>
            </li>
            <li>
              <a className="hover:text-[#FFF]" href="#pricing">
                Pricing
              </a>
            </li>
            <li>
              <a className="hover:text-[#FFF]" href="#categories">
                Categories
              </a>
            </li>
          </ul>
        </div>
        <div className="md:w-fit flex gap-[2vw]">
        {currentUser ? (
          <div>
            <span onClick={signUserOut}>
              <Button  type="button">Sign Out</Button>
            </span>{" "}

          </div>
        ) : (
          <div className=" flex gap-5">
            <span onClick={loginNavigationHandler}>
              <Button>Login</Button>
            </span>
            <span onClick={signupNavigationHandler}>
              <Button type="button">Sign Up</Button>
            </span>
            
          </div>
        )}
        
        </div>
      </div>

      <Outlet />
    </Fragment>
  );
};

export default Navigation;
