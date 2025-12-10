import React from "react";
import type { MenuContent, MenuSection,  MenuItem ,MenuLink} from "./types"
import type { MenuProps as AntMenuProps } from "antd";
import { Link } from "react-router-dom";

export const buildMenuItems = (content: MenuContent,t: (key: string) => string): AntMenuProps["items"] => {
  return Object.values(content).map((tab:MenuItem) => ({
    key: tab.key,
    label: t(tab.key),
    children: tab.sections.map((section: MenuSection) => ({
      key: section.titleKey,
      label: t(section.titleKey),
      children: section.links.map((link: MenuLink) => ({
        key: link.key,
        label: React.createElement(Link, { to: link.to }, t(link.labelKey)),
      })),
    })), 
  }))
}

