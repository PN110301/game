import Phaser from 'phaser'


export default class HelloWorldScene extends Phaser.Scene
{
	constructor()
	{
		super({key:'HelloWorldScene'})
	}

    scaleRatio = window.devicePixelRatio/3;
	preload()  
    {
        
        // this.load.setBaseURL('http://labs.phaser.io')
        this.load.image('screen_1_bg','assets/screen_1/BG_1.png')
        this.load.image('screen_1_beaker','assets/screen_1/Beaker.png')
        this.load.image('screen_1_liquid','assets/screen_1/liquids.png')
        
        // this.load.image('sky', 'assets/skies/space3.png')
        // this.load.image('logo', 'assets/sprites/phaser3-logo.png')
        this.load.image('red', 'assets/screen_3/Button.png')
    }

    create()
    {
        
        const screen_1_background = this.add.image(this.cameras.main.width/2,this.cameras.main.height/2,'screen_1_bg')
        const screen_1_beaker = this.add.image(this.cameras.main.width/2,this.cameras.main.height/1.85,'screen_1_beaker')
        const screen_1_liquid = this.add.image(this.cameras.main.width/1.99,this.cameras.main.height/1.81,'screen_1_liquid')
        screen_1_background.scale = 0.8
        screen_1_liquid.setScale(1.08,1.05)

        

        const text = this.add.text(this.cameras.main.width/2.08,this.cameras.main.height/1.4,'100',{fontFamily:'Arial',fontStyle:'bold'})
        text.setScale(3,3)
        text.setColor('black')

        // Phaser.Display.Align.In.Center(screen_1_background,this.add.zone(400,300,800,600))

        this.time.addEvent({
            delay:3000,
            loop:false,
            callback:()=>{
                this.scene.start("Welcome");
            }
        })
        // Phaser.Display.Align.In.Center(screen_1_liquid,screen_1_beaker)
        
        // Phaser.Display.Align.In.Center(screen_1_beaker,screen_1_background)
        // this.add.image(400, 300, 'sky')

        const particles = this.add.particles('red')

        const emitter = particles.createEmitter({
          
            blendMode: 'ADD',
            lifespan: 5000,
            speed: { min: 20, max: 100 },
            angle: {min:-70, max:-110},
            gravityY: -10,
            // gravityX: -10,
            maxParticles:12,
            
       
        })

        emitter.setPosition(this.cameras.main.width/2,this.cameras.main.height/2.3);
     
      

        // const logo = this.physics.add.image(400, 100, 'logo')

        // logo.setVelocity(100, 200)
        // logo.setBounce(1, 1)
        // logo.setCollideWorldBounds(true)

        // emitter.startFollow(logo)
    }
}
