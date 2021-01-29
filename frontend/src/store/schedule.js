import { fetch } from "./csrf";

const SET_All_Schedules = "schedule/setSchedule";

//Action Creator produces an object
const setSchedule = (schedule) => ({
  type: SET_All_Schedules,
  schedule: schedule,
});

export const fetchAllSchedules = (childId) => {
  return async (dispatch) => {
    //server
    const response = await fetch(`/api/children/${childId}`);
    console.log(response)
    dispatch(setSchedule(response.data.chores));
  };
};

const initialState = [];

const reducer = (state= initialState,action)=>{
    let newState;
    switch(action.type){
        case SET_All_Schedules:
      newState = action.schedule
     return newState;
    default:
      return state;
  }
};

export default reducer;
    