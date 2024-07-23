import React from "react";
import { Typography, Card, Row, Col } from "antd";
import { motion } from "framer-motion";
import Footer from "../pages/footer";
import FAQ from "../pages/FAQ";

const { Title, Paragraph } = Typography;

// LeaderCard component remains the same
function LeaderCard({ name, title, imageUrl, description }) {
  return (
    <Col xs={24} sm={12} md={8}>
      <Card
        hoverable
        className="p-4 border border-gray-200 rounded-lg shadow-md"
      >
        <img alt={name} src={imageUrl} className="w-full h-auto rounded-lg" />
        <Card.Meta title={name} description={title} />
        <Paragraph className="mt-4 text-sm">{description}</Paragraph>
      </Card>
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
      <div className="container mx-auto px-4 py-8">
        <motion.div initial="hidden" animate="visible" variants={fadeAnimation}>
          <Title level={2} className="text-center text-orange-500 mb-6">
            About Us
          </Title>
          <Row gutter={[16, 16]}>
            <Col xs={24} sm={24} md={12}>
              <Card className="p-4 border border-gray-200 rounded-lg shadow-md">
                <Title level={4}>Established</Title>
                <Paragraph>2024</Paragraph>
              </Card>
            </Col>
            <Col xs={24} sm={24} md={12}>
              <Card className="p-4 border border-gray-200 rounded-lg shadow-md">
                <Title level={4}>Founders</Title>
                <Paragraph>
                  Mr. Abhishek Kumar (Founder & Managing Director)
                  <br />
                  Mr. Keshav Kumar (Founder & CEO)
                </Paragraph>
              </Card>
            </Col>
          </Row>
          <Card className="p-4 border border-gray-200 rounded-lg shadow-md">
            <Title level={4}>About AD Finance</Title>
            <Paragraph>
              AD Finance is part of JR Groups, specializing in financial
              services since 2024. We are dedicated to securing your financial
              future through expertise and commitment.
            </Paragraph>
          </Card>

          <Title level={2} className="text-center text-orange-500 mt-8 mb-6">
            Our Vision
          </Title>
          <Card className="p-4 border border-gray-200 rounded-lg shadow-md">
            <Paragraph>
              To provide premier financial solutions ensuring client prosperity
              and security.
            </Paragraph>
          </Card>

          <Title level={2} className="text-center text-orange-500 mt-8 mb-6">
            Our Mission
          </Title>
          <Card className="p-4 border border-gray-200 rounded-lg shadow-md">
            <Paragraph>
              To deliver reliable financial services enabling clients to achieve
              financial goals with confidence and ease.
            </Paragraph>
          </Card>

          <Title level={2} className="text-center text-orange-500 mt-8 mb-6">
            Leadership
          </Title>
          <Row gutter={[16, 16]}>
            <LeaderCard
              name="Mr. Abhishek Kumar"
              title="Founder & Managing Director"
              imageUrl="https://ik.imagekit.io/laxmifinance/abhishek%20kumar.png?updatedAt=1720687001422"
              description="Mr. Abhishek Kumar plays a pivotal role in the strategic
                  direction and overall management of AD Finance. He is
                  responsible for overseeing the company's growth, financial
                  strategy, and operations. Abhishek is a dedicated and passionate
                  leader who is committed to delivering exceptional results for
                  our clients."
            />
            <LeaderCard
              name="Mr. Keshav Kumar"
              title="Founder & CEO"
              imageUrl="https://ik.imagekit.io/laxmifinance/Keshav_kumar_?updatedAt=1720654289092"
              description="Mr. Keshav Kumar leads the company with a vision for growth and
                  excellence in the financial sector. He has a strong background
                  in financial management, planning, and analysis, providing
                  valuable insights to clients."
            />
          </Row>

          <Title level={2} className="text-center text-orange-500 mt-8 mb-6">
            Motto
          </Title>
          <Card className="p-4 border border-gray-200 rounded-lg shadow-md">
            <Paragraph className="text-orange-500 font-semibold">
              "Ensuring your financial future with JR Groups."
            </Paragraph>
            <Paragraph>
              At AD Finance, we are dedicated to navigating your financial
              challenges and realizing your financial dreams. We provide
              tailored, comprehensive solutions to meet your unique needs.
            </Paragraph>
          </Card>
        </motion.div>
      </div>
      <FAQ />
      <Footer />
    </>
  );
}

export default About;
