import Phaser from "phaser";

export default class Screen8 extends Phaser.Scene{

    constructor(){
        super({key:'Screen8'})
    }

    preload(){
        this.load.image('bg_testing','assets/Screen_8/bg_testing.png');
        this.load.image('round_beaker','assets/Screen_8/Empty_Beaker.png');
        this.load.image('flat_beaker','assets/Screen_8/flat_beaker.png');
        this.load.image('refresh','assets/screen_7/Asset_5.png')
        this.load.image('sound_on','assets/screen_7/Asset_6.png')
        this.load.image('sound_off','assets/screen_7/Asset_7.png')
        this.load.image('right','assets/screen_7/Asset_8.png')
        this.load.image('left','assets/screen_7/Asset_9.png')
        this.load.image('selected','assets/screen_8/Asset_29.png')
        this.load.image('eliminated','assets/screen_8/Asset_30.png')
        this.load.image('brown_liquid','assets/screen_8/brown_liquid.png')
        this.load.image('lightbrown_liquid','assets/screen_8/lightbrown_liquid.png')
        this.load.image('occur_liquid','assets/screen_8/occur_liquid.png')
        this.load.image('lightyellow_liquid','assets/screen_8/lightyellow_liquid.png')
        this.load.image('darkyellow_liquid','assets/screen_8/darkyellow_liquid.png')
        this.load.image('darkgreen_liquid','assets/screen_8/darkgreen_liquid.png')
        this.load.image('orange_liquid','assets/screen_8/orange_liquid.png')
        this.load.image('lightgreen_liquid','assets/screen_8/lightgreen_liquid.png')
        this.load.image('green_liquid','assets/screen_8/green_liquid.png')
        this.load.image('bottlegreen_liquid','assets/screen_8/bottlegreen_liquid.png')
        this.load.image('evaluate','assets/screen_8/evaluate.png')
        this.load.image('reevaluate','assets/screen_8/reevaluate.png')
        this.load.image('analyze','assets/screen_8/analyze.png')
    }

    create(){
        const bg_testing = this.add.sprite(this.cameras.main.width/2,this.cameras.main.height/2,'bg_testing')
        const round_beaker = this.add.sprite(this.cameras.main.width/1.6,this.cameras.main.height/1.85,'round_beaker')
        const flat_beaker = this.add.sprite(this.cameras.main.width/2.3,this.cameras.main.height/1.75,'flat_beaker')
        const refresh = this.add.sprite(this.cameras.main.width/1.78,this.cameras.main.height/1.22,'refresh')
        const sound_on = this.add.sprite(this.cameras.main.width/1.68,this.cameras.main.height/1.22,'sound_on')
        const sound_off = this.add.sprite(this.cameras.main.width/1.58,this.cameras.main.height/1.22,'sound_off')
        const right = this.add.sprite(this.cameras.main.width/1.43,this.cameras.main.height/1.22,'right')
        const left = this.add.sprite(this.cameras.main.width/3.2,this.cameras.main.height/1.22,'left')
        const selected = this.add.sprite(this.cameras.main.width/1.633,this.cameras.main.height/2.5,'selected')
        const eliminated = this.add.sprite(this.cameras.main.width/2.28,this.cameras.main.height/2.2,'eliminated')
        const brown_liquid = this.add.sprite(this.cameras.main.width/2.28,this.cameras.main.height/1.32,'brown_liquid')
        const lightbrown_liquid = this.add.sprite(this.cameras.main.width/2.28,this.cameras.main.height/1.4,'lightbrown_liquid')
        const occur_liquid = this.add.sprite(this.cameras.main.width/2.28,this.cameras.main.height/1.5,'occur_liquid')
        const lightyellow_liquid = this.add.sprite(this.cameras.main.width/2.28,this.cameras.main.height/1.6,'lightyellow_liquid')
        const darkyellow_liquid = this.add.sprite(this.cameras.main.width/2.28,this.cameras.main.height/1.7,'darkyellow_liquid')
        const darkgreen_liquid = this.add.sprite(this.cameras.main.width/1.63,this.cameras.main.height/1.3,'darkgreen_liquid')
        const orange_liquid = this.add.sprite(this.cameras.main.width/1.634,this.cameras.main.height/1.38,'orange_liquid')
        const lightgreen_liquid = this.add.sprite(this.cameras.main.width/1.634,this.cameras.main.height/1.47,'lightgreen_liquid')
        const green_liquid = this.add.sprite(this.cameras.main.width/1.634,this.cameras.main.height/1.55,'green_liquid')
        const bottlegreen_liquid = this.add.sprite(this.cameras.main.width/1.634,this.cameras.main.height/1.69,'bottlegreen_liquid')

        left.setInteractive({useHandCursor:true})
        right.setInteractive({useHandCursor:true})


        bg_testing.scale = 0.8
        bg_testing.alpha = 0.8
        flat_beaker.scale = 1.06
        round_beaker.scale = 1.2
        refresh.scale = 0.7
        sound_on.scale = 0.7
        sound_off.scale = 0.7
        right.scale = 0.6
        left.scale = 0.6
        eliminated.scaleX=0.95
        selected.scaleX=0.85
        brown_liquid.scaleX=1.1
        brown_liquid.scaleY=1.4
        lightbrown_liquid.scale = 1.1
        occur_liquid.scale = 1.1
        lightyellow_liquid.scale = 1.1
        darkyellow_liquid.scale = 1.1
        darkgreen_liquid.scale = 1.1
        orange_liquid.scale = 1.13
        lightgreen_liquid.scale = 1.13
        green_liquid.scale = 1.13
        bottlegreen_liquid.scale = 1.13
        bottlegreen_liquid.scaleY = 1.25

        left.on('pointerup',()=>this.scene.start('Screen7'))
        right.on('pointerup',()=>{
            const evaluate = this.add.sprite(this.cameras.main.width/2,this.cameras.main.height/2,'evaluate')
            const reevaluate = this.add.sprite(this.cameras.main.width/2.3,this.cameras.main.height/1.8,'reevaluate')
            const analyze = this.add.sprite(this.cameras.main.width/1.8,this.cameras.main.height/1.8,'analyze')
            bg_testing.alpha=0.3
            round_beaker.alpha=0.3
            flat_beaker.alpha=0.3
            refresh.alpha=0.3
            sound_on.alpha=0.3
            sound_off.alpha=0.3
            left.alpha=0.3
            right.alpha=0.3
            selected.alpha=0.3
            eliminated.alpha=0.3
            brown_liquid.alpha=0.3
            lightbrown_liquid.alpha=0.3
            occur_liquid.alpha=0.3
            lightyellow_liquid.alpha=0.3
            darkyellow_liquid.alpha=0.3
            lightgreen_liquid.alpha=0.3
            darkgreen_liquid.alpha=0.3
            orange_liquid.alpha=0.3
            green_liquid.alpha=0.3
            bottlegreen_liquid.alpha=0.3

            analyze.setInteractive({useHandCursor:true})
            analyze.on('pointerup',()=>this.scene.start('Screen9'))
        })
        
    }
}