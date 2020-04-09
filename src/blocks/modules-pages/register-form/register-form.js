function checkParams() {
    var region = $('#region').val();
    var city = $('#city').val();
    var name = $('#name').val();
    var mail = $('#mail').val();

    if (region.length != 0 && city.length != 0 && name.length != 0 && mail.length != 0) {
        $('#submit').removeAttr('disabled');
    } else {
        $('#submit').attr('disabled', 'disabled');
    }
}