import { IPaginatedObject } from './PaginatedObject';

export interface UserType {
  id?: string;
  firstName?: string;
  lastName?: string;
  createdAt?: string;
  modifiedAt?: string;
  email?: string;
  isAdmin?: boolean;
  phone?: string;
  username?: string;
  password?: string;
  avatar?: string;
  birthDate?: string;
}

export interface UsersPaginated extends IPaginatedObject {
  items: Array<UserType>;
}
