import Phaser from "phaser";

export default class Screen6 extends Phaser.Scene{

    constructor(){
        super({key : 'Screen7'})
    }

    preload(){
        this.load.image('Lab_bg','assets/screen_7/Lab_bg.png')
        this.load.image('collection','assets/screen_7/Your_Collection.png')
        this.load.image('collection_text','assets/screen_7/Asset_17.png')
        this.load.image('refresh','assets/screen_7/Asset_5.png')
        this.load.image('sound_on','assets/screen_7/Asset_6.png')
        this.load.image('sound_off','assets/screen_7/Asset_7.png')
        this.load.image('right','assets/screen_7/Asset_8.png')
        this.load.image('left','assets/screen_7/Asset_9.png')
        this.load.image('button','assets/screen_5/screen_5_button.png')
        this.load.image('bg','assets/screen_5/screen_5_bg.png')
        this.load.image('hand','assets/screen_7/hand.png')
        this.load.image('arrow','assets/screen_7/Arrow_1.png')
        this.load.image('red_tt','assets/screen_7/red_tt.png')
        this.load.image('orange_tt','assets/screen_7/orange_tt.png')
        this.load.image('yellow_tt','assets/screen_7/yellow_tt.png')
        this.load.image('purple_tt','assets/screen_7/purple_tt.png')
        this.load.image('navyblue_tt','assets/screen_7/navyblue_tt.png')
        this.load.image('lightgreen_tt','assets/screen_7/lightgreen_tt.png')
        this.load.image('darkgreen_tt','assets/screen_7/darkgreen_tt.png')
        this.load.image('blue_tt','assets/screen_7/blue_tt.png')
        this.load.image('brown_tt','assets/screen_7/brown_tt.png')
        this.load.image('pink_tt','assets/screen_7/pink_tt.png')
        this.load.image('brown_strip','assets/screen_7/brown_strip.png')
        this.load.image('orange_strip','assets/screen_7/orange_strip.png')
        this.load.image('yellow_strip','assets/screen_7/yellow_strip.png')
        this.load.image('lightgreen_strip','assets/screen_7/lightgreen_strip.png')
        this.load.image('darkgreen_strip','assets/screen_7/darkgreen_strip.png')
        
        
    }

    create(){
        const screen_7_bg = this.add.sprite(this.cameras.main.width/2,this.cameras.main.height/2,'Lab_bg')
        const collection = this.add.sprite(this.cameras.main.width/2,this.cameras.main.height/1.373,'collection')
        const collection_text = this.add.sprite(this.cameras.main.width/2,this.cameras.main.height/1.32,'collection_text')
        const bg = this.add.sprite(this.cameras.main.width/2,this.cameras.main.height/1.23,'bg')
        const refresh = this.add.sprite(this.cameras.main.width/1.85,this.cameras.main.height/1.23,'refresh')
        const sound_on = this.add.sprite(this.cameras.main.width/1.75,this.cameras.main.height/1.23,'sound_on')
        const sound_off = this.add.sprite(this.cameras.main.width/1.65,this.cameras.main.height/1.23,'sound_off')
        const right = this.add.sprite(this.cameras.main.width/1.45,this.cameras.main.height/1.23,'right')
        const left = this.add.sprite(this.cameras.main.width/3.2,this.cameras.main.height/1.23,'left')
        const hand = this.add.sprite(this.cameras.main.width/2.95,this.cameras.main.height/1.8,'hand');
        const arrow = this.add.sprite(this.cameras.main.width/2.4,this.cameras.main.height/1.5,'arrow');
        const red_tt = this.add.sprite(this.cameras.main.width/2.58,this.cameras.main.height/1.81,'red_tt');
        const orange_tt = this.add.sprite(this.cameras.main.width/2.38,this.cameras.main.height/1.81,'orange_tt');
        const yellow_tt = this.add.sprite(this.cameras.main.width/2.06,this.cameras.main.height/1.81,'yellow_tt');
        const lightgreen_tt = this.add.sprite(this.cameras.main.width/1.93,this.cameras.main.height/1.81,'lightgreen_tt');
        const darkgreen_tt = this.add.sprite(this.cameras.main.width/1.81,this.cameras.main.height/1.81,'darkgreen_tt');
        const blue_tt = this.add.sprite(this.cameras.main.width/1.71,this.cameras.main.height/1.81,'blue_tt');
        const navyblue_tt = this.add.sprite(this.cameras.main.width/1.62,this.cameras.main.height/1.81,'navyblue_tt');
        const purple_tt = this.add.sprite(this.cameras.main.width/1.54,this.cameras.main.height/1.81,'purple_tt');
        const brown_tt = this.add.sprite(this.cameras.main.width/2.81,this.cameras.main.height/1.81,'brown_tt');
        const pink_tt = this.add.sprite(this.cameras.main.width/2.2,this.cameras.main.height/1.81,'pink_tt');
        const brown_strip = this.add.sprite(this.cameras.main.width/2.6,this.cameras.main.height/2.5,'brown_strip');
        const orange_strip = this.add.sprite(this.cameras.main.width/2.6,this.cameras.main.height/2.5,'orange_strip');
        const yellow_strip = this.add.sprite(this.cameras.main.width/2.6,this.cameras.main.height/2.5,'yellow_strip');
        const lightgreen_strip = this.add.sprite(this.cameras.main.width/2.6,this.cameras.main.height/2.5,'lightgreen_strip');
        const darkgreen_strip = this.add.sprite(this.cameras.main.width/2.6,this.cameras.main.height/2.5,'darkgreen_strip');
        const brown_tt_text= this.add.text(this.cameras.main.width/2.83,this.cameras.main.height/2.04,'1',{color:'black'});
        const red_tt_text= this.add.text(this.cameras.main.width/2.59,this.cameras.main.height/2.04,'2',{color:'black'});
        const orange_tt_text= this.add.text(this.cameras.main.width/2.39,this.cameras.main.height/2.04,'3',{color:'black'});
        const pink_tt_text= this.add.text(this.cameras.main.width/2.21,this.cameras.main.height/2.04,'4',{color:'black'});
        const yellow_tt_text= this.add.text(this.cameras.main.width/2.07,this.cameras.main.height/2.04,'5',{color:'black'});
        const lightgreen_tt_text= this.add.text(this.cameras.main.width/1.94,this.cameras.main.height/2.04,'6',{color:'black'});
        const darkgreen_tt_text= this.add.text(this.cameras.main.width/1.82,this.cameras.main.height/2.04,'7',{color:'black'});
        const blue_tt_text= this.add.text(this.cameras.main.width/1.72,this.cameras.main.height/2.04,'8',{color:'black'});
        const navyblue_tt_text= this.add.text(this.cameras.main.width/1.63,this.cameras.main.height/2.04,'9',{color:'black'});
        const purple_tt_text= this.add.text(this.cameras.main.width/1.55,this.cameras.main.height/2.04,'10',{color:'black'});

        const brown_strip_text = this.add.text(this.cameras.main.width/3.3,this.cameras.main.height/2.5,'1\t\t\tHigh expected earning growth')
        const orange_strip_text = this.add.text(this.cameras.main.width/3.3,this.cameras.main.height/2.5,'3\t\t\tconsistent earning compounders')
        const yellow_strip_text = this.add.text(this.cameras.main.width/3.3,this.cameras.main.height/2.5,'5\t\t\tHigh return on equity')
        const lightgreen_strip_text = this.add.text(this.cameras.main.width/3.3,this.cameras.main.height/2.5,'6\t\t\tPoor capital allocation and resource use')
        const darkgreen_strip_text = this.add.text(this.cameras.main.width/3.3,this.cameras.main.height/2.5,'7\t\t\tHigh free cashflow yield')

        const tween = this.tweens.add({
            targets : hand,
            x : this.cameras.main.width/2.3,
            y : this.cameras.main.height/1.4,
            ease : 'Linear',
            duration : 2000,
            yoyo : true,
            repeat:1

        })

        right.setInteractive({useHandCursor:true})
        left.alpha=0.3;

        brown_strip.visible = false
        orange_strip.visible = false
        yellow_strip.visible = false
        lightgreen_strip.visible = false
        darkgreen_strip.visible = false
        brown_strip_text.visible = false
        orange_strip_text.visible = false
        yellow_strip_text.visible = false
        lightgreen_strip_text.visible = false
        darkgreen_strip_text.visible = false

        brown_tt.setInteractive({useHandCursor:true});
        red_tt.setInteractive({useHandCursor:true});
        orange_tt.setInteractive({useHandCursor:true});
        yellow_tt.setInteractive({useHandCursor:true});
        pink_tt.setInteractive({useHandCursor:true});
        lightgreen_tt.setInteractive({useHandCursor:true});
        darkgreen_tt.setInteractive({useHandCursor:true});
        blue_tt.setInteractive({useHandCursor:true});
        navyblue_tt.setInteractive({useHandCursor:true});
        purple_tt.setInteractive({useHandCursor:true});
        // brown_tt_text.setInteractive({useHandCursor:true});
        // red_tt_text.setInteractive({useHandCursor:true});
        // orange_tt_text.setInteractive({useHandCursor:true});
        // pink_tt_text.setInteractive({useHandCursor:true});
        // yellow_tt_text.setInteractive({useHandCursor:true});
        // lightgreen_tt_text.setInteractive({useHandCursor:true});
        // darkgreen_tt_text.setInteractive({useHandCursor:true});
        // blue_tt_text.setInteractive({useHandCursor:true});
        // navyblue_tt_text.setInteractive({useHandCursor:true});
        // pink_tt_text.setInteractive({useHandCursor:true});
        // left.setInteractive({useHandCursor:true})
        // right.setInteractive({useHandCursor:true})

        this.input.setDraggable(brown_tt);
        this.input.setDraggable(orange_tt);
        this.input.setDraggable(pink_tt);
        this.input.setDraggable(yellow_tt);
        this.input.setDraggable(lightgreen_tt);
        this.input.setDraggable(darkgreen_tt);
        this.input.setDraggable(red_tt);
        this.input.setDraggable(blue_tt);
        this.input.setDraggable(navyblue_tt);
        this.input.setDraggable(purple_tt);
        // this.input.setDraggable(brown_tt_text);
        // this.input.setDraggable(red_tt_text);
        // this.input.setDraggable(orange_tt_text);
        // this.input.setDraggable(pink_tt_text);
        // this.input.setDraggable(yellow_tt_text);
        // this.input.setDraggable(lightgreen_tt_text);
        // this.input.setDraggable(darkgreen_tt_text);
        // this.input.setDraggable(blue_tt_text);
        // this.input.setDraggable(navyblue_tt_text);
        // this.input.setDraggable(purple_tt_text);

        this.input.on('drag',function(pointer,gameObj,dragX,dragY) {
            gameObj.setScale(0.4)
            
            gameObj.x = dragX;
            gameObj.y = dragY 

            if(brown_tt.input.dragState){
                brown_strip.visible= true;
                brown_strip_text.visible = true;
                orange_strip_text.visible =false
                yellow_strip_text.visible =false
                lightgreen_strip_text.visible =false
                darkgreen_strip_text.visible =false
                brown_tt_text.visible=false
                
            }
            if(orange_tt.input.dragState){
                orange_strip.visible= true;
                orange_strip_text.visible =true;
                brown_strip_text.visible =false
                yellow_strip_text.visible =false
                lightgreen_strip_text.visible =false
                darkgreen_strip_text.visible =false
                orange_tt_text.visible=false
                
                
            }
            if(yellow_tt.input.dragState){
                yellow_strip.visible= true;
                yellow_strip_text.visible =true;
                orange_strip_text.visible =false
                brown_strip_text.visible =false
                lightgreen_strip_text.visible =false
                darkgreen_strip_text.visible =false
                yellow_tt_text.visible=false
                
                
            }
            if(lightgreen_tt.input.dragState){
                lightgreen_strip.visible= true;
                lightgreen_strip_text.visible = true
                orange_strip_text.visible =false
                yellow_strip_text.visible =false
                brown_strip_text.visible =false
                darkgreen_strip_text.visible =false
                lightgreen_tt_text.visible=false
                
                
            }
            if(darkgreen_tt.input.dragState){
                darkgreen_strip.visible= true;
                darkgreen_strip_text.visible=true;
                orange_strip_text.visible =false
                yellow_strip_text.visible =false
                lightgreen_strip_text.visible =false
                brown_strip_text.visible =false
                darkgreen_tt_text.visible=false
                
            }
            
            
        })
        

        
        bg.scaleX = 0.799
        bg.scaleY = 0.1
        screen_7_bg.scale = 0.8
        collection.scale = 0.6
        collection.scaleX = 0.8
        collection_text.scale = 0.6
        refresh.scale = 0.7
        sound_on.scale = 0.7
        sound_off.scale = 0.7
        right.scale = 0.7
        left.scale = 0.7
        hand.scale = 0.5
        hand.angle = 45
        red_tt.scale = 0.8
        orange_tt.scale = 0.8
        yellow_tt.scale = 0.8
        lightgreen_tt.scale = 0.8
        darkgreen_tt.scale = 0.8
        blue_tt.scale = 0.8
        navyblue_tt.scale = 0.8
        purple_tt.scale = 0.8
        brown_tt.scale = 0.8
        pink_tt.scale = 0.8
        brown_strip.scale = 0.8
        brown_strip.scaleX = 1.5
        orange_strip.scale = 0.8
        orange_strip.scaleX = 1.5
        yellow_strip.scale = 0.8
        yellow_strip.scaleX = 1.5
        lightgreen_strip.scale = 0.8
        lightgreen_strip.scaleX = 1.5
        darkgreen_strip.scale = 0.8
        darkgreen_strip.scaleX = 1.5
        
        right.on('pointerup',()=>this.scene.start('Screen8'));
        
    }
    
}