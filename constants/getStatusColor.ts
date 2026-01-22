export const getStatusColor = (status: string) => {
  switch (status.toLowerCase()) {
    case "finished":
      return "#10b981"; // Vibrant emerald green for completed
    case "inprogress":
      return "#3b82f6"; // Vibrant blue for in-progress
    default:
      return "default";
  }
};
