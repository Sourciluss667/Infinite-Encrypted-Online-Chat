import { MessageUpdateManyWithoutUsersInput } from "./MessageUpdateManyWithoutUsersInput";

export type UserUpdateInput = {
  encryptedMessages?: MessageUpdateManyWithoutUsersInput;
  firstName?: string | null;
  lastName?: string | null;
  password?: string;
  roles?: Array<string>;
  username?: string;
  writtenMessages?: MessageUpdateManyWithoutUsersInput;
};
