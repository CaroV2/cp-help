import { Thing } from "./thing";

export type Observer = { render: () => void } & HTMLElement;

export type AppState = {
  thing: Thing[];
};

export enum SomeActions {
  "SAVE_THING" = "SAVE_THING",
  "GET_THING" = "GET_THING"
}

export interface saveThingAction {
  action: SomeActions.SAVE_THING;
  payload: Thing;
}

export interface getThingAction {
  action: SomeActions.GET_THING;
  payload: Thing;
}

export type Actions = saveThingAction | getThingAction;
