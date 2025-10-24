import React from "react";
import { Badge } from "./ui/badge";

const StatusBadge = ({ status }: { status: string }) => {
  switch (status) {
    case "finished":
      return <Badge variant="default">Finished</Badge>;
    case "inprogress":
      return (
        <Badge variant="outline" className="bg-primary/60 text-white">
          In Progress
        </Badge>
      );
    default:
      return <Badge variant="outline">Unknown</Badge>;
  }
};

export default StatusBadge;
