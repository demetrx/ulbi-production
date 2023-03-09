import React, { Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import { routeConfig } from 'shared/config/routeConfig/routeConfig';
import { PageLoader } from 'widgets/PageLoader';

const AppRouter = () => (
  <Suspense fallback={<PageLoader />}>
    <Routes>
      {Object.values(routeConfig).map((routeProps) => (
        // eslint-disable-next-line react/jsx-props-no-spreading
        <Route key={routeProps.path} {...routeProps} />
      ))}
    </Routes>
  </Suspense>
);

export default AppRouter;
