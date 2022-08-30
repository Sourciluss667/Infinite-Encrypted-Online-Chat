import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";
import { UserListRelationFilter } from "../user/UserListRelationFilter";
import { StringFilter } from "../../util/StringFilter";
import { BooleanNullableFilter } from "../../util/BooleanNullableFilter";

export type MessageWhereInput = {
  author?: UserWhereUniqueInput;
  authorizedUsers?: UserListRelationFilter;
  content?: StringFilter;
  id?: StringFilter;
  isPrivate?: BooleanNullableFilter;
};
