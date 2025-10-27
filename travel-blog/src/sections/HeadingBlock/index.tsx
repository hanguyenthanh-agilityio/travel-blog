import React from 'react';

interface HeadingBlockProps {
  id?: string;
  title: string;
  subTitle?: string;
}

const HeadingBlock: React.FC<HeadingBlockProps> = ({ id, title, subTitle }) => {
  return (
    <div className="text-center text-primary my-8" id={id}>
      <h2 className="text-xl md:text-2xl font-bold">{title}</h2>
      {subTitle && <p className="mt-2">{subTitle}</p>}
    </div>
  );
};

export default HeadingBlock;
