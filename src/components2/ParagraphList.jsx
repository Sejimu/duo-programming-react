import React from "react";
import ParagraphItem from "./ParagraphItem";

const ParagraphList = ({ texts }) => {
  return (
    <div>
      {texts.map((item) => (
        <ParagraphItem key={item.id} item={item} />
      ))}
    </div>
  );
};

export default ParagraphList;
