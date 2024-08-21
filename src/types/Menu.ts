export type MenuItem = {
  id: string;
  name: string;
  description: string;
  price: number;
  quantity: number;
  availability: boolean;
  image: string;
  information?: {
    calories: number;
    allergens?: string[];
    preparation_time: string;
  };
};

export type Menu = {
  category: string;
  items: MenuItem[];
};
