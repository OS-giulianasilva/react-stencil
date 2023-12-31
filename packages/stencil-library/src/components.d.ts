/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */
import { HTMLStencilElement, JSXBase } from "@stencil/core/internal";
export namespace Components {
    interface ButtonComponent {
        "color": string;
        "name": string;
        "size": number;
    }
    interface CardComponent {
        "cardSubtitle": string;
        "cardTitle": string;
    }
    interface InputComponent {
        "label": string;
        "placeholder": string;
        "value": string;
    }
    interface LabelComponent {
        "label": string;
    }
    interface ListComponent {
    }
    interface MyComponent {
        /**
          * The first name
         */
        "first": string;
        /**
          * The last name
         */
        "last": string;
        /**
          * The middle name
         */
        "middle": string;
    }
    interface RadioComponent {
        "options": string[];
    }
    interface RangeComponent {
        "label": string;
    }
}
export interface InputComponentCustomEvent<T> extends CustomEvent<T> {
    detail: T;
    target: HTMLInputComponentElement;
}
export interface RadioComponentCustomEvent<T> extends CustomEvent<T> {
    detail: T;
    target: HTMLRadioComponentElement;
}
export interface RangeComponentCustomEvent<T> extends CustomEvent<T> {
    detail: T;
    target: HTMLRangeComponentElement;
}
declare global {
    interface HTMLButtonComponentElement extends Components.ButtonComponent, HTMLStencilElement {
    }
    var HTMLButtonComponentElement: {
        prototype: HTMLButtonComponentElement;
        new (): HTMLButtonComponentElement;
    };
    interface HTMLCardComponentElement extends Components.CardComponent, HTMLStencilElement {
    }
    var HTMLCardComponentElement: {
        prototype: HTMLCardComponentElement;
        new (): HTMLCardComponentElement;
    };
    interface HTMLInputComponentElement extends Components.InputComponent, HTMLStencilElement {
    }
    var HTMLInputComponentElement: {
        prototype: HTMLInputComponentElement;
        new (): HTMLInputComponentElement;
    };
    interface HTMLLabelComponentElement extends Components.LabelComponent, HTMLStencilElement {
    }
    var HTMLLabelComponentElement: {
        prototype: HTMLLabelComponentElement;
        new (): HTMLLabelComponentElement;
    };
    interface HTMLListComponentElement extends Components.ListComponent, HTMLStencilElement {
    }
    var HTMLListComponentElement: {
        prototype: HTMLListComponentElement;
        new (): HTMLListComponentElement;
    };
    interface HTMLMyComponentElement extends Components.MyComponent, HTMLStencilElement {
    }
    var HTMLMyComponentElement: {
        prototype: HTMLMyComponentElement;
        new (): HTMLMyComponentElement;
    };
    interface HTMLRadioComponentElement extends Components.RadioComponent, HTMLStencilElement {
    }
    var HTMLRadioComponentElement: {
        prototype: HTMLRadioComponentElement;
        new (): HTMLRadioComponentElement;
    };
    interface HTMLRangeComponentElement extends Components.RangeComponent, HTMLStencilElement {
    }
    var HTMLRangeComponentElement: {
        prototype: HTMLRangeComponentElement;
        new (): HTMLRangeComponentElement;
    };
    interface HTMLElementTagNameMap {
        "button-component": HTMLButtonComponentElement;
        "card-component": HTMLCardComponentElement;
        "input-component": HTMLInputComponentElement;
        "label-component": HTMLLabelComponentElement;
        "list-component": HTMLListComponentElement;
        "my-component": HTMLMyComponentElement;
        "radio-component": HTMLRadioComponentElement;
        "range-component": HTMLRangeComponentElement;
    }
}
declare namespace LocalJSX {
    interface ButtonComponent {
        "color"?: string;
        "name"?: string;
        "size"?: number;
    }
    interface CardComponent {
        "cardSubtitle"?: string;
        "cardTitle"?: string;
    }
    interface InputComponent {
        "label"?: string;
        "onValueChange"?: (event: InputComponentCustomEvent<any>) => void;
        "placeholder"?: string;
        "value"?: string;
    }
    interface LabelComponent {
        "label"?: string;
    }
    interface ListComponent {
    }
    interface MyComponent {
        /**
          * The first name
         */
        "first"?: string;
        /**
          * The last name
         */
        "last"?: string;
        /**
          * The middle name
         */
        "middle"?: string;
    }
    interface RadioComponent {
        "onChangeValue"?: (event: RadioComponentCustomEvent<any>) => void;
        "options"?: string[];
    }
    interface RangeComponent {
        "label"?: string;
        "onChangeValue"?: (event: RangeComponentCustomEvent<any>) => void;
    }
    interface IntrinsicElements {
        "button-component": ButtonComponent;
        "card-component": CardComponent;
        "input-component": InputComponent;
        "label-component": LabelComponent;
        "list-component": ListComponent;
        "my-component": MyComponent;
        "radio-component": RadioComponent;
        "range-component": RangeComponent;
    }
}
export { LocalJSX as JSX };
declare module "@stencil/core" {
    export namespace JSX {
        interface IntrinsicElements {
            "button-component": LocalJSX.ButtonComponent & JSXBase.HTMLAttributes<HTMLButtonComponentElement>;
            "card-component": LocalJSX.CardComponent & JSXBase.HTMLAttributes<HTMLCardComponentElement>;
            "input-component": LocalJSX.InputComponent & JSXBase.HTMLAttributes<HTMLInputComponentElement>;
            "label-component": LocalJSX.LabelComponent & JSXBase.HTMLAttributes<HTMLLabelComponentElement>;
            "list-component": LocalJSX.ListComponent & JSXBase.HTMLAttributes<HTMLListComponentElement>;
            "my-component": LocalJSX.MyComponent & JSXBase.HTMLAttributes<HTMLMyComponentElement>;
            "radio-component": LocalJSX.RadioComponent & JSXBase.HTMLAttributes<HTMLRadioComponentElement>;
            "range-component": LocalJSX.RangeComponent & JSXBase.HTMLAttributes<HTMLRangeComponentElement>;
        }
    }
}
