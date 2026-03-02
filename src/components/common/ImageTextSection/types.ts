export type ImageTextProps = {
    image: string;
    titleKey: string;
    descriptionKey: string;
    buttonTextKey?: string;
    linkTo?: string;
    imagePosition: "left"| "right";
}