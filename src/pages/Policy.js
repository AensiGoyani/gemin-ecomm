import React from "react";
import { FaCircle } from "react-icons/fa";
import Policyimg from "../image/policy.jpg";

const Policy = () => {
  return (
    <>
     <div className="container mx-auto  py-8">
          <div>
            <img src={Policyimg} className="w-[1700px] h-[400px] " />
          </div>
          <div className="relative">
            <div className=" absolute right-[40%] -top-[30%]  left-[10%] max-md:-top-[16%] max-md:right-[20%]">
              <h1 className="text-[50px] uppercase font-medium leading-5 tracking-widest text-center max-md:text-[40px]">
                Privacy Policy
              </h1>
            </div>

            <div className="mt-16 ">
              <div>
                <h2 className="text-3xl leading-9 font-bold">
                  Privacy policy{" "}
                </h2>
                <p className="text-xl leading-9 mt-5">
                  This Privacy Policy governs the manner in which E-shop
                  collects, uses, maintains and discloses information collected
                  from users (each, a "User"). This privacy policy applies to
                  the Site and all products and services offered by E-Shop.
                </p>
              </div>

              <div className="mt-10">
                <h2 className="text-3xl leading-10 font-bold">
                  We require this information to understand your needs and
                  provide you with a better service, and in particular for the
                  following reasons:
                </h2>
                <p className="text-xl leading-9 mt-4">
                  <span className="flex items-center ">
                    <FaCircle className="text-[8px]" />
                    <p className="pl-4">Internal record keeping. </p>{" "}
                  </span>
                  <span className="flex items-center ">
                    <FaCircle className="text-[8px]" />
                    <p className="pl-4">
                      We may use the information to improve our products and
                      services.{" "}
                    </p>{" "}
                  </span>
                  <span className="flex items-baseline leading-8  ">
                    <FaCircle className="text-[11px]" />
                    <p className="pl-4">
                      We may periodically send promotional emails about new
                      products, special offers or other information which we
                      think you may find interesting using the email address
                      which you have provided.
                    </p>{" "}
                  </span>{" "}
                  <span className="flex items-baseline leading-8 ">
                    <FaCircle className="text-[12px]" />
                    <p className="pl-4 ">
                      From time to time, we may also use your information to
                      contact you for market research purposes. We may contact
                      you by email, phone, fax or mail. We may use the
                      information to customize the website according to your
                      interests.
                    </p>{" "}
                  </span>
                </p>
              </div>

              <div className="mt-10">
                <h2 className="text-3xl leading-9 font-bold">
                  How we use cookies
                </h2>
                <p className="text-xl leading-9 mt-10">
                  A cookie is a small file which asks permission to be placed on
                  your computer's hard drive. Once you agree, the file is added
                  and the cookie helps analyze web traffic or lets you know when
                  you visit a particular site. Cookies allow web applications to
                  respond to you as an individual. The web application can
                  tailor its operations to your needs, likes and dislikes by
                  gathering and remembering information about your preferences.
                </p>
                <p className="text-xl leading-9 mt-10">
                  We use traffic log cookies to identify which pages are being
                  used. This helps us analyze data about web page traffic and
                  improve our website in order to tailor it to customer needs.
                  We only use this information for statistical analysis purposes
                  and then the data is removed from the system.
                </p>

                <p className="text-xl leading-9 mt-10">
                  Overall, cookies help us provide you with a better website, by
                  enabling us to monitor which pages you find useful and which
                  you do not. A cookie in no way gives us access to your
                  computer or any information about you, other than the data you
                  choose to share with us. You can choose to accept or decline
                  cookies. Most web browsers automatically accept cookies, but
                  you can usually modify your browser setting to decline cookies
                  if you prefer. This may prevent you from taking full advantage
                  of the website.
                </p>
              </div>
            </div>
          </div>
        </div>
     
    </>
  );
};

export default Policy;
