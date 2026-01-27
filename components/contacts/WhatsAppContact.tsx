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
        className="w-full max-w-lg rounded-3xl shadow-xl border-none overflow-hidden"
        styles={{ body: { padding: "40px" } }}
      >
        <div className="text-center mb-8">
          <div className="bg-[#25D366]/10 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4">
            <WhatsAppOutlined className="text-3xl text-[#25D366]" />
          </div>
          <Title level={2} className="m-0! font-black! text-[#128C7E]">
            {t("title")}
          </Title>
          <Text type="secondary" className="text-sm">
            {t("subtitle")}
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
            name="phone"
            label={
              <Space>
                <Text strong>{t("phoneLabel")}</Text>
                <Tooltip title={t("phoneTooltip")}>
                  <InfoCircleOutlined className="text-gray-400 cursor-help" />
                </Tooltip>
              </Space>
            }
            rules={[
              { required: true, message: t("phoneRequired") },
              { pattern: /^\d+$/, message: t("phoneNumbersOnly") },
            ]}
          >
            <Input
              prefix={<span className="text-gray-400 mr-2">+</span>}
              placeholder={t("phonePlaceholder")}
              size="large"
              className="rounded-xl border-gray-200"
            />
          </Form.Item>

          <Form.Item
            name="content"
            label={<Text strong>{t("messageLabel")}</Text>}
            rules={[{ required: true, message: t("messageRequired") }]}
          >
            <TextArea
              placeholder={t("messagePlaceholder")}
              rows={6}
              showCount
              maxLength={1000}
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
              className="h-14 rounded-xl font-bold text-base shadow-lg bg-[#25D366] border-[#25D366] hover:bg-[#128C7E]! hover:border-[#128C7E]!"
            >
              {t("startButton")}
            </Button>

            <Button
              type="text"
              onClick={() => form.resetFields()}
              icon={<ReloadOutlined />}
              block
              size="large"
              className="rounded-xl font-medium text-gray-400 hover:text-red-400"
            >
              {t("clearButton")}
            </Button>
          </Space>
        </Form>
      </Card>
    </section>
  );
}
