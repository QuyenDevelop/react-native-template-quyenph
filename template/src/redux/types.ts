import { Account } from "@models";

export interface TodoModel {
  id: string;
  value: string;
}

export type TodoState = "idle" | "todo" | "active" | "done";

export interface IRootTodoState {
  todos: TodoModel[];
  status: TodoState;
}

export interface IRootUserState {
  isLogging: boolean | null;
  profile: Account | null;
  language: string | null;
  anonymousId: string | number[] | null;
  deviceId: string | null;
  tokenId: string | null;
}

export interface IRootState {
  todo: IRootTodoState;
  user: IRootUserState;
}
