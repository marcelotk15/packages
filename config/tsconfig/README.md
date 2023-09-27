# @teka15/tsconfig

Custom `tsconfig` setup that can be extended.

## Breakdown

All currently `cjs` format:

- `./base`
- `./next`
- `./node14`
- `./node16`

```sh
pnpm add @teka15/tsconfig --dev
```

### Example

```json
{
  // ...
  "extends": "@teka15/tsconfig/node14.json"
  // ...
}
```
