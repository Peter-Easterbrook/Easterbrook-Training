<?php

$name = $_POST['cf_name'];
$email = $_POST['cf_email'];
$subject = $_POST['cf_subject'];
$message = $_POST['cf_message'];

$mailTo = 'sdl@easterbrook.at';
$subject = 'Message from a site visitor '.$name;

$body_message = 'From: '.$name."\n";
$body_message .= 'E-mail: '.$email."\n";
$body_message .= 'Subject: '.$subject."\n";
$body_message .= 'Message: '.$message;

$headers = 'From: '.$name."\r\n";
$headers .= 'Reply-To: '.$email."\r\n";

$mail_status = mail($mailTo, $subject, $body_message, $headers);

	if ($mail_status) { ?>
	<script language="javascript" type="text/javascript">
		alert('Danke für die Nachricht. Wir werden Sie in Kürze kontaktieren.');
		window.location = 'index.html';
	</script>
<?php
}
else { ?>
	<script language="javascript" type="text/javascript">
		alert('Nachricht fehlgeschlagen. Bitte senden Sie eine E-Mail an sdl@easterbrook.at');
		window.location = 'index.html';
	</script>
<?php
}
?>