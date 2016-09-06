import {Request as _Request, Response as _Response, Executor as _Executor, Client} from '../lib/http';
import {Promise, Thenable} from '../lib/promise';

export class Request extends _Request {
    constructor(method: string, path: string, opt_data?: Object);
}

export class Response extends _Response {
    constructor(status: number, headers: Map<string, string>, body: string);
}

export class Executor extends _Executor {
    constructor(client: Client | Thenable<Client>);
}

export class HttpClient implements Client {
    send(httpRequest: Request): Promise<Response>;
}
