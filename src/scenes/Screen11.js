import Phaser from "phaser";

export default class Screen11 extends Phaser.Scene {

    constructor() {
        super({ key: 'Screen11' })
    }

    preload() {
        this.load.image('bg_testing', 'assets/Screen_8/bg_testing.png');
        this.load.image('round_beaker', 'assets/Screen_8/Empty_Beaker.png');
        this.load.image('flat_beaker', 'assets/Screen_8/flat_beaker.png');
        this.load.image('refresh', 'assets/screen_7/Asset_5.png')
        this.load.image('sound_on', 'assets/screen_7/Asset_6.png')
        this.load.image('sound_off', 'assets/screen_7/Asset_7.png')
        this.load.image('right', 'assets/screen_7/Asset_8.png')
        this.load.image('left', 'assets/screen_7/Asset_9.png')
        this.load.image('selected', 'assets/screen_8/Asset_29.png')
        this.load.image('eliminated', 'assets/screen_8/Asset_30.png')
        this.load.image('brown_liquid', 'assets/screen_8/brown_liquid.png')
        this.load.image('lightbrown_liquid', 'assets/screen_8/lightbrown_liquid.png')
        this.load.image('rect_b_h_3', 'assets/screen_11/rect_b_h_3.png')
        this.load.image('lightyellow_liquid', 'assets/screen_8/lightyellow_liquid.png')
        this.load.image('darkyellow_liquid', 'assets/screen_8/darkyellow_liquid.png')
        this.load.image('darkgreen_liquid', 'assets/screen_8/darkgreen_liquid.png')
        this.load.image('round_b_h_4', 'assets/screen_11/round_b_h_4.png')
        this.load.image('round_orange', 'assets/screen_11/round_orange.png')
        this.load.image('round_b_h_2', 'assets/screen_11/round_b_h_2.png')
        this.load.image('round_b_h_1', 'assets/screen_11/round_b_h_1.png')
        this.load.image('prompt', 'assets/screen_11/prompt.png')
        this.load.image('okay', 'assets/screen_11/okay.png')
        this.load.image('realign', 'assets/screen_11/realign.png')

    }
    create() {
        const bg_testing = this.add.sprite(this.cameras.main.width / 2, this.cameras.main.height / 2, 'bg_testing')
        const round_beaker = this.add.sprite(this.cameras.main.width / 1.6, this.cameras.main.height / 1.85, 'round_beaker')
        const flat_beaker = this.add.sprite(this.cameras.main.width / 2.3, this.cameras.main.height / 1.75, 'flat_beaker')
        const refresh = this.add.sprite(this.cameras.main.width / 1.78, this.cameras.main.height / 1.22, 'refresh')
        const sound_on = this.add.sprite(this.cameras.main.width / 1.68, this.cameras.main.height / 1.22, 'sound_on')
        const sound_off = this.add.sprite(this.cameras.main.width / 1.58, this.cameras.main.height / 1.22, 'sound_off')
        const right = this.add.sprite(this.cameras.main.width / 1.43, this.cameras.main.height / 1.22, 'right')
        const left = this.add.sprite(this.cameras.main.width / 3.2, this.cameras.main.height / 1.22, 'left')
        const selected = this.add.sprite(this.cameras.main.width / 1.633, this.cameras.main.height / 2.5, 'selected')
        const eliminated = this.add.sprite(this.cameras.main.width / 2.28, this.cameras.main.height / 2.2, 'eliminated')
        const brown_liquid = this.add.sprite(this.cameras.main.width / 2.28, this.cameras.main.height / 1.32, 'brown_liquid')
        const lightbrown_liquid = this.add.sprite(this.cameras.main.width / 2.28, this.cameras.main.height / 1.42, 'lightbrown_liquid')
        const rect_b_h_3 = this.add.sprite(this.cameras.main.width / 2.28, this.cameras.main.height / 1.54, 'rect_b_h_3')
        const lightyellow_liquid = this.add.sprite(this.cameras.main.width / 2.28, this.cameras.main.height / 1.68, 'lightyellow_liquid')
        const darkyellow_liquid = this.add.sprite(this.cameras.main.width / 2.28, this.cameras.main.height / 1.83, 'darkyellow_liquid')
        const darkgreen_liquid = this.add.sprite(this.cameras.main.width / 1.632, this.cameras.main.height / 1.3, 'darkgreen_liquid')
        const round_b_h_4 = this.add.sprite(this.cameras.main.width / 1.634, this.cameras.main.height / 1.368, 'round_b_h_4')
        const round_orange = this.add.sprite(this.cameras.main.width / 1.634, this.cameras.main.height / 1.46, 'round_orange')
        const round_b_h_2 = this.add.sprite(this.cameras.main.width / 1.634, this.cameras.main.height / 1.577, 'round_b_h_2')
        const round_b_h_1 = this.add.sprite(this.cameras.main.width / 1.634, this.cameras.main.height / 1.705, 'round_b_h_1')
        const prompt = this.add.sprite(this.cameras.main.width / 2, this.cameras.main.height / 2, 'prompt')
        const okay = this.add.sprite(this.cameras.main.width / 2, this.cameras.main.height / 1.7, 'okay')
        const realign = this.add.sprite(this.cameras.main.width / 2, this.cameras.main.height /3.3, 'realign')



        bg_testing.scale = 0.8
        bg_testing.alpha = 0.8
        flat_beaker.scale = 1.06
        round_beaker.scale = 1.2
        refresh.scale = 0.7
        sound_on.scale = 0.7
        sound_off.scale = 0.7
        right.scale = 0.6
        left.scale = 0.6
        eliminated.scaleX = 0.95
        selected.scaleX = 0.85
        brown_liquid.scaleX = 1.1
        brown_liquid.scaleY = 1.4
        lightbrown_liquid.scale = 1.1
        lightbrown_liquid.scaleY = 1.3
        rect_b_h_3.scaleX = 1.1
        rect_b_h_3.scaleY = 1.2
        lightyellow_liquid.scale = 1.1
        lightyellow_liquid.scaleY = 1.2
        darkyellow_liquid.scale = 1.1
        darkyellow_liquid.scaleY = 1.2
        darkgreen_liquid.scaleX = 1.05
        // darkgreen_liquid.scaleY = 1.6
        round_b_h_4.scaleX = 1.07
        
        round_orange.scaleX=1.1
        round_orange.scaleY=1.25
        
        // round_b_h_4.scaleY = 1.4
        // orange_strip.scaleX = 1.13
        // orange_strip.scaleY = 1.3
        round_b_h_2.scaleX = 1.12
        round_b_h_1.scale = 1.13
        // bottlegreen_liquid.scaleY = 1.25

        bg_testing.alpha = 0.1
        round_beaker.alpha = 0.1
        flat_beaker.alpha = 0.1
        refresh.alpha = 0.1
        sound_on.alpha = 0.1
        sound_off.alpha = 0.1
        left.alpha = 0.1
        right.alpha = 0.1
        selected.alpha = 0.1
        eliminated.alpha = 0.1
        brown_liquid.alpha = 0.1
        lightbrown_liquid.alpha = 0.1
        rect_b_h_3.alpha = 0.1
        lightyellow_liquid.alpha = 0.1
        darkyellow_liquid.alpha = 0.1
        darkgreen_liquid.alpha = 0.1
        round_orange.alpha = 0.1
        round_b_h_4.alpha = 0.1
        round_b_h_2.alpha = 0.1
        round_b_h_1.alpha = 0.1
        realign.alpha = 0.1

        okay.setInteractive({ useHandCursor: true })
        okay.on('pointerup', () => {
            prompt.visible = false,
            okay.visible = false,
            bg_testing.alpha = 1
            round_beaker.alpha = 1
            flat_beaker.alpha = 1
            refresh.alpha = 1
            sound_on.alpha = 1
            sound_off.alpha = 1
            left.alpha = 1
            right.alpha = 1
            selected.alpha = 1
            eliminated.alpha = 1
            brown_liquid.alpha = 1
            lightbrown_liquid.alpha = 1
            rect_b_h_3.alpha = 1
            lightyellow_liquid.alpha = 1
            darkyellow_liquid.alpha = 1
            darkgreen_liquid.alpha = 1
            round_orange.alpha = 1
            round_b_h_4.alpha = 1
            round_b_h_2.alpha = 1
            round_b_h_1.alpha = 1
            realign.alpha=1

            
            

        })
    }
}