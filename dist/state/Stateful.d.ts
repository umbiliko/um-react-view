export default interface Stateful {
    contextToState?: KeyPathMap;
    cookieToState?: KeyPathMap;
    localToState?: KeyPathMap;
    sessionToState?: KeyPathMap;
}
