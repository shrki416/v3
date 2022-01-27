import { useEffect, useState } from "react";

import GithubSVG from "../SVGs/GithubSVG";
import Link from "next/link";
import LinkedInSVG from "../SVGs/LinkedInSVG";
import MobileMenu from './MobileMenu';
import NavArrow from "../SVGs/NavArrow";
import NavItem from './NavItem';
import ToggleButton from "./ToggleButton";
import TwitterSVG from "../SVGs/TwitterSVG";
import data from "../../data";
import { useRouter } from "next/router";
import { useTheme } from "next-themes";

export default function Navbar() {
  const router = useRouter();
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <>
      <nav className="flex md:flex-row justify-between items-center">
        <header className="flex flex-col">
          <Link href="/">
            <a>
              <h1 className="font-semibold md:text-xl">{data.name}</h1>
              <p className="font-light text-xs md:text-base text-grey-500">
                {data.designation}
              </p>
            </a>
          </Link>
        </header>

        <div className="space-x-8 md:block hidden">
          <NavItem href="/about" text="About" />
          <NavItem href="/projects" text="Projects" />
          <NavItem href="/contact" text="Contact" />
        </div>

        <div className="space-x-4 flex flex-row items-center">
          <a
            href={data.socialLinks.github}
            className="text-base font-normal text-gray-500"
          >
            <GithubSVG />
          </a>

          <a
            href={data.socialLinks.linkedin}
            className="text-base font-normal text-gray-500"
          >
            <TwitterSVG />
          </a>

          <a
            href={data.socialLinks.twitter}
            className="text-base font-normal text-gray-500"
          >
            <LinkedInSVG />
          </a>

          <ToggleButton
            mounted={mounted}
            setMounted={setMounted}
            theme={theme}
            setTheme={setTheme}
          />
        </div>
      </nav>
      <MobileMenu />
    </>
  );
}
