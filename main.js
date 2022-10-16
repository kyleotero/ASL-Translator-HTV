var url = "http://127.0.0.1:5000/getUrl"
var index = 0
var vids = []
var words

function initial() {
    var input = document.getElementById("input")
    words = input.value.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g, "").split(" ")
    vids = []

    $.ajaxSetup({ async: false });
    for (var x = 0; x < words.length; x++) {
        $.post(
            url +
            "?data=" +
            JSON.stringify({
                word: words[x],
            }),
            response
        );
    }
    get()
}

function response(data) {
    vids.push(data)
    console.log(vids)
}

function get() {
    var current = document.getElementById("current")
    var source = document.getElementById("displayedVid")
    var video = document.getElementById("output")

    if (vids[index] == "Video cannot be found.") {
        current.innerHTML = "The given word, '" + words[index] + "' has no sign."
        source.src = ""
    } else {
        current.innerHTML = words[index].charAt(0).toUpperCase() + words[index].slice(1);
        source.src = vids[index]
    }
    video.load()
    video.play()
}

function right() {
    if (index == vids.length - 1) index = -1;
    index++
    get()
}

function left() {
    if (index != 0) {
        index--
        get()
    }
}