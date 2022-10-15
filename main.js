url = "http://127.0.0.1:5000/getUrl"

function load() {
    $.post(
        url +
        "?data=" +
        JSON.stringify({
            word: "f",
        }),
        response
    );
}

function response(data) {
    console.log(data)
}