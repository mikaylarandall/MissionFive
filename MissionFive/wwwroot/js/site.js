
$("#btnTotal").click(function () {
    var input = parseInt($("#hours").val());

    var result = input * 100;
    $('#result').text("$" + result);
})



