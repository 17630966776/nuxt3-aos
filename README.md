# nuxt3-aos

## Quick Setup

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

**✅Add `v-aos` to the element you want to animate**

**✅Add the animation class name you want to use**

**✅You can visit the official website of [animate.css](https://animate.style/) to select the animation class name you want to use**

**✅You can customize the execution time and delay time of the animation by adding the data-aos-delay and data-aos-duration properties**

```html
<div v-aos="['animate__fadeInUp']" data-aos-delay="0.5s" data-aos-duration="1s">
	Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ullam quisquam accusantium suscipit voluptate dolorum laudantium magni corrupti tenetur,dolor
	voluptates alias maxime doloribus soluta sunt repellendus id quos quod sapiente!
</div>
```
