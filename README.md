 <p align="center"><img src="https://palettes.andev.ml/assets/image/icon/128x128.png"/></p>


# <p align="center">Color Palette</p>

<p align="center"> Create variant color palettes from a single color and generate code for them.
</p>

<p align="center">
<a href="#details">
    <img src="https://img.shields.io/badge/License-MIT-319046?" alt="License-MIT"/>&nbsp;&nbsp;
    <img src="https://img.shields.io/badge/npm-0.1.0-319046?" alt="NPM Version"/>
</a>
</p>

> [Palettes Generator](https://palettes.andev.ml)

<br/>

### Install

```bash
npm i @andevjs/palette
```

### How to use
```ts
import createPalette from "@andevjs/palette";

const primaryColor = createPalette("#9e8cfc");
```

### Type
> `types` are also available to import <br/>
> `import { CreatePalette, Palette } from "@andevjs/palette";`
```ts
type CreatePalette = (color: string, altColor?: string) => Palette;
```
> `color` - Main Color <br/>
> `altColor` - Alternative to the main color, for example, if the main color is too light or too dark, alternate a color with a darker tone to the light color, or a lighter tone to the dark color.

### Return
```ts
type Palette = {
  light: string;
  main: string;
  hover: string;
  alt: string;
  dark: string;
  shad: string;
  over: string;
};
```

<br/>

<p align="center">Developed by <a href="https://github.com/andremalveira" target="_blank">@andremalveira</a> &copy; 2022 | License MIT</p>