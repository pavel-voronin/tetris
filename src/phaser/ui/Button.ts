export class Button extends Phaser.GameObjects.Text {
  constructor(
    scene: Phaser.Scene,
    x: number,
    y: number,
    text: string | string[],
    size: integer,
    public restColor: string,
    public hoverColor: string,
    public activeColor: string,
    public clickCallback: () => void = () => {
      //
    }
  ) {
    super(scene, x, y, text, { color: restColor, fontSize: size + "px" });

    this.setInteractive({ useHandCursor: true })
      .on("pointerover", () => this.enterButtonHoverState())
      .on("pointerout", () => this.enterButtonRestState())
      .on("pointerdown", () => this.enterButtonActiveState())
      .on("pointerup", () => {
        this.clickCallback();
        this.enterButtonHoverState();
      });

    this.setOrigin(0.5);
  }

  enterButtonHoverState() {
    this.setStyle({ color: this.hoverColor });
  }

  enterButtonRestState() {
    this.setStyle({ color: this.restColor });
  }

  enterButtonActiveState() {
    this.setStyle({ color: this.activeColor });
  }
}
