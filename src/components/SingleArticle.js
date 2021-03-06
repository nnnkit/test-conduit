import React from 'react';
import { useParams } from 'react-router-dom';
import useFetch from '../hooks/useFetch';
import { ROOT_URL } from '../utils/constants';
import AddComment from './AddComment';
import Comments from './Comments';

function SingleArticle(props) {
  let params = useParams();
  const [response, error] = useFetch(ROOT_URL + `articles/${params.slug}`);
  const [allComments, commentError, setComments] = useFetch(
    ROOT_URL + `articles/${params.slug}/comments`
  );

  if (response) {
    return (
      <div class='relative py-16 bg-white overflow-hidden max-w-4xl mx-auto'>
        <div class='hidden lg:block lg:absolute lg:inset-y-0 lg:h-full lg:w-full'>
          <div class='relative h-full text-lg max-w-prose mx-auto'>
            <svg
              class='absolute top-12 left-full transform translate-x-32'
              width='404'
              height='384'
              fill='none'
              viewBox='0 0 404 384'
            >
              <defs>
                <pattern
                  id='74b3fd99-0a6f-4271-bef2-e80eeafdf357'
                  x='0'
                  y='0'
                  width='20'
                  height='20'
                  patternUnits='userSpaceOnUse'
                >
                  <rect
                    x='0'
                    y='0'
                    width='4'
                    height='4'
                    class='text-gray-200'
                    fill='currentColor'
                  />
                </pattern>
              </defs>
              <rect
                width='404'
                height='384'
                fill='url(#74b3fd99-0a6f-4271-bef2-e80eeafdf357)'
              />
            </svg>
            <svg
              class='absolute top-1/2 right-full transform -translate-y-1/2 -translate-x-32'
              width='404'
              height='384'
              fill='none'
              viewBox='0 0 404 384'
            >
              <defs>
                <pattern
                  id='f210dbf6-a58d-4871-961e-36d5016a0f49'
                  x='0'
                  y='0'
                  width='20'
                  height='20'
                  patternUnits='userSpaceOnUse'
                >
                  <rect
                    x='0'
                    y='0'
                    width='4'
                    height='4'
                    class='text-gray-200'
                    fill='currentColor'
                  />
                </pattern>
              </defs>
              <rect
                width='404'
                height='384'
                fill='url(#f210dbf6-a58d-4871-961e-36d5016a0f49)'
              />
            </svg>
            <svg
              class='absolute bottom-12 left-full transform translate-x-32'
              width='404'
              height='384'
              fill='none'
              viewBox='0 0 404 384'
            >
              <defs>
                <pattern
                  id='d3eb07ae-5182-43e6-857d-35c643af9034'
                  x='0'
                  y='0'
                  width='20'
                  height='20'
                  patternUnits='userSpaceOnUse'
                >
                  <rect
                    x='0'
                    y='0'
                    width='4'
                    height='4'
                    class='text-gray-200'
                    fill='currentColor'
                  />
                </pattern>
              </defs>
              <rect
                width='404'
                height='384'
                fill='url(#d3eb07ae-5182-43e6-857d-35c643af9034)'
              />
            </svg>
          </div>
        </div>
        <div class='relative px-4 sm:px-6 lg:px-8'>
          <div class='text-lg max-w-prose mx-auto mb-6'>
            <p class='text-base text-center leading-6 text-indigo-600 font-semibold tracking-wide uppercase'>
              {response.article.tagList.join(', ')}
            </p>
            <h1 class='mt-2 mb-8 text-3xl text-center leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl sm:leading-10'>
              {response.article.title || ''}
            </h1>
          </div>
          <div class='prose prose-lg text-gray-700 mx-auto'>
            {response.article.body}
          </div>
          <AddComment setComments={setComments} allComments={allComments} />
          <Comments res={allComments} error={commentError} />
        </div>
      </div>
    );
  }

  if (error) {
    return <h1>Something went wrong!</h1>;
  }
  return <h1>Loading....</h1>;
}

export default SingleArticle;
