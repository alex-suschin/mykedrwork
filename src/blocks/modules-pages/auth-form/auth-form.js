// function checkParams2() {
//     var mail2 = $('#mail2').val();
//     var pass = $('#pass').val();

//     if (mail2.length != 0 && pass.length != 0) {
//         $('#submit').removeAttr('disabled');
//     } else {
//         $('#submit').attr('disabled', 'disabled');
//     }
// }


// $.fn.hasAttr = function(name) {
//     return this.attr(name) !== undefined;
// };


(function($) {

    $(function() {

        $('.rf').each(function() {
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
                console.log(sizeEmpty);
                // Вешаем условие-тригер на кнопку отправки формы
                if (sizeEmpty > 0) {
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