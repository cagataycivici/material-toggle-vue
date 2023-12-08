# PrimeVue InputSwitch as a Material Toggle

Material Design for InputSwitch Component

## Accent

The `accent` prop is not available PrimeVue so this presets extends it using a pass through attribute instead.

```html
<InputSwitch inputId="primary" v-model="val2" type="accent" />
```

## tailwind.config.js

Add semantic colors to be able to customize the colors of the InputSwitch.

```js
export default {
    //...
    theme: {
        extend: {
            colors: {
                "surface-0": "rgb(var(--surface-0))",
                "surface-50": "rgb(var(--surface-50))",
                "surface-100": "rgb(var(--surface-100))",
                "surface-200": "rgb(var(--surface-200))",
                "surface-300": "rgb(var(--surface-300))",
                "surface-400": "rgb(var(--surface-400))",
                "surface-500": "rgb(var(--surface-500))",
                "surface-600": "rgb(var(--surface-600))",
                "surface-700": "rgb(var(--surface-700))",
                "surface-800": "rgb(var(--surface-800))",
                "surface-900": "rgb(var(--surface-900))",
                "surface-950": "rgb(var(--surface-950))",
            },
        },
    },
    //...
};
```
