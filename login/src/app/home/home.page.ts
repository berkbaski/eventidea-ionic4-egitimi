import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  username: string;

  constructor(
    private activatedRoute: ActivatedRoute
  ) {
    this.username = this.activatedRoute.snapshot.paramMap.get('username');
  }

}
