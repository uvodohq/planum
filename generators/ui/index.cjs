module.exports = {
  description: 'UI Generator',
  prompts: [
    {
      type: 'input',
      name: 'name',
      message: '🟡 What is the name of UI component?',
    },
  ],
  actions: [
    {
      type: 'add',
      path: 'src/ui/{{kebabCase name}}/index.ts',
      templateFile: 'generators/ui/templates/component.index.ts.hbs',
    },
    {
      type: 'add',
      path: 'src/ui/{{kebabCase name}}/{{kebabCase name}}.tsx',
      templateFile: 'generators/ui/templates/component.tsx.hbs',
    },
    {
      type: 'add',
      path: 'src/ui/{{kebabCase name}}/{{kebabCase name}}.styles.ts',
      templateFile: 'generators/ui/templates/styles.ts.hbs',
    },
    {
      type: 'append',
      path: 'src/ui/index.ts',
      templateFile: 'generators/ui/templates/ui.index.ts.hbs',
    },
  ],
}
