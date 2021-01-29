import { fetch } from "./csrf";

const SET_All_Chores = "chore/setChore";

//Action Creator produces an object
const setChore = (chore) => ({
  type: SET_All_Chores,
  chore: chore
});

export const fetchAllChores = (childId) => {
  return async (dispatch) => {
    //server
    const response = await fetch(`/api/children/${childId}`);
    console.log(response)
    dispatch(setChore(response.data.chores));
  };
};

const initialState = [];

const reducer = (state= initialState,action)=>{
    let newState;
    switch(action.type){
        case SET_All_Chores:
      newState = action.chore
     return newState;
    default:
      return state;
  }
};

export default reducer;
    
