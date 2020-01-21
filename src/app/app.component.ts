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
		trigger('sunState', [
			state('beforeLoading', style({
				transform: 'rotate(90deg)',
				marginTop: '400px',
			})),
			state('afterLoading', style({
				transform: 'rotate(0deg)',
				width: '200px'
			})),
			transition('beforeLoading <=> afterLoading', animate(1600))
		]),
		trigger('leftTopCloudState', [
			state('beforeLoading', style({
				transform: 'translateX(-500px)'
			})),
			state('afterLoading', style({
				transform: 'translateX(-100px)'
			})),
			transition('beforeLoading <=> afterLoading', animate(1000))
		]),
		trigger('rightTopCloudState', [
			state('beforeLoading', style({
				transform: 'translateX(500px)'
			})),
			state('afterLoading', style({
				transform: 'translateX(100px)'
			})),
			transition('beforeLoading <=> afterLoading', animate(1000))
		]),
		trigger('leftBottomCloudState', [
			state('beforeLoading', style({
				transform: 'translateX(10px)'
			})),
			state('afterLoading', style({
				transform: 'translateX(-200px)'
			})),
			transition('beforeLoading <=> afterLoading', animate(1000))
		]),
		trigger('rightBottomCloudState', [
			state('beforeLoading', style({
				transform: 'translateX(-10px)'
			})),
			state('afterLoading', style({
				transform: 'translateX(220px)'
			})),
			transition('beforeLoading <=> afterLoading', animate(1000))
		]),
		trigger('listState', [
			state('shrunken', style({
				transform: 'translateX(0px) scale(0)'
			})),
			state('grown', style({
				transform: 'translateX(-200px) scale(1)'
			})),
			transition('shrunken <=> grown', [
				style({ 
					// transform: 'translateX(0)'
				}),
				animate(500)
			])
		])
	]
})

export class AppComponent implements AfterViewInit {
	state = 'normal'
	otherState = 'normal'
	eggState = 'unhatched'
	sunState = 'afterLoading'
	cloudState = 'beforeLoading'
	listState = 'shrunken'
	@Input() button: {
		title: 'Init',
		url: 'dkjfa;'
	}
	buttons = [
		{
			title: 'Bookmarker',
			url: 'https://bookmarker-9ac68.firebaseapp.com/'
		},
		{
			title: 'Second Button',
			url: 'https://www.espn.com'
		},
		{
			title: 'Third Button',
			url: 'https://www.amazon.com'
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
		this.sunState === 'beforeLoading' ? this.sunState = 'afterLoading' : this.sunState = 'beforeLoading';
	}

	ngAfterViewInit() {
		this.cloudState = 'afterLoading';
		// this.sunState = 'afterLoading';
	}
}
