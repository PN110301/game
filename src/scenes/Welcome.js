import Phaser from 'phaser'
import LoginScene from './LoginScene'

export default class Welcome extends Phaser.Scene
{
    constructor(){
        super({key : 'Welcome'})
    }

    preload(){
        
        this.load.image('screen_2_bg', 'assets/screen_2/BG_2.png')
        
        
    }

    create(){
        const  screen_2_background = this.add.image(this.cameras.main.width/2,this.cameras.main.height/2,'screen_2_bg')
        screen_2_background.scale = 0.7
        // Phaser.Display.Align.In.Center(screen_2_background,this.add.zone(400,300,800,600))
        var text1 = this.add.text(this.cameras.main.width/2.3,this.cameras.main.height/4,'Welcome',{fontSize:'60px',color:'white',fontStyle:'bold',fontFamily:'Arial'})
        var text2 = this.add.text(this.cameras.main.width/2.5,this.cameras.main.height/3.1,'to the DSP laboratory.',{fontSize:'40px',color:'white',fontFamily:'Arial',align:'center'})
        var text3 = this.add.text(this.cameras.main.width/2.8,this.cameras.main.height/2.5,"Let's discover the \n science behind creating a fund",{fontSize:'40px',color:'white',fontFamily:'Arial',align:'center'})

        const  nextButton = this.add.text(this.cameras.main.width/2,this.cameras.main.height/1.8 , 'Next')
        .setOrigin(0.5)
        .setPadding(15,5)
        .setStyle({ backgroundColor: 'aqua',color:'black',fontSize:'30px',fontFamily:'Arial',letterSpacing:'10px' })
        .setInteractive({ useHandCursor: true })
        .on('pointerup', () => this.scene.start('LoginScene'))
        .on('pointerover', () => nextButton.setStyle({ fill: '#f39c12' }))
        .on('pointerout', () => nextButton.setStyle({ fill: '#FFF' }))

    

    }
}