import {Promise, ControlFlow} from './lib/promise';
import {Command} from './lib/command';
import {Preferences} from './lib/logging';
import {ProxyConfig, Capabilities} from './lib/capabilities';
import {WebDriver} from './lib/webdriver';
import {Executor} from './lib/http';

// extension
export function install(extension: string, dir: string): Promise<string>;

// profile
/**
 * Decodes a base64 encoded profile.
 */
export function decode(data: string): Promise<string>;

/**
 * Parses a user.js file in a Firefox profile directory.
 */
export function loadUserPrefs(f: string): Promise<Object>;

/**
 * Provides a mechanism to configure and launch Firefox in a subprocess for use with WebDriver.
 *
 * If created _without_ a path for the Firefox binary to use, this class will attempt to find Firefox when {@link #launch()} is called. For OSX and
 * Windows, this class will look for Firefox in the current platform's default installation location (e.g. /Applications/Firefox.app on OSX). For all other
 * platforms, the Firefox executable must be available on your system `PATH`.
 */
export class Binary {
    constructor(opt_exe: string);

    /**
     * Add arguments to the command line used to start Firefox.
     */
    addArguments(...var_args: string[]): void;

    /**
     * Launches Firefox and returns a promise that will be fulfilled when the process terminates.
     */
    launch(profile: string): Promise<Command>;

    /**
     * Returns a promise for the Firefox executable used by this instance. The returned promise will be immediately resolved if the user
     *  supplied an executable path when this instance was created. Otherwise, an attempt will be made to find Firefox on the current system.
     */
    locate(): Promise<string>;

    /**
     * Specifies whether to use Firefox Developer Edition instead of the normal stable channel. Setting this option has no effect if this instance
     *  was created with a path to a specific Firefox binary.
     * 
     * This method has no effect on Unix systems where the Firefox application has the same (default) name regardless of version.
     */
    useDevEdition(opt_use: string): void;
}

/**
 * Models a Firefox profile directory for use with the FirefoxDriver. The {@code Profile} directory uses an in-memory model until
 * {@link #writeToDisk} or {@link #encode} is called.
 */
export class Profile {
    constructor(opt_dir: string);

    acceptUntrustedCerts(): boolean;

    /**
     * Registers an extension to be included with this profile.
     */
    addExtension(extension: string): void;

    assumeUntrustedCertIssuer(): void;

    /**
     * Write profile to disk, compress its containing directory, and return it as a Base64 encoded string.
     */
    encode(): Promise<string>;

    getPort(): number;

    /**
     * Returns the currently configured value of a profile preference. This does not include any defaults defined in the profile's 
     * template directory user.js file (if a template were specified on construction).
     */
    getPreference(key: string): string | number | boolean;

    /**
     * Returns whether native events are enabled in this profile.
     */
    nativeEventsEnabled(): boolean;

    /**
     * Sets whether the FirefoxDriver should automatically accept untrusted SSL certificates.
     */
    setAcceptUntrustedCerts(value: string): void;

    /**
     * Sets whether to assume untrusted certificates come from untrusted issuers.
     */
    setAssumeUntrustedCertIssuer(value: boolean): void;

    /**
     * Specifies which host the driver should listen for commands on. If not specified, the driver will default to "localhost". This option should be
     * specified when "localhost" is not mapped to the loopback address (127.0.0.1) in `/etc/hosts`.
     */
    setHost(host: string): void;

    /**
     * Sets whether to use native events with this profile.
     */
    setNativeEventsEnabled(enabled: boolean): void;

    /**
     * Sets the port to use for the WebDriver extension loaded by this profile.
     */
    setPort(port: number): void;

    /**
     * Sets a desired preference for this profile.
     */
    setPreference(key: string, value: string | number | boolean): void;

    /**
     * Writes this profile to disk.
     */
    writeToDisk(opt_excludeWebDriverExt: boolean): Promise<string>;
}

export enum Context {
    CHROME,
    CONTENT
}

/**
 * Configuration options for the FirefoxDriver.
 */
export class Options {
    constructor();

    /**
     * Sets the binary to use. The binary may be specified as the path to a Firefox executable, or as a {@link Binary} object.
     */
    setBinary(binary: string | Binary): Options;

    /**
     * Sets the logging preferences for the new session.s
     */
    setLoggingPreferences(prefs: Preferences): Options;

    /**
     * Sets the profile to use. The profile may be specified as a {@link Profile} object or as the path to an existing Firefox profile to use
     * as a template.
     */
    setProfile(profile: Profile): Options;

    /**
     * Sets the proxy to use.
     */
    setProxy(proxy: ProxyConfig): Options;

    /**
     * Converts these options to a {@link Capabilities} instance.
     */
    toCapabilities(): Capabilities;

    /**
     * Sets whether to use Mozilla's geckodriver to drive the browser. This option is enabled by default and required for Firefox 47+.
     */
    useGeckoDriver(enable: boolean): void;
}

export class Driver extends WebDriver {
    constructor(opt_config?: Capabilities | Options, opt_flow?: ControlFlow, opt_executor?: Executor);

    /**
     * Get the context that is currently in effect.
     */
    getContext(): Promise<Context>;

    /**
     * Changes target context for commands between chrome- and content.
     *
     * Changing the current context has a stateful impact on all subsequent commands. The {@link Context.CONTENT} context has normal web
     * platform document permissions, as if you would evaluate arbitrary JavaScript. The {@link Context.CHROME} context gets elevated
     * permissions that lets you manipulate the browser chrome itself, with full access to the XUL toolkit.
     *
     * Use your powers wisely.
     *
     */
    setContext(ctx: Promise<Context>): void;
}
