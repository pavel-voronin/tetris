import GameScene from "../scenes/GameScene";

export class Controls {
  static all(scene: GameScene) {
    scene.input.keyboard.eventNames().forEach((event) => {
      scene.input.keyboard.off(event);
    });

    const events = new Map<string[] | string, () => void>([
      [
        "keydown-SPACE",
        () => {
          while (scene.tetris.gameBoard!.move(0, 1));
          scene.tetris.time.lastChance(scene.time.now, 100);
        },
      ],
      [
        ["keydown-LEFT", "keydown-A"],
        () => {
          scene.tetris.gameBoard!.move(-1, 0);
        },
      ],
      [
        ["keydown-RIGHT", "keydown-D"],
        () => {
          scene.tetris.gameBoard!.move(1, 0);
        },
      ],
      [
        ["keydown-DOWN", "keydown-S"],
        () => {
          scene.tetris.gameBoard!.move(0, 1);
        },
      ],
      [
        ["keydown-UP", "keydown-W"],
        () => {
          scene.tetris.gameBoard!.rotate();
        },
      ],
      [
        "keydown-ESC",
        () => {
          scene.scene.start("main-menu");
        },
      ],
      [
        "keydown-R",
        () => {
          scene.scene.start("game");
        },
      ],
      [
        "keydown-Q",
        () => {
          scene.tetris.holdShape?.swap();
        },
      ],
      [
        "keydown-P",
        () => {
          scene.tetris!.pause();
        },
      ],
    ]);

    events.forEach((handler, k) => {
      [k].flat().forEach((event) => {
        scene.input.keyboard.on(event, handler);
      });
    });
  }

  static onlyP(scene: GameScene) {
    scene.input.keyboard.eventNames().forEach((event) => {
      scene.input.keyboard.off(event);
    });

    scene.input.keyboard.once("keydown-P", () => {
      scene.tetris!.pause();
    });
  }
}
