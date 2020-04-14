function checkParams2() {
    var mail2 = $('#mail2').val();
    var pass = $('#pass').val();

    if (mail2.length != 0 && pass.length != 0) {
        $('#submit').removeAttr('disabled');
    } else {
        $('#submit').attr('disabled', 'disabled');
    }
}