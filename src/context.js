import { createContext, useContext } from "react";
export const UserInfo = createContext();
// export const UserInfoHolder = createContext();
// export function UserInfo() {
//   const user = useContext(UserInfoHolder);

//   if (user === undefined) {
//     throw new Error("you need to login");
//   }

//   return user;
// }
