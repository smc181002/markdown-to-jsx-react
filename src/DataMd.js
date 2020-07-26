import React, { useState, useEffect } from "react";
import ReactMarkdown from "react-markdown";
import CodeBlock from "./CodeBlock";

export default function DataMd() {
  const url =
    "https://raw.githubusercontent.com/smc181002/classy/master/README.md";
  const [mdData, setMdData] = useState(``);

  const fetchItems = async () => {
    const objects = await fetch(url);
    const md = await objects.text();
    setMdData(md);
  };

  useEffect(() => {
    fetchItems();
  }, []);

  return (
    <ReactMarkdown
      source={mdData}
      className="codegit"
      renderers={{ code: CodeBlock }}
    />
  );
}
