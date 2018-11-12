//
export default interface Stateful {
    // Sse shell context in state.
    // You may want to react to external changes.
    contextToState?: KeyPathMap;

    // Sse cookie values in state.
    // You may be getting relevant information from the server.
    cookieToState?: KeyPathMap;

    // Use local storage in state.
    // Even if you close the browser and open the application again, you will have a cached state.
    localToState?: KeyPathMap;

    // Use session storage in state.
    // Sometimes you want the cache only in your current session.
    // When closing the browser, you want the cache to become empty again.
    sessionToState?: KeyPathMap;
}
