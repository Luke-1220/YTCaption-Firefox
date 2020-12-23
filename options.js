$(function(){
    //保存ボタン
    $("#save").click(function () {
        save();
    });

    $("#previewbtn").click(function () {
        save();
        preview();
        location.reload();
    });

    //初期値セット
    $("input[type='text']").each( function( index, element ){
        const id = $(element).attr("id");
        if (localStorage[id]) {
            $(element).val(localStorage[id]);
        };
    });
    preview();
    
})

function save(){
    $("input[type='text']").each( function( index, element ){
        const value = $(element).val();
        const id = $(element).attr("id");
        localStorage[id] = value;
        console.log($(element).val());
        console.log($(element).attr("id"));
    });
}

function preview(){
    const txt = $("#preview").val();
    if (txt) {
        $("#caption").text(txt);    
    }else{
        $("#caption").text("This is a Sample. これはサンプルです。");    
    }

    $("input[type='text']").each( function( index, element ){
        const value = $(element).val();
        const id = $(element).attr("id");
        const div = document.getElementById("style");
        var element = document.createElement('style');
        element.innerHTML = ".ytp-caption-segment {"+id+": "+value+" !important;}";
        div.appendChild(element);
    });
}