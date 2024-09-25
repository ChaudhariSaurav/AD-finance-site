import React, { useState } from "react";
import { Form, Input, Button, message, Alert } from "antd";
import Footer from "../pages/footer";

function Contact() {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formError, setFormError] = useState(false);
  const [loading, setLoading] = useState(false);

  const onFinish = async (values) => {
    setLoading(true);
    try {
      const response = await fetch("https://formspree.io/f/myzgwoeo", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(values),
      });

      if (!response.ok) {
        throw new Error("Failed to send email");
      }

      setFormSubmitted(true);
      message.success("Success! Your form has been submitted. Thank you for reaching out. We'll be in touch shortly.");
    } catch (error) {
      console.error("Error sending email:", error.message);
      setFormError(true);
      message.error("Failed to send email. Please try again later.");
    } finally {
      setLoading(false);
    }
    console.log("Received values:", values);
  };

  return (
    <>
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold text-center mb-6">Contact Us</h1>

        <div className="map-container mb-8">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3672.337231792617!2d85.95013867665098!3d25.6462489!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39edf548e1069a1d%3A0xdd43689b9b0df0f7!2sWard%20no%203%2C%20Jr%20Group's%20%7C%20AD%20Finance%2C%20Farpura%2C%20Sohilwara%2C%20Mansurchak%2C%20Bihar%20851128%2C%20India!5e0!3m2!1sen!2sin!4v1621945864297!5m2!1sen!2sin"
            width="100%"
            height="300"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        </div>

        {formSubmitted ? (
          <Alert
            message="Success!"
            description="Your form has been submitted. Thank you for reaching out. We'll be in touch shortly."
            type="success"
            showIcon
            className="mb-6"
          />
        ) : formError ? (
          <Alert
            message="Error"
            description="Failed to send email. Please try again later."
            type="error"
            showIcon
            className="mb-6"
          />
        ) : (
          <Form
            name="contact-form"
            onFinish={onFinish}
            layout="vertical"
            className="space-y-4"
          >
            <Form.Item
              name="name"
              label="Name"
              rules={[{ required: true, message: "Please enter your name" }]}
            >
              <Input id="name" placeholder="Enter your name" />
            </Form.Item>
            <Form.Item
              name="email"
              label="Email"
              rules={[
                { required: true, message: "Please enter your email" },
                { type: "email", message: "Please enter a valid email" },
              ]}
            >
              <Input id="email" placeholder="Enter your email" />
            </Form.Item>
            <Form.Item
              name="phone"
              label="Phone Number"
              rules={[
                { required: true, message: "Please enter your phone number" },
                {
                  pattern: /^[0-9]{10}$/,
                  message: "Please enter a valid 10-digit phone number",
                },
              ]}
            >
              <Input id="phone" placeholder="Enter your phone number" />
            </Form.Item>
            <Form.Item
              name="loanAmount"
              label="Loan Amount"
              rules={[{ required: true, message: "Please enter the loan amount" }]}
            >
              <Input id="loanAmount" placeholder="Enter loan amount" prefix="₹" />
            </Form.Item>
            <Form.Item
              name="address"
              label="Address"
              rules={[{ required: true, message: "Please enter your address" }]}
            >
              <Input.TextArea id="address" rows={2} placeholder="Enter your address" />
            </Form.Item>
            <Form.Item
              name="pincode"
              label="Pincode"
              rules={[
                { required: true, message: "Please enter your pincode" },
                {
                  pattern: /^[0-9]{6}$/,
                  message: "Please enter a valid 6-digit pincode",
                },
              ]}
            >
              <Input id="pincode" placeholder="Enter your pincode" />
            </Form.Item>
            <Form.Item
              name="message"
              label="Message"
              rules={[{ required: true, message: "Please enter your message" }]}
            >
              <Input.TextArea id="message" rows={2} placeholder="Enter your message" />
            </Form.Item>
            <Form.Item>
              <Button type="primary" htmlType="submit" loading={loading}>
                Submit
              </Button>
            </Form.Item>
          </Form>
        )}
      </div>
      <Footer />
      <style jsx>{`
        .map-container {
          border-radius: 8px;
          overflow: hidden;
          box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
        }
        @media (max-width: 768px) {
          .map-container {
            height: 200px; // Adjust height for mobile
          }
        }
      `}</style>
    </>
  );
}

export default Contact;
