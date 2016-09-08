import {Session} from './session';
import {Promise, ControlFlow, Thenable} from './promise';
import {Executor, Command} from './command';
import {ActionSequence, TouchSequence} from './actions';
import {Type, Entry} from './logging';
import {By} from './by';
import {Capabilities} from './capabilities';
import {FileDetector} from './input';

export class Alert {
    constructor(driver: WebDriver, text: string);

    accept(): Promise<void>;

    authenticateAs(username: string, password: string): Promise<void>;

    dismiss(): Promise<void>;

    getText(): Promise<void>;

    sendKeys(text: string): Promise<void>;
}

export class AlertPromise extends Alert implements Thenable<Alert> {
    constructor(driver: WebDriver, text: string);

    cancel(opt_reason: string | Error): void;

    catch<R>(errback: Function): Promise<R>;

    finally<R>(callback: Function): Promise<R>;

    isPending(): boolean;

    then<R>(opt_callback: Function, opt_errback: Function): Promise<R>;
}

export class WebDriver {
    constructor(sessio: Session | Promise<any>, executor: Executor, opt_flow?: ControlFlow);

    actions(): ActionSequence;

    call<T>(fn: Function | Promise<T>, opt_scope: Object, ...var_args: Object[]): Promise<T>;

    close<T>(): Promise<T>;

    controlFlow(): ControlFlow;

    executeAsyncScript<T>(script: string | Function, ...var_args: Object[]): Promise<T>;

    executeScript<T>(script: string | Function, ...var_args: Object[]): Promise<T>;

    findElement(locator: By | Function): WebElementPromise;

    findElements(locator: By | Function): Promise<WebElement[]>;

    get(url: string): Promise<void>

    getAllWindowHandles(): Promise<string[]>;

    getCapabilities(): Promise<Capabilities>;

    getCurrentUrl(): Promise<string>;

    getExecutor(): Executor;

    getPageSource(): Promise<string>;

    getSession(): Promise<Session>;

    getTitle(): Promise<string>;

    getWindowHandle(): Promise<string>;

    manage(): Options;

    navigate(): Navigation;

    quit(): Promise<void>;

    schedule<T>(command: Command, description: string): Promise<T>;

    setFileDetector(detector: FileDetector): void;

    sleep(ms: number): Promise<void>;

    switchTo(): TargetLocator;

    takeScreenshot(): Promise<string>;

    touchActions(): TouchSequence;

    wait<T>(condition: Promise<T> | Condition<T> | Function, opt_timeout: number, opt_message?: string): Promise<T> | WebElementPromise;

    static attachToSession(executor: Executor, sessionId: string, opt_flow: ControlFlow): WebDriver;

    static createSession(executor: Executor, capabilities: Capabilities, opt_flow: ControlFlow): WebDriver;
}

export class Condition<OUT> {
    constructor(message: string, fn: Function);

    description(): string;

    fn(arg0: WebDriver): OUT;
}

export class Logs {
    constructor(driver: WebDriver);

    get(type: Type): Promise<Entry[]>;

    getAvailableLogTypes(): Promise<Type[]>;
}

export class Navigation {
    constructor(driver: WebDriver);

    back(): Promise<void>;

    forward(): Promise<void>;

    refresh(): Promise<void>;

    to(url: string): Promise<void>;
}

export class Options {
    constructor(driver: WebDriver);

    addCookie(spec: Object): Promise<void>;

    deleteAllCookies(): Promise<void>;

    deleteCookie(name: string): Promise<void>;

    getCookie(name: string): Promise<Object>;

    getCookies(): Promise<Object[]>;

    logs(): Logs;

    timeouts(): Timeouts;

    window(): Window;
}

export class Timeouts {
    constructor(driver: WebDriver);

    implicitlyWait(ms: number): Promise<void>;

    pageLoadTimeout(ms: number): Promise<void>;

    setScriptTimeout(ms: number): Promise<void>;
}

export class Window {
    constructor(driver: WebDriver);

    getPosition(): Promise<Object>;

    getSize(): Promise<Object>;

    maximize(): Promise<void>;

    setPosition(x: number, y: number): Promise<void>;

    setSize(width: number, height: number): Promise<void>;
}

export class WebElement {
    constructor(driver: WebDriver, id: Thenable<string> | string);

    clear(): Promise<void>;

    click(): Promise<void>;

    findElement(locator: By | Function): WebElementPromise;

    findElements(locator: By | Function): Promise<WebElement>;

    getAttribute(attributeName: string): Promise<string>;

    getCssValue(cssStyleProperty: string): Promise<string>;

    getDriver(): WebDriver;

    getId(): Promise<string>;

    getLocation(): Promise<Object>;

    getSize(): Promise<Object>;

    getTagName(): Promise<string>;

    getText(): Promise<string>;

    isDisplayed(): Promise<boolean>;

    isEnabled(): Promise<boolean>;

    isSelected(): Promise<boolean>;

    sendKeys(...var_args: Object[]): number | string | Thenable<number | string>;

    submit(): Promise<void>;

    takeScreenshot(opt_scroll: boolean): Promise<string>;

    static buildId(id: string, opt_noLegacy: boolean): Object;

    static equals(a: WebElement, b: WebElement): Promise<boolean>;

    static extractId(obj: any): string;

    static isId(obj: any): boolean;
}

export class WebElementPromise extends WebElement implements Thenable<WebElement> {
    constructor(driver: WebDriver, el: Promise<WebElement>);

    cancel(opt_reason: string | Error): void;

    catch<R>(errback: Function): Promise<R>;

    finally<R>(callback: Function): Promise<R>;

    isPending(): boolean;

    then<R>(opt_callback: Function, opt_errback: Function): Promise<R>;

    static buildId(id: string, opt_noLegacy: boolean): Object;

    static equals(a: WebElement, b: WebElement): Promise<boolean>;

    static extractId(obj: any): string;

    static isId(obj: any): boolean;
}

export class WebElementCondition extends Condition<WebElement | WebElementPromise> {
    constructor(message: string, fn: Function | WebElement | WebElementPromise);
}

export class TargetLocator {
    constructor(driver: WebDriver);

    activeElement(): WebElementPromise;

    alert(): AlertPromise;

    defaultContent(): Promise<void>;

    frame(id?: number | WebElement): Promise<void>;

    window(nameOrHandle: string): Promise<void>
}
