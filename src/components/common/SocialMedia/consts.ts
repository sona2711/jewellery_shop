import {FacebookOutlined, InstagramOutlined, WhatsAppOutlined, SendOutlined} from "@ant-design/icons";
import type { SocialMediaItem } from "./types";
  
export const SOCIAL_MEDIA: SocialMediaItem[] = [
    {
      key: "facebook",
      label: "Facebook",
      href: "https://www.facebook.com/p/Kassaman-100063686071188/",
      icon: FacebookOutlined,
    },
    {
      key: "instagram",
      label: "Instagram",
      href: "https://www.instagram.com/kassaman_armenia/",
      icon: InstagramOutlined,
    },
    {
      key: "telegram",
      label: "Telegram",
      href: "https://t.me",
      icon: SendOutlined ,
    },
    {
      key: "whatsapp",
      label: "WhatsApp",
      href: "https://wa.me",
      icon: WhatsAppOutlined,
    },
  ];
  