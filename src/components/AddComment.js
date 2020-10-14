import { useFormik } from 'formik';
import React, { useContext } from 'react';
import { useParams } from 'react-router-dom';
import { ROOT_URL } from '../utils/constants';
import UserContext from './UserContext';

function validator(values) {
  const errors = {};
  if (!values.comment) {
    errors.comment = 'This field is required';
  }
  return errors;
}
function AddComment({ setComments, allComments }) {
  const params = useParams();
  const context = useContext(UserContext);

  console.log(context, 'context');
  const {
    handleSubmit,
    handleChange,
    values,
    errors,
    isSubmitting,
  } = useFormik({
    initialValues: {
      comment: '',
    },
    validateOnBlur: false,
    validateOnChange: false,
    validate: validator,
    onSubmit: (values, actions) => {
      fetch(ROOT_URL + `articles/${params.slug}/comments`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          authorization: `Token ${context.user.token}`,
        },
        body: JSON.stringify({
          comment: {
            body: values.comment,
          },
        }),
      })
        .then((res) => res.json())
        .then(({ comment }) => {
          console.log({ comment }, 'inside add comment');
          actions.setSubmitting(false);
          setComments({ comments: [comment, ...allComments.comments] });
          actions.setValues({ comment: '' });
        });
    },
  });

  console.log(isSubmitting, 'issubmitting');

  return (
    <div class='mt-6'>
      <label
        for='about'
        class='block text-sm font-medium leading-5 text-gray-700 sm:mt-px sm:pt-2'
      >
        Add Comment
      </label>
      <div class='mt-1 sm:mt-0 sm:col-span-2'>
        <div class='max-w-lg flex rounded-md shadow-sm border-black border-transparent'>
          <textarea
            id='about'
            name='comment'
            value={values.comment}
            onChange={handleChange}
            rows='3'
            class='border-black form-textarea block w-full transition duration-150 ease-in-out sm:text-sm sm:leading-5'
          ></textarea>
        </div>
        <p className='text-base text-red-800'>{errors?.comment}</p>
        <button
          className={`px-10 py-2 bg-green-600 ${
            isSubmitting && 'cursor-not-allowed'
          }`}
          onClick={handleSubmit}
          disabled={isSubmitting}
        >
          {isSubmitting ? 'Adding Comment' : 'Add Comment'}
        </button>
      </div>
    </div>
  );
}

export default AddComment;
