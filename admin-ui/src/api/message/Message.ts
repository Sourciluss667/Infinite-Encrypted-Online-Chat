import { User } from "../user/User";

export type Message = {
  author?: User;
  authorizedUsers?: Array<User>;
  content: string;
  createdAt: Date;
  id: string;
  isPrivate: boolean | null;
  updatedAt: Date;
};
