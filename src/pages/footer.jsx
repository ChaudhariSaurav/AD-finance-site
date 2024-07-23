import React from "react";
import { Layout } from "antd";
import {
  FacebookOutlined,
  InstagramOutlined,
  GoogleOutlined,
  EnvironmentOutlined,
  PhoneOutlined,
  MailOutlined,
} from "@ant-design/icons";

const { Footer } = Layout;

function CustomFooter() {
  const handleAddressClick = () => {
    window.open(
      "https://www.google.com/maps/search/?api=1&query=Gospur%2C+Dalsinghsarai%2C+near+Ranjan+ITI%2C+Bihar",
      "_blank",
    );
  };

  return (
    <Footer
      style={{ background: "#001529", color: "white", padding: "24px 0" }}
    >
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="md:col-span-1">
            <h2 className="text-2xl font-bold">Branch Address</h2>
            <p
              className="mt-2"
              onClick={handleAddressClick}
              style={{ cursor: "pointer" }}
            >
              <EnvironmentOutlined /> Gospur, Dalsinghsarai, near Ranjan ITI,
              Bihar
            </p>
            <p>
              <PhoneOutlined /> Phone:{" "}
              <a href="tel:+912212345678">+91 2212345678</a>
            </p>
            <p>
              <MailOutlined /> Email:{" "}
              <a href="mailto:adfinancejr@gmail.com">adfinancejr@gmail.com</a>
            </p>
          </div>
          <div className="md:col-span-1">
            <h2 className="text-2xl font-bold">Follow Us</h2>
            <div className="flex mt-2">
              <a
                href="https://www.facebook.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="mr-4 hover:text-gray-300"
              >
                <FacebookOutlined style={{ fontSize: "24px" }} />
              </a>
              <a
                href="https://www.instagram.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="mr-4 hover:text-gray-300"
              >
                <InstagramOutlined style={{ fontSize: "24px" }} />
              </a>
              <a
                href="https://www.google.com/maps/place/Jr+Group's+%7C+AD+Finance/@25.6462537,85.9497525,17z/data=!3m1!4b1!4m6!3m5!1s0x39edf548e1069a1d:0xdd43689b9b0df0f7!8m2!3d25.6462489!4d85.9523274!16s%2Fg%2F11y6fbmsdm?entry=ttu"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-gray-300"
              >
                <GoogleOutlined style={{ fontSize: "24px" }} />
              </a>
            </div>
          </div>
        </div>
        <div className="text-center mt-4">
          <p>&copy; 2024 AD Finance. All rights reserved.</p>
        </div>
      </div>
    </Footer>
  );
}

export default CustomFooter;
