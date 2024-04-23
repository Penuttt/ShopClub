<?php

$firstname = $_POST['firstName'];
$lastname = $_POST['lastName'];
$email = $_POST['email'];
$password = $_POST['password'];


$servername = "root"; 
$db_password = "password"; 
$dbname = "email"; 

$conn = new mysqli($servername, $username, $db_password, $dbname);

if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

$password_hash = password_hash($password, PASSWORD_BCRYPT);

$sql = "INSERT INTO register (firstname, lastname, email, password_hash) VALUES ('$firstname', '$lastname', '$email', '$password_hash')";


if ($conn->query($sql) === TRUE) {
    echo json_encode(["success" => true, "message" => "New record created successfully"]);
} else {
    echo json_encode(["success" => false, "message" => "Error: " . $sql . "<br>" . $conn->error]);
}

$conn->close();
?>
