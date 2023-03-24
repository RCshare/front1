import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { MethodNode } from '@app/models/method-node.model';
import { MethodService } from '@app/services/methods-service/method-service.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  


  constructor(private router: Router, private methodService: MethodService) {}

  ngOnInit() {
  }

  logout(): void {
    localStorage.removeItem('token');
    this.router.navigate(['/login']);
  }
}
