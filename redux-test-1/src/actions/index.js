export const setName = (name="noName") => {
  dispatch({
    type: "SET_NAME",
    payload: name
  });
};

export const getName = () => {
  dispatch({
    type: "GET_NAME"
  });
};
