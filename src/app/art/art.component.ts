import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-art',
	templateUrl: './art.component.html',
	styleUrls: ['./art.component.css']
})
export class ArtComponent implements OnInit {
	element: HTMLElement
	modal = document.getElementById("myModal");
	img = document.getElementById("myImg");
	modalImg = document.getElementById("img01");
	captionText = document.getElementById("caption");
	span = document.getElementsByClassName("close")[0];
	images = [
		{
			path: "../../assets/images/Untitled_Artwork 1.png"
		},
		{
			path: "../../assets/images/Untitled_Artwork 10.png"
		},
		{
			path: "../../assets/images/Untitled_Artwork 11.png"
		},
		{
			path: "../../assets/images/Untitled_Artwork 12.png"
		},
		{
			path: "../../assets/images/Untitled_Artwork 13.png"
		},
		{
			path: "../../assets/images/Untitled_Artwork 14.png"
		},
		{
			path: "../../assets/images/Untitled_Artwork 15.png"
		},
		{
			path: "../../assets/images/Untitled_Artwork 16.png"
		},
		{
			path: "../../assets/images/Untitled_Artwork 17.png"
		},
		{
			path: "../../assets/images/Untitled_Artwork 18.png"
		},
		{
			path: "../../assets/images/Untitled_Artwork 19.png"
		},
		{
			path: "../../assets/images/Untitled_Artwork 20.png"
		},
		{
			path: "../../assets/images/Untitled_Artwork 21.png"
		},
		{
			path: "../../assets/images/Untitled_Artwork 22.png"
		},
		{
			path: "../../assets/images/Untitled_Artwork 23.png"
		},
		{
			path: "../../assets/images/Untitled_Artwork 5.png"
		},
		{
			path: "../../assets/images/Untitled_Artwork 6.png"
		},
		{
			path: "../../assets/images/Untitled_Artwork 7.png"
		},
		{
			path: "../../assets/images/Untitled_Artwork 8.png"
		},
		{
			path: "../../assets/images/Untitled_Artwork 9.png"
		}
	]


	constructor() { }

	ngOnInit() {
		console.log('art loaded');
		console.log('this.images', this.images)
	}

	pictureClicked(src) {
		console.log('this.modal', this.modal)
		this.modal.style.display = "block";
		// this.modalImg.src = src;
	}

}
