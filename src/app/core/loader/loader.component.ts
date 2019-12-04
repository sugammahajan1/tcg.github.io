import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { AdminService } from 'src/app/services/admin/admin.service';

@Component({
	selector: 'app-loader',
	templateUrl: 'loader.component.html',
	styleUrls: ['loader.component.scss']
})

export class LoaderComponent implements OnInit, OnDestroy {

	loaderSubscription: Subscription;
	showLoader: boolean = false;

	constructor(private admin: AdminService) { }

	ngOnInit() {
		this.loaderSubscription = this.admin.loaderState
		.subscribe((state: boolean) => {
			this.showLoader = state;
		});
	}

	ngOnDestroy() {
		if(!!this.loaderSubscription) this.loaderSubscription.unsubscribe();
	}

}