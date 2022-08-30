import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";
import { UserCreateNestedManyWithoutMessagesInput } from "./UserCreateNestedManyWithoutMessagesInput";

export type MessageCreateInput = {
  author: UserWhereUniqueInput;
  authorizedUsers?: UserCreateNestedManyWithoutMessagesInput;
  content: string;
  isPrivate?: boolean | null;
};
