import {Component} from 'angular2/core';
@Component ({
    selector: 'pm-app',
    template:'<div><h4>{{pageTitle}}</h4><div>My First Component</div>'
})

export class AppComponent {
    pageTitle:string='Acme Product Management';


}