<?php
	if($_POST){
	    $name = $_POST['name'];
	    $email = $_POST['email'];
	    $message = $_POST['message'];
			$phone = $_POST['phone'];

	    mail("zhagness@gmail.com", "Mensaje desde Sagot Page:" .$email, $phone, $message);
	}
?>
