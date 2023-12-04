# nuxt3-aos

[![npm version][npm-version-src]][npm-version-href] [![npm downloads][npm-downloads-src]][npm-downloads-href] [![License][license-src]][license-href] [![Nuxt][nuxt-src]][nuxt-href]

## Basic Usage

### 1、Install

```bash
npm install --save-dev nuxt3-aos
```

### 2、Configuration

**✅Add `nuxt3-aos` to the `modules` section of `nuxt.config.ts`**

```js
export default defineNuxtConfig({
	// ...
	modules: ["nuxt3-aos"],
	// ...
});
```

### 3、Basic Usage

**Add `v-aos` to the element you want to animate**

**Add the animation class name you want to use**

**You can visit the official website of [animate.css](https://animate.style/) to select the animation class name you want to use**

**You can customize the execution time and delay time of the animation by adding the `data-aos-delay` and `data-aos-duration` properties**

```html
<div v-aos="['animate__fadeInUp']" data-aos-delay="0.5s" data-aos-duration="1s">An animated element</div>
```

**If you want to animate an element that is already in the viewport by default, you can add the animation class name without using a directive**

\*Don't forget the base class name `animate__animated`

```html
<h1 class="animate__animated animate__bounce">An animated element</h1>
```

<!-- Badges -->

[npm-version-src]: https://img.shields.io/npm/v/nuxt3-aos/latest.svg?style=flat&colorA=18181B&colorB=28CF8D
[npm-version-href]: https://npmjs.com/package/nuxt3-aos
[npm-downloads-src]: https://img.shields.io/npm/dm/nuxt3-aos.svg?style=flat&colorA=18181B&colorB=28CF8D
[npm-downloads-href]: https://npmjs.com/package/nuxt3-aos
[license-src]: https://img.shields.io/npm/l/nuxt3-aos.svg?style=flat&colorA=18181B&colorB=28CF8D
[license-href]: https://npmjs.com/package/nuxt3-aos
[nuxt-src]: https://img.shields.io/badge/Nuxt-18181B?logo=nuxt.js
[nuxt-href]: https://nuxt.com
