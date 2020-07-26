import React from "react";
// import PropTypes from "prop-types";
import SyntaxHighlighter from "react-syntax-highlighter";
import { vs2015 } from "react-syntax-highlighter/dist/esm/styles/hljs";

function CodeBlock(props) {
  console.log(props);
  const { language, value } = props;
  return (
    <SyntaxHighlighter language={language} style={vs2015}>
      {value}
    </SyntaxHighlighter>
  );
}

export default CodeBlock;
