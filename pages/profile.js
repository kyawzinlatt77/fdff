import React from "react";
import { withPageAuthRequired } from "@auth0/nextjs-auth0";
import { useRouter } from "next/router";

export const getServerSideProps = withPageAuthRequired();

const profile = ({ user }) => {
  const router = useRouter();
  return (
    <main className="w-1/2 m-16 mx-auto py-20 p-4 bg-white border shadow-xl rounded">
      {user ? (
        <div className="flex flex-col items-center content-center">
          <img
            className="w-24 m-4 rounded-full"
            src={user.picture}
            alt={user.name}
          />
          <h2>{user.name}</h2>
          <p>{user.email}</p>
          <button className="mt-4 btn btn-sm rounded-full text-black bg-white hover:bg-slate-100 active:bg-slate-200 focus:outline-none focus:ring focus:ring-white transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110  duration-300">
            Saved List
          </button>
          <button
            onClick={() => router.push("/api/auth/logout")}
            className="mt-4 btn btn-sm rounded-full text-black bg-white hover:bg-slate-100 active:bg-slate-200 focus:outline-none focus:ring focus:ring-white transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110  duration-300"
          >
            Log out
          </button>
        </div>
      ) : null}
    </main>
  );
};

export default profile;
