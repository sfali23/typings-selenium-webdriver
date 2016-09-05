import {Preferences} from './logging';

declare namespace capabilities {

    export enum Browser {
        ANDROID,
        CHROME,
        EDGE,
        FIREFOX,
        IE,
        INTERNET_EXPLORER,
        IPAD,
        IPHONE,
        OPERA,
        PHANTOM_JS,
        SAFARI,
        HTMLUNIT
    }

    export enum Capability {
        ACCEPT_SSL_CERTS,
        BROWSER_NAME,
        ELEMENT_SCROLL_BEHAVIOR,
        HANDLES_ALERTS,
        LOGGING_PREFS,
        NATIVE_EVENTS,
        PLATFORM,
        PROXY,
        ROTATABLE,
        SECURE_SSL,
        SUPPORTS_APPLICATION_CACHE,
        SUPPORTS_CSS_SELECTORS,
        SUPPORTS_JAVASCRIPT,
        SUPPORTS_LOCATION_CONTEXT,
        TAKES_SCREENSHOT,
        UNEXPECTED_ALERT_BEHAVIOR,
        VERSION
    }

    export interface ProxyConfig {
        ftpProxy?: string;
        httpProxy?: string;
        noProxy?: string;
        proxyAutoconfigUrl?: string;
        proxyType?: string;
        sslProxy?: string;
    }

    export class Capabilities extends Map {
        new(opt_other?: Object): Capabilities;

        clear(): void;

        merge(other: Capabilities | Map<String, Object> | Object): Capabilities;

        setAlertBehavior(behavior: string): Capabilities;

        setEnableNativeEvents(enabled: boolean): Capabilities;

        setLoggingPrefs(prefs: Preferences): Capabilities;

        setProxy(proxy: ProxyConfig): Capabilities;

        setScrollBehavior(behavior: number): Capabilities;

        static android(): Capabilities;

        static chrome(): Capabilities;

        static edge(): Capabilities;

        static firefox(): Capabilities;

        static htmlunit(): Capabilities;

        static htmlunitwithjs(): Capabilities;

        static ie(): Capabilities;

        static ipad(): Capabilities;

        static iphone(): Capabilities;

        static opera(): Capabilities;

        static phantomjs(): Capabilities;

        static safari(): Capabilities;
    }
}

export = capabilities;