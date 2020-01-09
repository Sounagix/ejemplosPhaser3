export default class boot extends Phaser.Scene{
    constructor(){
        super({key: "BOOT"});
    }

    preload(){
        //sprite sheet
        this.load.spritesheet("baile1", "./recursos/baile1.png",{ frameWidth:110, frameHeight:128} );
        this.load.spritesheet("vi", "./recursos/vi.png",{ frameWidth:50, frameHeight:70} );

    }

    create(){

        let girlsVerde = this.matter.add.sprite(700,400,"baile1");
        girlsVerde.setScale(1.5);
        girlsVerde.setIgnoreGravity(true);

        let vi = this.matter.add.sprite(400, 400,"vi");
        vi.setIgnoreGravity(true);


        this.anims.create({
            key: "parado",
            frames: this.anims.generateFrameNumbers("vi",{
                start: 0,
                end: 4,
            }),
            frameRate: 5,
            repeat: -1,
            yoyo: true
        });

        vi.play("parado");
        
        this.anims.create({
            key: "caminando",
            frames: this.anims.generateFrameNumbers("vi",{
                start: 20,
                end: 25
            }),
            frameRate: 5,
            repeat: -1,
            yoyo: true
        });

        let carga = this.anims.create({
            key: "cargando",
            frames: this.anims.generateFrameNumbers("vi",{
                start: 39,
                end: 49
            }),
            frameRate: 5,
            //repeat: -1,
            //yoyo: true
        });
        
        vi.play("cargando");
        carga.on("complete", function(){
            vi.setScale(3);
            vi.play("cargando");
        });
        
        let baile = this.anims.create({
            key: "baileAnim",
            frames:  this.anims.generateFrameNumbers('baile1', { start : 0, end: 80 }),
            frameRate: 10,
        });

        var color = new Phaser.Display.Color();


        baile.on('complete' , function(){
            color.random(50)
            girlsVerde.setTint(color.color);
            let num = Phaser.Math.Between(0.5,3);
            girlsVerde.setScale(num);
            girlsVerde.play("baileAnim");
        });



        girlsVerde.play("baileAnim");
        this.matter.add.mouseSpring();
    }


}