const config = {
    type: Phaser.AUTO,
    width: 800,
    height: 500,
    backgroundColor: "#1b2440",
    scene: {
        create: create
    }
};

new Phaser.Game(config);

function create() {

    // Başlık
    this.add.text(400, 80, "GUITAR QUEST", {
        fontSize: "48px",
        color: "#ffffff",
        fontStyle: "bold"
    }).setOrigin(0.5);

    // Alt başlık
    this.add.text(400, 140, "Collect 10 Guitars!", {
        fontSize: "22px",
        color: "#dddddd"
    }).setOrigin(0.5);

    // PLAY butonu
    const play = this.add.rectangle(400, 260, 220, 70, 0x2ecc71)
        .setInteractive({ useHandCursor: true });

    this.add.text(400, 260, "PLAY", {
        fontSize: "32px",
        color: "#ffffff",
        fontStyle: "bold"
    }).setOrigin(0.5);

    // Alt yazı
    this.add.text(400, 470, "Made with nihaofineshyt", {
        fontSize: "16px",
        color: "#aaaaaa"
    }).setOrigin(0.5);

    // Butona basınca
    play.on("pointerdown", () => {
        this.cameras.main.flash(300);

        this.time.delayedCall(350, () => {
            this.add.text(400, 360, "Coming Soon...", {
                fontSize: "28px",
                color: "#ffff66"
            }).setOrigin(0.5);
        });
    });

}
