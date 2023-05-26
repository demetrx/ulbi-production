import { Suspense, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { classNames } from '@/shared/lib/classNames/classNames';
import { AppRouter } from '@/app/providers/router';
import { NavBar } from '@/widgets/NavBar';
import { Sidebar } from '@/widgets/Sidebar';
import { getUserInitialized, initAuthData } from '@/entities/User';
import { useAppDispatch } from '@/shared/lib/hooks';
import { PageLoader } from '@/widgets/PageLoader';

function App() {
  const dispatch = useAppDispatch();
  const initialized = useSelector(getUserInitialized);

  useEffect(() => {
    dispatch(initAuthData());
  }, [dispatch]);

  if (!initialized) return <PageLoader />;

  return (
    <div className={classNames('app', {}, [])}>
      <Suspense fallback="">
        <NavBar />

        <div className="page-content">
          <Sidebar />

          {initialized && <AppRouter />}
        </div>
      </Suspense>
    </div>
  );
}

export default App;
