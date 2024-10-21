"use client";
import React from "react";
import { motion } from "framer-motion";
import { slideInFromTop } from "@/utils/motion";
import Image from "next/image";
import Link from "next/link";

const Encryption = () => {
  return (
    <div className="flex flex-row relative items-center justify-center min-h-screen w-full h-full">
      <div className="absolute w-auto h-auto top-0 z-[5]">
        <motion.div
          variants={slideInFromTop}
          className="text-[40px] font-medium text-center text-gray-200"
        >
          My
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
            {" "}
            Profile&apos;s
          </span>
        </motion.div>
      </div>

      <div className="flex flex-col items-center justify-center translate-y-[-50px] absolute z-[20] w-auto h-auto">
        <div className="flex flex-col items-center group cursor-pointer w-auto h-auto">
          <Image
            src="/linkedin.png"
            alt="LinkedIn Icon"
            width={70}
            height={70}
            className="z-10"
          />
        </div>

        <div className="Welcome-box px-[15px] py-[4px] z-[20] border my-[20px] border-[#7042f88b] opacity-[0.9]">
          <h1 className="Welcome-text text-[12px] cursor-pointer">
            <Link href="https://www.linkedin.com/in/chinni-yadav-8215ab230/">LinkedIn</Link>
          </h1>
        </div>
        <div className="flex gap-5">
          <div>
            <a
              href="https://www.linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
            >
            
            </a>
          </div>
          <div>
            <Image
              src="/Stop.png"
              alt="Stop Icon"
              width={70}
              height={70}
              className="z-10"
            />
            <div>
              <a
                href="https://www.stopstalk.com/user/profile/ChinniYadav"
                target="_blank"
                rel="noopener noreferrer"
              >
                <h1 className="text-white cursor-pointer"><u>StopStalk</u></h1>
              </a>
            </div>
          </div>
          <div>
            <Image
              src="/beneto.gif"
              alt="Bento Icon"
              width={70}
              height={70}
              className="z-10"
            />
            <div>
              <a
                href="https://bento.me/chinni9999"
                target="_blank"
                rel="noopener noreferrer"
              >
                <h1 className="text-white cursor-pointer"><u>Bento.com</u></h1>
              </a>
            </div>
          </div>
          <div>
            <Image
              src="/cred.png"
              alt="Credly Icon"
              width={70}
              height={70}
              className="z-10"
            />
            <div>
              <a
                href="https://www.credly.com/users/chinni-amrutha-vamsi/badges"
                target="_blank"
                rel="noopener noreferrer"
              >
                <h1 className="text-white cursor-pointer"><u>Credly.com</u></h1>
              </a>
            </div>
          </div>
          <div>
            <Image
              src="/sales.png"
              alt="Salesforce Icon"
              width={70}
              height={70}
              className="z-10"
            />
            <div>
              <a
                href="https://www.salesforce.com/trailblazer/nxbz4lfep5n2rmq5t7"
                target="_blank"
                rel="noopener noreferrer"
              >
                <h1 className="text-white cursor-pointer"><u>SalesForce</u></h1>
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute z-[20] bottom-[10px] px-[5px]">
        <div className="cursive text-[20px] font-medium text-center text-gray-300">
          Feel Free to ask About My projects
        </div>
      </div>

      <div className="w-full flex items-start justify-center absolute">
        <video
          loop
          muted
          autoPlay
          playsInline
          preload="false"
          className="w-full h-auto"
          src="/encryption.webm"
        />
      </div>
    </div>
  );
};

export default Encryption;
