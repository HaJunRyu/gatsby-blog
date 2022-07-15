import React from 'react';

type Props = { text: string };

function Text({ text }: Props) {
  return <div>{text}</div>;
}

export default Text;
