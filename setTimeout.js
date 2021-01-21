// timing

// setInterval, executes a function at xx milliseconds

// setTimeout, waits xx milliseconds to execute a function

// debounce is a way to throttle / limit / slow action items to limit the executions of typing events

// debounceFn();

// The purpose of having a debounce is to reduce the number of events being fired when a user types.

const debounce = (fn, time) => {
  let setTimeoutId;
  if (setTimeoutId) {
    clearTimeout(setTimeoutId);
  }
  setTimeoutId = setTimeout(() => {
    fn.apply(this, arguments);
    setTimeoutId = null;
  }, time);
}

// Implement Thruttle, fire the first item until the time is expired

const debounce = (fn, time) => {
  let setTimeoutId;
  if (setTimeoutId) {
    return;
  }
  setTimeoutId = setTimeout(() => {
    fn.apply(this, arguments);
    setTimeoutId = null;
  }, time);
}