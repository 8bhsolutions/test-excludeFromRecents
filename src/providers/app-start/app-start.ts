import { Injectable } from '@angular/core';

/*
  Generated class for the AppStartProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class AppStartProvider {

	public start: Date;

	constructor() {
		this.start = new Date();
	}

}
