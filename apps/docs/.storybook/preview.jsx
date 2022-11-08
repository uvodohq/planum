import { addParameters } from '@storybook/react'
import { DocsPage, DocsContainer } from '@storybook/addon-docs'
import {
  SectionName,
  Title,
  Tip,
  AnchorListItem,
  ComponentName,
  // FunctionArguments,
  DocFooter,
  MultipleStoryElementsWrapper,
  Paragraph,
  // ComponentRules,
  UsageGuidelines,
  // FunctionArgument,
  // RelatedComponents,
  // LinkComponent,
} from '../storybook/components'

addParameters({
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    expanded: true,
    sort: 'requiredFirst',
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  docs: {
    inlineStories: true,
    container: ({ children, context }) => (
      <DocsContainer context={context}>
        {children}
        {/* {<DocFooter />} */}
      </DocsContainer>
    ),
    page: DocsPage,
    components: {
      h1: ComponentName,
      h2: SectionName,
      h3: Title,
      li: AnchorListItem,
      // a: LinkComponent,
      p: Paragraph,
      Tip,
      // ComponentRules,
      // UsageGuidelines,
      // FunctionArguments,
      // FunctionArgument,
      // RelatedComponents,
    },
  },

  viewMode: 'docs',
  previewTabs: {
    'storybook/docs/panel': {
      index: -1,
    },
    canvas: { title: 'Demo' },
  },

  themes: {
    default: 'Light',
    list: [
      { name: 'Light', class: 'light-app-them', color: '#ffffff' },
      { name: 'Dark', class: 'dark-app-theme', color: '#1C1F3B' },
      { name: 'Black', class: 'black-app-theme', color: '#111111' },
      { name: 'Hacker', class: 'hacker_theme-app-theme', color: '#282a36' },
    ],
  },

  options: {
    storySort: {
      order: [
        'Welcome',
        'Foundations',
        'Components/**',
        'Inputs',
        'Data display',
        'Media',
        'Popover',
        'Pickers',
        '*',
        'Accessibility',
        'Hooks',
      ],
    },
  },
})

export const decorators = [
  (Story, { className }) => {
    return (
      <MultipleStoryElementsWrapper className={className}>
        <Story />
      </MultipleStoryElementsWrapper>
    )
  },
]
