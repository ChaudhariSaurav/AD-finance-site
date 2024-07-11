import React from "react";
import Footer from "../pages/footer";
import FAQ from "../pages/FAQ";

function About() {
  const LeadershipCard = ({ name, role, imageUrl, designation }) => {
    return (
      <div className="flex flex-col items-center justify-center mt-8 md:flex-row md:items-start">
        <img
          src={imageUrl}
          alt={name}
          className="w-full md:w-64 auto border p-3 border-1 rounded-full mb-4 md:mr-8 md:mb-0"
        />
        <div className="text-center md:text-left">
          <strong className="text-orange-500 underline">{name}</strong>
          <p className="mt-2">{role}</p>
          <p className="mt-2">
            <strong>{designation}</strong>
          </p>
        </div>
      </div>
    );
  };

  return (
    <>
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold text-center text-orange-500">
          About Us
        </h1>
        <p className="mt-4">
          <strong>Established:</strong> 2024
        </p>
        <p className="mt-4">
          <strong>Founders:</strong>
          <br />
          Mr. Abhishek Kumar (Founder & Managing Director)
          <br />
          Mr. Keshav Kumar (Founder & CEO)
        </p>
        <p className="mt-4">
          <strong>AD Finance</strong> is a part of the JR Groups, which stands
          for Our company is a small finance firm established in 2024, with a
          mission to make your financial future secure with the expertise and
          dedication of JR Groups.
        </p>
        <h2 className="text-2xl font-bold mt-8">Our Vision</h2>
        <p className="mt-4">
          To provide top-notch financial solutions that ensure the financial
          security and prosperity of our clients.
        </p>
        <h2 className="text-2xl font-bold mt-8">Our Mission</h2>
        <p className="mt-4">
          To offer reliable and effective financial services that help our
          clients achieve their financial goals with ease and confidence.
        </p>
        <h2 className="text-2xl font-bold mt-8">Leadership</h2>
        <LeadershipCard
          name="Mr. Abhishek Kumar"
          role="Founder & Managing Director"
          designation="Mr. Abhishek Kumar plays a pivotal role in the strategic direction and overall management of AD Finance. He is responsible for overseeing the company's growth, financial strategy, and operations. Abhishek is a dedicated and passionate leader who is committed to delivering exceptional results for our clients."
          imageUrl="https://ik.imagekit.io/laxmifinance/abhishek%20kumar.png?updatedAt=1720687001422"
        />
        <LeadershipCard
          name="Mr. Keshav Kumar"
          role="Founder & CEO"
          designation="Mr. Keshav Kumar leads the company with a vision for growth and excellence in the financial sector. He has a strong background in financial management, financial planning, and financial analysis, and has worked with clients."
          imageUrl="https://ik.imagekit.io/laxmifinance/Keshav_kumar_?updatedAt=1720654289092"
        />
        <h2 className="text-2xl font-bold mt-8">Motto</h2>
        <p className="mt-4 font-extrabold text-orange-500">
          "Make your future financially secure with JR Groups."
        </p>
        <p className="mt-4">
          Our team at AD Finance is dedicated to helping you navigate through
          your financial challenges and achieve your financial dreams. We
          believe in providing personalized and comprehensive financial
          solutions tailored to meet your unique needs.
        </p>
      </div>
      <FAQ />
      <Footer />
    </>
  );
}

export default About;
