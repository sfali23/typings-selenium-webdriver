import {Preferences} from './lib/logging';
import {ProxyConfig, Capabilities} from './lib/capabilities';
import {WebDriver} from './lib/webdriver';
import {ControlFlow, Promise} from './lib/promise';
import {Executor} from './lib/http';
import {DriverService} from './remote';

export class Options {
    constructor();

    /**
     * Add additional command line arguments to use when launching the Chrome browser. Each argument may be specified with or without
     * the "--" prefix (e.g. "--foo" and "foo"). Arguments with an associated value should be delimited by an "=": "foo=bar".
     */
    addArguments(...var_args: string[]): Options;

    /**
     * Add additional extensions to install when launching Chrome. Each extension should be specified as the path to the packed CRX file, or a Buffer for an extension.
     */
    addExtensions(...var_args: (string | Buffer)[]): Options;

    /**
     * Sets the name of the activity hosting a Chrome-based Android WebView. This option must be set to connect to an
     *  [Android WebView](https://sites.google.com/a/chromium.org/chromedriver/getting-started/getting-started---android)
     */
    androidActivity(name: string): Options;

    /**
     * Configures the ChromeDriver to launch Chrome on Android via adb. This function is shorthand for
     * {@link #androidPackage options.androidPackage('com.android.chrome')}.
     */
    androidChrome(): Options;

    /**
     * Sets the device serial number to connect to via ADB. If not specified, the ChromeDriver will select an unused device at random.
     *  An error will be returned if all devices already have active sessions.
     */
    androidDeviceSerial(serial: string): Options;

    /**
     * Sets the package name of the Chrome or WebView app.
     */
    androidPackage(pkg?: string): Options;

    /**
     * Sets the process name of the Activity hosting the WebView (as given by `ps`). If not specified, the process name is assumed to be the same as
     * {@link #androidPackage}.
     */
    androidProcess(processName: string): Options;

    /**
     * Sets whether to connect to an already-running instead of the specified {@linkplain #androidProcess app} instead of launching the app with a clean
     * data directory.
     */
    androidUseRunningApp(useRunning: boolean): Options;

    /**
     * Sets whether to leave the started Chrome browser running if the controlling ChromeDriver service is killed before {@link webdriver.WebDriver#quit()} is
     * called.
     */
    detachDriver(detach: boolean): Options;

    /**
     * List of Chrome command line switches to exclude that ChromeDriver by default passes when starting Chrome. Do not prefix switches with "--".
     */
    excludeSwitches(...var_args: string[]): Options;

    /**
     * Sets the path to the Chrome binary to use. On Mac OS X, this path should reference the actual Chrome executable, not just the application
     *  binary (e.g. "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome").
     * The binary path be absolute or relative to the chromedriver server executable, but it must exist on the machine that will launch Chrome.
     */
    setChromeBinaryPath(path: string): Options;

    /**
     * Sets the path to Chrome's log file. This path should exist on the machine that will launch Chrome.
     */
    setChromeLogFile(path: string): Options;

    /**
     * Sets the directory to store Chrome minidumps in. This option is only supported when ChromeDriver is running on Linux.
     */
    setChromeMinidumpPath(path: string): Options;

    /**
     * Sets preferences for the "Local State" file in Chrome's user data directory.
     */
    setLocalState(state: Object): Options;

    /**
     * Sets the logging preferences for the new session.
     */
    setLoggingPrefs(prefs: Preferences): Options;

    /**
     * Configures Chrome to emulate a mobile device. For more information, refer
     * to the ChromeDriver project page on [mobile emulation][em]. Configuration
     * options include:
     *
     * - `deviceName`: The name of a pre-configured [emulated device][devem]
     * - `width`: screen width, in pixels
     * - `height`: screen height, in pixels
     * - `pixelRatio`: screen pixel ratio
     */
    setMobileEmulation(config?: { deviceName: string } | { height: number, pixelRatio: number, width: number }): Options;

    /**
     * Sets the performance logging preferences. Options include:
     *
     * - `enableNetwork`: Whether or not to collect events from Network domain.
     * - `enablePage`: Whether or not to collect events from Page domain.
     * - `enableTimeline`: Whether or not to collect events from Timeline domain.
     *     Note: when tracing is enabled, Timeline domain is implicitly disabled,
     *     unless `enableTimeline` is explicitly set to true.
     * - `tracingCategories`: A comma-separated string of Chrome tracing
     *     categories for which trace events should be collected. An unspecified
     *     or empty string disables tracing.
     * - `bufferUsageReportingInterval`: The requested number of milliseconds
     *     between DevTools trace buffer usage events. For example, if 1000, then
     *     once per second, DevTools will report how full the trace buffer is. If
     *     a report indicates the buffer usage is 100%, a warning will be issued.
     */
    setPerfLoggingPrefs(prefs: { bufferUsageReportingInterval: number, enableNetwork: boolean, enablePage: boolean, enableTimeline: boolean, tracingCategories: string }): Options;

    /**
     * Sets the proxy settings for the new session.
     */
    setProxy(proxy: ProxyConfig): Options;

    /**
     * Sets the user preferences for Chrome's user profile. See the "Preferences" file in Chrome's user data directory for examples.
     */
    setUserPreferences(prefs: Object): Options;

    /**
     * Converts this options instance to a {@link Capabilities} object.
     */
    toCapabilities(opt_capabilities?: Capabilities): Options;

    /**
     * Extracts the ChromeDriver specific options from the given capabilities object.
     */
    static fromCapabilities(caps: Capabilities): Options;
}

export class Driver extends WebDriver {
    constructor(opt_config?: Capabilities | Options, opt_service?: DriverService, opt_flow?: ControlFlow, opt_executor?: Executor);

    /**
     * Schedules a command to launch Chrome App with given ID.
     */
    launchApp(id: string): Promise<void>;
}

/**
 * Creates {@link selenium-webdriver/remote.DriverService} instances that manage
 * a [ChromeDriver](https://sites.google.com/a/chromium.org/chromedriver/)
 * server in a child process.
 */
export class ServiceBuilder {
    constructor(opt_exe: string);

    /**
     * Creates a new DriverService using this instance's current configuration.
     */
    build(): DriverService;

    /**
     * Enables verbose logging.
     */
    enableVerboseLogging(): ServiceBuilder;

    /**
     * Sets the path of the log file the driver should log to. If a log file is not specified, the driver will log to stderr.
     */
    loggingTo(path: string): ServiceBuilder;

    /**
     * Sets which port adb is listening to. _The ChromeDriver will connect to adb if an {@linkplain Options#androidPackage 
     * Android session} is requested, but * adb **must** be started beforehand._
     */
    setAdbPort(port: number): ServiceBuilder;

    /**
     * Sets the number of threads the driver should use to manage HTTP requests. By default, the driver will use 4 threads.
     */
    setNumHttpThreads(n: number): ServiceBuilder;

    setStdio(config: (string | number)[]): ServiceBuilder;

    /**
     * Sets the base path for WebDriver REST commands (e.g. "/wd/hub"). By default, the driver will accept commands relative to "/".
     */
    setUrlBasePath(path: string): ServiceBuilder;

    /**
     * Sets the port to start the ChromeDriver on.
     */
    usingPort(port: number): ServiceBuilder;

    /**
     * Defines the environment to start the server under. This settings will be inherited by every browser session started by the server.
     */
    withEnvironment(env: Map<string, string>): ServiceBuilder;
}

/**
 * Returns the default ChromeDriver service. If such a service has not been configured, one will be constructed using 
 * the default configuration for a ChromeDriver executable found on the system PATH.
 */
export function getDefaultService(): DriverService;

/**
 * Sets the default service to use for new ChromeDriver instances.
 */
export function setDefaultService(service: DriverService): void;
