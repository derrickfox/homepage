import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
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
			transition('unclicked => clicked', 
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
			state('in', style({
				transform: 'translateX(-1000px) scaleY(0.4)'
			})),
			state('out', style({
				transform: 'translateX(-200px) scaleY(0.4)'
			})),
			transition('in <=> out',
			animate(300))
		])
	]
})
export class AboutComponent implements OnInit {
	envelopeState = 'unclicked';
	contactSlide = 'in';
	constructor(private router: Router) { }

	ngOnInit() {
	}

	backButton() {
		this.router.navigate(['/homepage']);
	}

	onEnvelopeClick() {
		console.log('envelope clicked');
		this.envelopeState = 'clicked';
		this.contactSlide === 'in' ? this.contactSlide = 'out' : this.contactSlide = 'in';
	}

}
