import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ShareDataService } from "../../services/share-data.service";

@Component({
	selector: 'app-landing',
	templateUrl: './landing.component.html',
	styleUrls: ['./landing.component.scss']
})
export class LandingComponent implements OnInit {
	region: any;
	job_title: any;
	constructor(private router: Router, private shareData: ShareDataService) { }

	ngOnInit(): void {
	}

	searchJobs() {
		console.log(this.region)
		console.log(this.job_title)
		let search_params = { 'region': this.region, 'job_title': this.job_title }
		this.shareData.changeMessage(JSON.stringify(search_params))
		this.router.navigate(['/main'])
	}

}
