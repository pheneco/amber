import { Route } from '@angular/router';

import { LoginComponent } from './users/login.component';
import { RegisterComponent } from './users/register.component';

export const routes: Route[] = [
	{path:'login',component:LoginComponent},
	{path:'register',component:RegisterComponent}
]