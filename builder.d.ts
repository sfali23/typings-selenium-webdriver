
import {WebDriver} from './lib/webdriver';
import {Capabilities, ProxyConfig, Browser} from './lib/Capabilities';
import {ControlFlow} from './lib/promise';
import {Preferences} from './lib/logging';

export class Builder {
    new(): Builder;

    build(): WebDriver;

    buildAsync(): WebDriver;

    disableEnvironmentOverrides(): Builder;

    forBrowser(name: string | Browser, opt_version?: string, opt_platform?: string): Builder;

    getCapabilities(): Capabilities;

    // TODO:
    // getHttpAgent()
    // usingHttpAgent(agent)

    getServerUrl(): string;

    getWebDriverProxy(): string;

    setAlertBehavior(behavior: string): Builder;

    setControlFlow(flow: ControlFlow): Builder;

    setEnableNativeEvents(enabled: boolean): Builder;

    setLoggingPrefs(prefs: Preferences | Object): Builder;

    setProxy(config: ProxyConfig): Builder;

    setScrollBehavior(behavior: number): Builder;

    usingServer(url: string): Builder;

    usingWebDriverProxy(proxy: string): Builder;

    withCapabilities(capabilities: Capabilities | Object): Builder;

    // TODO: implement these methods
    // getFirefoxOptions(): Options;
    // setChromeOptions(options):Builder;
    // setFirefoxOptions(options):Builder;
    // setEdgeOptions(options):Builder;
    // setIeOptions(options):Builder;
    // setOperaOptions(options):Builder;
    // setSafariOptions(options):Builder;
}
