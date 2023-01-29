import React from "react";
import { useUser } from "@auth0/nextjs-auth0/client";
import { imageConfigDefault } from "next/dist/shared/lib/image-config";
import Link from "next/link";
import { useRouter } from "next/router";

const UserMenu = () => {
  const { user, error, isLoading } = useUser();
  const router = useRouter();

  //   if not logged in
  if (!user) {
    return (
      <div>
        <Link
          href="/api/auth/login"
          className=" btn btn-sm rounded-full text-black bg-white hover:bg-slate-100 active:bg-slate-200 focus:outline-none focus:ring focus:ring-white dark:bg-slate-900 dark:text-white dark:border-white dark:hover:bg-slate-800"
        >
          Login
        </Link>
      </div>
    );
  }

  //   if logged in
  return (
    <div
      onClick={() => router.push("/Profile")}
      className="flex btn items-center gap-2 cursor-pointer border py-1 px-2 rounded-full hover:bg-slate-200 border-black bg-white dark:bg-slate-900  dark:border-white dark:hover:bg-slate-800"
    >
      <img className="w-10 rounded-full" src={user.picture} alt={user.name} />
      <p className="text-black dark:text-white">{user.name}</p>
    </div>
  );
};

export default UserMenu;
