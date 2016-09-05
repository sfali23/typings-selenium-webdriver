/**
 * An attempt was made to select an element that cannot be selected.
 */
export class ElementNotSelectableError extends WebDriverError {
    new(opt_error: string): ElementNotSelectableError;
}

/**
 * An element command could not be completed because the element is not visible on the page.
 */
export class ElementNotVisibleError extends WebDriverError {
    new(opt_error: string): ElementNotVisibleError;
}

/**
 * The arguments passed to a command are either invalid or malformed.
 */
export class InvalidArgumentError extends WebDriverError {
    new(opt_error: string): InvalidArgumentError;
}

/**
 * An illegal attempt was made to set a cookie under a different domain than the current page.
 */
export class InvalidCookieDomainError extends WebDriverError {
    new(opt_error: string): InvalidCookieDomainError;
}

/**
 * The coordinates provided to an interactions operation are invalid.
 */
export class InvalidElementCoordinatesError extends WebDriverError {
    new(opt_error: string): InvalidCookieDomainError;
}


/**
 * An element command could not be completed because the element is in an invalid state, e.g. attempting to click an
 *  element that is no longer attached to the document.
 */
export class InvalidElementStateError extends WebDriverError {
    new(opt_error: string): InvalidElementStateError;
}

/**
 * Argument was an invalid selector.
 */
export class InvalidSelectorError extends WebDriverError {
    new(opt_error: string): InvalidSelectorError;
}

/**
 * An error occurred while executing JavaScript supplied by the user.
 */
export class JavascriptError extends WebDriverError {
    new(opt_error: string): JavascriptError;
}

/**
 * The target for mouse interaction is not in the browser’s viewport and cannot be brought into that viewport.
 */
export class MoveTargetOutOfBoundsError extends WebDriverError {
    new(opt_error: string): MoveTargetOutOfBoundsError;
}

/**
 * An attempt was made to operate on a modal dialog when one was not open.
 */
export class NoSuchAlertError extends WebDriverError {
    new(opt_error: string): NoSuchAlertError;
}

/**
 * An element could not be located on the page using the given search parameters.
 */
export class NoSuchElementError extends WebDriverError {
    new(opt_error: string): NoSuchElementError;
}

/**
 * A request to switch to a frame could not be satisfied because the frame could not be found.
 */
export class NoSuchFrameError extends WebDriverError {
    new(opt_error: string): NoSuchFrameError;
}

/**
 * Occurs when a command is directed to a session that does not exist.
 */
export class NoSuchSessionError extends WebDriverError {
    new(opt_error: string): NoSuchSessionError;
}

/**
 * A request to switch to a window could not be satisfied because the window could not be found.
 */
export class NoSuchWindowError extends WebDriverError {
    new(opt_error: string): NoSuchWindowError;
}

/**
 * A script did not complete before its timeout expired.
 */
export class ScriptTimeoutError extends WebDriverError {
    new(opt_error: string): ScriptTimeoutError;
}

/**
 * A new session could not be created.
 */
export class SessionNotCreatedError extends WebDriverError {
    new(opt_error: string): SessionNotCreatedError;
}

/**
 * An element command failed because the referenced element is no longer attached to the DOM.
 */
export class StaleElementReferenceError extends WebDriverError {
    new(opt_error: string): StaleElementReferenceError;
}

/**
 * An operation did not complete before its timeout expired.
 */
export class TimeoutError extends WebDriverError {
    new(opt_error: string): TimeoutError;
}

/**
 * A screen capture operation was not possible.
 */
export class UnableToCaptureScreenError extends WebDriverError {
    new(opt_error: string): UnableToCaptureScreenError;
}
/**
 * A request to set a cookie’s value could not be satisfied.
 */
export class UnableToSetCookieError extends WebDriverError {
    new(opt_error: string): UnableToSetCookieError;
}

/**
 * A modal dialog was open, blocking this operation.
 */
export class UnexpectedAlertOpenError extends WebDriverError {
    new(opt_error: string): UnexpectedAlertOpenError;
}

/**
 * A command could not be executed because the remote end is not aware of it.
 */
export class UnknownCommandError extends WebDriverError {
    new(opt_error: string): UnknownCommandError;
}

/**
 * The requested command matched a known URL but did not match an method for that URL.
 */
export class UnknownMethodError extends WebDriverError {
    new(opt_error: string): UnknownMethodError;
}

/**
 * Reports an unsupport operation.
 */
export class UnsupportedOperationError extends WebDriverError {
    new(opt_error: string): UnsupportedOperationError;
}

/**
 * The base WebDriver error type. This error type is only used directly when a more appropriate category is not defined for the offending error.
 */
export class WebDriverError extends Error {
    new(opt_error: string): WebDriverError;
}

export enum ErrorCode {
    SUCCESS = 0,
    NO_SUCH_ELEMENT = 7,
    NO_SUCH_FRAME = 8,
    UNKNOWN_COMMAND = 9,
    UNSUPPORTED_OPERATION = 9,
    STALE_ELEMENT_REFERENCE = 10,
    ELEMENT_NOT_VISIBLE = 11,
    INVALID_ELEMENT_STATE = 12,
    UNKNOWN_ERROR = 13,
    ELEMENT_NOT_SELECTABLE = 15,
    JAVASCRIPT_ERROR = 17,
    XPATH_LOOKUP_ERROR = 19,
    TIMEOUT = 21,
    NO_SUCH_WINDOW = 23,
    INVALID_COOKIE_DOMAIN = 24,
    UNABLE_TO_SET_COOKIE = 25,
    UNEXPECTED_ALERT_OPEN = 26,
    NO_SUCH_ALERT = 27,
    SCRIPT_TIMEOUT = 28,
    INVALID_ELEMENT_COORDINATES = 29,
    IME_NOT_AVAILABLE = 30,
    IME_ENGINE_ACTIVATION_FAILED = 31,
    INVALID_SELECTOR_ERROR = 32,
    SESSION_NOT_CREATED = 33,
    MOVE_TARGET_OUT_OF_BOUNDS = 34,
    SQL_DATABASE_ERROR = 35,
    INVALID_XPATH_SELECTOR = 51,
    INVALID_XPATH_SELECTOR_RETURN_TYPE = 52,
    METHOD_NOT_ALLOWED = 405
}

export function encodeError(err: any): { error: string, message: string };

export function checkResponse(data: any): any;

export function throwDecodedError(data: any): void;

export function checkLegacyResponse(responseObj: any): any;