# nuxt3-aos

## Basic Usage

### 1、Install

```bash
npm install --save-dev nuxt3-aos
```

### 2、Configuration

**✅Add `nuxt3-aos` to the `modules` section of `nuxt.config.ts` **

**✅Add `animate.css` to the `css` section of `nuxt.config.ts` **

```js
export default defineNuxtConfig({
	// ...
	modules: ["nuxt3-aos"],
	css: ["animate.css"],
	// ...
});
```

### 3、Basic Usage

**Add `v-aos` to the element you want to animate**

**Add the animation class name you want to use**

**You can visit the official website of [animate.css](https://animate.style/) to select the animation class name you want to use**

**You can customize the execution time and delay time of the animation by adding the data-aos-delay and data-aos-duration properties**

```html
<div v-aos="['animate__fadeInUp']" data-aos-delay="0.5s" data-aos-duration="1s">
	An animated element
</div>
```

**If you want to animate an element that is already in the viewport by default, you can add the animation class name without using a directive**

*Don't forget the base class name `animate__animated` 

```html
<h1 class="animate__animated animate__bounce">An animated element</h1>
```

