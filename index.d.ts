import {EventEmitter as _EventEmitter} from './lib/events';
import {WebDriver as _WebDriver, WebElement as _WebElement, WebElementPromise as _WebElementPromise} from './lib/webdriver';
import {FileDetector as _FileDetector, Button, Key} from './lib/input';
import {By as _By} from './lib/by';
import {Capabilities as _Capabilities, Browser, Capability} from './lib/Capabilities';
import {Session as _Session} from './lib/session';
import {ActionSequence as _ActionSequence} from './lib/actions';
import {Builder as _Builder} from './builder';
import * as error from './lib/error';
import * as promise from './lib/promise';
import * as logging from './lib/logging';
import * as until from './lib/until';

export {error};
export {promise};
export {logging};
export {until};

export class ActionSequence extends _ActionSequence { }

export class By extends _By {}

export class Capabilities extends _Capabilities { }

export interface EventEmitter extends _EventEmitter { }

export class FileDetector extends _FileDetector { }

export interface Session extends _Session { }

export class WebDriver extends _WebDriver { }

export class WebElement extends _WebElement { }

export class WebElementPromise extends _WebElementPromise { }

export class Builder extends _Builder { }

export {Button};
export {Browser};
export {Capability};
export {Key};
