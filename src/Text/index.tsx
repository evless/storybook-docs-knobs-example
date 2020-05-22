import React from 'react'

export const Text: React.FC<{ text: string; color: string }> = ({ text, color }) => (
  <p style={{ color }}>{text}</p>
)