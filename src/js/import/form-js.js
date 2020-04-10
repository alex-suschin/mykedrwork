setTimeout(function() {
    $('select, input[type=radio], input[type=checkbox], input[type=number]').styler();
}, 100)


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

$('input[type=tel]').bind("change keyup input click", function() {
    if (this.value.match(/[^\+0-9]/g)) {
        this.value = this.value.replace(/[^\+0-9]/g, '');
    }
});

$('input[type=tel]').on('focus', function() {
    if ($(this).val() == '') $(this).val('+7');
});

$('input[type=tel]').on('blur', function() {
    if ($(this).val() == '+7') $(this).val('');
});