import {MainCanvas} from "./components/MainCanvas";
import {Header} from "./components/Header";

export const App = () => {
    return <div class="flex-1 flex-col h-screen bg-background">
        <div class="">
            <Header/>
        </div>
        <div class="flex flex-1 rounded-md h-max min-h-[480px]">
            <MainCanvas/>
            <div class="m-5 bg-white w-2/12 rounded-lg shadow-md">
                Sidebar
            </div>
        </div>
    </div>
}
