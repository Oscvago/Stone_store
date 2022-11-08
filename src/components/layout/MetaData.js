import React from "react";

import { Helmet } from "react-helmet";

const MetaData = ({ title }) => {
  return (
    <Helmet>
      <title>{`${title} - Stone Store Always OnLine`}</title>
    </Helmet>
  );
};
export default MetaData;
