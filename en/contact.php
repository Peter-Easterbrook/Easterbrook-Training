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
        fail_redirect('Invalid input.');
    }
}

// Length limits & validation
if ($name === '' || mb_strlen($name) > 100)       fail_redirect('Please enter a valid name (max 100 characters).');
if (!filter_var($email, FILTER_VALIDATE_EMAIL))   fail_redirect('Invalid email address. Please check your input.');
if ($subject === '' || mb_strlen($subject) > 150) fail_redirect('Please enter a valid subject (max 150 characters).');
if ($message === '' || mb_strlen($message) > 5000) fail_redirect('Please enter a message (max 5000 characters).');

// Prepare mail
$to = 'training@easterbrook.at';

$body  = "From: {$name}\n";
$body .= "E-mail: {$email}\n";
$body .= "Subject: {$subject}\n\n";
$body .= "Message: {$message}\n";
$body = wordwrap($body, 998);

// Must be a valid mailbox on the hosting account
$hostFrom = 'sdl@easterbrook.at';

// Build headers using $hostFrom and user in Reply-To
$headers  = "From: Easterbrook Website <{$hostFrom}>\r\n";
$headers .= "Reply-To: {$email}\r\n";
$headers .= "MIME-Version: 1.0\r\n";
$headers .= "Content-Type: text/plain; charset=utf-8\r\n";

// send with envelope sender to improve deliverability
$sent = mail($to, $subject, $body, $headers, '-f' . $hostFrom);

if (!$sent) {
    error_log('en/contact.php: mail() failed: ' . json_encode(error_get_last()));
}

if ($sent) {
    echo '<script>alert("Thank you for your message. We will contact you shortly."); window.location="index.html";</script>';
} else {
    echo '<script>alert("Message failed. Please send an email to sdl@easterbrook.at"); window.location="index.html";</script>';
}
?>
