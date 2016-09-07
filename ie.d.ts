import {ProxyConfig, Capabilities} from './lib/capabilities';
import {WebDriver} from './lib/webdriver';
import {ControlFlow} from './lib/promise';

export class Options {
    constructor();

    /**
     * Specifies command-line switches to use when launching Internet Explorer. This is only valid when used with {@link #forceCreateProcessApi}.
     */
    addArguments(...var_args: (string | number)[]): Options;

    /**
     * Configures the timeout, in milliseconds, that the driver will attempt to located and attach to a newly opened instance of Internet Explorer.
     * The default is zero, which indicates waiting indefinitely.
     */
    browserAttachTimeout(timeout: number): Options;

    /**
     * Configures whether the driver should attempt to remove obsolete {@linkplain webdriver.WebElement WebElements} from its internal cache on
     * page navigation (true by default). Disabling this option will cause the driver to run with a larger memory footprint.
     */
    enableElementCacheCleanup(enable: boolean): Options;

    /**
     * Configures whether to enable persistent mouse hovering (true by default). Persistent hovering is achieved by continuously firing 
     * mouse over events at the last location the mouse cursor has been moved to.
     */
    enablePersistentHover(enable: boolean): Options;

    /**
     * Configures whether to clear the cache, cookies, history, and saved form data before starting the browser. 
     * _Using this capability will clear session data for all running instances of Internet Explorer, including those started manually._
     */
    ensureCleanSession(cleanSession: boolean): Options;

    /**
     * Configures whether to launch Internet Explorer using the CreateProcess API. If this option is not specified, IE is launched using
     *  IELaunchURL, if available. For IE 8 and above, this option requires the TabProcGrowth registry value to be set to 0.
     */
    forceCreateProcessApi(force: boolean): Options;

    /**
     * Indicates whether to skip the check that the browser's zoom level is set to 100%.
     */
    ignoreZoomSetting(ignore: boolean): Options;

    /**
     * Sets the initial URL loaded when IE starts. This is intended to be used with {@link #ignoreProtectedModeSettings} to allow the user to initialize IE in
     * the proper Protected Mode zone. Setting this option may cause browser instability or flaky and unresponsive code. Only "best effort" support is
     * provided when using this option.
     */
    initialBrowserUrl(url: string): Options;

    /**
     * Whether to disable the protected mode settings check when the session is created. Disbling this setting may lead to significant instability as the
     * browser may become unresponsive/hang. Only "best effort" support is provided when using this capability.
     *
     * For more information, refer to the IEDriver's [required system configuration](http://goo.gl/eH0Yi3).
     */
    introduceFlakinessByIgnoringProtectedModeSettings(ignoreSettings: boolean): Options;

    /**
     * Configures whether to require the IE window to have input focus before performing any user interactions (i.e. mouse or keyboard events).
     *  This option is disabled by default, but delivers much more accurate interaction events when enabled.
     */
    requireWindowFocus(require: boolean): Options;

    /**
     * Sets the path of the temporary data directory to use.
     */
    setExtractPath(path: string): Options;

    /**
     * Sets the IP address of the driver's host adapter.
     */
    setHost(host: string): Options;

    /**
     * Sets the path to the log file the driver should log to.
     */
    setLogFile(file: string): Options;

    /**
     * Sets the IEDriverServer's logging level.
     */
    setLogLevel(level: string): Options;

    /**
     * Sets the proxy settings for the new session.
     */
    setProxy(proxy: ProxyConfig): Options;

    /**
     * Sets whether the driver should start in silent mode.
     */
    silent(silent: boolean): Options;

    /**
     * Converts this options instance to a {@link Capabilities} object.
     */
    toCapabilities(opt_capabilities?: Capabilities): Options;

    /**
     * Configures whether proxies should be configured on a per-process basis. If not set, setting a {@linkplain #setProxy proxy} will configure the system
     * proxy. The default behavior is to use the system proxy.
     */
    usePerProcessProxy(enable: boolean): Options;

    /**
     * Extracts the ChromeDriver specific options from the given capabilities object.
     */
    static fromCapabilities(caps: Capabilities): Options;
}

export enum Level {
    DEBUG,
    ERROR,
    FATAL,
    INFO,
    TRACE,
    WARN
}

export class Driver extends WebDriver {
    constructor(opt_config?: Capabilities | Options, opt_flow?: ControlFlow);
}
