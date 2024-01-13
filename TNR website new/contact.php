<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Retrieve form data
    $name = $_POST["name"];
    $email = $_POST["email"];
    $option = $_POST["option"];
    $message = $_POST["message"];

    // Your email address where you want to receive emails
    $to = "mysto407@gmail.com";

    // Subject of the email
    $subject = "Contact Form Submission from $name";

    // Email content
    $email_content = "Name: $name\n";
    $email_content .= "Email: $email\n";
    $email_content .= "Reason for Contacting: $option\n\n";
    $email_content .= "Message:\n$message";

    // Headers
    $headers = "From: $email";

    // Send email
    mail($to, $subject, $email_content, $headers);
}
?>
