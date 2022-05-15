import React, { FunctionComponent } from 'react';
import { graphql, Link } from 'gatsby';
import Text from 'components/Text';

interface InfoPageProps {
  data: {
    site: {
      siteMetadata: {
        title: string;
        description: string;
        author: string;
      };
    };
  };
}

const InfoPage: FunctionComponent<InfoPageProps> = ({
  data: {
    site: { siteMetadata },
  },
}) => {
  return (
    <div>
      <Text text={siteMetadata.title} />
      <Text text={siteMetadata.author} />
      <Text text={siteMetadata.description} />
      <Link to="/">main</Link>
    </div>
  );
};

export default InfoPage;

export const metadataQuery = graphql`
  {
    site {
      siteMetadata {
        title
        description
        author
      }
    }
  }
`;
