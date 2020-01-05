import { Component } from '@angular/core';
import { trigger, state, style, transition, animate } from '@angular/animations';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.css'],
	animations: [
		trigger('divState', [
			state('normal', style({
				'background-color': 'red',
				transform: 'translateX(0)'
			})),
			state('highlighted', style({
				'background-color': 'blue',
				transform: 'translateX(1000px)'
			})),
			transition('normal <=> highlighted', animate(1300))
		]),
		trigger('eggState', [
			state('unhatched', style({
				transform: 'translateX(0)'
			})),
			state('hatched', style({
				transform: 'translateX(1000px)'
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
		this.state === 'unhatched' ? this.state = 'hatched' : this.state = 'unhatched';
	}
}
