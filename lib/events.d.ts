/**
 * Describes an event listener registered on an {@linkplain EventEmitter}.
*/
export class Listener {

    /**
     * @param {!Function} fn The acutal listener function.
     * @param {(Object|undefined)} scope The object in whose scope to invoke the
     *         listener.
     * @param {boolean} oneshot Whether this listener should only be used once.
     */
    constructor(fn: Function, scope: Object, oneshot: boolean);
}

/**
 * Object that can emit events for others to listen for.
 */
export interface EventEmitter {

    new (): EventEmitter;

    /**
     * Fires an event and calls all listeners.
     * @param {string} type The type of event to emit.
     * @param {...*} var_args Any arguments to pass to each listener.
     */
    emit(type: string, ...args: any[]): void;

    /**
     * Returns a mutable list of listeners for a specific type of event.
     * @param {string} type The type of event to retrieve the listeners for.
     * @return {!Listener[]} The registered listeners for the given event
     *     type.
     */
    listeners(type: string): Listener[];

    /**
     * Registers a listener.
     * @param {string} type The type of event to listen for.
     * @param {!Function} fn The function to invoke when the event is fired.
     * @param {Object=} opt_self The object in whose scope to invoke the listener.
     * @param {boolean=} opt_oneshot Whether the listener should b (e removed after
     *    the first event is fired.
     * @return {!EventEmitter} A self reference.
     */
    addListener_(type: string, fn: Function, opt_self: Object, opt_oneshot: boolean): EventEmitter;

    /**
     * Registers a listener.
     * @param {string} type The type of event to listen for.
     * @param {!Function} fn The function to invoke when the event is fired.
     * @param {Object=} opt_self The object in whose scope to invoke the listener.
     * @return {!EventEmitter} A self reference.
     */
    addListener(type: string, fn: Function, opt_self: Object): EventEmitter;

    /**
     * Registers a one-time listener which will be called only the first time an
     * event is emitted, after which it will be removed.
     * @param {string} type The type of event to listen for.
     * @param {!Function} fn The function to invoke when the event is fired.
     * @param {Object=} opt_self The object in whose scope to invoke the listener.
     * @return {!EventEmitter} A self reference.
     */
    once(type: string, fn: Function, opt_self: Object): EventEmitter;

    /**
     * An alias for {@link #addListener() addListener()}.
     * @param {string} type The type of event to listen for.
     * @param {!Function} fn The function to invoke when the event is fired.
     * @param {Object=} opt_self The object in whose scope to invoke the listener.
     * @return {!EventEmitter} A self reference.
     */
    on(type: string, fn: Function, opt_self: Object): EventEmitter;

    /**
     * Removes a previously registered event listener.
     * @param {string} type The type of event to unregister.
     * @param {!Function} listenerFn The handler function to remove.
     * @return {!EventEmitter} A self reference.
     */
    removeListener(type: string, listenerFn: Function): EventEmitter;

    /**
     * Removes all listeners for a specific type of event. If no event is
     * specified, all listeners across all types will be removed.
     * @param {string=} opt_type The type of event to remove listeners from.
     * @return {!EventEmitter} A self reference.
     */
    removeAllListeners(opt_type: any): EventEmitter;
}
