$(document).ready(function () {
    let $div = $("<div></div>");
    $("body").append($div);
    let $ul = $("<ul></ul>");
    $("body").append($ul);

    $("#textBtn").keyup(function () {
        $("#btnSubmit").removeAttr("disabled");
    })
    $("#btnSubmit").click(function () {
        // alert($("#textBtn").val());

        // let $h2 = $("<h2>hi!</h2>");
        // $($div).append($h2);
        // $($h2).on("mouseover", function(){
        //     $(this).css({
        //         "background-color": "red",
        //         "border": "1px",
        //         "border-radius": "2px"
        //     });
        event.preventDefault();
        let $li = $("<li></li>");
        let $submitText = $("#textBtn").val()
        $($li).append($submitText);
        $($ul).append($li);
        $($li).click(function(){
            var colorR = Math.floor((Math.random() * 256));
            var colorG = Math.floor((Math.random() * 256));
            var colorB = Math.floor((Math.random() * 256));
            $(this).css("color", "rgb(" + colorR + "," + colorG + "," + colorB + ")");
        })
        $($li).dblclick(function(){
            $(this).remove();
        })

    })
})