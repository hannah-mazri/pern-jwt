import React, { Fragment, useState, useEffect } from 'react';
import { toast } from 'react-toastify';

const Dashboard = ({ setAuth }) => {
  const [name, setName] = useState('');

  async function getName() {
    try {
      const response = await fetch('/dashboard', {
        method: 'GET',
        headers: { token: localStorage.getItem('token') },
      });

      const parseRes = await response.json();

      setName(parseRes.user_name);
    } catch (err) {
      console.error(err.message);
    }
  }

  const logout = (e) => {
    e.preventDefault();
    localStorage.removeItem('token');
    setAuth(false);

    toast.success('Logged out successfully');
  };

  useEffect(() => {
    getName();
  }, []);

  return (
    <Fragment>
      <h1>Dashboard {name}</h1>
      <button
        className='py-2 px-6 rounded text-white bg-indigo-500 hover:bg-indigo-600'
        onClick={(e) => logout(e)}
      >
        Log out
      </button>
    </Fragment>
  );
};

export default Dashboard;
