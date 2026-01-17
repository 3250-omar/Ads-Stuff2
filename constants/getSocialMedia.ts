import Icon, {
  FacebookFilled,
  InstagramFilled,
  LinkedinFilled,
  TikTokFilled,
  TwitchFilled,
} from "@ant-design/icons";
import { BsSnapchat, BsTwitter } from "react-icons/bs";

const getSocialMedia = ({
  name,
}: {
  name: string;
}): { icon: any; name: string; bgHover: string } => {
  switch (name) {
    case "facebook":
      return {
        icon: FacebookFilled,
        name: "Facebook",
        bgHover: "hover:bg-[#1877F2]",
      };
    case "twitter":
      return {
        icon: BsTwitter,
        name: "Twitter",
        bgHover: "hover:bg-[#1DA1F2]",
      };
    case "instagram":
      return {
        icon: InstagramFilled,
        name: "Instagram",
        bgHover:
          "hover:bg-gradient-to-tr hover:from-[#F58529] hover:via-[#DD2A7B] hover:to-[#8134AF]",
      };
    case "tiktok":
      return {
        icon: TikTokFilled,
        name: "TikTok",
        bgHover: "hover:bg-[#FF0080]",
      };
    case "linkedin":
      return {
        icon: LinkedinFilled,
        name: "LinkedIn",
        bgHover: "hover:bg-[#0A66C2]",
      };
    case "snapchat":
      return {
        icon: BsSnapchat,
        name: "Snapchat",
        bgHover: "hover:bg-[#FF0080]",
      };
    default:
      return { icon: Icon, name: "icon", bgHover: "hover:bg-white" };
  }
};

export default getSocialMedia;
