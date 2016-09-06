import {Thenable, Promise} from './lib/promise';
import {FileDetector as _FileDetector} from './lib/input';

/**
 * A record object that defines the configuration options for a DriverService instance.
 */
export interface ServiceOptions {
    /**
     * The arguments to pass to the service. If a promise is provided, the service will wait for it to resolve before starting.
     */
    args?: string[] | Thenable<string[]>;

    /**
     * The environment variables that should be visible to the server process. Defaults to inheriting the current process's environment.
     */
    env?: Map<string, string>;

    /**
     * The host name to access the server on. If this option is specified, the {@link #loopback} option will be ignored.
     */
    hostname?: string;

    /**
     * Whether the service should only be accessed on this host's loopback address.
     */
    loopback?: boolean;

    /**
     * The base path on the server for the WebDriver wire protocol (e.g. '/wd/hub'). Defaults to '/'.
     */
    path?: string;

    /**
     * The port to start the server on (must be > 0). If the port is provided as a promise, the service will wait for the promise to resolve before starting.
     */
    port?: number | Thenable<number>;

    /**
     * IO configuration for the spawned server process. For more information, refer to the documentation of child_process.spawn.
     */
    stdio?: string | (string | number)[];
}

export class FileDetector extends _FileDetector { }

/**
 * Manages the life and death of a native executable WebDriver server.
 * 
 * It is expected that the driver server implements the https://github.com/SeleniumHQ/selenium/wiki/JsonWireProtocol. Furthermore, 
 * the managed server should support multiple concurrent sessions, so that this class may be reused for multiple clients.
 */
export class DriverService {

    constructor(executable: string, options?: ServiceOptions);

    /**
     * A promise that resolves to the server's address.
     */
    address(): Promise<string>;

    /**
     * Returns whether the underlying process is still running. This does not take into account whether the process is in the process of shutting down.
     */
    isRunning(): boolean;

    /**
     * Stops the service if it is not currently running. This function will kill the server immediately. To synchronize with the active control flow, use {@link #stop()}.
     */
    kill(): Promise<void>

    /**
     * Starts the server if it is not already running.
     */
    start(opt_timeoutMs?: number): Promise<string>;

    /**
     * Schedules a task in the current control flow to stop the server if it is currently running.
     */
    stop(): Promise<void>;
}

/**
 * Manages the life and death of the <a href="http://selenium-release.storage.googleapis.com/index.html">
 * standalone Selenium server</a>.
 */
export class SeleniumServer extends DriverService {
    constructor(jar: string, opt_options?: ServiceOptions);
}
