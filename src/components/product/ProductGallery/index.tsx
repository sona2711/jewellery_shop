import { Image } from "antd";
import type { ProductGalleryProps } from "./types";
import styles from "./styles.module.css";

export const ProductGallery = ({images, name}: ProductGalleryProps) => {

    return (
        <div className={styles.gallery}>
            <Image.PreviewGroup>
                {images.map((src, index) => (
                    <div key={index}  className={styles.imageCard}>
                        <Image src={src} alt={name} />
                    </div>
                ))}
            </Image.PreviewGroup>
      </div>
    )
}







