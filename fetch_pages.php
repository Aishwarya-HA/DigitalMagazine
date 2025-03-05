
<?php
$servername = "localhost";
$username = "root";
$password = ""; // If you set a password, add it here
$dbname = "MagazineDB";

// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);

// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

// Fetch all pages
$sql = "SELECT page_number, image_url FROM magazine_pages ORDER BY page_number";
$result = $conn->query($sql);

$pages = [];
if ($result->num_rows > 0) {
    while ($row = $result->fetch_assoc()) {
        $pages[] = $row;
    }
}

// Send JSON response
echo json_encode($pages);

$conn->close();
?>
