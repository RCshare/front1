import { Purchase } from "./purchase.entity.model";


export interface User {
  id: number;
  firstname: string;
  lastname: string;
  email: string;
  password: string;
  role: "USER";
  purchases: Purchase[];


}
