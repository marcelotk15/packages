# @teka15/eslint-config

Custom `eslint-config` setup that can be extended and incorporates:

- `@babel/eslint-parser`
- `@typescript-eslint/eslint-plugin`
- `@typescript-eslint/parser`
- `eslint`
- `eslint-config-next`
- `eslint-config-prettier`
- `eslint-plugin-import`
- `eslint-plugin-jest`
- `eslint-plugin-jsx-a11y`
- `eslint-plugin-react`
- `eslint-plugin-react-hooks`
- `prettier`

## Breakdown

All currently `cjs` format:

- `./index` (base)
- `./typescript`
  - `./react` (+ typescript)
    - `./jest` (+ react)
    - `./next` (+ react)

```sh
pnpm add @teka15/eslint-config --dev
```

### Base

```js
{
    "extends": "@teka15/eslint-config"
}
```

### Next

```js
{
    "extends": "@teka15/eslint-config/next"
}
```

### React

```js
{
    "extends": "@teka15/eslint-config/react"
}
```

### TypeScript

```js
{
    "extends": "@teka15/eslint-config/typescript"
}
```
