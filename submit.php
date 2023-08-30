<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
  // Get the form data
  $name = $_POST["name"];
  $email = $_POST["email"];
  $password = $_POST["password"];

  // Validate the form data
  if (empty($name) || empty($email) || empty($password)) {
    echo "Please fill out all fields.";
    exit;
  }

  // Connect to the database
  $mysqli = new mysqli("localhost", "root", "password", "party");

  // Check if the user already exists
  $sql = "SELECT * FROM users WHERE email = ?";
  $stmt = $mysqli->prepare($sql);
  $stmt->bind_param("s", $email);
  $stmt->execute();
  $result = $stmt->get_result();
  if ($result->num_rows > 0) {
    echo "A user with that email address already exists.";
    exit;
  }

  // Insert the new user into the database
  $sql = "INSERT INTO users (name, email, password) VALUES (?, ?, ?)";
  $stmt = $mysqli->prepare($sql);
  $stmt->bind_param("sss", $name, $email, $password);
  $stmt->execute();

  // Redirect the user to the login page
  header("Location: login.php");
  exit;
}
?>

<!DOCTYPE html>
<html>
<head>
  <title>Party Signup Page</title>
</head>
<body>
  <h1>Party Signup Page</h1>
  <form action="submit.php" method="post">
    <label for="name">Name:</label><br>
    <input type="text" id="name" name="name"><br>
    <label for="email">Email:</label><br>
    <input type="email" id="email" name="email"><br>
    <label for="password">Password:</label><br>
    <input type="password" id="password" name="password"><br><br>
    <input type="submit" value="Sign Up">
  </form>
</body>
</html>