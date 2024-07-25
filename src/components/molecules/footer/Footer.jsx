import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
    faFacebook,
    faInstagram,
    faLinkedin,
    faTwitter,
  } from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
    return (
        <div>
         <section>
        <div className="bg-[#320E3B] h-[20.75rem] w-full flex justify-center items-center flex-col md:rounded-[0.625rem] relative ">
          <div className="absolute right-0 top-0 hidden md:block">
            <img src="/images/Ellipse 12.png" />
          </div>
          <div className="flex-col flex items-center justify-center gap-3">
            <h2 className="text-[#FFFFFF] md:text-[2.25rem] text-[2rem] font-[700] leading-[3.064rem]">
              Never miss an episode
            </h2>
            <p className="text-[#FFFFFF] text-[1rem] font-[400] leading-[1.362rem]">
              Get notified anytime there is something new
            </p>
          </div>

          <div className="flex md:pt-[3.25rem] pt-[2rem]">
            <input
              className="md:w-[35.125rem] w-[15rem] h-[3.125rem] md:pl-[2.5rem] pl-[1rem] rounded-none"
              type="text"
              placeholder="Enter email address here"
            />
            <button className="text-[1rem] color-[#320E3B] font-[600] bg-[#FFFFFF] px-4">
              Subscribe
            </button>
          </div>
          <div className="absolute left-0 bottom-0 hidden md:block">
            <img src="/images/Ellipse 11.png" />
          </div>
        </div>
      </section>
            <section className="pt-[6.375rem]">
        <div className="flex justify-between w-full px-4 ">
          <div className=" flex md:w-[11.25rem] flex-col gap-[1.563rem]">
            <h1 className="md:text-[2rem] text-[1.5rem] text-[Mono]">
              Podcast
            </h1>
            <p className="md:text-[0.875rem] text-[0.7rem] leading-[1.313rem] font-[500]">
              Your number one podcast streaming plaform
            </p>
            <div className="flex justify-between md:w-full w-[8rem]">
              <a href="www.facebook.com">
                <FontAwesomeIcon icon={faFacebook} />
              </a>
              <a href="www.instagram.com">
                <FontAwesomeIcon icon={faInstagram} />
              </a>
              <a href="www.twiter.com">
                <FontAwesomeIcon icon={faTwitter} />
              </a>
              <a href="www.linkedin.com">
                <FontAwesomeIcon icon={faLinkedin} />
              </a>
            </div>
          </div>
          <div className=" flex md:w-[11.25rem] w-1/3 flex-col gap-[1.563rem]">
            <p className="text-[1rem] text-[Mono] font-[500]">Company</p>
            <a href="#">
              <p className="md:text-[0.875rem] text-[0.7rem] leading-[1.313rem]">
                {" "}
                About us
              </p>
            </a>
            <a href="#">
              <p className="md:text-[0.875rem] text-[0.7rem] leading-[1.313rem]">
                {" "}
                Career
              </p>
            </a>
            <a href="#">
              <p className="md:text-[0.875rem] text-[0.7rem] leading-[1.313rem]">
                {" "}
                FAQs
              </p>
            </a>
          </div>
          <div className=" flex md:w-[11.25rem] w-1/3 flex-col gap-[1.563rem]">
            <p className="text-[1rem] text-[Mono] font-[500]">Contact</p>

            <p className="md:text-[0.875rem] text-[0.7rem] leading-[1.313rem]">
              {" "}
              (+24) 777 864 0904{" "}
            </p>

            <a href="mailto:podcast@gmail.com">
              <p className="md:text-[0.875rem] text-[0.7rem] leading-[1.313rem]">
                {" "}
                podcast@gmail.com
              </p>
            </a>
            <a href="#">
              <p className="md:text-[0.875rem] text-[0.7rem] leading-[1.313rem]">
                London, United Kingdom
              </p>
            </a>
          </div>
        </div>
      </section>
      <footer className="py-[1rem]">
        <div className="flex justify-center">
          <p className="text-xs">&copy; Christopher 2024</p>
        </div>
      </footer>
        </div>
    )
}

export default Footer;