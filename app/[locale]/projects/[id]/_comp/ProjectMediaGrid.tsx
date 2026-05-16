import { useCallback, useState } from "react";
import { Project } from "@/types";
import { Segmented, ConfigProvider } from "antd";
import {
  AppstoreOutlined,
  PicCenterOutlined,
  UnorderedListOutlined,
} from "@ant-design/icons";
import MediaMasonry from "./MediaMasonry";
import MediaCarousel from "./MediaCarousel";
import MediaList from "./MediaList";
import { useTranslations } from "next-intl";

interface ProjectMediaGridProps {
  project: Project;
  imageRef: React.RefObject<HTMLDivElement | null>;
}

type ViewType = "masonry" | "carousel" | "list";

const ProjectMediaGrid = ({ project, imageRef }: ProjectMediaGridProps) => {
  const t = useTranslations("ProjectMedia");
  const mediaItems = project.project_media || [];
  const [view, setView] = useState<ViewType>("masonry");

  const renderView = useCallback(() => {
    switch (view) {
      case "masonry":
        return <MediaMasonry media={mediaItems} />;
      case "carousel":
        return <MediaCarousel media={mediaItems} />;
      case "list":
        return <MediaList media={mediaItems} />;
      default:
        return <MediaMasonry media={mediaItems} />;
    }
  }, [view, mediaItems]);

  return (
    <div ref={imageRef} className="w-full mb-20 px-0">
      {mediaItems.length > 0 ? (
        <div className="flex flex-col gap-10">
          {/* View Switcher */}
          <div className="flex justify-center md:justify-end mb-4 z-20 sticky top-20 ">
            <ConfigProvider
              theme={{
                components: {
                  Segmented: {
                    itemSelectedBg: "var(--color-primary)",
                    itemSelectedColor: "#fff",
                    trackBg: "rgba(255, 255, 255, 0.05)",
                  },
                },
              }}
            >
              <Segmented
                value={view}
                onChange={(value) => setView(value as ViewType)}
                options={[
                  {
                    value: "masonry",
                    icon: <AppstoreOutlined />,
                    label: t("masonry"),
                  },
                  {
                    value: "carousel",
                    icon: <PicCenterOutlined />,
                    label: t("carousel"),
                  },
                  {
                    value: "list",
                    icon: <UnorderedListOutlined />,
                    label: t("list"),
                  },
                ]}
                className="p-1 rounded-2xl border border-white/5 backdrop-blur-md"
                size="large"
              />
            </ConfigProvider>
          </div>

          {/* Active View */}
          <div className="transition-all duration-500 ease-in-out">
            {renderView()}
          </div>
        </div>
      ) : (
        <div className="relative w-full h-[400px] md:h-[600px] flex items-center justify-center bg-bg-card/50 rounded-[3rem] border border-white/5">
          <p className="text-text-secondary text-lg">{t("noMedia")}</p>
        </div>
      )}
    </div>
  );
};

export default ProjectMediaGrid;
