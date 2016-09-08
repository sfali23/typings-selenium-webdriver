
import {WebDriver} from './lib/webdriver';
import {Capabilities, ProxyConfig, Browser} from './lib/Capabilities';
import {ControlFlow} from './lib/promise';
import {Preferences} from './lib/logging';
import {Options as ChromeOptions} from './chrome';
import {Options as EdgeOptions} from './edge';
import {Options as IEOptions} from './ie';
import {Options as OperaOptions} from './opera';
import {Options as SafariOptions} from './safari';
import {Options as FirefoxOptions} from './firefox';
import {Agent} from 'http';

export class Builder {
    constructor();

    build(): WebDriver;

    buildAsync(): WebDriver;

    disableEnvironmentOverrides(): Builder;

    forBrowser(name: string | Browser, opt_version?: string, opt_platform?: string): Builder;

    getCapabilities(): Capabilities;

    getHttpAgent(): Agent;

    usingHttpAgent(agent: Agent): void;

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

    getFirefoxOptions(): FirefoxOptions;

    setChromeOptions(options: ChromeOptions): Builder;

    setFirefoxOptions(options: FirefoxOptions): Builder;

    setEdgeOptions(options: EdgeOptions): Builder;

    setIeOptions(options: IEOptions): Builder;

    setOperaOptions(options: OperaOptions): Builder;

    setSafariOptions(options: SafariOptions): Builder;
}
