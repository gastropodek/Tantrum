function helloFunction(target) {
    document.getElementById("hello").innerHTML = getHelloMessage(target);
}

function getHelloMessage(target) {
    return "Hello " + target + "!";
}