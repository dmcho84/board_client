import React, { useState, useReducer, useEffect } from 'react';
import { connect } from 'react-redux';

import { getBoardListFromEmailRequest } from 'store/actions/board.action';

const Board = (props = {}) => {
  const { auth } = props;
  const { getBoardListFromEmailRequest } = props;

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  console.log({ useReducer });
  const handleSubmit = e => {
    e.preventDefault();
    // postLoginRequest(email, password);
  };

  useEffect(() => {
    console.log('useEffect');
    getBoardListFromEmailRequest(props.match.params.email);
  }, []);

  const handleChange = e => {
    const name = e.target.name;
    const value = e.target.value;
    let setState = () => {};
    if (name === 'email') setState = setEmail;
    if (name === 'password') setState = setPassword;
    setState(value);
  };

  console.log({ props }, props.match.params.email);

  return (
    <div className={'board email'}>
      <div className="box" />
    </div>
  );
};

export default connect(
  (state, props) => ({
    auth: state.auth,
  }),
  { getBoardListFromEmailRequest },
)(Board);
