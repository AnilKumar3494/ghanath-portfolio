import React from "react";

//icons
import { FaLinkedin } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FaGithub } from "react-icons/fa6";
import { IoDocumentAttach } from "react-icons/io5";

//styles
import "./quickLinksStyles.css";

const QuickLinks = () => {
  const icons = [
    {
      id: 1,
      link: "https://www.linkedin.com/feed/",
      iconComponent: <FaLinkedin />,
    },
    {
      id: 2,
      link: "https://www.linkedin.com/feed/",
      iconComponent: <MdEmail />,
    },
    {
      id: 3,
      link: "https://www.linkedin.com/feed/",
      iconComponent: <FaGithub />,
    },
    {
      id: 4,
      link: "https://www.linkedin.com/feed/",
      iconComponent: <IoDocumentAttach />,
    },
  ];

  return (
    <div className="icon_grid">
      {icons.map((icon) => (
        <a key={icon.id} href={icon.link} className="icon_link" target="_blank">
          <i>{icon.iconComponent}</i>
        </a>
      ))}
    </div>
  );
};

export default QuickLinks;
