var url = "http://127.0.0.1:5000/getUrl"
var vids

function load() {
    var input = document.getElementById("input")
    var words = input.value.split(" ")
    vids = new Array(words.length)

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
}

function response(data) {
    vids.push(data)
    console.log(vids)
}