"use client";

import React, { useState } from "react";
import {
  Card,
  Input,
  Button,
  Form,
  Typography,
  Space,
  Divider,
  App,
} from "antd";
import { MailOutlined, SendOutlined, ReloadOutlined } from "@ant-design/icons";

import emailjs from "@emailjs/browser";

const { Title, Text } = Typography;
const { TextArea } = Input;

export default function GmailForm() {
  const [form] = Form.useForm();
  const [loading, setLoading] = useState(false);
  const { message } = App.useApp();
  const handleSubmit = async (values: any) => {
    const { email, content } = values;

    if (!email.endsWith("@gmail.com")) {
      message.warning("Please enter a valid Gmail address.");
      return;
    }

    setLoading(true);

    try {
      const templateParams = {
        from_email: email,
        to_email: process.env.NEXT_PUBLIC_EMAILJS_TO_EMAIL,
        message: content,
        reply_to: email,
      };

      const result = await emailjs.send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || "",
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID || "",
        templateParams,
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY || "",
      );

      if (result.status === 200) {
        message.success("Message sent successfully!");
        form.resetFields();
      } else {
        throw new Error("Failed to send");
      }
    } catch (error) {
      console.error("EmailJS Error:", error);
      message.error(
        "Failed to send message. Please check your connection or contact settings.",
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="py-12 flex justify-center">
      <Card
        className="w-full max-w-lg rounded-3xl shadow-xl border-none overflow-hidden"
        styles={{ body: { padding: "40px" } }}
      >
        <div className="text-center mb-8">
          <div className="bg-primary/10 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4">
            <MailOutlined className="text-3xl text-primary" />
          </div>
          <Title level={2} className="m-0! font-black! text-primary!">
            Contact Me
          </Title>
          <Text type="secondary" className="text-sm">
            Speak with us via Gmail
          </Text>
        </div>

        <Divider className="my-8" />

        <Form
          form={form}
          layout="vertical"
          onFinish={handleSubmit}
          requiredMark={false}
          className="flex flex-col gap-2"
        >
          <Form.Item
            name="email"
            label={<Text strong>Gmail Address</Text>}
            rules={[
              { required: true, message: "Please enter your email" },
              { type: "email", message: "Please enter a valid email" },
            ]}
          >
            <Input
              prefix={<MailOutlined className="text-gray-400 mr-2" />}
              placeholder="example@gmail.com"
              size="large"
              className="rounded-xl border-gray-200"
            />
          </Form.Item>

          <Form.Item
            name="content"
            label={<Text strong>Your Message</Text>}
            rules={[{ required: true, message: "Please enter your message" }]}
          >
            <TextArea
              placeholder="How can we help you?"
              rows={6}
              className="rounded-xl border-gray-200"
            />
          </Form.Item>

          <Space className="w-full mt-4" orientation="vertical" size="middle">
            <Button
              type="primary"
              htmlType="submit"
              loading={loading}
              icon={<SendOutlined />}
              block
              size="large"
              className="h-14 rounded-xl font-bold text-base shadow-lg shadow-primary/20"
            >
              Send Message
            </Button>

            <Button
              type="text"
              onClick={() => form.resetFields()}
              icon={<ReloadOutlined />}
              block
              size="large"
              className="rounded-xl font-medium text-gray-400 hover:text-red-400"
            >
              Reset Form
            </Button>
          </Space>
        </Form>
      </Card>
    </section>
  );
}
