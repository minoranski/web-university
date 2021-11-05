var flags = {
  _fio: false,
  _bday: false,
  _age: false,
  _mail: false,
  _telephone: false
};

var fio = $('#fio');
var email = $("#form-email");
var myform = $("#form");
var genderMale = $("#gender-male");
var genderFemale = $("#gender-female");
var age = $("#form-age");
var bday = $("#bday");
var telephone = $("#form-telephone");
var submit = $("#submit");

var truePhone = /^((8|\+7|\+3)[\- ]?)?(\(?\d{3}\)?[\- ]?)?[\d\- ]{7,10}$/;
var trueFio = /^([A-Za-zА-Яа-яёЁ]{2,30})\s([A-Za-zА-Яа-яёЁ]{2,30})\s([A-Za-zА-Яа-яёЁ]{2,30})$/;


fio.after("<div class='validation-feedback' id='fio-feedback'></div>");
email.after("<div class='validation-feedback' id='email-feedback'></div>");
bday.after("<div class='validation-feedback' id='bday-feedback'></div>");
telephone.after("<div class='validation-feedback' id='telephone-feedback'></div>");
age.after("<div class='validation-feedback' id='age-feedback'></div>");
submit.attr("disabled", true);

function disabledStatus() {
  let submitKey = false;
  for (const key in flags) {
    if (flags[key] == false) {
      submitKey = true;
    }
  }
  return submitKey;
}

//проверкак фио
fio.blur(function () {
  if (fio.val() === '' || fio.val() == null) {
    fio.css("border", "1px solid #dc3545");
    if (!$("#fio-feedback").hasClass("bad")) {
      $("#fio-feedback").addClass("bad");
    }
    $("#fio-feedback").html("Введите фио");
  } else if (!trueFio.test(fio.val())) {
    fio.css("border", "1px solid #dc3545");
    if (!$("#fio-feedback").hasClass("bad")) {
      $("#fio-feedback").addClass("bad");
    }
    $("#fio-feedback").html("Введите корректные фио");
  } else {
    fio.css("border", "1px solid #198754");
    $("#fio-feedback").html = "";
    flags["_fio"] = true;
  }
  submit.attr("disabled",disabledStatus());
});

//проверка почты
email.blur(function () {
  if (email.val() === '' || email.val() == null) {
    email.css("border", "1px solid #dc3545");
    if (!$("#email-feedback").hasClass("bad")) {
      $("#email-feedback").addClass("bad");
    }
    $("#email-feedback").html("Введите email");
  } else {
    email.css("border", "1px solid #198754");
    $("#email-feedback").html = "";
    flags["_mail"] = true;
  }
  submit.attr("disabled",disabledStatus());
});


// проверка даты рождения
bday.blur(function () {
  if (bday.val() === '' || bday.val() === null) {
    bday.css("border", "1px solid #dc3545");
    if (!$("#bday-feedback").hasClass("bad")) {
      $("#bday-feedback").addClass("bad");
    }
    $("#bday-feedback").html("Введите дату рождения");
  } else {
    bday.css("border", "1px solid #198754");
    $("#bday-feedback").html = "";
    flags["_bday"] = true;
  }
  submit.attr("disabled",disabledStatus());
});

// проверка телефона

telephone.blur(function () {
  if (telephone.val() == "" || telephone.val() == null) {
    telephone.css("border", "1px solid #dc3545");
    if (!$("#telephone-feedback").hasClass("bad")) {
      $("#telephone-feedback").addClass("bad");
    }
    $("#telephone-feedback").html("Введите номер телефона");
  } else if (truePhone.test(telephone.val()) != true) {
    // telephone.setCustomValidity("Введите корректный номер телефона");
    telephone.css("border", "1px solid #dc3545");
    if (!$("#telephone-feedback").hasClass("bad")) {
      $("#telephone-feedback").addClass("bad");
    }
    $("#telephone-feedback").html("Введите корректный номер телефона");
  } else {
    telephone.css("border", "1px solid #198754");
    $("#telephone-feedback").html = "";
    flags["_telephone"] = true;
  }
  submit.attr("disabled",disabledStatus());
});

// проверка возраста

age.blur(function () {
  if (age.val() == "-") {
    age.css("border", "1px solid #dc3545");
    if (!$("#age-feedback").hasClass("bad")) {
      $("#age-feedback").addClass("bad");
    }
    $("#age-feedback").html("Введите возраст");

  } else {
    age.css("border", "1px solid #198754");
    $("#age-feedback").html = "";
    flags["_age"] = true;
  }
  submit.attr("disabled",disabledStatus());
});
