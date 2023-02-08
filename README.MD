<img src="/public/media/uicons-logo-readme.png" width="128" align="right" />

# uicons-react

Uicons is a lib of highly customizable and elegant icons, really. Explore all our icons at [uicons.io](https://uicons.io).

[![NPM](https://img.shields.io/npm/v/uicons-react.svg?style=flat-square)](https://www.npmjs.com/package/uicons-react) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-yellow.svg?style=flat-square)](https://standardjs.com) [![JavaScript Style Guide](https://img.shields.io/npm/l/uicons-react?style=flat-square)](https://github.com/u-icons/react/blob/main/LICENSE)

[![GitHub stars](https://img.shields.io/github/stars/u-icons/react?color=%237C3AED&style=flat-square)](https://github.com/u-icons/react)
[![Follow on GitHub](https://img.shields.io/github/followers/u-icons?color=%237C3AED&style=flat-square)](https://github.com/u-icons)
[![GitHub forks](https://img.shields.io/github/forks/u-icons/react?color=%2314B8A6&style=flat-square)](https://github.com/u-icons/react/fork)
[![GitHub watchers](https://img.shields.io/github/watchers/u-icons/react?color=%2314B8A6&style=flat-square)](https://github.com/u-icons/react)

## Installation

```bash
yarn add uicons-react
```

or

```bash
npm install uicons-react
```

## Usage

Just import the icons you need, and add in component or page. IMPORTANT! your bundle only includes code for the icons you use.

```tsx
import { Bookmark, BookmarkAdd, BookmarkBlocked, ArchiveBox } from "uicons-react";

export function Component(){
  return (
    <div>
      <Bookmark />
      <BookmarkAdd color="#fac800" weight="outline" size={32} />
      <BookmarkBlocked className="icon-class" weight="fill" size={32} />
      <ArchiveBox
        size={28}
        weight="custom"
        customColors={{
          fill: '#fff', // optional if you don't want the icon to have a fill color
          outter: '#828282',
          inner: '#fac800'
        }}
      />
    </div>
  );
};
```
### Props

Icon components accept all props that you can pass to a normal SVG element, including inline `style` objects, `onClick` handlers, and more. The main way of styling them will usually be with the following props:

- **alt?**: `string` – Add accessible alt text to an icon.
- **color?**: `string` – Icon stroke/fill color. Can be any CSS color string, including `hex`, `rgb`, `rgba`, `hsl`, `hsla`, named colors, or the special `currentColor` variable.
- **customColors?**: `object` – Icon stroke/fill color. Just like the color property used any CSS color string, but in the case of `customColors` you can separately customize the external and internal lines and also the filling if you want.
- **size?**: `number | string` – Icon height & width. As with standard React elements, can be a number, or a string with units in `px`, `%`, `em`, `rem`, `pt`, `cm`, `mm`, `in`.
- **weight?**: `"thin" | "light" | "regular" | "bold" | "fill" | "outline" | "custom"` – Icon weight/style. Can also be used, for example, to "check" the state of an icon: a Bookmark component with `weight="regular"` is unchecked and `weight="fill"` is checked..
- **inverted?**: `boolean` – Inverts black to white, this property is active for all types of weights when color has been set.

## CSS

All css types and forms are supported, classNames, inline styles and css utility class names, eg utility classes coming from the Tailwind css framework:

```tsx
import { Bookmark, BookmarkAdd, BookmarkBlocked } from "uicons-react";

export function Component(){
  return (
    <div>
      <Bookmark style={{ color: '#fac800' }} />
      <BookmarkAdd className="text-green-500" weight="outline" size={32} /> // Tailwind utility class
      <BookmarkBlocked className="classic-element-class" weight="fill" size={32} />
    </div>
  );
};
```
### Context

Uicons takes advantage of React Context API to make applying a default style to all icons simple. Create an `IconContext.Provider` at the root of the app (or anywhere above the icons in the tree) and pass in a configuration object with props to be applied by default to all icons:

> **IMPORTANT:** Requires React 16.3 or higher.

```tsx
import { IconContext, Bookmark, BookmarkAdd, BookmarkBlocked, ArchiveBox } from "phosphor-react";

const App = () => {
  return (
    <IconContext.Provider
      value={{
        size: 32,
        customColors: { outter: 'cyan', inner: 'grey' },
        weight: 'custom',
      }}
    >
      {/* all chosen characteristics are applied to all icons involved by the context provider */}
      <div>
        <Bookmark />
        <BookmarkAdd />
        <BookmarkBlocked />
        <ArchiveBox />
      </div>
    </IconContext.Provider>
  );
};
```

You may create multiple Contexts for styling icons differently in separate regions of an application; icons use the nearest Context above them to determine their style.

> **THAT'S COOL:** The context will also pass any provided SVG props to icon instances, which can be useful such as `accessibility`, `classNames` etc.

### License

MIT © [UIcons](https://github.com/u-icons)