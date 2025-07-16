import react from "react";
import { Link } from "react-router-dom";
import Contactus from "../image/contact.jpg";

const Contact = () => {
  return (
   <div className="container mx-auto px-3 py-8">
        <div>
          <img src={Contactus} className="w-[1700px] h-[400px]" />
        </div>
        <div className="relative">
          <div className=" absolute right-[40%] -top-[40%] left-[10%] max-md:-top-[25%]">
            <h1 className="text-[50px] uppercase font-medium leading-5 tracking-widest text-center max-md:text-[40px]">
              Contact us
            </h1>
          </div>

          <div className="flex mt-4 max-md:block">
            <div className="">
              <form className="bg-purple-200 py-[30px] px-[20px]  rounded-lg w-full h-[550px] max-md:w-[330px]">
                <div className="">
                  <p className="mb-2">Your Name:</p>
                  <input
                    type="text"
                    name="name"
                    placeholder="Enter Your name"
                    className="border p-2 w-[560px] rounded-lg max-md:w-[300px]"
                  />
                </div>

                <div className="mt-5">
                  <p className="mb-2">Your Mobile:</p>
                  <input
                    type="tel"
                    name="number"
                    placeholder="Enter Your Mobile"
                    className="border p-2 w-[560px] rounded-lg max-md:w-[300px]"
                    maxLength="10"
                  />
                </div>

                <div className="mt-5">
                  <p className="mb-2">Your Email:</p>
                  <input
                    type="email"
                    name="number"
                    placeholder="Enter Your Email"
                    className="border p-2 w-[560px] rounded-lg max-md:w-[300px]"
                  />
                </div>

                <div className="mt-5 ">
                  <p className="mb-2">Your Comment:</p>
                  <textarea
                    type="text"
                    name="number"
                    placeholder="Enter Your Comment"
                    className="border p-2 w-[560px] h-[100px] resize-none rounded-lg max-md:w-[300px]"
                  />
                </div>

                <div className="mt-5">
                  <button className="bg-black text-white px-12 py-3 rounded-lg">
                    Submit
                  </button>
                </div>
              </form>
            </div>
            <div className="flex-1  ml-20 max-md:mt-7 max-md:ml-0">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d59503.34479529226!2d72.786149566676!3d21.233472386937713!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1show%20to%20get%20iframe%20google%20maps!5e0!3m2!1sen!2sin!4v1750912251130!5m2!1sen!2sin"
                width="600"
                height="550"
                className="border:0 max-md:w-[300px]"
                allowfullscreen=""
                loading="lazy"
                referrerpolicy="no-referrer-when-downgrade"
  
              ></iframe>
            </div>
          </div>
        </div>
      </div>

  );
};

export default Contact;
