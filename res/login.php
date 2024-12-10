<!--Это нужно запустить у себя локально на сервере-->

<?php
    header('Content-type: application/json');
    $login=$_POST['login'];
    $pass=$_POST['pass'];
    if($pass=="12345"){
        echo '{"success": true, "message": "Добро пожаловать,' . $login.'"}';
    }
    else{
        echo '{"success": false, "message": "Неправильный пароль или логин"}';
    }
?>