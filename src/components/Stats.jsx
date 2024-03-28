import React from "react";
import desktopbg from "../assets/pattern-background-desktop.svg";
import heroimg from "../assets/illustration-hero.svg";
import music from "../assets/icon-music.svg";
export default function Stats() {
  return (
    <>
        <div className="absolute w-screen">
            <img src={desktopbg} alt="desktopbg" className="mt-[-4rem] w-full hidden lg:block" />
            {/* <img src={mobilebg} alt="desktopbg" className="mt-[-4rem] w-full lg:hidden block" /> */}
        </div>

      <div className="red-hat-medium absolute h-screen w-screen text-center mx-auto flex justify-center items-center">
        <div className="text-[hsl(223,47%,23%)] shadow-2xl cardo md:w-[34%] 2xl:w-[29%] w-[89%] bg-white rounded-2xl">
        <img src={heroimg} alt="heroimg" className="mx-auto w-full rounded-t-2xl" />
        <div className="px-2 lg:px-0 p-7">
        <h1 className="red-hat-black text-2xl">Order Summary</h1>
        <p className="px-8 py-4 text-[hsl(224,23%,55%)]">You can now listen to millions of song, audiobooks, and podcasts on any device anywhere you like!</p>
        <div className="grid grid-cols-4 mx-4 p-4 rounded-lg bg-[hsl(225,100%,98%)] mb-8">
            <img src={music} alt="music" className="my-auto" />
            <div className="col-span-2 text-left">
                <h1 className="red-hat-black text-[1rem]">Annual Plan</h1>
                <p className="text-[1rem] text-[hsl(224,23%,55%)]">$59.99/year</p>
            </div>
            <p className="underline text-sm mx-auto red-hat-black text-[hsl(245,75%,52%)] hover:text-[hsl(246,50%,59%)] my-auto">Change</p>
        </div>
        <button className="bg-[hsl(245,75%,52%)] hover:bg-[hsl(246,50%,59%)] mx-4 w-[90%] py-3 shadow-xl text-[hsl(225,100%,98%)] rounded-xl red-hat-bold">Proceed to Payment</button>
        <button className="mx-4 w-[90%] pt-8 pb-4 text-[hsl(224,23%,55%)] hover:text-[hsl(223,47%,23%)] rounded-lg red-hat-bold text-md">Cancel Order</button>

        </div>
        
            </div>
        </div>
    </>
  );
}
