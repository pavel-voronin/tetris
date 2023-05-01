import { Score } from "./Score";

export class Time {
  protected lastMoveTime: number | null = null;

  constructor(protected score: Score) {}

  timeToMove(time: number) {
    return (
      this.lastMoveTime === null ||
      time - this.lastMoveTime > this.getDropSpeed()
    );
  }

  setLastMoveTime(lastMoveTime: number) {
    this.lastMoveTime = lastMoveTime;
  }

  getDropSpeed() {
    return (800 * (100 - this.score.getLevel() * 10)) / 100;
  }

  lastChance(now: number, milliseconds: number) {
    this.lastMoveTime = now - this.getDropSpeed() + milliseconds;
  }
}
