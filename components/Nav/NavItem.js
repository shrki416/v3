import Link from "next/link";
import NavArrow from "../SVGs/NavArrow";
import { useRouter } from "next/router";

function NavItem({ href, text }) {
  const router = useRouter();
  const isActive = router.asPath === href;

  return (
    <Link href={href}>
      <a
        className={`text-base ${
          isActive ? "text-gray-500 font-bold" : "text-gray-700"
        }`}
      >
        {text} {isActive && <NavArrow />}
      </a>
    </Link>
  );
}

export default NavItem;
