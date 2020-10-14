import React from 'react';
import { Link } from 'react-router-dom';
import ErrorBoundary from './ErrorBoundary';
import useFetch from '../hooks/useFetch';
import { ROOT_URL } from '../utils/constants';
import Article from './Article';

function Articles(props) {
  const [response, error] = useFetch(ROOT_URL + 'articles');

  return (
    <div className='bg-white pt-6 pb-20 px-4 sm:px-6 lg:pt-24 lg:pb-28 lg:px-8'>
      <div className='relative max-w-6xl mx-auto lg:max-w-7xl'>
        <div>
          <h2 className='text-3xl leading-9 tracking-tight font-extrabold text-gray-900 sm:text-4xl sm:leading-10'>
            Recent articles
          </h2>
          <p className='mt-3 text-xl leading-7 text-gray-500 sm:mt-4'>
            Nullam risus blandit ac aliquam justo ipsum. Quam mauris volutpat
            massa dictumst amet. Sapien tortor lacus arcu.
          </p>
        </div>
        <div className='mt-12 grid gap-16 border-t-2 border-gray-100 pt-12 lg:grid-cols-3 lg:col-gap-5 lg:row-gap-12'>
          {response?.articles.map((article) => (
            <Article {...article} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Articles;
