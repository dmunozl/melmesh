import {Component, JSX} from "solid-js";

import {mainRenderers} from "../constants";
import {ImportIcon} from '../icons/ImportIcon'
import {ArrowDownIcon} from "../icons/ArrowDownIcon";
import {FaceRendererIcon} from "../icons/FaceRendererIcon";

export const Header: Component = () => {
    const importInput = <input
        hidden type="file"
        onChange={() => console.log("Import input changed")}
    /> as HTMLInputElement

    return <div class='flex w-full items-center text-center pt-3 pb-3 bg-white shadow-sm'>
        <HeaderSection class="flex w-1/12 justify-center">
            {importInput}
            <HeaderButton
                tooltip="Load Model"
                handleClick={() => importInput.click()}>
                <ImportIcon/>
            </HeaderButton>
        </HeaderSection>
        <VerticalSeparator/>
        <HeaderSection class="flex w-5/12 pl-5 pr-5">
            {mainRenderers.map(render =>
                <HeaderButton
                    type={render.type}
                    tooltip={render.tooltip}>
                    <FaceRendererIcon/>
                </HeaderButton>
            )}
        </HeaderSection>
        <VerticalSeparator/>
        <HeaderSection class="flex w-2/12 justify-center">
            <HeaderList tooltip='Display Properties'>
                {/*{config.secondary_renderers.map(render =>*/}
                {/*    <HeaderListElement*/}
                {/*        id={render.key}*/}
                {/*        text={render.text}*/}
                {/*        checked={Boolean(render.checked)}*/}
                {/*        handleChange={secondaryRenderHandleChange}>*/}
                {/*        <span>P</span>*/}
                {/*    </HeaderListElement>*/}
                {/*)}*/}
            </HeaderList>
        </HeaderSection>
        <VerticalSeparator/>
        <HeaderSection class="flex w-2/12 pl-5 pr-5">
            <HeaderButton tooltip='Change View Mode' disabled='disabled'>
                <ImportIcon/>
            </HeaderButton>
            <HeaderButton tooltip='Reset View' disabled='disabled'>
                <ImportIcon/>
            </HeaderButton>
        </HeaderSection>
        <VerticalSeparator/>
        <HeaderSection class="flex w-2/12 pl-5 pr-5">
            <Logo/>
        </HeaderSection>
    </div>
}

const HeaderSection: Component<{
    children: JSX.Element
    class?: string
}> = (props) => (
    <div class={props.class || 'flex-1'}>
        {props.children}
    </div>
)

const HeaderButton: Component<{
    children: JSX.Element
    tooltip: string
    handleClick?: () => void
    type?: string
    disabled?: string
}> = (props) => (
    <button
        class="flex items-center justify-center h-header-btn w-header-btn rounded-md opacity-80 hover:bg-hover-bg hover:opacity-100"
        data-tooltip={props.tooltip}
        onClick={() => props.handleClick && props.handleClick()}>
        {props.children}
    </button>
)

const HeaderList: Component<{
    children: JSX.Element
    tooltip: string
}> = (props) => (
    <HeaderButton tooltip={props.tooltip}>
        <ArrowDownIcon/>
        <ul class='submenu'>
            {props.children}
        </ul>
    </HeaderButton>
)

const HeaderListElement: Component<{
    children: JSX.Element
    id: string
    text: string
    checked: boolean
    handleChange: (id: string) => void
}> = (props) => (
    <li id={props.id}>
        <label class="checkmenu">
            <input type="checkbox" checked={props.checked} onChange={() => props.handleChange(props.id)}/>
            <div class="flex label">
                <span class={'prev_img'}>{props.children}</span>
                <span>{props.text}</span>
            </div>
        </label>
    </li>
)

const VerticalSeparator: Component = () => {
    return <div class="border-r-2 border-separator border-solid h-header-btn"/>
}
const Logo = () => (
    <div class="flex-1">
        <h1 class="font-sans text-3xl font-bold text-logo">CAMARON WEB</h1>
        <div>
            <button class="font-sans text-sm font-semibold pr-2" data-modal="modal-about">ABOUT</button>
            <span>|</span>
            <a class="font-sans text-sm font-semibold pl-2 text-normal-blue opacity-80 hover:opacity-100"
               href="https://github.com/dmunozl/melmesh" rel="noopener noreferrer" target="_blank">GITHUB</a>
        </div>
    </div>
)
