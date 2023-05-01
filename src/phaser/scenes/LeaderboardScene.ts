import { MenuButton } from "../ui/MenuButton";

export default class LeaderboardScene extends Phaser.Scene {
  constructor() {
    super({ key: "leaderboard" });
  }

  create() {
    this.add.existing(new MenuButton(this, 48, 16, "Back", "main-menu"));
  }
}
