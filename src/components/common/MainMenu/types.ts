export type MenuLink = {
    key: string;
    labelKey: string; 
    to: string; 
  };

  
export type MenuSection = {
    titleKey: string;
    links: MenuLink[];
};
  
export type MenuKey = "women" | "men" | "collections" |  "exclusive"| "giftGuide" | "world" | "contact"



export type MenuTab = {
  key: string;   
  labelKey: string;   
  image?: string;           
  sections: MenuSection[]; 
};

export type MenuContent = MenuTab[];

export type MenuProps = {
  active: MenuKey;
  onChange: (key: MenuKey) => void;
  content: MenuContent;
};