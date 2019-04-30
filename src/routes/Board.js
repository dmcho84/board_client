import React, { useState, useReducer } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { postLoginRequest } from 'store/actions/auth.action';

const Board = (props = {}) => {
  const { auth } = props;
  const { postLoginRequest } = props;

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  console.log({ useReducer });
  const handleSubmit = e => {
    e.preventDefault();
    postLoginRequest(email, password);
  };

  const handleChange = e => {
    const name = e.target.name;
    const value = e.target.value;
    let setState = () => {};
    if (name === 'email') setState = setEmail;
    if (name === 'password') setState = setPassword;
    setState(value);
  };

  return (
    <div className={'Login'}>
      <div className="box">Board</div>
    </div>
  );
};

export default withRouter(
  connect(
    (state, props) => ({
      auth: state.auth,
    }),
    { postLoginRequest },
  )(Board),
);
