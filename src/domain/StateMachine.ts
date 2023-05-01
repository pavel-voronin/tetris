import { EventEmitter } from "events";

export class StateMachine<T> extends EventEmitter {
  constructor(private transitions: Map<T, T[]>, protected state: T) {
    super();
  }

  is(state: T) {
    return this.state === state;
  }

  to(newState: T) {
    if (!this.transitions.has(this.state)) {
      throw new Error(`Invalid transition from ${this.state}`);
    }

    if (!this.transitions.get(this.state)!.includes(newState)) {
      throw new Error(`Invalid transition from ${this.state} to ${newState}`);
    }

    const oldState = this.state;
    this.state = newState;

    this.emit("to", newState, oldState);
  }
}
