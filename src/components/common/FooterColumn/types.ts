type Link = { 
    label: string;
    href: string ;
}

export type FooterColumnProps = {
    title: string;
    links: Link[];
    component?: React.ComponentType;
    onChange?: () => void;
}