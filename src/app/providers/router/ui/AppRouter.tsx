import React, {
  memo, ReactElement, Suspense, useCallback,
} from 'react';
import { Route, Routes } from 'react-router-dom';
import { AppRoutesProps, routeConfig } from '@/app/providers/router/config/routeConfig';
import { PageLoader } from '@/widgets/PageLoader';
import { RequireAuth } from '@/app/providers/router/ui/RequireAuth';

const AppRouter = () => {
  const renderWithWrapper = useCallback(
    (routeProps: AppRoutesProps) => (
      <Route
        key={routeProps.path}
        path={routeProps.path}
        element={routeProps.authOnly
          ? <RequireAuth roles={routeProps.roles}>{routeProps.element as ReactElement}</RequireAuth>
          : routeProps.element}
      />
    ),

    [],
  );

  return (
    <Suspense fallback={<PageLoader />}>
      <Routes>
        {Object.values(routeConfig).map(renderWithWrapper)}
      </Routes>
    </Suspense>
  );
};

export default memo(AppRouter);
