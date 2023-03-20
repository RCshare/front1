import { UserEntity } from "./user.entity.model";

export interface ArticleEntity {
    id: number;
    name: string;
    users: UserEntity[];
}
