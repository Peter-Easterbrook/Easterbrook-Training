<?php
// Simple hardening: input limits, header-injection protection, proper From header, basic sanitization.

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    exit;
}

function fail_redirect($msg) {
    $js = "alert('" . addslashes($msg) . "'); window.location='index.html';";
    echo "<script>{$js}</script>";
    exit;
}

// Read raw inputs
$raw_name    = $_POST['cf_name']    ?? '';
$raw_email   = $_POST['cf_email']   ?? '';
$raw_subject = $_POST['cf_subject'] ?? '';
$raw_message = $_POST['cf_message'] ?? '';

// Basic trim + strip tags
$name    = trim(strip_tags($raw_name));
$email   = trim($raw_email);
$subject = trim(strip_tags($raw_subject));
$message = trim(strip_tags($raw_message));

// Protect against header injection
foreach ([$name, $email, $subject] as $v) {
    if (preg_match("/[\r\n]/", $v)) {
        fail_redirect('Ungültige Eingabe.');
    }
}

// Length limits & validation
if ($name === '' || mb_strlen($name) > 100)       fail_redirect('Bitte geben Sie einen gültigen Namen ein (max 100 Zeichen).');
if (!filter_var($email, FILTER_VALIDATE_EMAIL))   fail_redirect('Ungültige E-Mail-Adresse.');
if ($subject === '' || mb_strlen($subject) > 150) fail_redirect('Bitte geben Sie einen gültigen Betreff ein (max 150 Zeichen).');
if ($message === '' || mb_strlen($message) > 5000) fail_redirect('Bitte geben Sie eine Nachricht ein (max 5000 Zeichen).');

// Prepare mail
$to = 'training@easterbrook.at';

$body  = "From: {$name}\n";
$body .= "E-mail: {$email}\n";
$body .= "Subject: {$subject}\n\n";
$body .= "Message: {$message}\n";
$body = wordwrap($body, 998);

// Ensure a valid hosted mailbox is used as the sender
$hostFrom = 'sdl@easterbrook.at'; // must exist on the hosting account
if (empty($hostFrom)) {
    $hostFrom = 'no-reply@easterbrook.at';
}

// Build headers using $hostFrom and user in Reply-To
$headers  = "From: Easterbrook Website <{$hostFrom}>\r\n";
$headers .= "Reply-To: {$email}\r\n";
$headers .= "MIME-Version: 1.0\r\n";
$headers .= "Content-Type: text/plain; charset=utf-8\r\n";

// send with envelope sender to improve deliverability
$additional_parameters = '-f' . $hostFrom;
$sent = mail($to, $subject, $body, $headers, $additional_parameters);

if (!$sent) {
    error_log('contact.php: mail() failed: ' . json_encode(error_get_last()));
}

if ($sent) {
    echo '<script>alert("Danke für die Nachricht. Wir werden Sie in Kürze kontaktieren."); window.location="index.html";</script>';
} else {
    echo '<script>alert("Nachricht fehlgeschlagen. Bitte senden Sie eine E-Mail an sdl@easterbrook.at"); window.location="index.html";</script>';
}
?>
