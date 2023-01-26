import React, { useState } from "react";
import Link from "next/link";
import UserMenu from "./UserMenu";
import { useRouter } from "next/router";
import {
  BiHome,
  BiCategoryAlt,
  BiUserCircle,
} from "react-icons/bi";

const Navbar = () => {
  const router = useRouter();

  return (
    <div className="navbar flex justify-between bg-slate-100 shadow-lg shadow-slate-500/40 rounded-lg">
      <div>
        <Link
          href="/"
          className="btn btn-ghost normal-case text-xl text-black "
        >
          RYU
        </Link>
      </div>
      <div>
        <ul className="flex gap-2 text-black">
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
      <UserMenu />
    </div>
  );
};

export default Navbar;
