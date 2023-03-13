import { Suspense } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { AppRouter } from 'app/providers/router';
import { NavBar } from 'widgets/NavBar';
import { Sidebar } from 'widgets/Sidebar';

function App() {
  return (
    <div className={classNames('app', {}, [])}>
      <Suspense fallback="">
        <NavBar />

        <div className="page-content">
          <Sidebar />

          <div className="page-wrapper">
            <AppRouter />
          </div>
        </div>
      </Suspense>
    </div>
  );
}

export default App;
