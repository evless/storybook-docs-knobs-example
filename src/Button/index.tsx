import React from "react";

export type Props = { text: string }

export const Button: React.FC<Props> = ({ text }) => (
  <button>{text}</button>
);
