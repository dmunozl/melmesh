import {App} from "../utils/scene";
import {onMount, Component} from "solid-js";

export const MainCanvas: Component = () => {
    const canvas = <canvas class="w-full rounded-lg"></canvas> as HTMLCanvasElement
    const app = new App(canvas)

    onMount(() => {
        // app.runDebug()
        app.run()
        app.engine.resize()
    })

    return <div class="m-5 mr-0 rounded-lg w-10/12 flex-1">
        {canvas}
    </div>
}
