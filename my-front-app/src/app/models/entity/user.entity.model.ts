import { ArticleEntity } from "./article.entity.model";

export interface UserEntity {
    id: number;
    username: string;
    password: string;
    favoriteArticles: ArticleEntity[];
}