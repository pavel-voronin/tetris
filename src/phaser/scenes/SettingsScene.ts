import { MenuButton } from "../ui/MenuButton";

export default class SettingsScene extends Phaser.Scene {
  constructor() {
    super({ key: "settings" });
  }

  create() {
    this.add.existing(new MenuButton(this, 48, 16, "Back", "main-menu"));
  }
}
