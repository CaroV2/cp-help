import { Actions, AppState, SomeActions } from "../types/store";

export const reducer = (actions: Actions, state: AppState) => {
    const { action, payload } = actions
    switch (action) {
        case SomeActions.SAVE_THING:
            state.thing = [...state.thing, payload]
            return state;
            
        /*case SomeActions.GET_THING:
            state.thing = payload; //state.thing error por [] en store.
            return state;*/

        default:
            return state;
    }
}
