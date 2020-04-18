import * as ClearState from '../actions/clearState.actions';

export function clearState(reducer) {    
 return function (state, action) {
    switch(action.type)
    {
        case ClearState.CLEAR_STATE:
            state = undefined;
        break;
    }      
      return reducer(state, action);
    };
  }

