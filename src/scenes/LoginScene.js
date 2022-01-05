import Phaser from 'phaser'

const gameState = {}
export default class LoginScene extends Phaser.Scene
{
	constructor()
	{
		super({key : 'LoginScene'})
	}

	preload()
    {   
        

        this.load.image('screen_3_bg', 'assets/screen_3/BG.png')
        this.load.image('door_left', 'assets/screen_3/Door_Left.png')
        this.load.image('door_right', 'assets/screen_3/Door_Right.png')
        this.load.image('password_panel', 'assets/screen_3/Password_panel.png')
        this.load.image('password_screen', 'assets/screen_3/Password_screen.png')
        this.load.image('plant', 'assets/screen_3/Plant.png')
        this.load.image('button_1', 'assets/screen_3/Button.png')
        this.load.image('button_2', 'assets/screen_3/Button.png')
        this.load.image('button_3', 'assets/screen_3/Button.png')
        this.load.image('button_4', 'assets/screen_3/Button.png')
        this.load.image('button_5', 'assets/screen_3/Button.png')
        this.load.image('button_6', 'assets/screen_3/Button.png')
        this.load.image('button_7', 'assets/screen_3/Button.png')
        this.load.image('button_8', 'assets/screen_3/Button.png')
        this.load.image('button_9', 'assets/screen_3/Button.png')
        this.load.image('button_10', 'assets/screen_3/Button.png')
        this.load.image('button_11', 'assets/screen_3/Button.png')
     
    }

    create()
    { 
        
        const bg_image = this.add.sprite(this.cameras.main.width/2,this.cameras.main.height/2, 'screen_3_bg')
        const door_left = this.add.sprite(this.cameras.main.width/2.39,this.cameras.main.height/2.07, 'door_left')
        const door_right = this.add.sprite(this.cameras.main.width/1.71,this.cameras.main.height/2.07, 'door_right')
        const password_panel = this.add.sprite(this.cameras.main.width/2,this.cameras.main.height/1.95, 'password_panel')
        const password_screen = this.add.sprite(this.cameras.main.width/2,this.cameras.main.height/2.2, 'password_screen')
        const plant = this.add.sprite(this.cameras.main.width/2.9,this.cameras.main.height/1.5, 'plant')

        var password_screen_text = this.add.text(this.cameras.main.width/2.3,this.cameras.main.height/2.25,'ENTER THE ARM CODE',{fontSize:'20px',fontFamily:'Arial'})

        

        
        const button_1 = this.add.sprite(this.cameras.main.width/2.3,this.cameras.main.height/1.99, 'button_1')
        const button_1_text = this.add.text(this.cameras.main.width/2.32,this.cameras.main.height/2.05,'1',{align:'center',fontSize:'25px',fontStyle:'bold'})
        button_1.setInteractive({useHandCursor:true})
        button_1.on('pointerup',function(){
            if(password_screen_text.text==='ENTER THE ARM CODE' || password_screen_text.text==='ENTER MOBILE NUMBER'){
                password_screen_text.text=button_1_text.text;
            }
            else{
                password_screen_text.text =password_screen_text.text+  button_1_text.text;
            }
            
        })

        const button_2 = this.add.sprite(this.cameras.main.width/2.18,this.cameras.main.height/1.99, 'button_2')
        const button_2_text = this.add.text(this.cameras.main.width/2.20,this.cameras.main.height/2.05,'2',{align:'center',fontSize:'25px',fontStyle:'bold'})
        button_2.setInteractive({useHandCursor:true})
        button_2.on('pointerup',function(){
            if(password_screen_text.text==='ENTER THE ARM CODE' || password_screen_text.text==='ENTER MOBILE NUMBER'){
                password_screen_text.text=button_2_text.text;
            }
            else{
                password_screen_text.text =password_screen_text.text+  button_2_text.text;
            }
        })

        const button_3 = this.add.sprite(this.cameras.main.width/2.07,this.cameras.main.height/1.99, 'button_3')
        const button_3_text = this.add.text(this.cameras.main.width/2.09,this.cameras.main.height/2.05,'3',{align:'center',fontSize:'25px',fontStyle:'bold'})
        button_3.setInteractive({useHandCursor:true})
        button_3.on('pointerup',function(){
            if(password_screen_text.text==='ENTER THE ARM CODE' || password_screen_text.text==='ENTER MOBILE NUMBER'){
                password_screen_text.text=button_3_text.text;
            }
            else{
                password_screen_text.text =password_screen_text.text+  button_3_text.text;
            }
        })

        const button_4 = this.add.sprite(this.cameras.main.width/1.97,this.cameras.main.height/1.99, 'button_4')
        const button_4_text = this.add.text(this.cameras.main.width/1.99,this.cameras.main.height/2.05,'4',{align:'center',fontSize:'25px',fontStyle:'bold'})
        button_4.setInteractive({useHandCursor:true})
        button_4.on('pointerup',function(){
            if(password_screen_text.text==='ENTER THE ARM CODE' || password_screen_text.text==='ENTER MOBILE NUMBER'){
                password_screen_text.text=button_4_text.text;
            }
            else{
                password_screen_text.text =password_screen_text.text+  button_4_text.text;
            }
        })

        const button_5 = this.add.sprite(this.cameras.main.width/1.88,this.cameras.main.height/1.99, 'button_5')
        const button_5_text = this.add.text(this.cameras.main.width/1.90,this.cameras.main.height/2.05,'5',{align:'center',fontSize:'25px',fontStyle:'bold'})
        button_5.setInteractive({useHandCursor:true})
        button_5.on('pointerup',function(){
            if(password_screen_text.text==='ENTER THE ARM CODE' || password_screen_text.text==='ENTER MOBILE NUMBER'){
                password_screen_text.text=button_5_text.text;
            }
            else{
                password_screen_text.text =password_screen_text.text+  button_5_text.text;
            }
        })

        const button_6 = this.add.sprite(this.cameras.main.width/2.3,this.cameras.main.height/1.79, 'button_6')
        const button_6_text = this.add.text(this.cameras.main.width/2.32,this.cameras.main.height/1.84,'6',{align:'center',fontSize:'25px',fontStyle:'bold'})
        button_6.setInteractive({useHandCursor:true})
        button_6.on('pointerup',function(){
            if(password_screen_text.text==='ENTER THE ARM CODE' || password_screen_text.text==='ENTER MOBILE NUMBER'){
                password_screen_text.text=button_6_text.text;
            }
            else{
                password_screen_text.text =password_screen_text.text+  button_6_text.text;
            }
        })

        const button_7 = this.add.sprite(this.cameras.main.width/2.18,this.cameras.main.height/1.79, 'button_7')
        const button_7_text = this.add.text(this.cameras.main.width/2.2,this.cameras.main.height/1.84,'7',{align:'center',fontSize:'25px',fontStyle:'bold'})
        button_7.setInteractive({useHandCursor:true})
        button_7.on('pointerup',function(){
            if(password_screen_text.text==='ENTER THE ARM CODE' || password_screen_text.text==='ENTER MOBILE NUMBER'){
                password_screen_text.text=button_7_text.text;
            }
            else{
                password_screen_text.text =password_screen_text.text+  button_7_text.text;
            }
        })

        const button_8 = this.add.sprite(this.cameras.main.width/2.07,this.cameras.main.height/1.79, 'button_8')
        const button_8_text = this.add.text(this.cameras.main.width/2.09,this.cameras.main.height/1.84,'8',{align:'center',fontSize:'25px',fontStyle:'bold'})
        button_8.setInteractive({useHandCursor:true})
        button_8.on('pointerup',function(){
            if(password_screen_text.text==='ENTER THE ARM CODE' || password_screen_text.text==='ENTER MOBILE NUMBER'){
                password_screen_text.text=button_8_text.text;
            }
            else{
                password_screen_text.text =password_screen_text.text+  button_8_text.text;
            }
        })

        const button_9 = this.add.sprite(this.cameras.main.width/1.97,this.cameras.main.height/1.79, 'button_9')
        const button_9_text = this.add.text(this.cameras.main.width/1.99,this.cameras.main.height/1.84,'9',{align:'center',fontSize:'25px',fontStyle:'bold'})
        button_9.setInteractive({useHandCursor:true})
        button_9.on('pointerup',function(){
            if(password_screen_text.text==='ENTER THE ARM CODE' || password_screen_text.text==='ENTER MOBILE NUMBER'){
                password_screen_text.text=button_9_text.text;
            }
            else{
                password_screen_text.text =password_screen_text.text+  button_9_text.text;
            }
        })

        const button_10 = this.add.sprite(this.cameras.main.width/1.88,this.cameras.main.height/1.79, 'button_10')
        const button_10_text = this.add.text(this.cameras.main.width/1.895,this.cameras.main.height/1.84,'0',{align:'center',fontSize:'25px',fontStyle:'bold'})
        button_10.setInteractive({useHandCursor:true})
        button_10.on('pointerup',function(){
            if(password_screen_text.text==='ENTER THE ARM CODE' || password_screen_text.text==='ENTER MOBILE NUMBER'){
                password_screen_text.text=button_10_text.text;
            }
            else{
                password_screen_text.text =password_screen_text.text+  button_10_text.text;
            }
        })

        const button_11 = this.add.sprite(this.cameras.main.width/1.78,this.cameras.main.height/1.89, 'button_11')
        const button_11_text = this.add.text(this.cameras.main.width/1.79,this.cameras.main.height/1.93,'X',{align:'center',fontSize:'25px',fontStyle:'bold'})
        button_11.setInteractive({useHandCursor:true})
        button_11.on('pointerup',function(){
            password_screen_text.setText('ENTER THE ARM CODE')
        })


        
        
        var bottom_text = this.add.text(this.cameras.main.width/2.1,this.cameras.main.height/1.26,'I DONT HAVE AN ARM CODE',{fontStyle:'bold',fontSize:'30px',color:'yellow',fontFamily:'Arial'})
        bottom_text.setInteractive({useHandCursor:true});
        bottom_text.on('pointerover',()=>bottom_text.setStyle({fill:'black'}))
        bottom_text.on('pointerout',()=>bottom_text.setStyle({fill:'yellow'}))
        

        const  loginButton = this.add.text(this.cameras.main.width/2,this.cameras.main.height/1.5 , 'LOGIN')
        .setOrigin(0.5)
        .setPadding(15,5)
        .setStyle({ backgroundColor: 'aqua',color:'black',fontSize:'25px',fontFamily:'Arial',letterSpacing:'10px' })
        .setInteractive({ useHandCursor: true })
        
        loginButton.on('pointerup',function(){
            if(password_screen_text.text.length===3){
                loginButton.setText('PROCEED');
                password_screen_text.setText("ENTER MOBILE NUMBER")
            }
            
            
        })

        loginButton.on('pointerup',()=>{

            if(password_screen_text.text.length===10){
                
                
                password_panel.visible = false
                password_screen.visible = false
                button_1.visible = false
                button_2.visible = false
                button_3.visible = false
                button_4.visible = false
                button_5.visible = false
                button_6.visible = false
                button_7.visible = false
                button_8.visible = false
                button_9.visible = false
                button_10.visible = false
                button_11.visible = false
                loginButton.visible = false
                plant.visible = false
                bottom_text.visible = false

                password_screen_text.visible = false
                button_1_text.visible = false
                button_2_text.visible = false
                button_3_text.visible = false
                button_4_text.visible = false
                button_5_text.visible = false
                button_6_text.visible = false
                button_7_text.visible = false
                button_8_text.visible = false
                button_9_text.visible = false
                button_10_text.visible = false
                button_11_text.visible = false


                // gameState.moveTween1 = this.tweens.add({
                //     targets : door_left,
                //     x : this.cameras.main.width/2.8,
                //     ease : 'Linear',
                //     duration : 3000,
                //     repeat : 0,
                //     yoyo : false
                // })

                // gameState.moveTween2 = this.tweens.add({
                //     targets : door_right,
                //     x : this.cameras.main.width/1.2,
                //     ease : 'Linear',
                //     duration : 3000,
                //     repeat : 0,
                //     yoyo : false
                // })

                // gameState.moveTween1.play()
                // gameState.moveTween2.play()
                door_right.setPosition(this.cameras.main.width/1.3,this.cameras.main.height/2.07)
                door_left.setPosition(this.cameras.main.width/4.5,this.cameras.main.height/2.07)

                
                
                this.time.addEvent({
                    delay:1000,
                    loop:false,
                    callback :()=>{
                        this.scene.start('Screen4')
                    }
                })

            }
        })
        
        loginButton.on('pointerover', () => loginButton.setStyle({ fill: 'white' }))
        loginButton.on('pointerout', () => loginButton.setStyle({ fill: 'black' }))
        
        
      
        bg_image.scale = 0.8;
        door_left.scale = 0.8;
        door_right.scale = 0.8;
        password_panel.scale = 1;
        password_panel.scaleX = 1.2;
        password_screen.scaleX = 1.2;

        // const particles = this.add.particles('red')
        // var i;
        // for(i=1;i<11;i++){
        //     password_screen_text
        // }
      
        
    } 
    

    update(){
        // if(password_screen_text.text.length==3){
        //     loginButton.on('pointerup',function(){
        //         loginButton.setText("PROCEED")
        //         password_screen_text.setText("ENTER MOBILE NUMBER")
        //     })
        // }
        
    }
}
