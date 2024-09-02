import React from "react";

const JsFunction = () => {
  let result = 10;

  function demoFunction(resolve, reject, number) {
    setTimeout(() => {
      result = number;
      if (result > 10) {
        resolve("promise resolved");
      } else {
        reject("promise rejected");
      }
    }, 2000);
  }

  // implement a promise all

  //   The Promise.all() static method takes an iterable of promises as input and returns a single Promise. This returned promise fulfills when all of the input's promises fulfill (including when an empty iterable is passed), with an array of the fulfillment values. It rejects when any of the input's promises rejects, with this first rejection reason.

  const promiseObject = new Promise((resolve, reject) => {
    demoFunction(resolve, reject, 20);
  });

  const promiseObject2 = new Promise((resolve, reject) => {
    demoFunction(resolve, reject, 5);
  });

  const promiseObject3 = new Promise((resolve, reject) => {
    demoFunction(resolve, reject, 4);
  });

  Promise.all([promiseObject, promiseObject2, promiseObject3])
    .then((res) => {
      console.log(res);
    })
    .catch((err) => {
      console.log(err);
    });

  // Implement an Event Emitter

  class EventEmitter {
    listeners = [];

    on(name, callback) {
        if(typeof name === 'string' && typeof callback === "function"){
            this.listeners.push({name, callback})
        }

    }

    emit(eventName, data = []) {
      this.listeners
        .filter(({ name }) => name === eventName)
        .forEach(({ callback }) =>
          setTimeout(() => callback(...data), 0)
        );
    }

    off(eventName, callback){
        this.listeners = this.listeners.filter((listener) => !(listener.name === eventName && listener.callback === callback))
    }
    
    destroy(){
        this.listeners.length = 0
    }

  }

  const event = new EventEmitter();

  event.on("customEvent", () => {
    console.log("customEvent");
  });

  setTimeout(() => {
    event.emit("customEvent");
  }, 2000);

  return <></>;
};

export { JsFunction };
