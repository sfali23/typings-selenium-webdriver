import {EventEmitter, Listener} from './events';

export class CancellationError extends Error {

    /**
     * @param {string=} opt_msg The cancellation message.
     */
    constructor(opt_msg: string);
}

export interface Thenable<T> {
    cancel(opt_reason: string | Error): void;

    catch<R>(errback: Function): Promise<R>;

    finally<R>(callback: Function): Promise<R>;

    isPending(): boolean;

    then<R>(opt_callback: Function, opt_errback: Function): Promise<R>;
}

export class Promise<T> implements Thenable<T> {
    constructor(resolver: Function, opt_flow?: ControlFlow);

    cancel(opt_reason?: string | Error): void;

    catch<R>(errback: Function): Promise<R>;

    finally<R>(callback: Function): Promise<R>;

    isPending(): boolean;

    then<R>(opt_callback?: Function, opt_errback?: Function): Promise<R>;
}

export class ControlFlow implements EventEmitter {

    addListener(type: string, fn: Function, opt_self?: Object): ControlFlow;

    async(fn: Function, opt_self?: Object, ...var_args: Object[]): void;

    emit(type: string, ...args: any[]): void;

    execute<T>(fn: Function, opt_description: string): Promise<T>;

    getSchedule(opt_includeStackTraces: string): string;

    isIdle(): boolean;

    listeners(type: string): Listener[];

    once(type: string, fn: Function, opt_self?: Object): ControlFlow;

    on(type: string, fn: Function, opt_self?: Object): ControlFlow;

    removeListener(type: string, listenerFn: Function): ControlFlow;

    removeAllListeners(opt_type: any): ControlFlow;

    reset(): void;

    setPropagateUnhandledRejections(propagate: boolean): void;

    timeout<T>(ms: number, opt_description: string): Promise<T>;

    wait<T>(condition: Promise<T> | Function, opt_timeout: number, opt_message: string): Promise<T>;
}

export class Deferred<T> {

    promise: Promise<T>;

    constructor(opt_flow: ControlFlow);

    fulfill(opt_value: T | Thenable<T>): void;

    reject(opt_reason: any): void;
}

export class MultipleUnhandledRejectionError extends Error {

    errors: Set<any>;

    constructor(errors: Set<any>);
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

/**
 * Given an array of promises, will return a promise that will be fulfilled with the fulfillment values of the input array's values. If any of the
 * input array's promises are rejected, the returned promise will be rejected with the same reason.
 */
export function all<T>(arg: Promise<T>[]): Promise<T>;

/**
 * Invokes the appropriate callback function as soon as a promised `value` is resolved. This function is similar to `when()`, except it does not return
 * a new promise.
 */
export function asap(value: any, callback?: Function, opt_errback?: Function): void;

/**
 * Generates an error to capture the current stack trace.
 */
export function captureStackTrace(name: string, msg: string, opt_topFn?: Function): Error;

/**
 * Wraps a function that expects a node-style callback as its final argument. This callback expects two arguments: an error value (which will be
 * null if the call succeeded), and the success value as the second argument. The callback will the resolve or reject the returned promise, based on its
 * arguments.
 */
export function checkedNodeCall<T>(fn: Function, ...var_args: any[]): Promise<T>;

/**
 * Consumes a {@code GeneratorFunction}. Each time the generator yields a promise, this function will wait for it to be fulfilled before feeding the
 * fulfilled value back into {@code next}. Likewise, if a yielded promise is rejected, the rejection error will be passed to {@code throw}.
 */
export function consume<T>(generatorFn: Function, opt_self?: Object, ...var_args: any[]): Promise<T>;

/**
 * Returns The currently active control flow.
 */
export function controlFlow(): ControlFlow;

/**
 * Creates a new control flow. The provided callback will be invoked as the first task within the new flow, with the flow as its sole argument. Returns
 * a promise that resolves to the callback result.
 */
export function createFlow<T>(callback: Function): Promise<T>;

/**
 * Creates a new deferred object.
 */
export function defer<T>(): Deferred<T>;

/**
 * Creates a promise that will be resolved at a set time in the future.
 */
export function delayed<T>(ms: number): Promise<T>;

/**
 * Calls a function for each element in an array, and if the function returns true adds the element to a new array.
 *
 * If the return value of the filter function is a promise, this function will wait for it to be fulfilled before determining whether to insert the
 * element into the new array.
 *
 * If the filter function throws or returns a rejected promise, the promise returned by this function will be rejected with the same reason. Only the
 * first failure will be reported; all subsequent errors will be silently ignored.
 */
export function filter<T, S>(arr: T[] | Promise<T>, fn: Function, opt_self: S): Promise<S>;

/**
 * Creates a promise that has been resolved with the given value.
 */
export function fulfilled<T>(opt_value: T): Promise<T>;

/**
 * Returns a promise that will be resolved with the input value in a fully-resolved state. If the value is an array, each element will be fully
 * resolved. Likewise, if the value is an object, all keys will be fully resolved. In both cases, all nested arrays and objects will also be
 * fully resolved.  All fields are resolved in place; the returned promise will resolve on {@code value} and not a copy.
 */
export function fullyResolved(value: any): Promise<any>;

/**
 * Tests is a function is a generator.
 */
export function isGenerator(fn: Function): boolean;

/**
 * Determines whether a {@code value} should be treated as a promise. Any object whose "then" property is a function will be considered a promise.
 */
export function isPromise(value: any): boolean;

/**
 *  Calls a function for each element in an array and inserts the result into a new array, which is used as the fulfillment value of the promise returned
 * by this function.
 *
 * If the return value of the mapping function is a promise, this function will wait for it to be fulfilled before inserting it into the new array.
 *
 * If the mapping function throws or returns a rejected promise, the promise returned by this function will be rejected with the same reason.
 * Only the first failure will be reported; all subsequent errors will be silently ignored.
 */
export function map<T, S>(arr: T[] | Promise<T>, fn: Function, opt_self: S): void;

/**
 * Creates a promise that has been rejected with the given reason.
 */
export function rejected<T>(opt_reason: any): Promise<T>;

/**
 * Changes the default flow to use when no others are active.
 */
export function setDefaultFlow(flow: ControlFlow): void;

/**
 * Registers an observer on a promised {@code value}, returning a new promise that will be resolved when the value is. If {@code value} is not a promise,
 * then the return promise will be immediately resolved.
 */
export function when<T>(value: any, opt_callback?: Function, opt_errback?: Function): Promise<T>;
