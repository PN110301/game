import Phaser from "phaser";

export default class Screen6 extends Phaser.Scene{

    constructor(){
        super({key : 'Screen6'})
    }

    preload(){
        this.load.image('screen_6_bg','assets/screen_5/screen_5_bg.png')
        this.load.image('menu_panel','assets/screen_5/Menu_panel.png')
    }

    create(){
        const screen_6_bg = this.add.image(this.cameras.main.width/2,this.cameras.main.height/2,'screen_6_bg')
        const menu_panel = this.add.sprite(this.cameras.main.width/2,this.cameras.main.height/2.5,'menu_panel')
        const bg_text1 = this.add.text(this.cameras.main.width/2.3,this.cameras.main.height/4.7,'Important Instructions!',{fontFamily:'Arial',fontSize:'25px',fontStyle:'bold',color:'black'})
        const menu_panel_text1 = this.add.text(this.cameras.main.width/2.9,this.cameras.main.height/3.2,'1 | Tap on each test tube to view the parameter',{fontFamily:'Arial',fontSize:'25px',fontStyle:'bold'})
        const menu_panel_text2 = this.add.text(this.cameras.main.width/2.9,this.cameras.main.height/2.7,'2 | Drag & Drop the ones you think should be part of\n\t\t\t\t\tan ideal portfolio',{fontFamily:'Arial',fontSize:'25px',fontStyle:'bold'})

        const  continueButton = this.add.text(this.cameras.main.width/1.6,this.cameras.main.height/2 , 'CONTINUE')
        .setOrigin(0.5)
        .setPadding(15,5)
        .setStyle({ backgroundColor: 'aqua',color:'black',fontSize:'25px',fontFamily:'Arial',letterSpacing:'10px' })
        .setInteractive({ useHandCursor: true })
        continueButton.on('pointerup',()=>this.scene.start('Screen7'))
        continueButton.on('pointerover', () => continueButton.setStyle({ fill: 'white' }))
        continueButton.on('pointerout', () => continueButton.setStyle({ fill: 'black' }))


        screen_6_bg.scale = 0.8
        menu_panel.scaleX = 1.3
    }
}