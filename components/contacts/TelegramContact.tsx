"use client";

import React, { useState } from "react";
import {
  Card,
  Input,
  Button,
  Form,
  Typography,
  Space,
  message,
  Divider,
} from "antd";
import { SendOutlined, ReloadOutlined } from "@ant-design/icons";
import { SiTelegram } from "react-icons/si";

const { Title, Text } = Typography;
const { TextArea } = Input;

import { useTranslations } from "next-intl";

export default function TelegramContact() {
  const t = useTranslations("TelegramContact");
  const [form] = Form.useForm();
  const [loading, setLoading] = useState(false);

  const handleSubmit = (values: any) => {
    const { username, content } = values;
    const cleanUsername = username.startsWith("@")
      ? username.substring(1)
      : username;

    setLoading(true);

    setTimeout(() => {
      const encodedMessage = encodeURIComponent(content);
      window.open(
        `https://t.me/${cleanUsername}?text=${encodedMessage}`,
        "_blank",
      );
      message.success(t("opening"));
      setLoading(false);
    }, 800);
  };

  return (
    <section className="py-12 flex justify-center">
      <Card
        className="w-full max-w-lg rounded-[2.5rem] bg-bg-card/40 backdrop-blur-xl border border-white/5 shadow-2xl overflow-hidden"
        styles={{ body: { padding: "40px" } }}
      >
        <div className="text-center mb-8">
          <div className="bg-[#0088CC]/10 w-20 h-20 rounded-3xl flex items-center justify-center mx-auto mb-6 shadow-[0_0_20px_rgba(0,136,204,0.2)]">
            <SiTelegram className="text-4xl text-[#0088CC]" />
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
            name="username"
            label={<Text className="text-text-primary font-bold">{t("usernameLabel")}</Text>}
            rules={[{ required: true, message: t("usernameRequired") }]}
          >
            <Input
              prefix={<span className="text-text-secondary mr-2">@</span>}
              placeholder={t("usernamePlaceholder")}
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
              showCount
              maxLength={1000}
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
              className="h-16 rounded-2xl font-black text-lg shadow-2xl bg-[#0088CC] border-none hover:bg-[#2AABEE]! hover:scale-[1.02] transition-all duration-300"
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
              {t("clearButton")}
            </Button>
          </Space>
        </Form>
      </Card>
    </section>
  );
}
