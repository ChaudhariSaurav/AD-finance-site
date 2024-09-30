import React from "react";
import { Typography, Row, Col, Button } from "antd";
import { motion } from "framer-motion";
import Footer from "../pages/footer";
import FAQ from "../pages/FAQ";

const { Title, Paragraph } = Typography;

function LeaderCard({ name, title, description }) {
  return (
    <Col xs={24} sm={12} md={8}>
      <div className="p-4 border border-gray-200 rounded-lg shadow-lg">
        <Title level={4}>{name}</Title>
        <Paragraph>{title}</Paragraph>
        <Paragraph className="mt-2 text-sm text-gray-700">{description}</Paragraph>
      </div>
    </Col>
  );
}

function About() {
  const fadeAnimation = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.6 } },
  };

  return (
    <>
      <div className="container mx-auto px-4 py-8" style={{ backgroundColor: "#ffffff" }}>
        <motion.div initial="hidden" animate="visible" variants={fadeAnimation}>
          <Title level={2} className="text-center text-blue-600 mb-6">
            About Us
          </Title>

          <Row gutter={[16, 16]} className="mb-8">
            <Col xs={24} sm={12} md={8}>
              <div className="p-4 border border-gray-200 rounded-lg shadow-md">
                <Title level={4}>Established</Title>
                <Paragraph className="text-gray-600">2024</Paragraph>
              </div>
            </Col>
            <Col xs={24} sm={12} md={8}>
              <div className="p-4 border border-gray-200 rounded-lg shadow-md">
                <Title level={4}>Founders</Title>
                <Paragraph className="text-gray-600">
                  Mr. Abhishek Kumar (Founder & Managing Director)
                  <br />
                  Mr. Keshav Kumar (Founder & CEO)
                </Paragraph>
              </div>
            </Col>
          </Row>

          <div className="p-4 border border-gray-200 rounded-lg shadow-md mb-8">
            <Title level={4}>About AD Finance</Title>
            <Paragraph className="text-gray-600">
              AD Finance is part of JR Groups, specializing in financial services since 2024. We are dedicated to securing your financial future through expertise and commitment.
            </Paragraph>
            <Button type="primary" className="mt-2" style={{ backgroundColor: "#1890ff", borderColor: "#1890ff" }}>
              Learn More
            </Button>
          </div>

          <Title level={2} className="text-center text-blue-600 mt-8 mb-6">
            Our Vision
          </Title>
          <Paragraph className="text-gray-600">
            To provide premier financial solutions ensuring client prosperity and security.
          </Paragraph>

          <Title level={2} className="text-center text-blue-600 mt-8 mb-6">
            Our Mission
          </Title>
          <Paragraph className="text-gray-600">
            To deliver reliable financial services enabling clients to achieve financial goals with confidence and ease.
          </Paragraph>

          <Title level={2} className="text-center text-blue-600 mt-8 mb-6">
            Leadership
          </Title>
          <Row gutter={[16, 16]}>
            <LeaderCard
              name="Mr. Abhishek Kumar"
              title="Founder & Managing Director"
              description="Mr. Abhishek Kumar plays a pivotal role in the strategic direction and overall management of AD Finance. He is responsible for overseeing the company's growth, financial strategy, and operations. Abhishek is a dedicated and passionate leader committed to delivering exceptional results for our clients."
            />
            <LeaderCard
              name="Mr. Keshav Kumar"
              title="Founder & CEO"
              description="Mr. Keshav Kumar leads the company with a vision for growth and excellence in the financial sector. He has a strong background in financial management, planning, and analysis, providing valuable insights to clients."
            />
          </Row>

          <Title level={2} className="text-center text-blue-600 mt-8 mb-6">
            Motto
          </Title>
          <Paragraph className="text-blue-600 font-semibold">
            "Ensuring your financial future with JR Groups."
          </Paragraph>
          <Paragraph className="text-gray-600">
            At AD Finance, we are dedicated to navigating your financial challenges and realizing your financial dreams. We provide tailored, comprehensive solutions to meet your unique needs.
          </Paragraph>
        </motion.div>
      </div>
      <FAQ />
      <Footer />
    </>
  );
}

export default About;
