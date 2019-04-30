import React from 'react';

import classNames from 'classnames/bind';
import styles from './CommonWrapper.scss';
const cx = classNames.bind(styles);

const CommonWrapper = ({ children }) => {
  return <div className={cx('CommonWrapper')}>{children}</div>;
};

export default CommonWrapper;
