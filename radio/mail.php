<?php
if (empty($_SERVER['HTTP_X_REQUESTED_WITH']) || $_SERVER['HTTP_X_REQUESTED_WITH'] != 'XMLHttpRequest') {return;}

// проверка полей формы
if (!$_POST['name']) {
	echo "укажите ваше Имя";
	return;
} else {
	$name = $_POST['name'];
};
if (!$_POST['phone'] || !$_POST['email']) {
	if (!$_POST['phone']) {
		$phone = '_';
	} else {
		$phone = $_POST['phone'];
	};
	if (!$_POST['email']) {
		$mail = '_';
	} else {
		$mail = $_POST['email'];
	};
}
if (!$_POST['company-name']) {
	$company_name = '_';
} else {
	$company_name = $_POST['company-name'];
};
if (!$_POST['message']) {
	$msg = '_';
} else {
	$msg = $_POST['message'];
};
// перемешки ))
$to = 'ya.sergej20142014@yandex.ru';
$date = date('d.m.Y');
// $form_style = 'max-width:800px;margin:auto;background:#fff;border:4px solid #9a266a;color:#000;padding:50px 15px 15px;font-size:18px;';
$form_style = 'font-size:16px;';
$subject = 'Сообщение с сайта A1radio';
$message = '
<div style="'.$form_style.'">
    <h1 style="text-align:center;margin-bottom: 70px;">'.$subject.'</h1>
    <ul style="margin-bottom: 60px;font-weight: 300;margin-left:0;">
        <li>Имя: <b>'.$name.'</b></li>
        <li>Телефон: <b>'.$phone.'</b></li>
        <li>Е-майл: <b>'.$mail.'</b></li>
		<li>Компания: <b>'.$company_name.'</b></li>
		<li>Сообщение: <b>'.$msg.'</b></li>
	</ul>
    <div style="text-align:right;"><small>'.$date.'</small></div>
</div>
';

$headers  = "MIME-Version: 1.0\r\n"; 
$headers .= "Content-type: text/html; charset=utf-8\r\n";
$headers .= "From: ".$name."\r\n";

if (mail($to, $subject, $message, $headers)) {
    echo 'Ваше сообщение успешно отправленно';
} else {
    echo 'Ошибка отправки почты';
};
?>
