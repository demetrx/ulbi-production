import { Suspense, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { classNames } from '@/shared/lib/classNames/classNames';
import { AppRouter } from '@/app/providers/router';
import { NavBar } from '@/widgets/NavBar';
import { Sidebar } from '@/widgets/Sidebar';
import { getUserInitialized, initAuthData } from '@/entities/User';
import { useAppDispatch } from '@/shared/lib/hooks';
import { PageLoader } from '@/widgets/PageLoader';
import { ToggleFeature } from '@/shared/lib/features';
import { Loader } from '@/shared/ui';
import { MainLayout } from '@/shared/layouts';

function App() {
  const dispatch = useAppDispatch();
  const initialized = useSelector(getUserInitialized);

  useEffect(() => {
    dispatch(initAuthData());
  }, [dispatch]);

  if (!initialized) return <PageLoader />;

  return (
    <ToggleFeature
      feature="isAppRedesigned"
      on={(
        <div className={classNames('app', {}, ['redesigned'])}>
          <Suspense fallback={<Loader />}>
            <MainLayout
              header={<NavBar />}
              content={initialized && <AppRouter />}
              sidebar={<Sidebar />}
              toolbar={<div>123</div>}
            />
          </Suspense>
        </div>
      )}
      off={(
        <div className={classNames('app', {}, [])}>
          <Suspense fallback={<Loader />}>
            <NavBar />

            <div className="page-content">
              <Sidebar />

              {initialized && <AppRouter />}
            </div>
          </Suspense>
        </div>
    )}
    />
  );
}

export default App;
