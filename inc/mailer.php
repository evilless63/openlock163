<?php

  $to = "vitaliy030589@gmail.com";
  $subject = "Заявка с Сайта 'Вскрытие замков в Самаре' ";
  $message = $_POST['callNumber'];
  $headers = "From: vskrytieZamkov <vskrytieZamkov@gmail.com>\r\nContent-type: text/plain; charset=utf-8 \r\n";
  mail ($to, $subject, $message, $headers);
  
  
  # @to - номер получателя, например: 79221111111
# @msg - сообщение в кодировке windows-1251
# @login - логин на веб-сервисе websms.ru
# @password - пароль на веб-сервисе websms.ru

$admin = '79610832317';
$clientnumber = 'Клиент с Сайта: '.$_POST['callNumber'];
$login = 'Openlock163';
$password = 'Itsite123';
send_sms($admin, $clientnumber, $login, $password);


function send_sms($admin, $clientnumber, $login, $password)
{
$u = 'http://cab.websms.ru/http_in6.asp';
$ch = curl_init();
curl_setopt($ch, CURLOPT_HEADER, 0);
curl_setopt($ch, CURLOPT_TIMEOUT, 10);
curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1);
curl_setopt($ch, CURLOPT_POST, 1);
curl_setopt($ch, CURLOPT_POSTFIELDS,
'Http_username='.urlencode($login).'&Http_password='.urlencode($password).'&Phone_list='.$admin.'&Message='.urlencode($clientnumber));
curl_setopt($ch, CURLOPT_URL, $u);
$u = trim(curl_exec($ch));
curl_close($ch);
preg_match("/message_id\s*=\s*[0-9]+/i", $u, $arr_id );
$id = preg_replace("/message_id\s*=\s*/i", "", @strval($arr_id[0]) );
return $id;
}