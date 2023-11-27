import { defineNuxtPlugin } from "#app";

export default defineNuxtPlugin(nuxtApp => {
	const { baseClassName } = nuxtApp.$config.public.$aos;
	let observer: IntersectionObserver;
	nuxtApp.vueApp.directive("aos", {
		created(el, binding, vnode, prevVnode) {
			const add_class_list = binding.value || [];
			const class_list = [baseClassName, ...add_class_list];

			observer = new IntersectionObserver(
				(entries, observer) => {
					entries.forEach((entry: any) => {
						if (entry.isIntersecting && entry.boundingClientRect.top > 0) {
							entry.target.classList.add(...class_list);
							entry.target.onanimationend = () => {
								entry.target.classList.remove(...class_list);
							};
						}
					});
				},
				{
					rootMargin: "0px 0px 0px 0px",
				}
			);
			observer.observe(el);
		},
		beforeUnmount(el, binding, vnode, prevVnode) {
			observer.unobserve(el);
		},
		getSSRProps(binding, vnode) {
			return {};
		},
	});
});
