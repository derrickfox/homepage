import { Component, AfterViewInit } from '@angular/core';
import { trigger, state, style, transition, animate, group } from '@angular/animations';

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
		])
	]
})
export class AppComponent implements AfterViewInit{
	state = 'normal'
	otherState = 'normal'
	eggState = 'unhatched'
	cloudState = 'beforeLoading'
	title = 'homepage';

	onAnimate() {
		this.state === 'normal' ? this.state = 'highlighted' : this.state = 'normal';
	}

	onEgg() {
		console.log('egg')
		this.eggState === 'unhatched' ? this.eggState = 'hatched' : this.eggState = 'unhatched';
	}

	onClouds() {
		console.log('cloud')
		this.cloudState === 'beforeLoading' ? this.cloudState = 'afterLoading' : this.cloudState = 'beforeLoading';
	}

	ngAfterViewInit() {
		this.cloudState = 'afterLoading';
	 }
}
