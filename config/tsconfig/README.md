# @teka/tsconfig

Custom `tsconfig` setup that can be extended.

## Breakdown

All currently `cjs` format:

- `./base`
- `./next`
- `./node14`
- `./node16`

```sh
pnpm add @teka/tsconfig --dev
```

### Example

```json
{
  // ...
  "extends": "@teka/tsconfig/node14.json"
  // ...
}
```
