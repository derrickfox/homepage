import { Component, OnInit } from '@angular/core';
import { trigger, state, style, transition, animate, group, keyframes } from '@angular/animations';

@Component({
	selector: 'app-about',
	templateUrl: './about.component.html',
	styleUrls: ['./about.component.css'],
	animations: [
		trigger('envelopeState', [
			state('unclicked', style({
				
			})),
			state('clicked', style({

			})),
			transition('unclicked <=> clicked', 
			animate(1300, keyframes([
				style({transform: 'translate(1px, 1px) rotateY(0)', offset: 0}),
				style({transform: 'translate(-1px, -2px) rotateY(0)', offset: 0.10}),
				style({transform: 'translate(-3px, 0px) rotateY(0)', offset: 0.20}),
				style({transform: 'translate(3px, 2px) rotateY(0)', offset: 0.30}),
				style({transform: 'translate(1px, -1px) rotateY(0)', offset: 0.40}),
				style({transform: 'translate(-1px, 2px) rotateY(0)', offset: 0.50}),
				style({transform: 'translate(-3px, 1px) rotateY(0)', offset: 0.60}),
				style({transform: 'translate(3px, 1px) rotateY(0)', offset: 0.70}),
				style({transform: 'translate(-1px, 2px) rotateY(0)', offset: 0.80}),
				style({transform: 'translate(1px, 2px) rotateY(0)', offset: 0.90}),
				style({transform: 'translate(1px, -2px) rotateY(0)', offset: 1})
			])))
		]),
		trigger('contactSlide', [
			state('unclicked', style({
				transform: 'translateX(-1000px) scaleY(0.4)'
			})),
			state('clicked', style({
				transform: 'translateX(-200px) scaleY(0.4)'
			})),
			transition('unclicked <=> clicked',
			animate(300))
		])
	]
})
export class AboutComponent implements OnInit {
	envelopeState = 'unclicked';
	contactSlide = 'unclicked';
	constructor() { }

	ngOnInit() {
	}

	onEnvelopeClick() {
		console.log('envelope clicked');
		this.envelopeState === 'unclicked' ? this.envelopeState = 'clicked' : this.envelopeState = 'unclicked';
		this.contactSlide === 'unclicked' ? this.contactSlide = 'clicked' : this.contactSlide = 'unclicked';
	}

}
