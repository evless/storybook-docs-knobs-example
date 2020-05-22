declare module '*.mdx' {
  let MDXComponent: (props: any) => JSX.Element
  export default MDXComponent
}

declare module '@storybook/addon-docs/blocks' {
  export const Preview: React.ComponentType<{}>
  export const Props: React.ComponentType<{
    of: any
  }>
}