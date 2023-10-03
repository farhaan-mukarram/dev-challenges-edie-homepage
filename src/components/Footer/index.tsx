import instagramSocial from "../../assets/icons/instagram.svg";

import twitterSocial from "../../assets/icons/twitter.svg";
import linkedInSocial from "../../assets/icons/linkedin.svg";

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
        <div className="flex justify-between">
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

          <div className="flex flex-col gap-y-2">
            <p className="text-white">Want us to contact you?</p>

            <form
              className="relative flex items-center overflow-hidden"
              onSubmit={(event) => event?.preventDefault()}
            >
              <input
                required
                type="email"
                name="email"
                id="email"
                className="bg-[#F2F2F2] rounded-xl py-4 pl-5 w-full"
                placeholder="Email"
              />

              <button
                type="submit"
                value="Join"
                className="bg-[#2D9CDB] text-white py-3 px-7 rounded-xl w-max absolute top-1 bottom-1 right-1 my-auto"
              >
                Join
              </button>
            </form>
          </div>
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
