import React from 'react'

export type Props = { text: string; color: string }

export const Text: React.FC<Props> = ({ text, color }) => (
  <p style={{ color }}>{text}</p>
)