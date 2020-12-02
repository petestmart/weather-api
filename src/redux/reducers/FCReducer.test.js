import FCReducer from "./FCReducer";

// FCReducer should initially be an empty array
test("FCReducer should initially be an empty array", () => {
  const action = {};
  const returnedState = FCReducer(undefined, action);
  expect(Array.isArray(returnedState)).toBe(true);
  expect(returnedState.length).toBe(0);
});
