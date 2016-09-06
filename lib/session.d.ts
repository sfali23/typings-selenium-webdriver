import {Capabilities} from './capabilities';

declare namespace session {

    export interface Session {
        new (id: string, capabilities: Object | Capabilities): Session;

        getCapabilities(): Capabilities;

        getCapability(key: string): Object;

        getId(): string;

        toJSON(arg0: string): string;
    }
}

export = session;
