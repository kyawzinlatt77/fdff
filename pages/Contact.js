import { useRouter } from "next/router";
import React from "react";
import {
  FaTwitter,
  FaFacebookF,
  FaTelegramPlane,
  FaDiscord,
} from "react-icons/fa";

const Contact = () => {
  const router = useRouter();
  const forReload = () => {
    router.reload();
  };

  return (
    <div className="m-4 shadow-xl rounded-lg">
      <div className="flex flex-col p-20">
        <h2 className="text-3xl font-bold mt-28 mb-7">Contact</h2>
        <p className="text-md mb-7">
          Please submit your inquiry using the form below and we will get in
          touch with you shortly.
        </p>
        <div className="flex gap-1.5">
          <span className="mb-4 btn bg-white text-black outline-none border-none hover:bg-slate-300 rounded-full shadow-lg shadow-slate-600/60 dark:bg-[#091129] dark:text-white dark:hover:bg-[#0E193D]">
            <a
              href="https://twitter.com/KyawZin21147726/following"
              className="flex "
            >
              <FaTwitter className="text-2xl " /> <p>Twitter</p>
            </a>
          </span>
          <span className="mb-4 btn bg-white text-black outline-none border-none hover:bg-slate-300 rounded-full shadow-lg shadow-slate-600/60 dark:bg-[#091129] dark:text-white dark:hover:bg-[#0E193D]">
            <a
              href="https://www.facebook.com/kyaw.z.latt.92167"
              className="flex "
            >
              <FaFacebookF className="text-2xl " /> <p>Facebook</p>
            </a>
          </span>
          <span className="mb-4 btn bg-white text-black outline-none border-none hover:bg-slate-300 rounded-full shadow-lg shadow-slate-600/60 dark:bg-[#091129] dark:text-white dark:hover:bg-[#0E193D]">
            <a href="https://discord.gg/2NfhJgKy" className="flex ">
              <FaDiscord className="text-2xl " /> <p>Discord</p>
            </a>
          </span>
          <span className="mb-4 btn bg-white text-black outline-none border-none hover:bg-slate-300 rounded-full shadow-lg shadow-slate-600/60 dark:bg-[#091129] dark:text-white dark:hover:bg-[#0E193D]">
            <a href="https://t.me/+j3C6XaW3KNA1NDNl" className="flex ">
              <FaTelegramPlane className="text-2xl " /> <p>Telegram</p>
            </a>
          </span>
        </div>
        <div className="w-2/5 p-6 rounded-lg shadow-lg shadow-slate-600/60">
          <from className="mx-auto">
            <div className="my-3 mx-auto">
              <input
                type="text"
                placeholder="Enter Your Name"
                className="w-full mt-2 p-4 outline-none border-none rounded-lg bg-[#2B2727] dark:bg-slate-800"
              />
            </div>
            <div className="my-3 mx-auto">
              <input
                type="text"
                placeholder="Enter Your Email"
                className="w-full mt-2 p-4 outline-none border-none rounded-lg bg-[#2B2727] dark:bg-slate-800"
              />
            </div>
            <div className="my-3 mx-auto">
              <textarea
                className="w-full h-40 mt-2 p-4 outline-none border-none rounded-lg bg-[#2B2727] dark:bg-slate-800"
                placeholder="Type Massage..."
              ></textarea>
            </div>
            <button
              onClick={forReload}
              className="w-full mt-2 p-3 text-lg outline-none border-none font-bold bg-[#2B2727] text-white rounded-lg tracking-wide transition-all hover:bg-[#121010] hover:text-[#bfbbbb] dark:bg-slate-800"
            >
              Submit
            </button>
          </from>
        </div>
      </div>
    </div>
  );
};

export default Contact;
