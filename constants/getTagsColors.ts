export const getTagColors = (
  tagValue: string,
): { bg: string; text: string } => {
  const colors: Record<string, { bg: string; text: string }> = {
    advertising: { bg: "#DBEAFE", text: "#1E40AF" },
    marketing: { bg: "#DCFCE7", text: "#166534" },
    analytics: { bg: "#F3E8FF", text: "#6B21A8" },
    campaigns: { bg: "#FEF9C3", text: "#854D0E" },
    "social media": { bg: "#FCE7F3", text: "#9D174D" },
    seo: { bg: "#E0E7FF", text: "#3730A3" },
    ppc: { bg: "#FEE2E2", text: "#991B1B" },
    content: { bg: "#FFEDD5", text: "#9A3412" },
    strategy: { bg: "#CCFBF1", text: "#115E59" },
    performance: { bg: "#CFFAFE", text: "#155E75" },
    branding: { bg: "#FFE4E6", text: "#9F1239" },
    "digital ads": { bg: "#F1F5F9", text: "#334155" },
  };

  return colors[tagValue.toLowerCase()] || { bg: "#F3F4F6", text: "#374151" };
};
