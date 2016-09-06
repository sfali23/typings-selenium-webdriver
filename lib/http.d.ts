import {Executor as _Executor, Command} from './command';
import {Promise, Thenable} from './promise';

/**
 * Represents a HTTP request message. This class is a "partial" request and only defines the path on the server to send
 *  a request to. It is each client's responsibility to build the full URL for the final request.
 */
export class Request {
    data: Object;
    headers: Map<string, string>;
    method: string;
    path: string;

    constructor(method: string, path: string, opt_data?: Object);
}

/**
 * Represents a HTTP response message.
 */
export class Response {
    body: string;
    headers: Map<string, string>;
    status: number;

    constructor(status: number, headers: Map<string, string>, body: string);
}

/**
 * Handles sending HTTP messages to a remote end.
 */
export interface Client {
    /**
     * Sends a request to the server. The client will automatically follow any redirects returned by the server, fulfilling
     * the returned promise with the final response.
     */
    send(httpRequest: Request): Promise<Response>;
}

/**
 * A command executor that communicates with the server using JSON over HTTP.
 * 
 * By default, each instance of this class will use the legacy wire protocol from [Selenium project][json].
 * The executor will automatically switch to the [W3C wire protocol][w3c] if the remote end returns a 
 * compliant response to a new session command.
 *
 * [json]: https://github.com/SeleniumHQ/selenium/wiki/JsonWireProtocol
 * [w3c]: https://w3c.github.io/webdriver/webdriver-spec.html
 */
export class Executor implements _Executor {
    w3c: boolean;

    /**
     * The client to use for sending requests to the server, or a promise-like object that will resolve to to the client.
     */
    constructor(client: Client | Thenable<Client>);

    execute(command: Command): Promise<any>;

    /**
     * Defines a new command for use with this executor. When a command is sent, the path will be preprocessed 
     * using the command's parameters; any path segments prefixed with ":" will be replaced by the parameter 
     * of the same name. For example, given "/person/:name" and the parameters "{name: 'Bob'}", the final 
     * command path will be "/person/Bob".
     */
    defineCommand(name: string, method: string, path: string): void;
}

export function buildPath(path: string, parameters: Map<any, any>): string;
