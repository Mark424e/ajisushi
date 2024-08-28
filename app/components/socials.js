import React from "react";
import Image from "next/image";

export const Socials = () => {
  return (
    <div>
      <ul className="flex items-center">
        <li className="border-s border-gray-100/25 px-4">
          <a href="/" target="_blank">
            <Image
              className="flex max-w-5 max-h-5 transition hover:opacity-60"
              src="/square-facebook-brands-solid.svg"
              width={20}
              height={20}
              alt="Facebook logo"
            />
          </a>
        </li>
        <li className="border-s border-gray-100/25 px-4">
          <a href="/" target="_blank">
            <Image
              className="flex max-w-5 max-h-5 transition hover:opacity-60"
              src="/instagram-brands-solid.svg"
              width={20}
              height={20}
              alt="Instagram logo"
            />
          </a>
        </li>
        <li className="border-s border-gray-100/25 px-4">
          <a href="/" target="_blank">
            <Image
              className="flex max-w-5 max-h-5 transition hover:opacity-60"
              src="/x-twitter-brands-solid.svg"
              width={20}
              height={20}
              alt="X logo"
            />
          </a>
        </li>
        <li className="border-s border-gray-100/25 px-4">
          <a href="/" target="_blank">
            <Image
              className="flex max-w-5 max-h-5 transition hover:opacity-60"
              src="/youtube-brands-solid.svg"
              width={20}
              height={20}
              alt="YouTube logo"
            />
          </a>
        </li>
        <li className="border-s border-gray-100/25 px-4">
          <a href="/" target="_blank">
            <Image
              className="flex max-w-5 max-h-5  transition hover:opacity-60"
              src="/linkedin-brands-solid.svg"
              width={20}
              height={20}
              alt="LinkedIn logo"
            />
          </a>
        </li>
        <li className="border-x border-gray-100/25 px-4">
          <a href="/" target="_blank">
            <Image
              className="flex max-w-5 max-h-5 transition hover:opacity-60"
              src="/tiktok-brands-solid.svg"
              width={20}
              height={20}
              alt="TikTok logo"
            />
          </a>
        </li>
      </ul>
    </div>
  );
};
