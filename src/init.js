
const config = {
    type: Phaser.AUTO,
    width: 1000,
    height: 600,
    parent: "container",
    scene: {
        preload: preload,
        create: create,
        update: update
    },
    physics: {
        default: 'arcade',
        arcade: {
            gravity: {
                y: 500
            }
        }
    }
}

var game = new Phaser.Game(config);

function preload (){
    this.load.image("fondo", "./img/background.jpg")
    this.load.image("car", "./img/car.png")
    this.load.image("estrella", "./img/estrella.png")
}

function create (){
    this.fondo = this.add.image(500, 300, "fondo")
    this.fondo.setScale(0.334);
    this.car = this.add.image(500, 540, "car");
    this.car.setScale(1.5);
    this.estrella = this.physics.add.image(500, 1, "estrella");
    this.estrella.setScale(0.1);
    this.estrella.setCollideWorldBounds(true);
    this.input.keyboard.on("keydown_RIGHT", () => {
        this.car.x++;
    });
}

function update (time, delta){
}