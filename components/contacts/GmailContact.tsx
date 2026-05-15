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

import { useTranslations } from "next-intl";

export default function GmailForm() {
  const t = useTranslations("GmailContact");
  const [form] = Form.useForm();
  const [loading, setLoading] = useState(false);
  const { message } = App.useApp();
  const handleSubmit = async (values: any) => {
    const { email, content } = values;

    if (!email.endsWith("@gmail.com")) {
      message.warning(t("emailGmailOnly"));
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
        message.success(t("success"));
        form.resetFields();
      } else {
        throw new Error(t("errorSimple"));
      }
    } catch (error) {
      console.error("EmailJS Error:", error);
      message.error(t("errorSend"));
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="py-12 flex justify-center">
      <Card
        className="w-full max-w-lg rounded-[2.5rem] bg-bg-card/40 backdrop-blur-xl border border-white/5 shadow-2xl overflow-hidden"
        styles={{ body: { padding: "40px" } }}
      >
        <div className="text-center mb-8">
          <div className="bg-primary/10 w-20 h-20 rounded-3xl flex items-center justify-center mx-auto mb-6 shadow-[0_0_20px_rgba(74,107,80,0.2)]">
            <MailOutlined className="text-4xl text-primary" />
          </div>
          <Title level={2} className="m-0! font-black! text-text-primary tracking-tight">
            {t("title")}
          </Title>
          <Text className="text-base text-text-secondary opacity-80 mt-2 block">
            {t("subtitle")}
          </Text>
        </div>

        <Divider className="my-8 border-white/10" />

        <Form
          form={form}
          layout="vertical"
          onFinish={handleSubmit}
          requiredMark={false}
          className="flex flex-col gap-4"
        >
          <Form.Item
            name="email"
            label={<Text className="text-text-primary font-bold">{t("emailLabel")}</Text>}
            rules={[
              { required: true, message: t("emailRequired") },
              { type: "email", message: t("emailInvalid") },
            ]}
          >
            <Input
              prefix={<MailOutlined className="text-text-secondary mr-2" />}
              placeholder={t("emailPlaceholder")}
              size="large"
              className="h-14 rounded-2xl bg-bg-primary/50 border-white/5 text-text-primary placeholder:text-white"
            />
          </Form.Item>

          <Form.Item
            name="content"
            label={<Text className="text-text-primary font-bold">{t("messageLabel")}</Text>}
            rules={[{ required: true, message: t("messageRequired") }]}
          >
            <TextArea
              placeholder={t("messagePlaceholder")}
              rows={6}
              className="rounded-2xl bg-bg-primary/50 border-white/5 text-text-primary placeholder:text-white"
            />
          </Form.Item>

          <Space className="w-full mt-6" size="middle">
            <Button
              type="primary"
              htmlType="submit"
              loading={loading}
              icon={<SendOutlined />}
              block
              size="large"
              className="h-16 rounded-2xl font-black text-lg shadow-2xl bg-primary border-none hover:scale-[1.02] transition-all duration-300"
            >
              {t("sendButton")}
            </Button>

            <Button
              type="text"
              onClick={() => form.resetFields()}
              icon={<ReloadOutlined />}
              block
              size="large"
              className="rounded-2xl font-bold text-text-secondary hover:text-red-400! transition-colors"
            >
              {t("resetButton")}
            </Button>
          </Space>
        </Form>
      </Card>
    </section>
  );
}
