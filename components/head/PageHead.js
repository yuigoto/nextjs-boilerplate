import React from "react";
import PropTypes from "prop-types";
import Head from "next/head";

/**
 * components/head/PageHead
 * ----------------------------------------------------------------------
 * Lets us easily set page title and meta description, author and keywords.
 *
 * @since 0.0.1
 */
export const PageHead = ({title, description, author, keywords}) => {
  let tags = [];

  tags.push(<title key={"title"}>{title}</title>);

  if (description !== null) {
    tags.push(<meta key={"description"} name={"description"} content={description}/>);
  }

  if (author !== null) {
    tags.push(<meta key={"author"} name={"author"} content={author}/>);
  }

  if (keywords !== null) {
    if (Array.isArray(keywords)) keywords = keywords.join(", ");
    tags.push(<meta key={"keywords"} name={"keywords"} content={keywords}/>);
  }

  return (<Head>{tags}</Head>);
};

// ----------------------------------------------------------------------

PageHead.defaultProps = {
  description: null,
  author: null,
  keywords: null
};

PageHead.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string,
  author: PropTypes.string,
  keywords: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.arrayOf(PropTypes.string)
  ])
};
