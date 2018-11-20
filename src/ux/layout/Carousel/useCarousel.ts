import { useEffect, useReducer } from 'react';

const PAUSE = 'PAUSE';
const PLAY = 'PLAY';
const PROGRESS = 'PROGRESS';
const GO_BACKWARD = 'GO_BACKWARD';
const GO_FORWARD = 'GO_FORWARD';
const GO_TO = 'GO_TO';

export interface CarouselState {
    currentIndex: number;
    isPlaying: boolean;
    takeFocus: boolean;
}

export interface CarouselActions {
    PAUSE: {
        type: typeof PAUSE;
    };
    PLAY: {
        type: typeof PLAY;
    };
    PROGRESS: {
        type: typeof PROGRESS;
    };
    GO_BACKWARD: {
        type: typeof GO_BACKWARD;
    };
    GO_FORWARD: {
        type: typeof GO_FORWARD;
    };
    GO_TO: {
        index: number;
        type: typeof GO_TO;
    }
}

export type CarouselAction = CarouselActions[keyof CarouselActions];

const initialState: CarouselState = {
    currentIndex: 0,
    isPlaying: false,
    takeFocus: false
};

function useCarousel(length: number, duration: number) {

    const reducer = (state: CarouselState, action: CarouselAction): CarouselState => {
        switch (action.type) {
            case GO_BACKWARD: return {
                ...state,
                currentIndex: (state.currentIndex - 1 + length) % length,
                isPlaying: false,
                takeFocus: false
            };
            case GO_FORWARD: return {
                ...state,
                currentIndex: (state.currentIndex + 1) % length,
                isPlaying: false,
                takeFocus: false
            };
            case GO_TO: return {
                ...state,
                currentIndex: action.index,
                isPlaying: false,
                takeFocus: true
            };
            case PAUSE: return {
                ...state,
                isPlaying: false,
                takeFocus: false
            };
            case PLAY: return {
                ...state,
                isPlaying: true,
                takeFocus: false
            };
            case PROGRESS: return {
                ...state,
                currentIndex: (state.currentIndex + 1) % length,
                isPlaying: true,
                takeFocus: false
            };
            default: return state;
        }
    };

    const [state, dispatch] = useReducer<CarouselState, CarouselAction>(reducer, initialState);
    const goBackward = () => dispatch({ type: GO_BACKWARD });
    const goForward = () => dispatch({ type: GO_FORWARD });
    const goTo = (index: number) => dispatch({ index, type: GO_TO });
    const pause = () => dispatch({ type: PAUSE });
    const play = () => dispatch({ type: PLAY });
    const progress = () => dispatch({ type: PROGRESS});

    useEffect((): EffectResult => {
        if (state.isPlaying) {
            const timeout = setTimeout(progress, duration);
            return () => clearTimeout(timeout);
        }
    }, [state.currentIndex, state.isPlaying]);

    return {
        goBackward,
        goForward,
        goTo,
        pause,
        play,
        state
    };
}

export default useCarousel;
