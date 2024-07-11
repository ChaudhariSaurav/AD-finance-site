import React from "react";
import Footer from "../pages/footer";

function Home() {
  return (
    <>
      <div className="flex justify-center mt-8">
        <div>
          <img
            src="https://ik.imagekit.io/laxmifinance/abhishek%20kumar.png?updatedAt=1720687001422"
            alt="Mr Abhishek Kumar"
            className="w-50 h-60 rounded-full border border-1"
          />
          <p className="text-center mt-2 font-semibold">Mr. Abhishek Kumar</p>

          <p className="mt-2 text-center font-bold">Founder & MD</p>
        </div>
      </div>
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl text-center font-bold text-orange-700">
          Welcome to JR Group's
        </h1>
        <p className="mt-4 p-4 shadow-lg border border-orange-400 rounded-lg">
          AD Finance, established in{" "}
          <span className="italic font-bold text-orange-500">2024</span>, is a
          pioneering financial services firm committed to empowering individuals
          and businesses with comprehensive and personalized financial
          solutions. As a proud member of the JR Groups AD Finance embodies a
          rich legacy of trust, expertise, and client-centric values. Our
          mission is to make your financial future secure through innovative
          strategies and unwavering dedication. Whether you're planning for
          retirement, investing in your dream home, or expanding your business,
          our team of financial experts is here to guide you every step of the
          way. At AD Finance, we believe in transparency, integrity, and
          excellence in service delivery. We leverage cutting-edge technology
          and deep industry insights to tailor financial plans that align
          perfectly with your goals and aspirations. Our commitment extends
          beyond mere transactions; we build lasting relationships based on
          mutual trust and shared success. Led by visionary founders{" "}
          <span className="italic font-bold text-orange-500">
            Mr. Abhishek Kumar
          </span>{" "}
          and{" "}
          <span className="italic font-bold text-orange-500">
            Mr. Keshav Kumar
          </span>
          , AD Finance is driven by a passion for excellence and a relentless
          pursuit of client satisfaction. Mr. Abhishek Kumar, as Founder &
          Managing Director, brings strategic foresight and operational
          expertise, steering the company towards sustainable growth and
          innovation. Mr. Keshav Kumar, as Founder & CEO, champions a culture of
          innovation and client-centricity, ensuring that AD Finance remains at
          the forefront of the financial services industry. Join us on a journey
          towards financial empowerment and prosperity. Discover how AD Finance
          can transform your financial aspirations into reality, providing you
          with the confidence and security you deserve. Explore our
          comprehensive range of services, from wealth management and investment
          advisory to retirement planning and business financing. At AD Finance,
          your success is our priority.
        </p>
      </div>
      <Footer />
    </>
  );
}

export default Home;
