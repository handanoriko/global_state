import { atom } from "recoil";

export const userState = atom({
  key: "userStatte",
  default: { isAdmin: false }
});
