import { Article } from "./article.entity.model";

export interface Category {
    id: number;
    name: string;
    articles: Article[];
  }
  

  