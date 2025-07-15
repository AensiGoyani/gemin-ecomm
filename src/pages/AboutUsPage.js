import react from "react";
import { Link } from "react-router-dom";
import Aboutus from "../image/about.jpg";

const AboutUsPage = () => {
  return (
    <div className="container mx-auto  py-8">
      <div>
        <img src={Aboutus} className="w-[1700px] h-[400px]" />
      </div>
      <div className="relative">
        <div className=" absolute right-[50%] -top-[70%] left-[10%] max-md:-top-[47%] max-md:right-[20%] max-sm:right-[0%] max-sm:-top-[25%] ">
          <h1 className="text-[50px] uppercase font-medium leading-5 tracking-widest text-center max-md:text-[40px] max-sm:text-[30px]">
            About us
          </h1>
        </div>
        <div className="mt-16 ">
          <div>
            <p className="text-xl ">
              <b className="text-blue-500">
                <Link to="/"> E-Shop </Link>
              </b>{" "}
              is India's foremost leading manufacturer, Exporter and wholesaler
              of Indian ethnic wear.
            </p>
          </div>
          <div className="mt-10">
            <p className="text-xl leading-9">
              We give express deliveries to USA, UK, Canada, Australia, New
              Zealand, South Africa, France, Germany, Netherlands, Singapore,
              Switzerland, Norway, Sweden, Austria, Mauritius, Ireland, Belgium,
              Finland, Denmark, India or anywhere in the world!
            </p>
          </div>
          <div className="mt-10">
            <p className="text-xl ">
              Today, when customers shop for clothing online, they are concerned
              about things:
            </p>
            <div className="mt-6 pl-10 leading-10">
              <p className="text-[20px] font-bold">1 . Is it Authentic?</p>
              <p className="text-[20px] font-bold">
                2 . Would it be exactly similar to how it looks in the picture?
              </p>
            </div>
          </div>

          <div className="mt-10">
            <p className="text-xl leading-9">
              Our extreme dedication to customer satisfaction and our utmost
              care for the authenticity of our products have earned E-shop the
              recognition as <b> "The Most Trusted E-Shop Of India"</b> and we
              proudly flaunt it!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUsPage;
