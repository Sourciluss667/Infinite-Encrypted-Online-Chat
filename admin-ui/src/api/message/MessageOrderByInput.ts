import { SortOrder } from "../../util/SortOrder";

export type MessageOrderByInput = {
  authorId?: SortOrder;
  content?: SortOrder;
  createdAt?: SortOrder;
  id?: SortOrder;
  isPrivate?: SortOrder;
  updatedAt?: SortOrder;
};
