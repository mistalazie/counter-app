document.getElementById('counter').addEventListener('click', function increase () {
    count += 1;
    document.getElementById('counter').innerHTML = count
})


let count = 0;

function increase () {
    count += 1;
    document.getElementById('counter').innerHTML = count
}

function decrease () {
    count -= 1;
    document.getElementById('counter').innerHTML = count
}

function reset () {
    count = 0
    document.getElementById('counter').innerHTML = count
}