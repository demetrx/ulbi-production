import { createSelector } from '@reduxjs/toolkit';
import { getUserAuthData } from '@/entities/User';
import MainIcon from '@/shared/assets/icons/main.svg';
import AboutIcon from '@/shared/assets/icons/about.svg';
import ProfileIcon from '@/shared/assets/icons/profile.svg';
import ArticlesIcon from '@/shared/assets/icons/article-20-20.svg';
import { SidebarItemType } from '../types/sidebar';
import {
  getRouteAbout, getRouteArticles, getRouteMain, getRouteProfile,
} from '@/app/providers/router';

export const getSidebarItems = createSelector(
  getUserAuthData,
  (userAuthData) => {
    const sidebarItemsList :SidebarItemType[] = [
      {
        path: getRouteMain(),
        Icon: MainIcon,
        text: 'Main',
      },
      {
        path: getRouteAbout(),
        Icon: AboutIcon,
        text: 'About',
      },
    ];

    if (userAuthData) {
      sidebarItemsList.push(
        {
          path: getRouteProfile(userAuthData.id),
          Icon: ProfileIcon,
          text: 'Profile',
          authOnly: true,
        },
        {
          path: getRouteArticles(),
          Icon: ArticlesIcon,
          text: 'Articles',
          authOnly: true,
        },
      );
    }

    return sidebarItemsList;
  },
);
