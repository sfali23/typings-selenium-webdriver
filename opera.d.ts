import {ProxyConfig, Capabilities} from './lib/capabilities';
import {WebDriver} from './lib/webdriver';
import {ControlFlow} from './lib/promise';
import {DriverService} from './remote';
import {Preferences} from './lib/logging';

export class Options {
    constructor();

    /**
     * Add additional command line arguments to use when launching the Opera browser. Each argument may be specified with or without the "--" prefix
     *  (e.g. "--foo" and "foo"). Arguments with an associated value should be delimited by an "=": "foo=bar".
     */
    addArguments(...var_args: string[]): Options;

    /**
     * Add additional extensions to install when launching Opera. Each extension should be specified as the path to the packed CRX file, or a Buffer for an extension.
     */
    addExtensions(var_args: (string | number)[]): Options;

    /**
     * Sets the logging preferences for the new session.
     */
    setLoggingPrefs(prefs: Preferences): Options;

    /**
     * Sets the path to the Opera binary to use. On Mac OS X, this path should reference the actual Opera executable, not just the application binary.
     * The binary path be absolute or relative to the operadriver server executable, but it must exist on the machine that will launch Opera.
     */
    setOperaBinaryPath(path: string): Options;

    /**
     * Sets the proxy settings for the new session.
     */
    setProxy(proxy: ProxyConfig): Options;

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
    constructor(opt_config?: Capabilities | Options, opt_service?: DriverService, opt_flow?: ControlFlow);
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

    setStdio(config: (string | number)[]): ServiceBuilder;

    /**
     * Silence sthe drivers output.
     */
    silent(): ServiceBuilder;

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
