import Phaser from 'phaser'

import HelloWorldScene from './scenes/HelloWorldScene';
import LoginScene from './scenes/LoginScene';
import Welcome from './scenes/Welcome'
import Screen4 from './scenes/Screen4'
import Screen5 from './scenes/Screen5'
import Screen6 from './scenes/Screen6'
import Screen7 from './scenes/Screen7'
import Screen8 from './scenes/Screen8'
import Screen9 from './scenes/Screen9'
import Screen10 from './scenes/Screen10'
import Screen11 from './scenes/Screen11'


const config = {

	type: Phaser.CANVAS, 
	width: window.innerWidth * window.devicePixelRatio,
	height: window.innerHeight * window.devicePixelRatio,  
	physics: {
		default: 'arcade',
		arcade: {
			gravity: { y: 200 }
		}
	},

	scene: [Screen11] 

}


export default new Phaser.Game(config)
