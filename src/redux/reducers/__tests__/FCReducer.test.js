import FCReducer from "../FCReducer";

test("FCReducer should initially be an empty array", () => {
  const action = {};
  const returnedState = FCReducer(undefined, action);
  expect(Array.isArray(returnedState)).toBe(true);
  expect(returnedState.length).toBe(0);
});

test("FCReducer should ignore irrelevant actions", () => {
  const action = {
    type: "IGNORE_ME",
  };
  const returnedState = FCReducer(undefined, action);
  expect(returnedState.length).toBe(0);
});
