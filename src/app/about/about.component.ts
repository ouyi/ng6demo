import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DataService } from '../data.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  goals: any;

  constructor(private route: ActivatedRoute, private router: Router, private dataService: DataService) {
    this.route.params.subscribe( req => console.log(req.id));
  }

  ngOnInit() {
    this.dataService.obsGoals.subscribe(g => this.goals = g);
  }

  sendMeHome() {
    this.router.navigate(['']);
  }
}
