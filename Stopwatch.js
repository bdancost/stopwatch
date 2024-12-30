class Stopwatch {
  #elapsedTimeInSeconds = 0;
  #intervalId = null;

  start() {
    this.#intervalId = setInterval(() => {
      this.#elapsedTimeInSeconds++;
      console.log(this.elapsedTime);
    }, 1000);
  }

  stop() {
    clearInterval(this.#intervalId);
  }

  reset() {
    this.#elapsedTimeInSeconds = 0;
  }

  get elapsedTime() {
    return Stopwatch.formatTime(this.#elapsedTimeInSeconds);
  }

  static formatTime(timeInSeconds) {
    const hours = Math.floor(timeInSeconds / 3600);
    const minutes = Math.floor((timeInSeconds % 3600) / 60);
    const seconds = timeInSeconds - hours * 3600 - minutes * 60;

    return `${Stopwatch.zeroPadding(hours)}:${Stopwatch.zeroPadding(
      minutes
    )}:${Stopwatch.zeroPadding(seconds)}`;
  }

  static zeroPadding(originalNumber, desiredAmountDigits = 2) {
    let stringNumber = String(originalNumber);
    const zeroRequired = desiredAmountDigits - stringNumber.length;

    if (zeroRequired <= 0) {
      return stringNumber;
    }

    for (let counter = 0; counter < zeroRequired; counter++) {
      stringNumber = `0${stringNumber}`;
    }

    return stringNumber;
  }
}

const sw1 = new Stopwatch();
sw1.start();
