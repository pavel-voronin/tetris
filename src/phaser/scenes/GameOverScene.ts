import { Label } from "../ui/Label";

export default class GameOverScene extends Phaser.Scene {
  constructor() {
    super({ key: "gameover" });
  }

  create(data: { score: number }) {
    this.add.existing(
      new Label(
        this,
        this.sys.canvas.width / 2,
        this.sys.canvas.height / 2,
        "Потрачено",
        { fontSize: "64px" }
      ).setOrigin(0.5)
    );

    this.add.existing(
      new Label(
        this,
        this.sys.canvas.width / 2,
        this.sys.canvas.height / 2 + 100,
        data.score + "",
        { fontSize: "32px" }
      ).setOrigin(0.5)
    );

    this.input.keyboard.on("keydown-SPACE", (event: Event) => {
      event.stopPropagation();
      this.scene.start("game");
    });
  }
}
