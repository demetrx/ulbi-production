import React, { memo, Suspense, useMemo } from 'react';
import { Route, Routes } from 'react-router-dom';
import { routeConfig } from 'shared/config/router/routeConfig';
import { PageLoader } from 'widgets/PageLoader';
import { useSelector } from 'react-redux';
import { getUserAuthData } from 'entities/User';

const AppRouter = () => {
  const isAuth = useSelector(getUserAuthData);

  const routes = useMemo(
    () => Object.values(routeConfig).filter((route) => isAuth || !route.authOnly),
    [isAuth],
  );

  return (
    <Suspense fallback={<PageLoader />}>
      <Routes>
        {routes.map((routeProps) => (
        // eslint-disable-next-line react/jsx-props-no-spreading
          <Route key={routeProps.path} {...routeProps} />
        ))}
      </Routes>
    </Suspense>
  );
};

export default memo(AppRouter);
