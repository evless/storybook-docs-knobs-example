import React from "react";
import { Preview } from '@storybook/addon-docs/blocks'

import { Props, Text } from ".";

import page from './docs.mdx'

export default {
  title: "components/Text",
  parameters: { docs: { page } },
  includeStories: ['Interactive']
};

export const Interactive = (agrs: Props) => <Text {...agrs} />;
Interactive.args = { text: 'Text', color: 'red' }

export const PreviewWrapper = () => (
  <Preview>
    <Interactive {...Interactive.args} />
  </Preview>
)
