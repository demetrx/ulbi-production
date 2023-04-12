import { UserType } from 'entities/User';

export interface Comment{
  id: string;
  user: UserType;
  text: string;
}
