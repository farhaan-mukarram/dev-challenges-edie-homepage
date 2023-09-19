import { FunctionComponent, useEffect, useState } from "react";
import hamburgerIcon from "../../assets/icons/hamburgerMenu.svg";
import closeIcon from "../../assets/icons/close.svg";

interface Props {
  links: Array<string>;
}

const Drawer: FunctionComponent<Props> = ({ links }) => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  useEffect(() => {
    const body = document.querySelector("body") as HTMLBodyElement;

    if (isDrawerOpen) body.style.overflow = "hidden";
    else body.style.overflow = "";
  }, [isDrawerOpen]);

  return (
    <>
      <div className="flex ml-auto lg:hidden">
        <img
          src={!isDrawerOpen ? hamburgerIcon : closeIcon}
          alt="mobile navigation menu toggle"
          className="z-10 cursor-pointer"
          tabIndex={0}
          onClick={() => setIsDrawerOpen((prev) => !prev)}
        />

        {isDrawerOpen && (
          <div className="fixed top-0 right-0 flex flex-col items-center justify-center w-full h-screen bg-white">
            <ul className="flex flex-col items-center w-full text-2xl font-medium gap-y-10">
              {links.map((link) => (
                <li key={link}>
                  <a href="#" className="capitalize">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </>
  );
};

export default Drawer;
