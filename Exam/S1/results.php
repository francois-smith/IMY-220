<?php
    session_start();
    error_reporting(E_ALL);

    // Francois Smith u21649988
    // 51_Smith

    if (isset($_GET['fname'])) {
        $_SESSION['fname'] = $_GET['fname'];
    }
    if (isset($_GET['lname'])) {
        $_SESSION['lname'] = $_GET['lname'];
    }
    if (isset($_GET['email'])) {
        $_SESSION['email'] = $_GET['email'];
    }
    if (isset($_GET['date'])) {
        $_SESSION['date'] = $_GET['date'];
    }
    
    if(isset($_POST['SubmitButton'])){ 
        session_destroy();
        header("Location: index.php");
    }   
    
    function renderDetails(){
        echo "<p>The following details have been entered: </p>";
        echo "<p>First name: " . $_SESSION['fname'] . "</p>";
        echo "<p>Last name: " . $_SESSION['lname'] . "</p>";
        echo "<p>Email: " . $_SESSION['email'] . "</p>";
        echo "<p>Birthday: " . $_SESSION['date'] . "</p>";
        echo "<form action='' method='POST'>";
        echo "<input type='submit' name='SubmitButton' value='Log Out'/>";
        echo "</form>";
    }
?>

<!DOCTYPE html>
<html>
    <head>
        <meta charset="UTF-8">
        <title>IMY 220 Exam - S1</title>
        <meta name="author" content="Francois Smith">
    </head>
    <body>
        <?php 
            if(isset($_SESSION['fname']) && isset($_SESSION['lname']) && isset($_SESSION['email']) && isset($_SESSION['date'])) {
                renderDetails();
            } else {
                echo "<h1>You are not logged in</h1>";
            }
        ?>
    </body>
</html>