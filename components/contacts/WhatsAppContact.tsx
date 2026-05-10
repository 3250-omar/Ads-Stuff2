"use client";

import React, { useState } from "react";
import {
  Card,
  Input,
  Button,
  Form,
  Typography,
  Space,
  Tooltip,
  message,
  Divider,
} from "antd";
import {
  WhatsAppOutlined,
  SendOutlined,
  ReloadOutlined,
  InfoCircleOutlined,
} from "@ant-design/icons";

const { Title, Text } = Typography;
const { TextArea } = Input;

import { useTranslations } from "next-intl";

export default function WhatsAppContact() {
  const t = useTranslations("WhatsAppContact");
  const [form] = Form.useForm();
  const [loading, setLoading] = useState(false);

  const handleSubmit = (values: any) => {
    const { phone, content } = values;
    const cleanPhone = phone.replace(/\D/g, "");

    if (!cleanPhone || cleanPhone.length < 10) {
      message.error(t("phoneInvalid"));
      return;
    }

    setLoading(true);

    setTimeout(() => {
      const encodedMessage = encodeURIComponent(content);
      window.open(
        `https://wa.me/${cleanPhone}?text=${encodedMessage}`,
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
          <div className="bg-[#25D366]/10 w-20 h-20 rounded-3xl flex items-center justify-center mx-auto mb-6 shadow-[0_0_20px_rgba(37,211,102,0.2)]">
            <WhatsAppOutlined className="text-4xl text-[#25D366]" />
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
            name="phone"
            label={
              <Space>
                <Text className="text-text-primary font-bold">{t("phoneLabel")}</Text>
                <Tooltip title={t("phoneTooltip")}>
                  <InfoCircleOutlined className="text-text-secondary cursor-help" />
                </Tooltip>
              </Space>
            }
            rules={[
              { required: true, message: t("phoneRequired") },
              { pattern: /^\d+$/, message: t("phoneNumbersOnly") },
            ]}
          >
            <Input
              prefix={<span className="text-text-secondary mr-2">+</span>}
              placeholder={t("phonePlaceholder")}
              size="large"
              className="h-14 rounded-2xl bg-bg-primary/50 border-white/5 text-text-primary placeholder:text-text-secondary/30"
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
              className="rounded-2xl bg-bg-primary/50 border-white/5 text-text-primary placeholder:text-text-secondary/30"
            />
          </Form.Item>

          <Space className="w-full mt-6" orientation="vertical" size="middle">
            <Button
              type="primary"
              htmlType="submit"
              loading={loading}
              icon={<SendOutlined />}
              block
              size="large"
              className="h-16 rounded-2xl font-black text-lg shadow-2xl bg-[#25D366] border-none hover:bg-[#20bd5a]! hover:scale-[1.02] transition-all duration-300"
            >
              {t("startButton")}
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
