import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";
import { UserUpdateManyWithoutMessagesInput } from "./UserUpdateManyWithoutMessagesInput";

export type MessageUpdateInput = {
  author?: UserWhereUniqueInput;
  authorizedUsers?: UserUpdateManyWithoutMessagesInput;
  content?: string;
  isPrivate?: boolean | null;
};
