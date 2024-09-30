import React from "react";
import { Typography, Card, Row, Col, Avatar, Divider } from "antd";
import Footer from "../pages/footer";

const { Title, Paragraph } = Typography;

const teamMembers = [
  {
    name: "Mr. Abhishek Kumar",
    position: "Founder & Managing Director",
    bio: "Leading AD Finance with strategic foresight and operational expertise.",
    initials: "AK", // Initial for Avatar
  },
  {
    name: "Mr. Keshav Kumar",
    position: "Founder & CEO",
    bio: "Championing innovation and client-centricity at AD Finance.",
    initials: "KK", // Initial for Avatar
  },
  // Add more team members as needed
];

function Home() {
  return (
    <>
      <div style={{ backgroundColor: "#f0f2f5", padding: "40px 0" }}>
        <Title level={3} className="text-center text-orange-700">
          Meet the Founders
        </Title>

        <Row gutter={16} justify="center" className="container mx-auto px-4 py-8">
          {teamMembers.map((member, index) => (
            <Col xs={24} sm={12} md={8} key={index} className="flex flex-col items-center mb-4">
              <Card
                hoverable
                style={{
                  textAlign: "center",
                  borderRadius: "15px",
                  boxShadow: "0 4px 16px rgba(0, 0, 0, 0.1)",
                }}
              >
                <Avatar
                  style={{
                    backgroundColor: "#f56a00",
                    fontSize: "50px",
                    marginBottom: "15px",
                  }}
                >
                  {member.initials}
                </Avatar>
                <Title level={4}>{member.name}</Title>
                <Paragraph strong>{member.position}</Paragraph>
                <Paragraph>{member.bio}</Paragraph>
              </Card>
            </Col>
          ))}
        </Row>
      </div>

      <div style={{ backgroundColor: "#ffffff", padding: "40px 0" }}>
        <Title level={2} className="text-center text-orange-700">
          Welcome to JR Group's
        </Title>

        <Card className="mt-4" bordered={false} style={{ borderRadius: "15px", boxShadow: "0 4px 16px rgba(0, 0, 0, 0.1)" }}>
          <Paragraph className="text-center" style={{ lineHeight: 1.6 }}>
            AD Finance, established in{" "}
            <span className="italic font-bold text-orange-500">2024</span>, is a
            pioneering financial services firm committed to empowering
            individuals and businesses with comprehensive and personalized
            financial solutions. As a proud member of the JR Groups, AD Finance
            embodies a rich legacy of trust, expertise, and client-centric
            values. Our mission is to make your financial future secure through
            innovative strategies and unwavering dedication. Whether you're
            planning for retirement, investing in your dream home, or expanding
            your business, our team of financial experts is here to guide you
            every step of the way. At AD Finance, we believe in transparency,
            integrity, and excellence in service delivery. We leverage
            cutting-edge technology and deep industry insights to tailor
            financial plans that align perfectly with your goals and
            aspirations. Our commitment extends beyond mere transactions; we
            build lasting relationships based on mutual trust and shared
            success. Led by visionary founders{" "}
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
            innovation. Mr. Keshav Kumar, as Founder & CEO, champions a culture
            of innovation and client-centricity, ensuring that AD Finance
            remains at the forefront of the financial services industry. Join us
            on a journey towards financial empowerment and prosperity. Discover
            how AD Finance can transform your financial aspirations into
            reality, providing you with the confidence and security you deserve.
            Explore our comprehensive range of services, from wealth management
            and investment advisory to retirement planning and business
            financing. At AD Finance, your success is our priority.
          </Paragraph>
        </Card>
      </div>

      <Footer />
    </>
  );
}

export default Home;
