import { Component, AfterViewInit, Input } from '@angular/core';
import { trigger, state, style, transition, animate, group } from '@angular/animations';
import { zoomInRightAnimation } from 'angular-animations';

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
				transform: 'translateX(500px)'
			})),
			transition('normal <=> highlighted', animate(1300))
		]),
		trigger('topState', [
			state('unhatched', style({
				transform: 'rotate(0deg)'
			})),
			state('hatched', style({
				transform: 'rotate(-45deg)'
			})),
			transition('normal => hatched', animate(300))
		]),
		trigger('bottomState', [
			state('unhatched', style({
				transform: 'rotate(0deg)',
			})),
			state('hatched', style({
				transform: 'rotate(45deg)'
			})),
			transition('unhatched <=> hatched', animate(300))
		]),
		trigger('leftTopCloudState', [
			state('beforeLoading', style({
				transform: 'translateX(-200px)'
			})),
			state('afterLoading', style({
				transform: 'translateX(10px)'
			})),
			transition('beforeLoading <=> afterLoading', animate(600))
		]),
		trigger('rightTopCloudState', [
			state('beforeLoading', style({
				transform: 'translateX(220px)'
			})),
			state('afterLoading', style({
				transform: 'translateX(-10px)'
			})),
			transition('beforeLoading <=> afterLoading', animate(600))
		]),
		trigger('leftBottomCloudState', [
			state('beforeLoading', style({
				transform: 'translateX(10px)'
			})),
			state('afterLoading', style({
				transform: 'translateX(-200px)'
			})),
			transition('beforeLoading <=> afterLoading', animate(600))
		]),
		trigger('rightBottomCloudState', [
			state('beforeLoading', style({
				transform: 'translateX(-10px)'
			})),
			state('afterLoading', style({
				transform: 'translateX(220px)'
			})),
			transition('beforeLoading <=> afterLoading', animate(600))
		]),
		trigger('listState', [
			state('shrunken', style({
				transform: 'translateX(0) scale(0)'
			})),
			state('grown', style({
				transform: 'translateX(-200px)', 
				opacity: 1
			})),
			transition('shrunken => grown', [
				style({ 
					width: 10, 
					transform: 'translateX(50px)', 
					opacity: 0 
				}),
				group([
					animate('0.3s 0.1s ease', style({
						transform: 'translateX(-200px)',
						width: 120
					})),
					animate('0.3s ease', style({
						opacity: 1
					}))
				])
			])
		])
	]
})

export class AppComponent implements AfterViewInit {
	state = 'normal'
	otherState = 'normal'
	eggState = 'unhatched'
	cloudState = 'beforeLoading'
	listState = 'shrunken'
	@Input() button: {
		title: 'Init',
		url: 'dkjfa;'
	}
	buttons = [
		{
			title: 'First Button',
			url: 'www.yahoo.com'
		},
		{
			title: 'Second Button',
			url: 'www.espn.com'
		},
		{
			title: 'Third Button',
			url: 'www.espn.com'
		}
	]
	title = 'homepage';

	onAnimate() {
		this.state === 'normal' ? this.state = 'highlighted' : this.state = 'normal';
	}

	onEgg() {
		console.log('egg');
		this.eggState === 'unhatched' ? this.eggState = 'hatched' : this.eggState = 'unhatched';
		this.listState === 'shrunken' ? this.listState = 'grown' : this.listState = 'shrunken';
	}

	onClouds() {
		console.log('cloud')
		this.cloudState === 'beforeLoading' ? this.cloudState = 'afterLoading' : this.cloudState = 'beforeLoading';
	}

	ngAfterViewInit() {
		this.cloudState = 'afterLoading';
	}
}
