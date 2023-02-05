import {lazy} from "react";

export const AboutPage = lazy(() => new Promise(resolve => {
  // @ts-ignore
  setTimeout(() => resolve(import('./AboutPage')), 1500)
}))