export type BookingItem = {
  productId: string;
  quantity: number;
};

export type BookingRequest = {
  items: BookingItem[];
  customer: {
    name: string;
    phone: string;
    email?: string;
    telegram?: string;
    preferredContact: "phone" | "telegram" | "email";
  };
  visit: {
    date: string; // ISO 8601
    time: string; // e.g. "15:30"
    storeId?: string;
  };
  comment?: string;
};
