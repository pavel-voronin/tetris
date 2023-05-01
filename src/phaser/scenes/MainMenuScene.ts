import { MenuButton } from "../ui/MenuButton";

export default class MainMenuScene extends Phaser.Scene {
  constructor() {
    super({ key: "main-menu" });
  }

  create() {
    this.sys.canvas.width;

    const startButton = new MenuButton(
      this,
      this.sys.canvas.width / 2,
      140,
      "Start",
      "game"
    );
    this.add.existing(startButton);

    const leaderboardButton = new MenuButton(
      this,
      this.sys.canvas.width / 2,
      190,
      "Leaderboard",
      "leaderboard"
    );
    this.add.existing(leaderboardButton);

    const settingsButton = new MenuButton(
      this,
      this.sys.canvas.width / 2,
      240,
      "Settings",
      "settings"
    );
    this.add.existing(settingsButton);
  }
}
