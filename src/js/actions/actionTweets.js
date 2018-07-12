import { tweetsRef } from "../config/firebase";
import { FETCH_TWEETS } from "./types";

export const addTweet = newToDo => async dispatch => {
  tweetsRef.push().set(newToDo);
};

export const completeTweet = completeToDoId => async dispatch => {
  tweetsRef.child(completeToDoId).remove();
};

export const fetchTweets = () => async dispatch => {
  tweetsRef.on("value", snapshot => {
    dispatch({
      type: FETCH_TWEETS,
      payload: snapshot.val()
    });
  });
};
