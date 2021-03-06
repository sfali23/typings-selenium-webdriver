export class By {
    using: string;
    value: string;

    constructor(using: string, value: string);

    toString(): string;

    static className(name: string): By;

    static css(selector: string): By;

    static id(id: string): By;

    static js(script: string | Function, ...var_args: any[]): By;

    static linkText(text: string): By;

    static name(name: string): By;

    static partialLinkText(text: string): By;

    static tagName(name: string): By;

    static xpath(xpath: string): By;
}

export function checkedLocator(arg0: By | { className: string } | { id: string } | { js: string } | { linkText: string } | { name: string }
    | { partialLinkText: string } | { tagName: string } | { xpath: string }): By | Function;
