import React from "react";
import { Link } from "react-router-dom";
import type { TFunction } from "i18next";
import type { MenuProps } from "antd";
import type { CollectionConfig } from "../../../api/mock/products/types";
import type { MenuKey } from "./types";


export const getMenuContent = (
  t: TFunction,
  collections: CollectionConfig[],
  images?: Partial<Record<MenuKey, string>>
): Record<MenuKey, { sections: { title?: string; links: { label: string; to: string }[] }[]; image?: string }> => {
  const womenCollections = collections.filter((c) => c.gender === "women");
  const menCollections = collections.filter((c) => c.gender === "men");
  const allCollections = collections.filter((c) => !c.isExclusive);
  const exclusiveCollections = collections.filter((c) => c.isExclusive);

  return {
    women: {
      image: images?.women,
      sections: [
        {
          title: t("menu.labels.collections"),
          links: womenCollections.map((c) => ({
            label: c.collection,
            to: `/catalog/${c.slug}`,
          })),
        },
        {
          title: t("menu.labels.women"),
          links: [
            { label: t("menu.women.weddingRings"), to: "/catalog/women/wedding-ring" },
            { label: t("menu.women.earrings"), to: "/catalog/women/earring" },
            { label: t("menu.women.necklaces"), to: "/catalog/women/necklace" },
            { label: t("menu.women.bracelets"), to: "/catalog/women/bracelet" },
          ],
        },
      ],
    },
    men: {
      image: images?.men,
      sections: [
        {
          title: t("menu.labels.collections"),
          links: menCollections.map((c) => ({
            label: c.collection,
            to: `/catalog/${c.slug}`,
          })),
        },
        {
          title: t("menu.labels.men"),
          links: [
            { label: t("menu.men.rings"), to: "/catalog/men/ring" },
            { label: t("menu.men.bracelets"), to: "/catalog/men/bracelet" },
            { label: t("menu.men.pendants"), to: "/catalog/men/pendant" },
            { label: t("menu.men.cufflinks"), to: "/catalog/men/cufflink" },
            { label: t("menu.men.necklaces"), to: "/catalog/men/necklace" },
          ],
        },
      ],
    },
    collections: {
      image: images?.collections,
      sections: [
        {
          links: allCollections.map((c) => ({
            label: c.collection,
            to: `/catalog/${c.slug}`,
          })),
        },
      ],
    },
    exclusive: {
      image: images?.exclusive,
      sections: [
        {
          links: exclusiveCollections.map((c) => ({
            label: c.collection,
            to: `/catalog/${c.slug}`,
          })),
        },
      ],
    },
    giftGuide: {
      image: images?.giftGuide,
      sections: [
        {
          links: [
            { label: t("menu.giftGuide.forHer"), to: "/gifts/for-her" },
            { label: t("menu.giftGuide.forHim"), to: "/gifts/for-him" },
            { label: t("menu.giftGuide.wedding"), to: "/gifts/wedding" },
            { label: t("menu.giftGuide.luxury"), to: "/gifts/luxury" },
          ],
        },
      ],
    },
    world: {
      image: images?.world,
      sections: [
        {
          links: [
            { label: t("menu.world.ourStory"), to: "/about/story" },
            { label: t("menu.world.craftsmanship"), to: "/about/craftsmanship" },
            { label: t("menu.world.materials"), to: "/about/materials" },
            { label: t("menu.world.sustainability"), to: "/about/sustainability" },
          ],
        },
      ],
    },
    contact: {
      image: images?.contact,
      sections: [
        {
          links: [
            { label: t("menu.contact.email"), to: "/contact/email" },
            { label: t("menu.contact.phone"), to: "/contact/phone" },
            { label: t("menu.contact.stores"), to: "/contact/stores" },
            { label: t("menu.contact.faq"), to: "/contact/faq" },
          ],
        },
      ],
    },
  };
};

// Mobile
export const buildMobileMenuItems = (
  t: TFunction,
  collections: CollectionConfig[]
): MenuProps["items"] => {
  const menuContent = getMenuContent(t, collections);

  return [
    {
      key: "women",
      label: t("menu.labels.women"),
      children: [
        {
          key: "women-collections",
          label: t("menu.labels.collections"),
          children: menuContent.women.sections[0].links.map((link) => ({
            key: link.to,
            label: React.createElement(Link, { to: link.to }, link.label),
          })),
        },
        {
          key: "women-categories",
          label: t("menu.labels.women"),
          children: menuContent.women.sections[1].links.map((link) => ({
            key: link.to,
            label: React.createElement(Link, { to: link.to }, link.label),
          })),
        },
      ],
    },
    {
      key: "men",
      label: t("menu.labels.men"),
      children: menuContent.men.sections[0].links.map((link) => ({
        key: link.to,
        label: React.createElement(Link, { to: link.to }, link.label),
      })),
    },
    {
      key: "collections",
      label: t("menu.labels.collections"),
      children: menuContent.collections.sections[0].links.map((link) => ({
        key: link.to,
        label: React.createElement(Link, { to: link.to }, link.label),
      })),
    },
    {
      key: "exclusive",
      label: t("menu.labels.exclusive"),
      children: menuContent.exclusive.sections[0].links.map((link) => ({
        key: link.to,
        label: React.createElement(Link, { to: link.to }, link.label),
      })),
    },
    {
      key: "giftGuide",
      label: t("menu.labels.giftGuide"),
      children: menuContent.giftGuide.sections[0].links.map((link) => ({
        key: link.to,
        label: React.createElement(Link, { to: link.to }, link.label),
      })),
    },
    {
      key: "world",
      label: t("menu.labels.world"),
      children: menuContent.world.sections[0].links.map((link) => ({
        key: link.to,
        label: React.createElement(Link, { to: link.to }, link.label),
      })),
    },
    {
      key: "contact",
      label: t("menu.labels.contact"),
      children: menuContent.contact.sections[0].links.map((link) => ({
        key: link.to,
        label: React.createElement(Link, { to: link.to }, link.label),
      })),
    },
  ];
};