import errorReducer from "../errorReducer";

test("errorReducer should initially be an empty array", () => {
  const action = {};
  const returnedState = errorReducer(undefined, action);
  expect(Array.isArray(returnedState)).toBe(true);
  expect(returnedState.length).toBe(0);
});

test("errorReducer should ignore irrelevant actions", () => {
    const action = {
        type: 'IGNORE_ME'
    };
    const returnedState = errorReducer(undefined, action);
    expect(returnedState.length).toBe(0)
});