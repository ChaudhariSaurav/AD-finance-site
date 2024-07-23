import React from "react";
import { Form, Input, Button } from "antd";
import Footer from "../pages/footer";

function Contact() {
  const onFinish = async (values) => {
    try {
      const response = await fetch("https://formspree.io/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(values),
      });

      if (!response.ok) {
        throw new Error("Failed to send email");
      }

      message.success("Email sent successfully");
      // Optionally, you can reset the form fields here
    } catch (error) {
      console.error("Error sending email:", error.message);
      message.error("Failed to send email");
    }
    // Handle form submission here (e.g., send data to backend)
    console.log("Received values:", values);
  };

  return (
    <>
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold">Contact Us</h1>
        <Form
          className="mt-4 space-y-4"
          name="contact-form"
          onFinish={onFinish}
          layout="vertical"
        >
          <Form.Item
            name="name"
            label="Name"
            size="large"
            rules={[{ required: true, message: "Please enter your name" }]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            name="email"
            label="Email"
            size="large"
            rules={[
              { required: true, message: "Please enter your email" },
              { type: "email", message: "Please enter a valid email" },
            ]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            name="phone"
            label="Phone Number"
            size="large"
            rules={[
              { required: true, message: "Please enter your phone number" },
              {
                pattern: /^[0-9]{10}$/,
                message: "Please enter a valid 10-digit phone number",
              },
            ]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            name="loanAmount"
            label="Loan Amount"
            size="large"
            rules={[
              { required: true, message: "Please enter the loan amount" },
            ]}
          >
            <Input prefix="₹" />
          </Form.Item>
          <Form.Item
            name="address"
            label="Address"
            rules={[{ required: true, message: "Please enter your address" }]}
          >
            <Input.TextArea rows={2} />
          </Form.Item>
          <Form.Item
            name="pincode"
            label="Pincode"
            size="large"
            rules={[
              { required: true, message: "Please enter your pincode" },
              {
                pattern: /^[0-9]{6}$/,
                message: "Please enter a valid 6-digit pincode",
              },
            ]}
          >
            <Input />
          </Form.Item>
          {location && (
            <Form.Item label="Location" className="text-gray-600">
              {location.city}, {location.state}, {location.country}
            </Form.Item>
          )}
          <Form.Item
            name="message"
            label="Message"
            rules={[{ required: true, message: "Please enter your message" }]}
          >
            <Input.TextArea rows={2} />
          </Form.Item>
          <Form.Item>
            <Button type="primary" htmlType="submit">
              Submit
            </Button>
          </Form.Item>
        </Form>
      </div>
      <Footer />
    </>
  );
}

export default Contact;
