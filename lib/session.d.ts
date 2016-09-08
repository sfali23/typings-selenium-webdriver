import {Capabilities} from './capabilities';

export class Session {
    constructor(id: string, capabilities: Object | Capabilities);

    getCapabilities(): Capabilities;

    getCapability(key: string): Object;

    getId(): string;

    toJSON(arg0: string): string;
}
