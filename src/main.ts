import Phaser from "phaser";
import MainMenuScene from "./phaser/scenes/MainMenuScene";
import GameScene from "./phaser/scenes/GameScene";
import LeaderboardScene from "./phaser/scenes/LeaderboardScene";
import SettingsScene from "./phaser/scenes/SettingsScene";
import GameOverScene from "./phaser/scenes/GameOverScene";

const config: Phaser.Types.Core.GameConfig = {
  parent: "app",
  type: Phaser.AUTO,
  width: 400,
  height: 400,
  backgroundColor: "#123456",
  scale: {
    mode: Phaser.Scale.ScaleModes.NONE,
    autoCenter: Phaser.Scale.CENTER_BOTH,
  },
  scene: [
    GameScene,
    GameOverScene,
    MainMenuScene,
    LeaderboardScene,
    SettingsScene,
  ],
};

export default new Phaser.Game(config);
