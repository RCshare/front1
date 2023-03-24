import { Category } from "./category.entity.model";
import { PurchaseItem } from "./purchaseItem.entity.model";

export interface Article {
    id: number;
    name: string;
    description: string;
    price: number;
    category: Category;
    purchaseItems: PurchaseItem[];
  }