import { DocsContainer } from '@storybook/addon-docs/blocks'
import { withKnobs } from '@storybook/addon-knobs'
import { withInfo } from '@storybook/addon-info'
import { addDecorator, addParameters } from '@storybook/react'
import { themes } from '@storybook/theming';

addDecorator(withKnobs)
addDecorator(
  withInfo({
    header: false,
  })
)

addParameters({
  docs: {
    container: DocsContainer,
  },
  options: {
    theme: themes.dark,
    showRoots: true,
  }
});
