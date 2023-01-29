import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import { FaTwitter, FaFacebookF, FaLinkedinIn } from "react-icons/fa";

const Footer = () => {
  const router = useRouter();
  return (
    <footer className="p-10 mt-8 bg-white text-black rounded-2xl dark:bg-slate-900 dark:text-white dark:shadow-lg">
      <div className="container mx-auto footer ">
        <div>
          <span className="footer-title">Services</span>
          <a className="link link-hover">Design</a>
          <a
            onClick={() => router.push("/movies/AllMovies")}
            className="link link-hover"
          >
            Category
          </a>
        </div>
        <div>
          <span className="footer-title">Company</span>
          <a className="link link-hover">About us</a>
          <a
            onClick={() => router.push("/Contact")}
            className="link link-hover"
          >
            Contact
          </a>
        </div>
        <div>
          <span className="footer-title">Social</span>
          <div className="grid grid-flow-col gap-4">
            <a href="https://twitter.com/KyawZin21147726/following">
              <FaTwitter className="text-2xl" />
            </a>
            <a href="https://www.linkedin.com/in/kyaw-zin-latt-91b98624b/">
              <FaLinkedinIn className="text-2xl" />
            </a>
            <a href="https://www.facebook.com/kyaw.z.latt.92167">
              <FaFacebookF className="text-2xl" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
