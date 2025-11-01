import { makeAutoObservable } from "mobx";

class FavoriteStore {
	favoriteName: string[] = JSON.parse(localStorage.getItem("favorites") || "[]");

	constructor() {
		makeAutoObservable(this);
	}

	toggleFavorite(trackName: string) {
		if (this.favoriteName.includes(trackName)) {
			this.favoriteName = this.favoriteName.filter((name) => name !== trackName);
		} else {
			this.favoriteName.push(trackName);
		}

		localStorage.setItem("favorites", JSON.stringify(this.favoriteName));
	}
}

export const favoriteStore = new FavoriteStore();
