# UBIO Shared ESLint Config

## Usage

### For version < 2.0.0 (ESLint < 9)

```json
// .eslintrc.json
{
    "extends": ["@ubio/eslint-config"]
}
```

### For version >= 2.0.0 (ESLint 9)

Configuration is now defined in `eslint.config.mjs`:

```javascript
import { sharedConfigs } from '@ubio/eslint-config';

const configs = [
    ...sharedConfigs,
    {
        ignores: [
            '**/dist/',
            '**/node_modules/',
        ],
    },
    {
        rules: {
            // Override specific rules as needed
            // 'rule-name': 'off',
        },
    },
];

export default configs;
```

## License

Apache 2.0 [License](LICENSE.md) © UBIO
