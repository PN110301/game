import Phaser from "phaser";

export default class Screen10 extends Phaser.Scene{

    constructor(){
        super({key : 'Screen10'})
    }

    preload(){
        
        this.load.image('bg_screens','assets/screen_10/bg_screens.png')
        this.load.image('bar_fill', 'assets/screen_9/bar_fill.png')
    }
    create(){
        
        const bg_screens = this.add.image(this.cameras.main.width/2,this.cameras.main.height/2,'bg_screens');
        const completed = this.add.text(this.cameras.main.width/1.85,this.cameras.main.height/2.2,'Completed',{color:'aqua',fontSize:'40px',fontStyle:'bold',fontFamily:'Arial'});
        const bar_fill = this.add.sprite(this.cameras.main.width / 1.68, this.cameras.main.height /1.8, 'bar_fill')


        this.time.addEvent({
            delay:2000,
            loop:false,
            callback:()=>{
                completed.visible=false,
                bar_fill.visible=false,

                this.add.text(this.cameras.main.width/1.8,this.cameras.main.height/2.3,'80%',{color:'orange',fontSize:'80px',fontStyle:'bold',fontFamily:'Arial'});
                this.add.text(this.cameras.main.width/1.9,this.cameras.main.height/1.9,'MATCH',{color:'orange',fontSize:'75px',fontStyle:'bold',fontFamily:'Arial'});
            }
        })

        this.time.addEvent({
            delay:4000,
            loop:false,
            callback:()=>{
                this.scene.start('Screen11')
            }
        })



        bar_fill.scale=1.2
        bg_screens.scale=0.8
    }
}
