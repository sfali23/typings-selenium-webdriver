import {Promise} from './promise';

declare namespace command {

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

    export type Name = {
        GET_SERVER_STATUS: 'getStatus',

        NEW_SESSION: 'newSession',
        GET_SESSIONS: 'getSessions',
        DESCRIBE_SESSION: 'getSessionCapabilities',

        CLOSE: 'close',
        QUIT: 'quit',

        GET_CURRENT_URL: 'getCurrentUrl',
        GET: 'get',
        GO_BACK: 'goBack',
        GO_FORWARD: 'goForward',
        REFRESH: 'refresh',

        ADD_COOKIE: 'addCookie',
        GET_COOKIE: 'getCookie',
        GET_ALL_COOKIES: 'getCookies',
        DELETE_COOKIE: 'deleteCookie',
        DELETE_ALL_COOKIES: 'deleteAllCookies',

        GET_ACTIVE_ELEMENT: 'getActiveElement',
        FIND_ELEMENT: 'findElement',
        FIND_ELEMENTS: 'findElements',
        FIND_CHILD_ELEMENT: 'findChildElement',
        FIND_CHILD_ELEMENTS: 'findChildElements',

        CLEAR_ELEMENT: 'clearElement',
        CLICK_ELEMENT: 'clickElement',
        SEND_KEYS_TO_ELEMENT: 'sendKeysToElement',
        SUBMIT_ELEMENT: 'submitElement',

        GET_CURRENT_WINDOW_HANDLE: 'getCurrentWindowHandle',
        GET_WINDOW_HANDLES: 'getWindowHandles',
        GET_WINDOW_POSITION: 'getWindowPosition',
        SET_WINDOW_POSITION: 'setWindowPosition',
        GET_WINDOW_SIZE: 'getWindowSize',
        SET_WINDOW_SIZE: 'setWindowSize',
        MAXIMIZE_WINDOW: 'maximizeWindow',

        SWITCH_TO_WINDOW: 'switchToWindow',
        SWITCH_TO_FRAME: 'switchToFrame',
        GET_PAGE_SOURCE: 'getPageSource',
        GET_TITLE: 'getTitle',

        EXECUTE_SCRIPT: 'executeScript',
        EXECUTE_ASYNC_SCRIPT: 'executeAsyncScript',

        GET_ELEMENT_TEXT: 'getElementText',
        GET_ELEMENT_TAG_NAME: 'getElementTagName',
        IS_ELEMENT_SELECTED: 'isElementSelected',
        IS_ELEMENT_ENABLED: 'isElementEnabled',
        IS_ELEMENT_DISPLAYED: 'isElementDisplayed',
        GET_ELEMENT_LOCATION: 'getElementLocation',
        GET_ELEMENT_LOCATION_IN_VIEW: 'getElementLocationOnceScrolledIntoView',
        GET_ELEMENT_SIZE: 'getElementSize',
        GET_ELEMENT_ATTRIBUTE: 'getElementAttribute',
        GET_ELEMENT_VALUE_OF_CSS_PROPERTY: 'getElementValueOfCssProperty',
        ELEMENT_EQUALS: 'elementEquals',

        SCREENSHOT: 'screenshot',
        TAKE_ELEMENT_SCREENSHOT: 'takeElementScreenshot',
        IMPLICITLY_WAIT: 'implicitlyWait',
        SET_SCRIPT_TIMEOUT: 'setScriptTimeout',
        SET_TIMEOUT: 'setTimeout',

        ACCEPT_ALERT: 'acceptAlert',
        DISMISS_ALERT: 'dismissAlert',
        GET_ALERT_TEXT: 'getAlertText',
        SET_ALERT_TEXT: 'setAlertValue',
        SET_ALERT_CREDENTIALS: 'setAlertCredentials',

        EXECUTE_SQL: 'executeSQL',
        GET_LOCATION: 'getLocation',
        SET_LOCATION: 'setLocation',
        GET_APP_CACHE: 'getAppCache',
        GET_APP_CACHE_STATUS: 'getStatus',
        CLEAR_APP_CACHE: 'clearAppCache',
        IS_BROWSER_ONLINE: 'isBrowserOnline',
        SET_BROWSER_ONLINE: 'setBrowserOnline',

        GET_LOCAL_STORAGE_ITEM: 'getLocalStorageItem',
        GET_LOCAL_STORAGE_KEYS: 'getLocalStorageKeys',
        SET_LOCAL_STORAGE_ITEM: 'setLocalStorageItem',
        REMOVE_LOCAL_STORAGE_ITEM: 'removeLocalStorageItem',
        CLEAR_LOCAL_STORAGE: 'clearLocalStorage',
        GET_LOCAL_STORAGE_SIZE: 'getLocalStorageSize',

        GET_SESSION_STORAGE_ITEM: 'getSessionStorageItem',
        GET_SESSION_STORAGE_KEYS: 'getSessionStorageKey',
        SET_SESSION_STORAGE_ITEM: 'setSessionStorageItem',
        REMOVE_SESSION_STORAGE_ITEM: 'removeSessionStorageItem',
        CLEAR_SESSION_STORAGE: 'clearSessionStorage',
        GET_SESSION_STORAGE_SIZE: 'getSessionStorageSize',

        SET_SCREEN_ORIENTATION: 'setScreenOrientation',
        GET_SCREEN_ORIENTATION: 'getScreenOrientation',

        // These belong to the Advanced user interactions - an element is
        // optional for these commands.
        CLICK: 'mouseClick',
        DOUBLE_CLICK: 'mouseDoubleClick',
        MOUSE_DOWN: 'mouseButtonDown',
        MOUSE_UP: 'mouseButtonUp',
        MOVE_TO: 'mouseMoveTo',
        SEND_KEYS_TO_ACTIVE_ELEMENT: 'sendKeysToActiveElement',

        // These belong to the Advanced Touch API
        TOUCH_SINGLE_TAP: 'touchSingleTap',
        TOUCH_DOWN: 'touchDown',
        TOUCH_UP: 'touchUp',
        TOUCH_MOVE: 'touchMove',
        TOUCH_SCROLL: 'touchScroll',
        TOUCH_DOUBLE_TAP: 'touchDoubleTap',
        TOUCH_LONG_PRESS: 'touchLongPress',
        TOUCH_FLICK: 'touchFlick',

        GET_AVAILABLE_LOG_TYPES: 'getAvailableLogTypes',
        GET_LOG: 'getLog',
        GET_SESSION_LOGS: 'getSessionLogs',

        // Non-standard commands used by the standalone Selenium server.
        UPLOAD_FILE: 'uploadFile'
    }

    export interface Executor {
        execute(command: Command): Promise<any>;
    }
}

/*declare interface Command {
    Command: command.Command;
    Name: command.Name;
    Executor: command.Executor;
}

declare const command: Command;*/

export = command;
