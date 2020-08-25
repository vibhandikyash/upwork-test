/* eslint-disable no-undef */
import React, { useEffect } from 'react';
import PropTypes from 'prop-types';

// import useRouter from 'utils/useRouter';

const NODE_ENV = process.env.NODE_ENV;
const GA_MEASUREMENT_ID = process.env.REACT_APP_GA_MEASUREMENT_ID;

const Page = props => {
  const { title, children, ...rest } = props;

  // const router = useRouter();

  useEffect(() => {
    if (NODE_ENV !== 'production') {
      return;
    }

    if (window.gtag) {
      window.gtag('config', GA_MEASUREMENT_ID, {
        // page_path: router.location.pathname,
        page_name: title
      });
    }
  }, [title]);

  return (
    <div {...rest}>
        <title>{title}</title>
      {children}
    </div>
  );
};

Page.propTypes = {
  children: PropTypes.node,
  title: PropTypes.string
};

export default Page;
