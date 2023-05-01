import EventEmitter from "events";
import { GameBoard } from "./GameBoard";
import { HoldShape } from "./HoldShape";
import { NextShape } from "./NextShape";
import { Score } from "./Score";
import { StateMachine } from "./StateMachine";
import { TetrisState } from "./TetrisState";
import { Time } from "./Time";

export class Tetris extends EventEmitter {
  gameBoard = new GameBoard();
  nextShape = new NextShape();
  holdShape = new HoldShape();

  score = new Score();
  time = new Time(this.score);

  state = new StateMachine<TetrisState>(
    new Map([
      [TetrisState.INITIAL, [TetrisState.PLAYING]],
      [TetrisState.PLAYING, [TetrisState.PAUSED, TetrisState.GAME_OVER]],
      [TetrisState.PAUSED, [TetrisState.PLAYING]],
    ]),
    TetrisState.INITIAL
  );

  constructor() {
    super();

    this.state.on("to", (newState: TetrisState) => {
      if (TetrisState.GAME_OVER === newState) {
        this.emit("toGameOver", this.score.getScore());
      }

      if (TetrisState.PLAYING === newState) {
        this.emit("toPlaying");
      }

      if (TetrisState.PAUSED === newState) {
        this.emit("toPaused");
      }
    });
  }

  pause() {
    if (this.state.is(TetrisState.PAUSED)) {
      this.state.to(TetrisState.PLAYING);
      return;
    }

    if (this.state.is(TetrisState.PLAYING)) {
      this.state.to(TetrisState.PAUSED);
      return;
    }
  }

  step(time: number) {
    if (this.state.is(TetrisState.PAUSED)) {
      return;
    }

    if (!this.time.timeToMove(time)) {
      return;
    }

    if (!this.gameBoard.move(0, 1)) {
      // check if lines need to be cleared
      const clearedLinesCount = this.gameBoard.clearLines();

      if (clearedLinesCount) {
        this.score.addLines(clearedLinesCount);
      }

      // spawn new shape or game over
      if (!this.gameBoard.spawn()) {
        this.state.to(TetrisState.GAME_OVER);
        return;
      }
    }

    this.time.setLastMoveTime(time);
  }
}
