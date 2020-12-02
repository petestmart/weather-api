import weatherDataReducer from "./errorReducer";

test("weatherDataReducer should initially be an empty array", () => {
  const action = {};
  const returnedState = weatherDataReducer(undefined, action);
  expect(Array.isArray(returnedState)).toBe(true);
  expect(returnedState.length).toBe(0);
});

test("weatherDataReducer should ignore irrelevant actions", () => {
  const action = {
    type: "IGNORE_ME",
  };
  const returnedState = weatherDataReducer(undefined, action);
  expect(returnedState.length).toBe(0);
});