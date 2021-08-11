$(() => {
    $("#QesForm").submit(function() {
        const question = $("#answer").val();
        $.post('/8ball', { "question": question })
            .done(reqeustSuccess)
            .fail(errorMsg);
        return false;
    });

    function reqeustSuccess(data) {
        $('#answer').val('Answer : '+ JSON.parse(data)).focus();
        $('#answer').keyup(function() {
            $(this).val('');
            $('#answer').off("keyup");
        });
    }
    function errorMsg(xhr, status, except) {
        console.log(xhr, status, except);
        $('#answer').val('Error occured!');
    }
});