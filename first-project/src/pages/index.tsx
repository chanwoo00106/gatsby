import React, { FunctionComponent } from 'react';
import Text from 'components/Text';
import { Link } from 'gatsby';

const IndexPage: FunctionComponent = () => {
  return (
    <>
      <Text text="home" />
      <Link to="/info">info</Link>
      <br />
      <a href="/info">info A</a>
    </>
  );
};

export default IndexPage;
