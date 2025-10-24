"use client";
import { Tooltip, TooltipContent, TooltipTrigger } from "./tooltip";
const ToolTipComp = ({
  trigger,
  title,
}: {
  trigger: React.ReactNode;
  title: string;
}) => {
  return (
    <Tooltip>
      <TooltipTrigger>{trigger}</TooltipTrigger>
      <TooltipContent>
        <p className="text-white">{title}</p>
      </TooltipContent>
    </Tooltip>
  );
};

export default ToolTipComp;
