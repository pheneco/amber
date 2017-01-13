import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { routes } from './app.routes';
import { USER_DECLARATIONS } from './users';

@NgModule({
	imports: [
		BrowserModule,
		RouterModule.forRoot(routes)
	],
	declarations: [
		AppComponent,
		...USER_DECLARATIONS
	],
	bootstrap: [
		AppComponent
	]
})
export class AppModule {}
