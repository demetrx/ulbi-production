import { Suspense, useEffect } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { AppRouter } from 'app/providers/router';
import { NavBar } from 'widgets/NavBar';
import { Sidebar } from 'widgets/Sidebar';
import { useDispatch, useSelector } from 'react-redux';
import { getUserInitialized, userActions } from 'entities/User';

function App() {
  const dispatch = useDispatch();
  const initialized = useSelector(getUserInitialized);

  useEffect(() => {
    dispatch(userActions.initAuthData());
  }, [dispatch]);

  return (
    <div className={classNames('app', {}, [])}>
      <Suspense fallback="">
        <NavBar />

        <div className="page-content">
          <Sidebar />

          <div className="page-wrapper">
            {initialized && <AppRouter />}
          </div>
        </div>
      </Suspense>
    </div>
  );
}

export default App;
