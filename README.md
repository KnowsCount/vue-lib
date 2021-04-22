<!--
 * @Date: 21/04/2021 07.23.51 +0800
 * @Author: KnowsCount
 * @LastEditTime: 22/04/2021 10.18.02 +0800
 * @FilePath: /vue-lib/README.md
-->

<!-- prettier-ignore -->
<img src="src/assets/logo.png" align="right" width="128" height="128" />

# @knowscount/vue-lib

[![Codacy Badge](https://api.codacy.com/project/badge/Grade/2e38e2e648a24e7c8ec77f37e9342365)](https://app.codacy.com/gh/KnowsCount/vue-lib?utm_source=github.com&utm_medium=referral&utm_content=KnowsCount/vue-lib&utm_campaign=Badge_Grade_Settings)

> a personal vue component library.

## 📌 to-dos

marked in [issues](https://github.com/KnowsCount/vue-lib/issues).

## 🤤 usage

see [#3](https://github.com/KnowsCount/vue-lib/issues/3).

to install the library, run

```
npm install --save @knowscount/vue-lib
```

you can choose to import the entire library, or use a slightly different syntax to import individual components:

<!-- prettier-ignore-start -->

```vue.js
// Import and register entire library
import MyLibrary from '@knowscount/my-library';
Vue.use(MyLibrary);
```

```vue.js
// Import and register globally individual components from the library
import { MyComponent, MyComponent2 } from '@knowscount/my-library';
Vue.component('MyComponent', MyComponent);
Vue.component('MyComponent2', MyComponent2);
```

```vue.js
// Import and register locally individual components from the library
import { MyComponent, MyComponent2 } from '@knowscount/my-library';

export default {
  name: 'SomeParentComponent',
  components: {
    MyComponent,
    MyComponent2,
  }
  ...
}
```

<!-- prettier-ignore-end -->

## 🙋‍♂️ contributing

please read [CONTRIBUTING.md](./CONTRIBUTING.md)

### 🛠 project setup

```
npm install
```

### 🔨 compiles and hot-reloads for development

```
npm run serve
```

### 📦 compiles and minifies for production

```
npm run build
```

### 🔧 customize configuration

see [configuration reference](https://cli.vuejs.org/config/).
