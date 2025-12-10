export type MenuLink = {
    key: string;
    labelKey: string; 
    to: string; 
  };

  
export type MenuSection = {
    titleKey: string;
    links: MenuLink[];
};
  
export type MenuKey = "women" | "men" | "collection" | "giftGuide" | "kassamanWorld" | "contactUs"

export type MenuItem = {
  key: MenuKey;        
  image?: string;           
  sections: MenuSection[]; 
};

export type MenuContent = Record<MenuKey, MenuItem>;

export type MenuProps = {
  active: MenuKey;
  onChange: (key: MenuKey) => void;
  content: MenuContent;
};


// type MenuItemType = {
//   key: string;
//   label?: ReactNode;
//   icon?: ReactNode;
//   children?: MenuItemType[];  // <-- used for SubMenu
//   type?: "group";             // optional grouping
// };
