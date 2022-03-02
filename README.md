# Lemon Test - Button Component

## :mag_right: Vercel's deploy (demonstration page)

<a target="_blank" href="https://lemon-test.vercel.app/">`https://lemon-test.vercel.app/`</a>

### :rocket: How to run the project?

1. Clone this repo: git clone `git@github.com:arthurticianeli/lemon-test.git`;

2. Navigate to project's directory: `cd lemon-test`;

3. Install dependencies: `yarn install`;

4. Run the application: `yarn start`;

6. Run the tests: `yarn test`.

## :computer: Implementation

### Technologies used

1.  <a target="_blank" href="https://github.com/styled-components/styled-components">`Styled Components`</a> to style the component with props;

2. <a target="_blank" href="https://github.com/styled-components/jest-styled-components">`Jest-styled-components`</a> to test Styled Components with Jest;

3.  <a target="_blank" href="https://github.com/facebook/prop-types">`Prop-types`</a> to check React props.

### File structure:
```
├── LEMON-TEST
│   ├── src
│   │   ├──  __tests__
│   │   │     └── button.test.js
│   │   └──  assets
│   │   │     ├── arrow.svg
│   │   │     ├── check.svg
│   │   │     └── refresh.svg
│   │   └──  Button
│   │   │     ├── icon.jsx
│   │   │     ├── index.jsx
│   │   │     └── styled.js
│   ├── app.js
│   ├── index.js
│   └── setupTests.js
