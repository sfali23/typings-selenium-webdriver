import {WebDriver, WebElement} from './webdriver';
import {Button, Key} from './input';
import {Promise} from './promise';

export class ActionSequence {
    constructor(driver: WebDriver);

    click(opt_elementOrButton?: WebElement | Button, opt_button?: Button): ActionSequence;

    doubleClick(opt_elementOrButton?: WebElement | Button, opt_button?: Button): ActionSequence;

    dragAndDrop(element: WebElement, location: WebElement | { x: number, y: number }): ActionSequence;

    keyDown(key: Key): ActionSequence;

    keyUp(key: Key): ActionSequence;

    mouseDown(opt_elementOrButton?: WebElement | Button, opt_button?: Button): ActionSequence;

    mouseMove(location: WebElement | { x: number, y: number }, opt_offset: { x: number, y: number }): ActionSequence;

    mouseUp(opt_elementOrButton?: WebElement | Button, opt_button?: Button): ActionSequence;

    perform(): Promise<void>;

    sendKeys(...var_args: (string | Key)[]): ActionSequence
}

export class TouchSequence {
    constructor(driver: WebDriver);

    doubleTap(elem: WebElement): TouchSequence;

    flick(speed: { xspeed: number, yspeed: number }): TouchSequence;

    flickElement(elem: WebElement, offset: { x: number, y: number }, speed: number): TouchSequence;

    longPress(elem: WebElement): TouchSequence;

    move(location: { x: number, y: number }): TouchSequence;

    perform(): Promise<void>;

    release(location: { x: number, y: number }): TouchSequence;

    scroll(offset: { x: number, y: number }): TouchSequence;

    scrollFromElement(elem: WebElement, offset: { x: number, y: number }): TouchSequence;

    tap(elem: WebElement): TouchSequence;

    tapAndHold(location: { x: number, y: number }): TouchSequence;
}
