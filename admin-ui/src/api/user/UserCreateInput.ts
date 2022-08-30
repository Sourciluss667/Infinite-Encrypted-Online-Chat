import { MessageCreateNestedManyWithoutUsersInput } from "./MessageCreateNestedManyWithoutUsersInput";

export type UserCreateInput = {
  encryptedMessages?: MessageCreateNestedManyWithoutUsersInput;
  firstName?: string | null;
  lastName?: string | null;
  password: string;
  roles: Array<string>;
  username: string;
  writtenMessages?: MessageCreateNestedManyWithoutUsersInput;
};
