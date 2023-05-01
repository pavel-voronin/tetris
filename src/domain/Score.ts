export class Score {
  protected lines = 0;
  protected score = 0;

  addScore(lines: number) {
    const scores: Record<number, number> = { 1: 100, 2: 300, 3: 500, 4: 800 };

    this.score += scores[lines] * lines * this.getLevel();
  }

  getScore() {
    return this.score;
  }

  addLines(lines: number) {
    this.lines += lines;

    this.addScore(lines);
  }

  getLines() {
    return this.lines;
  }

  getLevel() {
    return 1 + ~~(this.lines / 10);
  }
}
