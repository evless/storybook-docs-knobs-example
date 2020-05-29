import { DocsContainer } from '@storybook/addon-docs/blocks'
import { addDecorator, addParameters } from '@storybook/react'
import { themes } from '@storybook/theming';

addParameters({
  docs: {
    container: DocsContainer,
  },
  options: {
    theme: themes.dark,
    showRoots: true,
  }
});
