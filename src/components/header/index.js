import React from 'react';
import PropTypes from 'prop-types';
import {Head1, Head3} from './styled-component';

const Header = (props) => {
  const {children, variant} = props;
  if (variant) {
    return <Head3>{children}</Head3>;
  }
  return <Head1>{children}</Head1>;
};

Header.propTypes = {
  variant: PropTypes.string,
  children: PropTypes.string.isRequired,
};

Header.defaultProps = {
  variant: '',
};

export default Header;
