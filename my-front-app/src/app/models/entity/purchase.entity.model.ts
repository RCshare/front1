import { PurchaseItem } from "./purchaseItem.entity.model";
import { User } from "./user.entity.model";

export interface Purchase {
    id: number;
    buyer: User;
    purchaseItems: PurchaseItem[];
    date: Date;
  }