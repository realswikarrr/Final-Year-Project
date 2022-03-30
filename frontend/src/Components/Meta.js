import React from "react";
import { Helmet } from "react-helmet";

const Meta = ({ title, description, keywords }) => {
  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
    </Helmet>
  );
};

Meta.defaultProps = {
  title: "Diamond Fitness - E-commerce",
  description: "We Sell The Best Products For Cheap",
  keywords: "proteins, buy gym equipments online, buy gym clothes online",
};

export default Meta;
