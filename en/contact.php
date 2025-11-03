<?php

// Check if the form was submitted
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Sanitize and validate user input
    $name = filter_var($_POST['cf_name'], FILTER_SANITIZE_STRING);
    $email = filter_var($_POST['cf_email'], FILTER_SANITIZE_EMAIL);
    $subject = filter_var($_POST['cf_subject'], FILTER_SANITIZE_STRING);
    $message = filter_var($_POST['cf_message'], FILTER_SANITIZE_STRING);

    // Check if email is valid
    if (filter_var($email, FILTER_VALIDATE_EMAIL)) {
        $mailTo = 'training@easterbrook.at';

        // $prefixed_subject = 'Message from a site visitor ' . $name; // Prefixed subject line

        $body_message = 'From: ' . $name . "\n";
        $body_message .= 'E-mail: ' . $email . "\n";
        $body_message .= 'Subject: ' . $subject . "\n";
        $body_message .= 'Message: ' . $message;

        $headers = 'From: ' . $name . "\r\n";
        $headers .= 'Reply-To: ' . $email . "\r\n";

        // Attempt to send the email
        $mail_status = mail($mailTo, $subject, $body_message, $headers);

        if ($mail_status) {
            // Send a success message to the user
            echo '<script language="javascript" type="text/javascript">
                alert("Thank you for your message. We will contact you shortly.");
                window.location = "index.html";
            </script>';
        } else {
            // Send a failure message to the user
            echo '<script language="javascript" type="text/javascript">
                alert("Message failed. Please send an email to sdl@easterbrook.at");
                window.location = "index.html";
            </script>';
        }
    } else {
        // Invalid email, send a message to the user
        echo '<script language="javascript" type="text/javascript">
            alert("Invalid email address. Please check your input.");
            window.location = "index.html";
        </script>';
    }
} else {
    // Handle cases where the form wasn't submitted
    echo '<script language="javascript" type="text/javascript">
        alert("The form was not submitted properly.");
        window.location = "index.html";
    </script>';
}
?>
