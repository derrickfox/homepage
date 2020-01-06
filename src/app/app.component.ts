import { Component } from '@angular/core';
import { trigger, state, style, transition, animate } from '@angular/animations';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.css'],
	animations: [
		trigger('divState', [
			state('normal', style({
				'background-color': 'black',
				'border-color': 'black',
				transform: 'translateX(0)'
			})),
			state('highlighted', style({
				'background-color': 'blue',
				'border-color': 'blue',
				transform: 'translateX(1000px)'
			})),
			transition('normal <=> highlighted', animate(1300))
		]),
		trigger('leftState', [
			state('unhatched', style({
				transform: 'rotate(0deg)',
				'background-color': 'purple'
			})),
			state('hatched', style({
				transform: 'rotate(-45deg)',
				'background-color': 'pink'
			})),
			transition('normal => hatched', animate(300))
		]),
		trigger('rightState', [
			state('unhatched', style({
				transform: 'rotate(0deg)',
				'background-color': 'purple'
			})),
			state('hatched', style({
				transform: 'rotate(45deg)',
				'background-color': 'pink'
			})),
			transition('unhatched <=> hatched', animate(300))
		])
	]
})
export class AppComponent {
	state = 'normal'
	otherState = 'normal'
	eggState = 'unhatched'
	title = 'homepage';

	onAnimate() {
		this.state === 'normal' ? this.state = 'highlighted' : this.state = 'normal';
	}

	onEgg() {
		console.log('clicked')
		this.eggState === 'unhatched' ? this.eggState = 'hatched' : this.eggState = 'unhatched';
	}
}
