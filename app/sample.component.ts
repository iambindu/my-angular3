import {Component} from '@angular/core';

@Component({
	selector:'sample',
	template:`
	<div class="container" *ngIf="showHeader">
	<h1> this is my sample page</h1>
	he is {{name | uppercase}}
	<img bind-src="imageUrl"/>
	<button class="btn btn-primary" (click)="runMe()">Click me</button>
	Name:<input type="text" [(ngModel)]="realName" (keyup.enter)="getValues($event)"><br>
	<br>
	{{realName}}
	<br>
	<ul *ngFor="let item of items">
	<li>{{item}}</li>
	</ul>
	<br>
	Display Price:{{price|currency:'INR' : 'true'}}
	</div>
	`
})
export class SampleComponent{
	private name:string;
	private imageUrl:string;
	private realName:string;
	private showHeader:boolean;
	private items:string[];
	private price:number;



	constructor(){
		this.name="srii"
		this.imageUrl="http://lorempixel.com/400/200"
		this.realName="bindu";
		this.showHeader=true;
		this.items=["TV","fridge","AC","Car"]
		this.price=1500;
	}
	runMe(){
		console.log('Hey wait!!! did you click me')
	}
	getValues(event :any){
		console.log(event.target.value)
	}
	

}