import { defineNuxtPlugin } from "#app";
import "animate.css";
export default defineNuxtPlugin(nuxtApp => {
	const baseClassName = "animate__animated";
	let observer: IntersectionObserver;

	nuxtApp.vueApp.directive("aos", {
		created(el, binding) {
			console.log(binding);
			el.style.visibility = "hidden";
			const delay = el.getAttribute("data-aos-delay");
			const duration = el.getAttribute("data-aos-duration");
			if (delay) {
				el.style.animationDelay = delay;
			}
			if (duration) {
				el.style.animationDuration = duration;
			}
			const add_class_list = binding.value || [];
			const class_list = [baseClassName, ...add_class_list];

			observer = new IntersectionObserver(
				(entries, observer) => {
					entries.forEach((entry: any) => {
						if (entry.isIntersecting) {
							entry.target.style.visibility = "visible";
							if (entry.boundingClientRect.top > 0) {
								entry.target.classList.add(...class_list);
								entry.target.style.visibility = "visible";
								entry.target.onanimationend = () => {
									if (!binding.modifiers.once) {
										entry.target.classList.remove(...class_list);
									}
								};
							}
						} else {
							el.style.visibility = "hidden";
						}
					});
				},
				{
					rootMargin: "0px 0px 0px 0px",
				}
			);
			observer.observe(el);
		},
		beforeUnmount(el) {
			observer.unobserve(el);
		},
		getSSRProps() {
			return {};
		},
	});
});
