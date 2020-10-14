import React, { useState } from 'react';
import Header from './Header';
import Login from './Login';
import Dialog from '@reach/dialog';
import VisuallyHidden from '@reach/visually-hidden';
import Signup from './Signup';
import Articles from './Articles';

function showModel(label, close) {
  switch (label) {
    case 'login':
      return <Login close={close} />;
    case 'signup':
      return <Signup />;
    default:
      return '';
  }
}

function Home({ showDialog, close, activeModel }) {
  return (
    <>
      <Dialog isOpen={showDialog} onDismiss={close}>
        <div>
          <div className='fixed bottom-0 inset-x-0 px-4 pb-6 sm:inset-0 sm:p-0 sm:flex sm:items-center sm:justify-center'>
            <div className='absolute inset-0 bg-gray-500 opacity-75'>
              <button className='' onClick={close}>
                <VisuallyHidden>Close</VisuallyHidden>
                <span aria-hidden>×</span>
              </button>
            </div>

            {showModel(activeModel, close)}
          </div>
        </div>
      </Dialog>
      <Articles />
    </>
  );
}

export default Home;
