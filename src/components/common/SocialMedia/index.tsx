import { Space, Typography } from "antd";
import { SOCIAL_MEDIA } from "./consts";
import type { SocialMediaItem } from "./types";
import styles from "./styles.module.css";

const { Link } = Typography;

export const SocialMedia = () => {
  return (
    <Space className={styles.container}>
      {SOCIAL_MEDIA.map((item : SocialMediaItem) => (
        <Link
            rootClassName={styles.icon_wrapper}
            key={item.key}
            href={item.href}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.link}
            aria-label={item.label}
        >
            <item.icon/>
        </Link>
      ))}
    </Space>
  );
};
