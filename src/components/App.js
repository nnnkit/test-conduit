import React, { useEffect, useRef, useState } from 'react';
import { createRef } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import useFetch from '../hooks/useFetch';
import { ROOT_URL } from '../utils/constants';
import ErrorBoundary from './ErrorBoundary';
import Header from './Header';
import Home from './Home';
import Login from './Login';
import SingleArticle from './SingleArticle';
import UserContext from './UserContext';

function App(props) {
  const [showDialog, setShowDialog] = useState(false);
  let [activeModel, setActiveModel] = useState('');
  let [user, setUser] = useState(null);
  const open = () => setShowDialog(true);
  const close = () => setShowDialog(false);

  useEffect(() => {
    if (localStorage.token) {
      fetch(ROOT_URL + 'user', {
        method: 'GET',
        headers: { authorization: `Token ${localStorage.token}` },
      })
        .then((res) => res.json())
        .then(({ user }) => {
          setUser(user);
        })
        .catch((_error) => setUser(null));
    }
  }, []);
  return (
    <BrowserRouter>
      <ErrorBoundary>
        <UserContext.Provider value={{ user, setUser }}>
          <Header open={open} setActiveModel={setActiveModel} />
          <Switch>
            <Route path='/' exact>
              <Home
                showDialog={showDialog}
                close={close}
                activeModel={activeModel}
                close={close}
              />
            </Route>
            <Route path='/article/:slug' exact>
              <SingleArticle />
            </Route>
          </Switch>
        </UserContext.Provider>
      </ErrorBoundary>
    </BrowserRouter>
  );
}

export default App;
