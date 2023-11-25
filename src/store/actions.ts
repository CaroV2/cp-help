import { SomeActions } from "../types/store";
import { Thing } from "../types/thing"
import firebase from "../utils/firebase"

export const saveThing = async (thing:Thing) => {
    await firebase.saveThingInDB(thing);
    return SomeActions.SAVE_THING;
}