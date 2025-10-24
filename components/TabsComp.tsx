import { IconType } from "react-icons/lib";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs";

const TabsComp = ({
  tabs,
  className,
  triggerStyle,
}: {
  tabs: {
    title: string;
    icon?: IconType;
    value: string;
    content: React.ReactNode;
  }[];
  className?: string;
  triggerStyle?: string;
}) => {
  return (
    <Tabs defaultValue={tabs[0].value} className={className}>
      <TabsList>
        {tabs.map((tab, index) => (
          <TabsTrigger
            value={tab.value}
            key={index}
            className={triggerStyle + " flex items-center gap-2"}
          >
            {tab.title}
            {tab.icon && <tab.icon />}
          </TabsTrigger>
        ))}
      </TabsList>
      {tabs.map((tab, index) => (
        <TabsContent value={tab.value} key={index}>
          {tab.content}
        </TabsContent>
      ))}
    </Tabs>
  );
};

export default TabsComp;
