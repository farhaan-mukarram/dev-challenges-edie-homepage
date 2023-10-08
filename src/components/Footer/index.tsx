import instagramSocial from "../../assets/icons/instagram.svg";

import twitterSocial from "../../assets/icons/twitter.svg";
import linkedInSocial from "../../assets/icons/linkedin.svg";
import ContactForm from "../ContactForm";

const footerNavLinks = ["Home", "Services", "Our Works", "Client", "Contact"];

const socialLinks = [
  { link: "instagram", image: instagramSocial },
  { link: "linkedin", image: linkedInSocial },
  { link: "twitter", image: twitterSocial },
];

const Footer = () => {
  return (
    <footer className="bg-[#100E1D] mt-52">
      <div className="flex flex-col p-12 mx-auto max-w-7xl space-y-28">
        <div className="flex flex-col justify-between lg:flex-row gap-y-16">
          <nav>
            <ul className="flex flex-col space-y-4 text-white">
              {footerNavLinks.map((link) => (
                <li key={link}>{link}</li>
              ))}
            </ul>
          </nav>

          <div className="flex flex-col space-y-3">
            <h2 className="text-4xl font-extrabold text-white font-heebo">
              Edie
            </h2>

            <div className="flex items-center space-x-3">
              {socialLinks.map(({ link, image }) => (
                <a href="#" key={link}>
                  <img src={image} alt={`${link}-social-icon`} />
                </a>
              ))}
            </div>
          </div>

          <ContactForm />
        </div>

        <p className="font-medium text-center text-[#BDBDBD]">
          created by{" "}
          <span className="font-bold">
            <a
              href="https://github.com/farhaan-mukarram/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline"
            >
              farhaan-mukarram
            </a>
          </span>
          {" - "}
          <a
            href="https://devchallenges.io/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:underline"
          >
            devChallenges.io
          </a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
