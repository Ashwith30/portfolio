import React from "react";
import { FloatingDock } from "../ui/FloatingDock";

import {
  IconBrandGithub,
  IconBrandLinkedin,
  IconMail,
} from "@tabler/icons-react";

function Dock() {
  const links = [
    {
      title: "GitHub",
      icon: <IconBrandGithub size={24} color="#cfcfcf" />,
      href: "https://github.com/Ashwith30",
    },
    {
      title: "LinkedIn",
      icon: <IconBrandLinkedin size={24} color="#cfcfcf" />,
      href: "https://www.linkedin.com/in/ashwith-reddy-06a1b6290/",
    },
    {
      title: "LeetCode",
      icon: (
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/1/19/LeetCode_logo_black.png"
          width={24}
        />
      ),
      href: "https://leetcode.com/u/Ashwith_Reddy/",
    },
    {
      title: "Email",
      icon: <IconMail size={24} color="#cfcfcf" />,
      href: "mailto:ashwith0530@gmail.com",
    },
  ];

  return <FloatingDock items={links} />;
}

export default Dock;