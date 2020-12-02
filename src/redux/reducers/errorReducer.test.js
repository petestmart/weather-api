import errorReducer from "./errorReducer";

// errorReducer should initially be an empty array
test("errorReducer should initially be an empty array", () => {
  const action = {};
  const returnedState = errorReducer(undefined, action);
  expect(Array.isArray(returnedState)).toBe(true);
  expect(returnedState.length).toBe(0);
});
