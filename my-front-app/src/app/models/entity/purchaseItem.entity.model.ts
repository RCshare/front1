import { Article } from "./article.entity.model";
import { Purchase } from "./purchase.entity.model";

export interface PurchaseItem {
  id: number;
  article: Article;
  quantity: number;
  price: number;
  purchase: Purchase;
}
