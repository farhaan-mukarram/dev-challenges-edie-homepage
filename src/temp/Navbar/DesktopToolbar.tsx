import { FunctionComponent } from "react";

interface Props {
  links: Array<string>;
}

const DesktopToolbar: FunctionComponent<Props> = ({ links }) => {
  return (
    <ul className="items-center hidden ml-auto text-2xl font-medium lg:flex gap-x-14">
      {links.map((link) => (
        <li key={link}>
          <a href="#" className="capitalize">
            {link}
          </a>
        </li>
      ))}
    </ul>
  );
};

export default DesktopToolbar;
