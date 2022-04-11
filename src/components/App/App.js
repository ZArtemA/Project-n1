// @ts-ignore
import { React, useState } from 'react';
import { Route, Switch } from 'react-router-dom';
import Main from '../Main/Main';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import PageNotFound from '../PageNotFound/PageNotFound';
import './App.css';

function App() {


  const [headerMenu, setHeaderMenu] = useState(false);

  function handleNavMenuClick() {
    setHeaderMenu(true)
  }

  function closeMenu() {
    setHeaderMenu(false)
  }

  return (
    <main  className="App">
            <Switch>
                <Header
                isOpen={headerMenu}
                onClose={closeMenu}
                onMenuBtnClick={() =>{handleNavMenuClick()}}
                />
              <Route exact path="/">
                <Main />
              </Route>
              <Route path="*">
                <PageNotFound />
              </Route>
              <Footer />
              </Switch>
    </main >
  );
}

export default App; 