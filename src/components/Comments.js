import React from 'react';
import { useParams } from 'react-router-dom';
import useFetch from '../hooks/useFetch';
import { ROOT_URL } from '../utils/constants';

function Comments({ res, error }) {
  const params = useParams();

  if (error) {
    return <h1>Something went wrong😡</h1>;
  }

  if (res) {
    return (
      <div class='bg-white shadow overflow-hidden sm:rounded-md pt-20'>
        <ul>
          {res.comments.map(({ id, body }) => (
            <li key={id}>
              <div class='bg-white shadow sm:rounded-lg'>
                <div class='px-4 py-5 sm:p-6'>
                  <div class='sm:flex sm:items-start sm:justify-between'>
                    <div>
                      <div class='mt-2 max-w-xl text-sm leading-5 text-gray-700'>
                        <p>{body}</p>
                      </div>
                    </div>
                    <div class='mt-5 sm:mt-0 sm:ml-6 sm:flex-shrink-0 sm:flex sm:items-center'>
                      <span class='inline-flex rounded-md shadow-sm'>
                        <button
                          type='button'
                          class='inline-flex items-center px-4 py-2 border border-transparent text-sm leading-5 font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-500 focus:outline-none focus:border-indigo-700 focus:shadow-outline-indigo active:bg-indigo-700 transition ease-in-out duration-150 cursor-pointer'
                        >
                          Delete
                        </button>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </li>
          ))}

          <li>
            <div class='bg-white shadow sm:rounded-lg'>
              <div class='px-4 py-5 sm:p-6'>
                <div class='sm:flex sm:items-start sm:justify-between'>
                  <div>
                    <div class='mt-2 max-w-xl text-sm leading-5 text-gray-700'>
                      <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Recusandae voluptatibus corrupti atque repudiandae nam.
                      </p>
                    </div>
                  </div>
                  <div class='mt-5 sm:mt-0 sm:ml-6 sm:flex-shrink-0 sm:flex sm:items-center'>
                    <span class='inline-flex rounded-md shadow-sm'>
                      <button
                        type='button'
                        class='inline-flex items-center px-4 py-2 border border-transparent text-sm leading-5 font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-500 focus:outline-none focus:border-indigo-700 focus:shadow-outline-indigo active:bg-indigo-700 transition ease-in-out duration-150 cursor-pointer'
                      >
                        Delete
                      </button>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </li>
        </ul>
      </div>
    );
  }

  return <h1>Loading...</h1>;
}

export default Comments;
