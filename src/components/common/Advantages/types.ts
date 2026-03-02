import type React from "react";


export type AdvantageItem = {
    icon: React.ComponentType;
    titleKey: string;
    descriptionKey: string;
}
export type AdvantagesProps = {
    items?: AdvantageItem[];
    className?: string;
}

