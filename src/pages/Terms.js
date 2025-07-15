import React from "react";
import Termsimg from "../image/terms.jpg";

const Terms = () => {
  return (
    <>
      <div className="container mx-auto px-3 py-8">
        <div>
          <img src={Termsimg} className="w-[1700px] h-[400px]" />
        </div>
        <div className="relative">
          <div className=" absolute  -top-[25%] left-[50%] max-md:-top-[12%] max-md:left-[15%]">
            <h1 className="text-[50px] uppercase font-medium leading-5 tracking-widest text-center max-md:text-[40px]">
              Terms & Conditions
            </h1>
          </div>

          <div className="mt-16 ">
            <div>
              <h2 className="text-xl leading-9 font-bold">OVERVIEW </h2>
              <p className="text-xl leading-9">
                This website is operated by{" "}
                <span className="uppercase"> E-Shop </span>. Throughout the
                site, the terms “we”, “us” and “our” refer to{" "}
                <span className="uppercase"> E-Shop </span>.
                <span className="uppercase"> E-Shop </span> offers this website,
                including all information, tools and Services available from
                this site to you, the user, conditioned upon your acceptance of
                all terms, conditions, policies and notices stated here.
              </p>
            </div>
            <div className="mt-10">
              <p className="text-xl leading-9">
                By visiting our site and/ or purchasing something from us, you
                engage in our “Service” and agree to be bound by the following
                terms and conditions (“Terms of Service”, “Terms”), including
                those additional terms and conditions and policies referenced
                herein and/or available by hyperlink. These Terms of Service
                apply to all users of the site, including without limitation
                users who are browsers, vendors, customers, merchants, and/ or
                contributors of content.
              </p>
            </div>
            <div className="mt-10">
              <h2 className="text-xl leading-9 font-bold">
                SECTION 1 - ONLINE STORE TERMS
              </h2>
              <p className="text-xl leading-9">
                By agreeing to these Terms of Service, you represent that you
                are at least the age of majority in your state or province of
                residence, or that you are the age of majority in your state or
                province of residence and you have given us your consent to
                allow any of your minor dependents to use this site. You may not
                use our products for any illegal or unauthorized purpose nor may
                you, in the use of the Service, violate any laws in your
                jurisdiction (including but not limited to copyright laws). You
                must not transmit any worms or viruses or any code of a
                destructive nature. A breach or violation of any of the Terms
                will result in an immediate termination of your Services. NOTE :
                COD(cash on Delivery) orders are not valid on Customize order
              </p>
            </div>

            <div className="mt-10">
              <h2 className="text-xl leading-9 font-bold">
                SECTION 2 - GENERAL CONDITIONS
              </h2>
              <p className="text-xl leading-9">
                We reserve the right to refuse Service to anyone for any reason
                at any time. You understand that your content (not including
                credit card information), may be transferred unencrypted and
                involve (a) transmissions over various networks; and (b) changes
                to conform and adapt to technical requirements of connecting
                networks or devices. Credit card information is always encrypted
                during transfer over networks. You agree not to reproduce,
                duplicate, copy, sell, resell or exploit any portion of the
                Service, use of the Service, or access to the Service or any
                contact on the website through which the Service is provided,
                without express written permission by us. The headings used in
                this agreement are included for convenience only and will not
                limit or otherwise affect these Terms.
              </p>
            </div>

            <div className="mt-10">
              <h2 className="text-xl leading-9 font-bold">
                SECTION 3 - THIRD-PARTY LINKS
              </h2>
              <p className="text-xl leading-9">
                Certain content, products and Services available via our Service
                may include materials from third-parties. Third-party links on
                this site may direct you to third-party websites that are not
                affiliated with us. We are not responsible for examining or
                evaluating the content or accuracy and we do not warrant and
                will not have any liability or responsibility for any
                third-party materials or websites, or for any other materials,
                products, or Services of third-parties. We are not liable for
                any harm or damages related to the purchase or use of goods,
                Services, resources, content, or any other transactions made in
                connection with any third-party websites. Please review
                carefully the third-party's policies and practices and make sure
                you understand them before you engage in any transaction.
                Complaints, claims, concerns, or questions regarding third-party
                products should be directed to the third-party.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Terms;
