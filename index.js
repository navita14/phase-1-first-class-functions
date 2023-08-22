function receivesAFunction(cb) {
    console.log(cb());
  }
  
receivesAFunction(function () {return "Spy" })

function returnsANamedFunction() {
    return function myFunc() {
        return "before all"
    };
}

function returnsAnAnonymousFunction() {
    return function () {}

}