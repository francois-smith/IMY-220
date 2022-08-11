<?php
    $usersId = $_GET['userid'];
    $mysqli = mysqli_connect("localhost", "root", "", "test");

    if($mysqli->connect_error)
    {
        die("Connection failed: " . $mysqli->connect_error);
    }

    $sql = "SELECT * FROM users WHERE id = $usersId";
    $res = $mysqli->query($sql);
    $row = mysqli_fetch_array($res);

    echo "<h1>User Profile: {$row['name']}</h1>";
?>