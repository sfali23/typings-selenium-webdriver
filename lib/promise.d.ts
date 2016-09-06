import {EventEmitter} from './events';

export interface CancellationError extends Error {

    /**
     * @param {string=} opt_msg The cancellation message.
     */
    new (opt_msg: string): CancellationError;
}

export interface Thenable<T> {
    cancel(opt_reason: string | Error): void;

    catch<R>(errback: Function): Promise<R>;

    finally<R>(callback: Function): Promise<R>;

    isPending(): boolean;

    then<R>(opt_callback: Function, opt_errback: Function): Promise<R>;
}

export class Promise<T> implements Thenable<T> {
    new(resolver: Function, opt_flow?: ControlFlow): Promise<T>;

    cancel(opt_reason?: string | Error): void;

    catch<R>(errback: Function): Promise<R>;

    finally<R>(callback: Function): Promise<R>;

    isPending(): boolean;

    then<R>(opt_callback?: Function, opt_errback?: Function): Promise<R>;
}

export interface ControlFlow extends EventEmitter {

    async(fn: Function, opt_self: Object, ...var_args: Object[]): void;

    execute<T>(fn: Function, opt_description: string): Promise<T>;

    getSchedule(opt_includeStackTraces: string): string;

    isIdle(): boolean;

    reset(): void;

    setPropagateUnhandledRejections(propagate: boolean): void;

    timeout<T>(ms: number, opt_description: string): Promise<T>;

    wait<T>(condition: Promise<T> | Function, opt_timeout: number, opt_message: string): Promise<T>;

}

export interface Deferred<T> {

    promise: Promise<T>;

    new (opt_flow: ControlFlow): Deferred<T>;

    fulfill(opt_value: T | Thenable<T>): void;

    reject(opt_reason: any): void;
}

export class MultipleUnhandledRejectionError {

    static stackTraceLimit: number;

    errors: Set<any>;

    new(errors: Set<any>): MultipleUnhandledRejectionError;

    static captureStackTrace(error: Object, opt_constructor: Function): void;
}

export type EventType = {

    /** Emitted when all tasks have been successfully executed. */
    IDLE: 'idle',

    /** Emitted when a ControlFlow has been reset. */
    RESET: 'reset',

    /** Emitted whenever a new task has been scheduled. */
    SCHEDULE_TASK: 'scheduleTask',

    /**
     * Emitted whenever a control flow aborts due to an unhandled promise
     * rejection. This event will be emitted along with the offending rejection
     * reason. Upon emitting this event, the control flow will empty its task
     * queue and revert to its initial state.
     */
    UNCAUGHT_EXCEPTION: 'uncaughtException'
}
