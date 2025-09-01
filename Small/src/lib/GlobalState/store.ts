import { writable } from "svelte/store";


export const counter = writable(0);


export const increment = () => {
	counter.update((n) => n + 1);
};

export const decrement = () => {
	counter.update((n) => n - 1);
};
export const reset = () => {
	counter.set(0);
};
