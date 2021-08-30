import React, { Fragment, useState } from 'react';
import { Link } from 'react-router-dom';

const Login = ({ setAuth }) => {
  const [inputs, setInputs] = useState({
    email: '',
    password: '',
  });

  const { email, password } = inputs;
  const onChange = (e) => {
    setInputs({ ...inputs, [e.target.name]: e.target.value });
  };

  const onSubmitForm = async (e) => {
    e.preventDefault();

    try {
      const body = { email, password };

      const response = await fetch('http://localhost:5000/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(body),
      });

      const parseRes = await response.json();
      localStorage.setItem('token', parseRes.token);
      setAuth(true);
    } catch (err) {
      console.error(err.message);
    }
  };
  return (
    <Fragment>
      <div className='w-screen min-h-screen flex flex-col justify-center items-center'>
        <h1 className='font-semibold text-2xl'>Login</h1>
        <form
          className='w-96 flex flex-col mt-3 space-y-3'
          onSubmit={onSubmitForm}
        >
          <input
            className='rounded'
            type='email'
            name='email'
            placeholder='email'
            value={email}
            onChange={(e) => onChange(e)}
          />
          <input
            className='rounded'
            type='password'
            name='password'
            placeholder='password'
            value={password}
            onChange={(e) => onChange(e)}
          />
          <button className='text-white font-semibold py-2 rounded bg-green-500 hover:bg-green-600'>
            Submit
          </button>
        </form>
        <Link to='/register'>Register</Link>
      </div>
    </Fragment>
  );
};

export default Login;
