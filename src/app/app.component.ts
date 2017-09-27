import { Component } from "@angular/core";
import Deck from "./../classes/deck";


@Component({
	selector: "application",
	templateUrl: "./app.html",
	styleUrls: ["./app.css"]
})
export class AppComponent {
	// write your component code here

	public deck:Deck = new Deck()

	public cardsDrawn = [];


	public getDeckCardCount() {
		return this.deck.getCardCount();
	}

	lifeBarHeight(){
		const baseHeight = 46
		return this.deck.getCardCount() / 52 * baseHeight;
	}


	public DrawCard() {
		this.cardsDrawn.push(this.deck.drawCard());
	}

	public return(card) {
		this.deck.returnCardToDeck(card);
		this.cardsDrawn.splice(this.cardsDrawn.indexOf(card), 1);

	}
}
