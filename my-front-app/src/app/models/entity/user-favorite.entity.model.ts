import { ArticleEntity } from "./article.entity.model";
import { UserEntity } from "./user.entity.model";

export interface UserFavoriteEntity {
  user: UserEntity;
  article: ArticleEntity;
}
