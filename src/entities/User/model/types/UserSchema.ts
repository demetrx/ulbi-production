import { FeatureFlags } from '@/shared/types/featureFlags';

export enum UserRole {
  USER = 'USER',
  MANAGER = 'MANAGER',
  ADMIN = 'ADMIN'
}

export interface User {
  id: string
  username: string
  avatar?: string
  roles?: UserRole[]
  features?: FeatureFlags
}

export interface UserSchema {
  authData?: User
  _initialized: boolean
}
