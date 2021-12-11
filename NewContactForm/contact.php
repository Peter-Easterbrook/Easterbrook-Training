<?php

$name = $_POST['cf_name'];
$email = $_POST['cf_email'];
$message = $_POST['cf_message'];

$mailTo = 'training@easterbrook.at';
$subject = 'Message from '.$name;

$body_message = 'From: '.$name."\n";
$body_message .= 'E-mail: '.$email."\n";
$body_message .= 'Message: '.$message;

// $headers = 'From: '.$name."\r\n";
// $headers .= 'Reply-To: '.$email."\r\n";

$mail_status = mail($mailTo, $subject, $body_message);

	if ($mail_status) { ?>
	<script language="javascript" type="text/javascript">
		alert('Danke f&uuml;r die Nachricht. Wir werden Sie in K&uuml;rze kontaktieren.');
		window.location = 'index.html';
	</script>
<?php
}
else { ?>
	<script language="javascript" type="text/javascript">
		alert('Nachricht fehlgeschlagen. Bitte senden Sie eine E-Mail an training@easterbrook.at');
		window.location = 'index.html';
	</script>
<?php
}
?>