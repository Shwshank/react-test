export const setName = (name="noName0") => {
  return{
    type: "SET_NAME",
    payload: name
  };
};

export const getName = (name="noName1") => {
  return({
    type: "GET_NAME",
    payload: name
  });
};
