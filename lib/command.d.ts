import {Promise} from './promise';

/**
 * Describes a command to execute.
 */
export interface Command {

    /** 
     * @param {string} name The name of this command. 
     */
    new (name: string): Command;

    /** 
     * @return {string} This command's name. 
     */
    getName(): string;

    /**
     * Sets a parameter to send with this command.
     * @param {string} name The parameter name.
     * @param {Object} value The parameter value.
     * @return {Command} A self reference.
     */
    setParameter(name: string, value: Object): Command;

    /**
     * Sets the parameters for this command.
     * @param {Object<*>} parameters The command parameters.
     * @return {Command} A self reference.
     */
    setParameters(parameters: Object): Command;

    /**
     * Returns a named command parameter.
     * @param {string} key The parameter key to look up.
     * @return {Object} The parameter value, or undefined if it has not been set.
     */
    getParameter(key: string): Object;

    /**
     * @return {Object} The parameters to send with this command.
     */
    getParameters(): Object;
}

export enum Name {
    GET_SERVER_STATUS,

    NEW_SESSION,
    GET_SESSIONS,
    DESCRIBE_SESSION,

    CLOSE,
    QUIT,

    GET_CURRENT_URL,
    GET,
    GO_BACK,
    GO_FORWARD,
    REFRESH,

    ADD_COOKIE,
    GET_COOKIE,
    GET_ALL_COOKIES,
    DELETE_COOKIE,
    DELETE_ALL_COOKIES,

    GET_ACTIVE_ELEMENT,
    FIND_ELEMENT,
    FIND_ELEMENTS,
    FIND_CHILD_ELEMENT,
    FIND_CHILD_ELEMENTS,

    CLEAR_ELEMENT,
    CLICK_ELEMENT,
    SEND_KEYS_TO_ELEMENT,
    SUBMIT_ELEMENT,

    GET_CURRENT_WINDOW_HANDLE,
    GET_WINDOW_HANDLES,
    GET_WINDOW_POSITION,
    SET_WINDOW_POSITION,
    GET_WINDOW_SIZE,
    SET_WINDOW_SIZE,
    MAXIMIZE_WINDOW,

    SWITCH_TO_WINDOW,
    SWITCH_TO_FRAME,
    GET_PAGE_SOURCE,
    GET_TITLE,

    EXECUTE_SCRIPT,
    EXECUTE_ASYNC_SCRIPT,

    GET_ELEMENT_TEXT,
    GET_ELEMENT_TAG_NAME,
    IS_ELEMENT_SELECTED,
    IS_ELEMENT_ENABLED,
    IS_ELEMENT_DISPLAYED,
    GET_ELEMENT_LOCATION,
    GET_ELEMENT_LOCATION_IN_VIEW,
    GET_ELEMENT_SIZE,
    GET_ELEMENT_ATTRIBUTE,
    GET_ELEMENT_VALUE_OF_CSS_PROPERTY,
    ELEMENT_EQUALS,

    SCREENSHOT,
    TAKE_ELEMENT_SCREENSHOT,
    IMPLICITLY_WAIT,
    SET_SCRIPT_TIMEOUT,
    SET_TIMEOUT,

    ACCEPT_ALERT,
    DISMISS_ALERT,
    GET_ALERT_TEXT,
    SET_ALERT_TEXT,
    SET_ALERT_CREDENTIALS,

    EXECUTE_SQL,
    GET_LOCATION,
    SET_LOCATION,
    GET_APP_CACHE,
    GET_APP_CACHE_STATUS,
    CLEAR_APP_CACHE,
    IS_BROWSER_ONLINE,
    SET_BROWSER_ONLINE,

    GET_LOCAL_STORAGE_ITEM,
    GET_LOCAL_STORAGE_KEYS,
    SET_LOCAL_STORAGE_ITEM,
    REMOVE_LOCAL_STORAGE_ITEM,
    CLEAR_LOCAL_STORAGE,
    GET_LOCAL_STORAGE_SIZE,

    GET_SESSION_STORAGE_ITEM,
    GET_SESSION_STORAGE_KEYS,
    SET_SESSION_STORAGE_ITEM,
    REMOVE_SESSION_STORAGE_ITEM,
    CLEAR_SESSION_STORAGE,
    GET_SESSION_STORAGE_SIZE,

    SET_SCREEN_ORIENTATION,
    GET_SCREEN_ORIENTATION,

    // These belong to the Advanced user interactions - an element is
    // optional for these commands.
    CLICK,
    DOUBLE_CLICK,
    MOUSE_DOWN,
    MOUSE_UP,
    MOVE_TO,
    SEND_KEYS_TO_ACTIVE_ELEMENT,

    // These belong to the Advanced Touch API
    TOUCH_SINGLE_TAP,
    TOUCH_DOWN,
    TOUCH_UP,
    TOUCH_MOVE,
    TOUCH_SCROLL,
    TOUCH_DOUBLE_TAP,
    TOUCH_LONG_PRESS,
    TOUCH_FLICK,

    GET_AVAILABLE_LOG_TYPES,
    GET_LOG,
    GET_SESSION_LOGS,

    // Non-standard commands used by the standalone Selenium server.
    UPLOAD_FILE
}

export interface Executor {
    execute(command: Command): Promise<any>;
}
