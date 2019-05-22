$('#enter').on('click', () => {
    // 讀兩個input值
    var n = $('#userInput').val()
    var m = $('#userInput2').val()
    var min = 1
    var max = 31
    if (isNaN(m)) {
        alert("認真看placeholder啦(つД`)ノ");
    }　
    else {　　　　
        //利用m值決定表格位置
        var ul = document.getElementById(m);
        var li = document.createElement("li");
        //生出按鈕
        var button = document.createElement("button");
        button.innerHTML = n;
        button.style = "margin-top:5px";
        li.appendChild(button);
        ul.appendChild(li);
        //根據上述按鈕寫按下去的function
        $(button).each(function() {
                $(this).click(function() {
                    $(this).closest('li').remove();
                })
            })
            //清空textbox
        $('#userInput').val('');
        $('#userInput2').val('');
    }

})
$('#img').on('click', () => {

    html2canvas($("table")[0], { width: 800 }).then(function(canvas) {
        console.log(canvas);
        saveAs(canvas.toDataURL(), 'Calendar.png');

    })

    function saveAs(uri, Calendar) {

        var link = document.createElement('a');

        if (typeof link.download === 'string') {

            link.href = uri;
            link.download = Calendar;

            //Firefox requires the link to be in the body
            document.body.appendChild(link);

            //simulate click
            link.click();

            //remove the link when done
            document.body.removeChild(link);

        } else {

            window.open(uri);

        }
    }
})