export { ProfileCard } from './ui/ProfileCard/ProfileCard';
export type { ProfileSchema, Profile as ProfileType } from './model/types/ProfileSchema';
export { profileReducer, profileActions } from './model/slice/ProfileSlice';
export { fetchProfileData } from './model/services/fetchProfileData/fetchProfileData';
