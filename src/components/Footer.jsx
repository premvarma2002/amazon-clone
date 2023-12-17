import React from "react";
import { RiExpandUpDownFill } from "react-icons/ri";
import { PiGlobeLight } from "react-icons/pi";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth", // For smooth scrolling
    });
  };
  return (
    <div className="">
      <div
  className="flex cursor-pointer hover:bg-gray-600 bg-[#37474F] justify-center items-center text-center text-white text-xs xl:text-base p-3 relative"
  onClick={() => scrollToTop()}
>
  Back to top
</div>

      <div className=" bg-gray-800">
        <div className="flex grid-cols-4  p-12 justify-center gap-28  ">
          <div className=" grid-col-1 text-white ">
            <div className=" text-base font-bold py-1">Get to Know Us</div>
            <div className="text-sm py-1 hover:underline cursor-pointer">
              About Us
            </div>
            <div className="text-sm py-1 hover:underline cursor-pointer">
              Careers
            </div>
            <div className="text-sm py-1 hover:underline cursor-pointer">
              Press Releases
            </div>
            <div className="text-sm py-1 hover:underline cursor-pointer">
              Amazon Science
            </div>
          </div>

          <div className=" grid-col-1 text-white ">
            <div className=" text-base font-bold py-1">Connect with Us</div>
            <div className="text-sm py-1 hover:underline cursor-pointer">
              Facebook
            </div>
            <div className="text-sm py-1 hover:underline cursor-pointer">
              Twitter
            </div>
            <div className="text-sm py-1 hover:underline cursor-pointer">
              Instagram
            </div>
          </div>

          <div className=" grid-col-1 text-white ">
            <div className=" text-base font-bold py-1">Make Money with Us</div>
            <div className="text-sm py-1 hover:underline cursor-pointer">
              Sell on Amazon
            </div>
            <div className="text-sm py-1 hover:underline cursor-pointer">
              Sell under Amazon Accelerator
            </div>
            <div className="text-sm py-1 hover:underline cursor-pointer">
              Protect and Build Your Brand
            </div>
            <div className="text-sm py-1 hover:underline cursor-pointer">
              Amazon Global Selling
            </div>
            <div className="text-sm py-1 hover:underline cursor-pointer">
              Become an Affiliate
            </div>
            <div className="text-sm py-1 hover:underline cursor-pointer">
              Fulfilment by Amazon
            </div>
            <div className="text-sm py-1 hover:underline cursor-pointer">
              Advertise Your Products
            </div>
            <div className="text-sm py-1 hover:underline cursor-pointer">
              Amazon Pay on Merchants
            </div>
          </div>

          <div className=" grid-col-1 text-white ">
            <div className=" text-base font-bold py-1">Let Us Help You</div>
            <div className="text-sm py-1 hover:underline cursor-pointer">
              COVID-19 and Amazon
            </div>
            <div className="text-sm py-1 hover:underline cursor-pointer">
              Your Account
            </div>
            <div className="text-sm py-1 hover:underline cursor-pointer">
              Returns Centre
            </div>
            <div className="text-sm py-1 hover:underline cursor-pointer">
              100% Purchase Protection
            </div>
            <div className="text-sm py-1 hover:underline cursor-pointer">
              Amazon App Download
            </div>
            <div className="text-sm py-1 hover:underline cursor-pointer">
              Help
            </div>
          </div>
        </div>

        <hr className="w-full h-px  bg-gray-200 border-0 dark:bg-gray-700" />
        <div className=" text-white  bg-gray-800 justify-center">
          <div className="justify-center pt-8 flex gap-16">
            <img
              src="../images/amazon.png"
              className="h-8 w-18 justify-center items-center pt-1 "
              alt=""
            />
            <span className="flex gap-1 border rounded-sm font-light mb-1">
              {" "}
              <PiGlobeLight className="h-7 w-5 pl-1 " /> English{" "}
              <RiExpandUpDownFill className="h-3 w-3 mt-1 ml-4 text-slate-500 mr-1" />
            </span>
          </div>

          <div className="flex space-x-2 justify-center text-xs gap-2  pt-8 px-36">
            <div className="hover:underline cursor-pointer">Australia</div>
            <div className="hover:underline cursor-pointer">Brazil</div>
            <div className="hover:underline cursor-pointer">Canada</div>
            <div className="hover:underline cursor-pointer">China</div>
            <div className="hover:underline cursor-pointer">France</div>
            <div className="hover:underline cursor-pointer">Germany</div>
            <div className="hover:underline cursor-pointer">Italy</div>
            <div className="hover:underline cursor-pointer">Japan</div>
            <div className="hover:underline cursor-pointer">Mexico</div>
            <div className="hover:underline cursor-pointer">Netherlands</div>
            <div className="hover:underline cursor-pointer">Poland</div>
            <div className="hover:underline cursor-pointer">Singapore</div>
            <div className="hover:underline cursor-pointer">Spain</div>
            <div className="hover:underline cursor-pointer">Turkey</div>
            <div className="hover:underline cursor-pointer">
              United Arab Emirates
            </div>
          </div>
          <div className=" items-center flex space-x-2 justify-center text-xs gap-2 pt-1 pb-8">
            <div className="hover:underline cursor-pointer break-normal">
              United Kingdom
            </div>
            <div className="hover:underline cursor-pointer">United States</div>
          </div>
        </div>
      </div>

      <div className="items-center  bg-amazonclone-Footer justify-center ">
        <div className="flex  text-center text-white grid-cols-2  justify-center py-8">
          {/* First Group */}
          <div className="grid grid-cols-4 gap-x-16  gap-y-4 text-xs text-start ">
            {/* First Column */}
            <div className="flex flex-col hover:underline cursor-pointer">
              <div className="text-xs">AbeBooks</div>
              <div className="font-extralight text-gray-300">Books, art</div>
              <div className="font-extralight text-gray-300">
                & collectibles
              </div>
            </div>

            {/* Second Column */}
            <div className="flex flex-col hover:underline cursor-pointer">
              <div className="text-xs">Amazon Web Services</div>
              <div className="font-extralight text-gray-300">
                Scalable Cloud
              </div>
              <div className="font-extralight text-gray-300">
                Computing Services
              </div>
            </div>

            {/* Third Column */}
            <div className="flex flex-col hover:underline cursor-pointer">
              <div className="text-xs">Audible</div>
              <div className="font-extralight text-gray-300">Download</div>
              <div className="font-extralight text-gray-300">Audio Books</div>
            </div>

            {/* Fourth Column */}
            <div className="flex flex-col hover:underline cursor-pointer">
              <div className="text-xs">IMDb</div>
              <div className="font-extralight text-gray-300">Movies, TV</div>
              <div className="font-extralight text-gray-300">& Celebrities</div>
            </div>

            {/* Fifth Column */}
            <div className="flex flex-col hover:underline cursor-pointer">
              <div className="text-xs">Shopbop</div>
              <div className="font-extralight text-gray-300">Designer</div>
              <div className="font-extralight text-gray-300">
                Fashion Brands
              </div>
            </div>

            {/* Sixth Column */}
            <div className="flex flex-col hover:underline cursor-pointer">
              <div className="text-xs">Amazon Business</div>
              <div className="font-extralight text-gray-300">
                Everything For
              </div>
              <div className="font-extralight text-gray-300">Your Business</div>
            </div>

            {/* Seventh Column */}
            <div className="flex flex-col hover:underline cursor-pointer">
              <div className="text-xs">Prime Now</div>
              <div className="font-extralight text-gray-300">
                2-Hour Delivery
              </div>
              <div className="font-extralight text-gray-300">
                on Everyday Items
              </div>
            </div>

            {/* Eighth Column */}
            <div className="flex flex-col hover:underline cursor-pointer">
              <div className="text-xs">Amazon Prime Music</div>
              <div className="font-extralight text-gray-300">
                100 million songs, ad-free
              </div>
              <div className="font-extralight text-gray-300">
                Over 15 million podcast episodes
              </div>
            </div>
          </div>
        </div>

        <div className="text-white text-xs flex gap-4 justify-center">
          <div>Conditions of Use & Sale</div>
          <div>Privacy Notice</div>
          <div>Interest-Based Ads</div>
        </div>
        <div className="text-white text-xs flex justify-center pb-8 pt-1">
          <div> © 1996-2023, Amazon.com, Inc. or its affiliates</div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
