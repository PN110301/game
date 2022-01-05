import Phaser from "phaser";

export default class Screen9 extends Phaser.Scene {

    constructor() {
        super({ key: 'Screen9' })
    }

    preload() {

        this.load.image('bg_testing_1', 'assets/screen_9/BG.png')
        this.load.image('arm', 'assets/screen_9/Arm.png');
        this.load.image('machine', 'assets/screen_9/machine.png');
        this.load.image('round_beaker', 'assets/Screen_8/Empty_Beaker.png');
        this.load.image('darkgreen_liquid', 'assets/screen_8/darkgreen_liquid.png')
        this.load.image('orange_liquid', 'assets/screen_8/orange_liquid.png')
        this.load.image('lightgreen_liquid', 'assets/screen_8/lightgreen_liquid.png')
        this.load.image('green_liquid', 'assets/screen_8/green_liquid.png')
        this.load.image('bottlegreen_liquid', 'assets/screen_8/bottlegreen_liquid.png')
        this.load.image('analysing_screen', 'assets/screen_9/analysing_screen.png')
        this.load.image('progress_screen', 'assets/screen_9/progress_screen.png')
        this.load.image('bar_empty', 'assets/screen_9/bar_empty.png')
        this.load.image('bar_fill', 'assets/screen_9/bar_fill.png')


    }
    create() {
        const bg_rect = this.add.rectangle(this.cameras.main.width / 2, this.cameras.main.height / 2, 800, 550, 0xffffff)
        const bg_testing_1 = this.add.sprite(this.cameras.main.width / 2, this.cameras.main.height / 2, 'bg_testing_1')
        const arm = this.add.sprite(this.cameras.main.width / 1.8, this.cameras.main.height / 2.3, 'arm')
        const machine = this.add.sprite(this.cameras.main.width / 2.4, this.cameras.main.height / 1.85, 'machine')
        const round_beaker = this.add.sprite(this.cameras.main.width / 1.6, this.cameras.main.height / 1.85, 'round_beaker')
        const darkgreen_liquid = this.add.sprite(this.cameras.main.width / 1.62, this.cameras.main.height / 1.45, 'darkgreen_liquid')
        const orange_liquid = this.add.sprite(this.cameras.main.width / 1.622, this.cameras.main.height / 1.51, 'orange_liquid')
        const lightgreen_liquid = this.add.sprite(this.cameras.main.width / 1.622, this.cameras.main.height / 1.58, 'lightgreen_liquid')
        const green_liquid = this.add.sprite(this.cameras.main.width / 1.622, this.cameras.main.height / 1.666, 'green_liquid')
        const bottlegreen_liquid = this.add.sprite(this.cameras.main.width / 1.622, this.cameras.main.height / 1.76, 'bottlegreen_liquid')
        const analysing_screen = this.add.sprite(this.cameras.main.width / 1.822, this.cameras.main.height / 3.7, 'analysing_screen')
        const progress_screen = this.add.sprite(this.cameras.main.width / 1.522, this.cameras.main.height / 3.7, 'progress_screen')
        const bar_empty = this.add.sprite(this.cameras.main.width / 1.522, this.cameras.main.height / 3.2, 'bar_empty')
        const bar_fill = this.add.sprite(this.cameras.main.width / 1.522, this.cameras.main.height / 3.2, 'bar_fill')
        const analysing = this.add.text(this.cameras.main.width / 1.584, this.cameras.main.height / 3.9, 'Analysing', { color: 'aqua', fontFamily: 'Arial', fontStyle: 'bold', fontSize: '20px' })

        machine.visible = false;
        round_beaker.visible = false;
        darkgreen_liquid.visible = false;
        orange_liquid.visible = false;
        lightgreen_liquid.visible = false;
        green_liquid.visible = false;
        bottlegreen_liquid.visible = false;
        analysing_screen.visible = false;
        progress_screen.visible = false;
        bar_empty.visible = false;
        bar_fill.visible = false;
        analysing.visible = false;

        this.time.addEvent({
            delay: 1000,
            loop: false,
            callback: () => {
                arm.visible = false,
                machine.visible = true;
                round_beaker.visible = true;
                darkgreen_liquid.visible = true;
                orange_liquid.visible = true;
                lightgreen_liquid.visible = true;
                green_liquid.visible = true;
                bottlegreen_liquid.visible = true;
                analysing_screen.visible = true;
                progress_screen.visible = true;
                bar_empty.visible = true;
                bar_fill.visible = true;
                analysing.visible = true;

            }
        })

        bg_testing_1.scale = 0.8
        arm.scale = 0.7
        machine.scale = 0.8
        round_beaker.scale = 0.8
        darkgreen_liquid.scale = 0.72
        orange_liquid.scale = 0.722
        lightgreen_liquid.scale = 0.722
        green_liquid.scale = 0.728
        bottlegreen_liquid.scale = 0.728
        analysing_screen.scale = 0.5
        progress_screen.scale = 0.5
        progress_screen.scaleX = 0.6
        bar_empty.scale = 0.6
        bar_fill.scaleX = 0.05

        this.time.addEvent({
            delay:2000,
            loop:true,
            repeat:5,
             callback:()=>{
                bar_fill.scaleX+=0.1

            }
        })

        this.time.addEvent({
            delay:14000,
            loop:false,
            callback:()=>{
                this.scene.start('Screen10')
            }
        })
    }
}