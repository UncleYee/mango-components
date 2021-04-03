module.exports = {
  extends: ['airbnb-typescript'],
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    },
    useJSXTextNode: true,
    project: './tsconfig.json'
  },
  rules: {
    'react/jsx-props-no-spreading': 'off',
    'react/prop-types': 'off',
    'jsx-a11y/media-has-caption': 'off',
    'jsx-a11y/click-events-have-key-events': 'off',
    'jsx-a11y/no-static-element-interactions': 'off',
    'jsx-a11y/no-noninteractive-element-interactions': 'off'
  }
}