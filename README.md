## Lemon Test - Button Component

# :mag_right: Vercel's deploy (demonstration page)

<a target="_blank" href="https://lemon-test.vercel.app/">`https://lemon-test.vercel.app/`</a>

# :rocket: How to run the project?

1. Clone this repo: git clone `git@github.com:arthurticianeli/lemon-test.git`;

2. Navigate to project's directory: `cd lemon-test`;

3. Install dependencies: `yarn install`; and

4. Run the application: `yarn start`.

# :computer: Implementation

## Technologies used

1. Styled Components <a target="_blank" href="https://github.com/styled-components/styled-components">`https://github.com/styled-components/styled-components`</a> to style the component with props;

2. Jest-dom e Jest-styled-components <a target="_blank" href="https://github.com/styled-components/jest-styled-components">`https://github.com/styled-components/jest-styled-components`</a> to test Styled Components with Jest;

3. Prop-types <a target="_blank" href="https://github.com/facebook/prop-types">`https://github.com/facebook/prop-types`</a> to check React props.

## File structure:
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
