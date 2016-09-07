import {ProxyConfig, Capabilities} from './lib/capabilities';
import {WebDriver} from './lib/webdriver';
import {ControlFlow} from './lib/promise';
import {DriverService} from './remote';

export class Options {
    constructor();

    /**
     * Sets the page load strategy for Edge. Supported values are "normal", "eager", and "none";
     */
    setPageLoadStrategy(pageLoadStrategy: string): Options;

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

    setStdio(config: (string | number)[]): ServiceBuilder;

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
