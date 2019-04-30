import React, { useState, useReducer } from 'react';

import { connect } from 'react-redux';
import { postLoginRequest } from 'store/actions/auth.action';

const Home = (props = {}) => {
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

  console.log(props);

  return (
    <div className={'Login'}>
      <div className="box">
        <form action="" onSubmit={handleSubmit}>
          <input
            type="text"
            name="email"
            value={email}
            onChange={handleChange}
            placeholder="이메일을 입력하세요!"
          />
          <input
            type="password"
            name="password"
            value={password}
            onChange={handleChange}
            placeholder="비밀번호를 입력하세요!"
          />
          <button type="submit">로그인</button>
        </form>
      </div>
    </div>
  );
};

export default connect(
  (state, props) => ({
    auth: state.auth,
  }),
  { postLoginRequest },
)(Home);
