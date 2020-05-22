import React from "react";
import { Preview } from '@storybook/addon-docs/blocks'
import { text } from '@storybook/addon-knobs'

import { Text } from ".";

import page from './docs.mdx'

export default {
  title: "components/Text",
  parameters: { docs: { page } },
  includeStories: ['Interactive']
};

export const Interactive = () => <Text text={text('text', 'Text')} color={text('color', 'red')} />;

export const PreviewWrapper = () => (
  <Preview>
    <Interactive />
  </Preview>
)
