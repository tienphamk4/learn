
function validator(option) {
    var form = document.querySelector(option.form_id);

    // huy su kien mac dich khi bam nut
    form.onsubmit = function (e) {
        e.preventDefault();

        // validate tat ca
        var isValid = true;
        option.rules.forEach(rule => {
            if (!validate(rule)) {
                isValid = false;
            }
        })
        if (isValid) {
            alert('Gửi thành công')
        }
    }

    option.rules.forEach(rule => {
        var input = form.querySelector(rule.validId);
        input.onblur = function () {
            validate(rule)
        }
        input.oninput = function () {
            var message = input.parentElement.querySelector('.form-message')
            message.textContent = ''
        }
    })

    function validate(rule) {
        var input = form.querySelector(rule.validId);
        var parent = input.parentElement;
        var message = parent.querySelector('.form-message');
        var error = rule.check(input.value)

        if (error) {
            message.textContent = error;
            input.classList.add('invalid')
            return false;
        } else {
            message.textContent = '';
            input.classList.remove('invalid')
            return true;
        }
    }
}



validator.isRequired = function (validId, name) {
    return {
        validId: validId,
        check: function (value) {
            return value ? undefined : 'Vui lòng nhập ' + name;
        }
    }
}

validator.isEmail = function (emailId) {
    return {
        validId: emailId,
        check: function (value) {
            var regex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
            return regex.test(value) ? undefined : 'Vui lòng nhập đúng địa chỉ email'
        }
    }
}