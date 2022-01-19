class Logger {
  constructor() {
    this.messageLogs = new Map();
  }
  shouldPrintMessage = function (timestamp, message) {
    if (!this.messageLogs.has(message)) {
      this.messageLogs.set(message, timestamp);
      return true;
    }
    const lastTimeSubmitted = this.messageLogs.get(message);
    const timeExceeded = lastTimeSubmitted + 10;
    if (timeExceeded > timestamp) return false;
    this.messageLogs.set(message, timestamp);
    return true;
  }
}

/*
  time: O(n)
  space: O(n)
*/