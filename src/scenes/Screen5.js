import Phaser from "phaser";

export default class Screen5 extends Phaser.Scene{

constructor(){
    super({key : 'Screen5'})
}

preload(){
    this.load.image('screen_5_bg','assets/screen_5/screen_5_bg.png')
    this.load.image('menu_panel','assets/screen_5/Menu_panel.png')
}

create(){

    const screen_5_bg = this.add.image(this.cameras.main.width/2,this.cameras.main.height/2,'screen_5_bg');
    const menu_panel = this.add.sprite(this.cameras.main.width/2,this.cameras.main.height/1.9,'menu_panel')
    const bg_text1 = this.add.text(this.cameras.main.width/2.5,this.cameras.main.height/2.9,'Here,we devise investment',{fontFamily:'Arial',fontSize:'30px',fontStyle:'bold',color:'black'})
    const bg_text2 = this.add.text(this.cameras.main.width/2.6,this.cameras.main.height/2.6,'strategies and create new funds',{fontFamily:'Arial',fontSize:'30px',fontStyle:'bold',color:'black'})
    const menu_panel_text = this.add.text(this.cameras.main.width/2.5,this.cameras.main.height/2.15,'Start your own formulation',{fontFamily:'Arial',fontSize:'30px',fontStyle:'bold'})

    const  startButton = this.add.text(this.cameras.main.width/2,this.cameras.main.height/1.8 , 'START')
    .setOrigin(0.5)
    .setPadding(15,5)
    .setStyle({ backgroundColor: 'aqua',color:'black',fontSize:'25px',fontFamily:'Arial',letterSpacing:'10px' })
    .setInteractive({ useHandCursor: true })
    startButton.on('pointerup',()=>this.scene.start('Screen6'))
    startButton.on('pointerover', () => startButton.setStyle({ fill: 'white' }))
    startButton.on('pointerout', () => startButton.setStyle({ fill: 'black' }))

    screen_5_bg.scale = 0.8
    menu_panel.scaleY = 0.6
    menu_panel.scaleX = 0.8
}

}