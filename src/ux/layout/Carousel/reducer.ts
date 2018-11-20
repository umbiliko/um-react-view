import { GOTO, PROGRESS, NEXT, PAUSE, PLAY, PREV } from '../../../../../um-react-app/src/containers/app/actions';

export default (state: CarouselState, action) => {
    switch (action.type) {
        case GOTO: return {
            takeFocus: true
        };
        case PROGRESS:
        case NEXT: return {
            ...state,
            currentIndex: (state.currentIndex + 1) % slides.length,
            isPlaying: action.type === 'PROGRESS'
        };
        case PAUSE: return {
            ...state,
            isPlaying: false
        };
        case PLAY: return {
            ...state,
            isPlaying: true
        };
        case PREV: return {
            ...state,
            currentIndex: (state.currentIndex + 1) % slides.length,
            isPlaying: action.type === PROGRESS
        };
        default:
            return state;
    }
}
