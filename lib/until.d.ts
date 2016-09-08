import {Condition, WebElement, WebElementCondition, Alert} from './webdriver';
import {By} from './by';

/**
 * Creates a condition that will wait until the input driver is able to switch to the designated frame. The target frame may be specified as
 *
 * 1. a numeric index into
 *     [window.frames](https://developer.mozilla.org/en-US/docs/Web/API/Window.frames)
 *     for the currently selected frame.
 * 2. a {@link ./webdriver.WebElement}, which must reference a FRAME or IFRAME
 *     element on the current page.
 * 3. a locator which may be used to first locate a FRAME or IFRAME on the
 *     current page before attempting to switch to it.
 *
 * Upon successful resolution of this condition, the driver will be left focused on the new frame.
 */
export function ableToSwitchToFrame(frame: number | WebElement | By | Function): Condition<boolean>;

export function alertIsPresent(): Condition<Alert>;

export function elementIsDisabled(element: WebElement): WebElementCondition;

export function elementIsEnabled(element: WebElement): WebElementCondition;

export function elementIsNotSelected(element: WebElement): WebElementCondition;

export function elementIsNotVisible(element: WebElement): WebElementCondition;

export function elementIsSelected(element: WebElement): WebElementCondition;

export function elementIsVisible(element: WebElement): WebElementCondition;

export function elementLocated(locator: By | Function): WebElementCondition;

export function elementTextContains(element: WebElement, substr: string): WebElementCondition;

export function elementTextIs(element: WebElement, text: string): WebElementCondition;

export function elementTextMatches(element: WebElement, regex: RegExp): WebElementCondition;

export function elementsLocated(locator: By | Function): WebElementCondition;

export function stalenessOf(element: WebElement): Condition<boolean>;

export function titleContains(substr: string): Condition<boolean>;

export function titleIs(title: string): Condition<boolean>;

export function titleMatches(regex: RegExp): Condition<boolean>;

export function urlContains(substrUrl: string): Condition<boolean>;

export function urlIs(url: string): Condition<boolean>;

export function urlMatches(regex: RegExp): Condition<boolean>;
