import weatherDataReducer from './weatherDataReducer';

test('weatherDataReducer should initially be an empty array', () => {
    const action = {};
    const returnedState = weatherDataReducer(undefined, action);
    expect(Array.isArray(returnedState)).toBe(true);
    expect(returnedState.length).toBe(0);
});