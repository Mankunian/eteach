import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
	providedIn: 'root'
})
export class ShareDataService {
	private messageSource = new BehaviorSubject(0);
	currentMessage = this.messageSource.asObservable();

	constructor() { }

	changeMessage(message: any) {
		this.messageSource.next(message)
	}
}
