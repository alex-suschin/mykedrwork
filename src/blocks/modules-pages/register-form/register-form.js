// function checkParams() {
//     var region = $('#region').val();
//     var city = $('#city').val();
//     var name = $('#name').val();
//     var mail = $('#mail').val();

//     if (region.length != 0 && city.length != 0 && name.length != 0 && mail.length != 0) {
//         $('#submit').removeAttr('disabled');
//     } else {
//         $('#submit').attr('disabled', 'disabled');
//     }
// }





(function($) {

    $(function() {

        $('.rf2').each(function() {
            // Объявляем переменные (форма и кнопка отправки)
            var form = $(this),
                btn = form.find('#submit');

            // Добавляем каждому проверяемому полю, указание что поле пустое
            form.find('.rfield').addClass('empty_field');

            // Функция проверки полей формы
            function checkInput() {
                form.find('.rfield').each(function() {
                    if ($(this).val() != '') {
                        // Если поле не пустое удаляем класс-указание
                        $(this).removeClass('empty_field');
                    } else {
                        // Если поле пустое добавляем класс-указание
                        $(this).addClass('empty_field');
                    }
                });
            }

            // Функция подсветки незаполненных полей

            function lightEmpty() {
                form.find('.empty_field').css({ 'border-color': '#DC3545' });
                // Через полсекунды удаляем подсветку
                setTimeout(function() {
                    form.find('.empty_field').removeAttr('style');
                }, 500);
            }

            // Проверка в режиме реального времени
            setInterval(function() {
                // Запускаем функцию проверки полей на заполненность
                checkInput();
                // Считаем к-во незаполненных полей
                var sizeEmpty = form.find('.empty_field').length;
                var checkFlag = form.find('#agree').prop("checked");
                console.log(sizeEmpty);
                console.log(checkFlag);
                // Вешаем условие-тригер на кнопку отправки формы

                if (sizeEmpty > 0 && checkFlag === false) {
                    btn.attr('disabled', 'disabled');
                } else {
                    btn.removeAttr('disabled')
                }
            }, 500);

            // Событие клика по кнопке отправить
            btn.click(function() {
                if ($(this).hasClass('disabled')) {
                    // подсвечиваем незаполненные поля и форму не отправляем, если есть незаполненные поля
                    lightEmpty();
                    return false
                } else {
                    // Все хорошо, все заполнено, отправляем форму
                    form.submit();
                }
            });
        });
    });

})(jQuery);