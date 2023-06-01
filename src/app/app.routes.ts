import { RouterModule } from "@angular/router";
import { AddUserComponent } from "./add-user/add-user.component";
import { AllUserComponent } from "./all-user/all-user.component";
import { DeleteUserComponent } from "./delete-user/delete-user.component";
import { EditUserComponent } from "./edit-user/edit-user.component";
import { ErrorComponent } from "./error/error.component";

const routes = [
    { path: '', component: AllUserComponent },
    { path: 'allusers', component: AllUserComponent },
    { path: 'adduser', component: AddUserComponent },
    { path: 'edituser/:id', component: EditUserComponent },
    { path: 'deleteuser/:id', component: DeleteUserComponent },
    { path: '**', component: ErrorComponent },
];

let routerConfig = RouterModule.forRoot(routes);
export { routerConfig };