import { Message } from "../message/Message";

export type User = {
  createdAt: Date;
  encryptedMessages?: Array<Message>;
  firstName: string | null;
  id: string;
  lastName: string | null;
  roles: Array<string>;
  updatedAt: Date;
  username: string;
  writtenMessages?: Array<Message>;
};
