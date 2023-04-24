import {createSignal} from "solid-js";

export const [activeMainRenderer, setActiveMainRenderer] = createSignal<string>("FaceRenderer")