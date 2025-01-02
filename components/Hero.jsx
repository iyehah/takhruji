"use client";
import Image from "next/image";
import Social from "./Social";
import { switchImage } from "../utils/switchimg";
import { useEffect, useRef } from "react";
import { useRouter } from "next/navigation";

export default function Hero() {
  const imgRef = useRef(null);
  const router = useRouter();
  useEffect(() => {
    const img1 = "1.png";
    const img2 = "2.png"; // Replace with the second image path
    switchImage(imgRef.current, img1, img2);
  }, []);

  return (
    <section className="flex flex-col md:flex-row items-center py-20">
      <div className="md:w-2/3 text-center md:text-left px-4">
        <h1 id="hero-content-title" className="text-3xl md:text-3xl font-bold text-gray-800 px-4">
        Takharuji is a platform
        </h1>
        <p id="hero-content-body" className="text-gray-600 mt-4 text-lg md:text-lg px-4">
        dedicated to being with you during your graduation moments.
        </p>
        <Social/>
        <div className="flex items-center">
        <button id="read-more" className="mt-6 border border-[#24317a]  text-[#24317a] px-6 py-3 rounded-lg hover:bg-[#24317a] hover:text-white mr-1"
          onClick={() => router.push("/services")}>
          Read more
        </button>
        <button id="contact" className="mt-6 border border-[#24317a]  text-[#24317a] px-6 py-3 rounded-lg hover:bg-[#24317a] hover:text-white"
          onClick={() => router.push("/contact")}>
          Contact
        </button></div>
        <p className="mt-2 text-gray-500">Explore the joy. It’s designed for you.</p>
      </div>
      <div className="md:w-1/3 mt-10 md:mt-0 px-4">
        <img ref={imgRef} src="1.png" alt="Happy moment" className="w-full" />
      </div>
    </section>
  );
}
