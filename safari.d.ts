import {Capabilities} from './lib/capabilities';
import {WebDriver} from './lib/webdriver';
import {ControlFlow} from './lib/promise';
import {Preferences} from './lib/logging';

export class Options {
    constructor();

    /**
     * Sets whether to force Safari to start with a clean session. Enabling this option will cause all global browser data to be deleted.
     */
    setCleanSession(clean: boolean): Options;

    /**
     * Sets the logging preferences for the new session.
     */
    setLoggingPrefs(prefs: Preferences): Options;

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
    constructor(opt_config?: Capabilities | Options, opt_flow?: ControlFlow);
}
