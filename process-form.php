<?php
// Replace these variables with your actual database connection info from GoDaddy:
$servername = "localhost";     // e.g., "localhost" or a specific host address provided by GoDaddy
$username   = "root";  // Your database username
$password   = "";  // Your database password
$dbname     = "ledger_db";         // The database name you created

// Create a connection using MySQLi
$conn = new mysqli($servername, $username, $password, $dbname);

// Check the connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

// Process form submission if the request method is POST
if ($_SERVER["REQUEST_METHOD"] === "POST") {
    // Sanitize and assign form fields (you can also use filter_input for additional security)
    $name    = $conn->real_escape_string($_POST["name"]);
    $phone   = $conn->real_escape_string($_POST["phone"]);
    $email   = $conn->real_escape_string($_POST["email"]);
    $company = $conn->real_escape_string($_POST["company"]);
    $message = $conn->real_escape_string($_POST["message"]);

    // Prepare the SQL INSERT query
    $sql = "INSERT INTO inquiries (name, phone, email, company, message, created_at)
            VALUES ('$name', '$phone', '$email', '$company', '$message', NOW())";

    // Execute the query and check for success
    if ($conn->query($sql) === TRUE) {
        echo "<p>Thank you, $name! Your message has been recorded successfully.</p>";
        // Optionally, you can redirect to a thank-you page:
        // header("Location: thank-you.html");
        // exit;
    } else {
        echo "<p>Error: " . $sql . "<br>" . $conn->error . "</p>";
    }
}

// Close the database connection
$conn->close();
?>
