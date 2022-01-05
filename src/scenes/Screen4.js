import Phaser from "phaser";

export default class Screen4 extends Phaser.Scene{

    constructor(){
        super({key : 'Screen4'})
    }


    preload(){
        this.load.image('screen_4_bg','assets/screen_4/screen_4_bg.png')
    }

    create(){
        const screen4_img = this.add.image(this.cameras.main.width/2,this.cameras.main.height/2,'screen_4_bg');



        screen4_img.scale = 0.8;
        this.time.addEvent({
            delay:3000,
            loop:false,
            callback:()=>{
                this.scene.start("Screen5");
            }
        })
    }
}