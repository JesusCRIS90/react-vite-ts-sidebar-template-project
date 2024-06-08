# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
export default {
  // other rules...
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
    project: ["./tsconfig.json", "./tsconfig.node.json"],
    tsconfigRootDir: __dirname,
  },
};
```

- Replace `plugin:@typescript-eslint/recommended` to `plugin:@typescript-eslint/recommended-type-checked` or `plugin:@typescript-eslint/strict-type-checked`
- Optionally add `plugin:@typescript-eslint/stylistic-type-checked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and add `plugin:react/recommended` & `plugin:react/jsx-runtime` to the `extends` list

## Scripts to Update Packages

<p style="color:red">
These Scripts are under development use it under your resposibility</p>

The project have two script to manage packages automatically:

1. One Script to update all packages automatically.

```
yarn update_packages
```

2. Another Scripts to revert updated packages come back to original packages.

```
yarn reset_packages
```

Considerations:

- Do not delete or edit file "package.original.json". Is used by revert changes.
- These Scripts only work on Windows. Windows Powershell is used to execute some terminal commands.
- New OS Compatibility will be added in a future.
- These Scripts are under development use it under your resposibility.

## Acknowledgements

I would like to thank the following projects and individuals whose work has helped in the development of this project:

- **[react-adv](https://github.com/Klerith/react-adv)** by [Fernando Herrera](https://github.com/Klerith)

  - Used as Initial Basic Struct.
