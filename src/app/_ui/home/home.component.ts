import { Component, OnInit } from '@angular/core';
import {Select, Store} from '@ngxs/store';
import {Observable} from 'rxjs';
import { Tutorial } from 'src/app/_models/tutorial.interface';
import {AddTutorial, RemoveTutorial} from 'src/app/_store/Actions/tutorial.action';
import { TutorialState } from 'src/app/_store/Satates/tutorial.state';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

 @Select(TutorialState.getTutorial)tutorials: Observable<Tutorial[]>;
  tutorialInfo: Tutorial[];
  constructor(private store: Store) {
  }

  addTutorial(name: string, url: string): void{
    this.store.dispatch(new AddTutorial({  name,  url}));
  }

  removeTutorial( name: string): void{
      this.store.dispatch(new RemoveTutorial(name));
  }

  ngOnInit(): void {
      this.tutorials.subscribe(resData => {
          this.tutorialInfo = resData;
      });
  }

}
