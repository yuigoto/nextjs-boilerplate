import React from "react";
import PropTypes from "prop-types";
import Head from "next/head";

/**
 * components/head/FbOpenGraph
 * ----------------------------------------------------------------------
 * Allows us to easily set Facebook's OpenGraph meta tags from anywhere.
 *
 * @since 0.0.1
 */
export const FbOpenGraph = ({title, type, url, image, siteName, description}) => {
  return (
    <Head>
      <meta property={"og:title"} content={title}/>
      <meta property={"og:type"} content={type}/>
      <meta property={"og:url"} content={url}/>
      <meta property={"og:image"} content={image}/>
      <meta property={"og:siteName"} content={siteName}/>
      <meta property={"og:description"} content={description}/>
    </Head>
  );
};

// ----------------------------------------------------------------------

FbOpenGraph.propTypes = {
  title: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  siteName: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired
};
