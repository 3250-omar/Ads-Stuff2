"use client";

import { Tabs } from "antd";
import { IconType } from "react-icons/lib";

interface TabItem {
  title: string;
  icon?: IconType;
  value: string;
  content: React.ReactNode;
}

interface TabsCompProps {
  tabs: TabItem[];
  className?: string;
  triggerStyle?: string;
}

const TabsComp = ({ tabs, className }: TabsCompProps) => {
  const items = tabs.map((tab) => ({
    key: tab.value,
    label: (
      <span className="flex items-center gap-2">
        {tab.icon && <tab.icon className="text-lg" />}
        {tab.title}
      </span>
    ),
    children: tab.content,
  }));

  return (
    <div className={className}>
      <Tabs
        defaultActiveKey={tabs[0].value}
        items={items}
        animated={{ inkBar: true, tabPane: true }}
        size="large"
        className="custom-tabs"
        type="card"
        
      />
    </div>
  );
};

export default TabsComp;
