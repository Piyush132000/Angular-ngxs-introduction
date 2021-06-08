import {State , Action , StateContext, Selector} from '@ngxs/store';
import * as TutorialAction from '../Actions/tutorial.action';
import { Tutorial } from '../../_models/tutorial.interface';


export class  TutorialStateModel {
  tutorial: Tutorial[];
}

@State<TutorialStateModel>({
  name: 'tutorial',
  defaults: {
    tutorial: []
  }
})

export class TutorialState {

  @Selector()
  static getTutorial(state: TutorialStateModel): Tutorial[]{
    return state.tutorial;
  }


  @Action(TutorialAction.AddTutorial)
  get({ getState, patchState}: StateContext<TutorialStateModel>, {payload}: TutorialAction.AddTutorial): any{
    const state = getState();
    patchState({ tutorial: [...state.tutorial , payload]
    });
  }

  @Action(TutorialAction.RemoveTutorial)
  remove({ getState, patchState}: StateContext<TutorialStateModel>, {payload}: TutorialAction.RemoveTutorial): any{
    patchState({ tutorial: getState().tutorial.filter(tutorial => tutorial.name !== payload)
    });
  }
}
