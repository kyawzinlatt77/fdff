import React, { useEffect, useState } from "react";
import Link from "next/link";
import UserMenu from "./UserMenu";
import { useRouter } from "next/router";
import {
  BiHome,
  BiCategoryAlt,
  BiUserCircle,
  BiSun,
  BiMoon,
} from "react-icons/bi";
import { useTheme } from "next-themes";

const Navbar = () => {
  const router = useRouter();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const { systemTheme, theme, setTheme } = useTheme();
  const renderThemeChanger = () => {
    if (!mounted) return null;
    const currentTheme = theme === "system" ? systemTheme : theme;

    if (currentTheme === "dark") {
      return (
        <BiSun
          className="w-7 h-7"
          role="button"
          onClick={() => setTheme("light")}
        />
      );
    } else {
      return (
        <BiMoon
          className="w-7 h-7"
          role="button"
          onClick={() => setTheme("dark")}
        />
      );
    }
  };

  return (
    <div className="navbar flex justify-between bg-slate-100 shadow-lg shadow-slate-500/40 rounded-lg dark:bg-slate-900 dark:text-white">
      <div>
        <Link
          href="/"
          className="btn btn-ghost normal-case text-xl text-black dark:text-white"
        >
          RYU
        </Link>
      </div>
      <div>
        <ul className="flex gap-2 text-black dark:text-white">
          <li onClick={() => router.push("/")} className=" btn btn-ghost">
            <BiHome className="text-lg mb-1" /> Home
          </li>
          <li
            onClick={() => router.push("/movies/AllMovies")}
            className=" btn btn-ghost"
          >
            <BiCategoryAlt className="text-lg mb-1" /> Categories
          </li>
          <li
            onClick={() => router.push("/Contact")}
            className=" btn btn-ghost"
          >
            <BiUserCircle className="text-xl mb-1" /> Contact
          </li>
        </ul>
      </div>

      <div className="gap-4">
        <UserMenu />
        {renderThemeChanger()}
      </div>
    </div>
  );
};

export default Navbar;
