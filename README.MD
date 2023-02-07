<img src="/public/media/uicons-logo-readme.png" width="128" align="right" />

# uicons-react

Uicons is a lib of highly customizable and elegant icons, really. Explore all our icons at [uicons.io](https://uicons.io).

[![NPM](https://img.shields.io/npm/v/uicons-react.svg?style=flat-square)](https://www.npmjs.com/package/uicons-react) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg?style=flat-square)](https://standardjs.com)

[![GitHub stars](https://img.shields.io/github/stars/phosphor-icons/phosphor-react?style=flat-square&label=Star)](https://github.com/u-icons/react)
[![GitHub forks](https://img.shields.io/github/forks/phosphor-icons/phosphor-react?style=flat-square&label=Fork)](https://github.com/u-icons/react/fork)
[![GitHub watchers](https://img.shields.io/github/watchers/phosphor-icons/phosphor-react?style=flat-square&label=Watch)](https://github.com/u-icons/react)
[![Follow on GitHub](https://img.shields.io/github/followers/rektdeckard?style=flat-square&label=Follow)](https://github.com/u-icons)

## Installation

```bash
yarn add uicons-react
```

or

```bash
npm install --save uicons-react
```

## Usage

Just import the icons you need, and add them anywhere in your render method. IMPORTANT! your bundle only includes code for the icons you use.

```tsx
import React from "react";
import ReactDOM from "react-dom";
import { Bookmark, BookmarkAdd, BookmarkBlocked } from "uicons-react";

const App = () => {
  return (
    <div>
      <Bookmark />
      <BookmarkAdd color="#fac800" weight="outline" size={32} />
      <BookmarkBlocked className="icon-class" weight="fill" size={32} />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));