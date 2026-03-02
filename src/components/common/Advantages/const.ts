import {
    SafetyCertificateOutlined,
    // HeartOutlined,
    // SyncOutlined,
    // CrownOutlined,
    GoldOutlined,
    HourglassOutlined,
  } from '@ant-design/icons';
  import type { AdvantageItem } from './types';
  
  export const defaultAdvantages: AdvantageItem[] = [
    // {
    //   icon: CrownOutlined,
    //   titleKey: 'advantages.diamonds.title',
    //   descriptionKey: 'advantages.diamonds.description',
    // },
    {
      icon: GoldOutlined,
      titleKey: 'advantages.metals.title',
      descriptionKey: 'advantages.metals.description',
    },
    // {
    //   icon: HeartOutlined,
    //   titleKey: 'advantages.craftsmanship.title',
    //   descriptionKey: 'advantages.craftsmanship.description',
    // },
    // {
    //   icon: SyncOutlined,
    //   titleKey: 'advantages.services.title',
    //   descriptionKey: 'advantages.services.description',
    // },
    {
      icon: SafetyCertificateOutlined,
      titleKey: 'advantages.sustainability.title',
      descriptionKey: 'advantages.sustainability.description',
    },
    {
      icon: HourglassOutlined,
      titleKey: 'advantages.timeless.title',
      descriptionKey: 'advantages.timeless.description',
    },
  ];