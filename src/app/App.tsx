import './styles/index.scss'
import {Link, Route, Routes} from "react-router-dom";
import {Suspense} from 'react';
import {MainPage} from "pages/MainPage";
import {AboutPage} from "pages/AboutPage";
import {useTheme} from "app/providers/theme";
import {classNames} from "shared/lib/classNames/classNames";
import {AppRouter} from "app/providers/router";
import {NavBar} from "widgets/NavBar";
import {Sidebar} from "widgets/Sidebar";

const App = () => {
  const {theme} = useTheme()

  return (
    <div className={classNames('app', {}, [theme])}>
      <NavBar />
      <div className={'page-content'}>
        <Sidebar/>

        <div className={'page-wrapper'}>
          <AppRouter/>
        </div>
      </div>
    </div>
  );
};

export default App;