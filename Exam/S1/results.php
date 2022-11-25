<?php
    // See all errors and warnings
    error_reporting(E_ALL);

    // Francois Smith u21649988
    // 51_Smith

    if(!isset($_SESSION)){
        
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
        <h1>The following details have been entered:</h1>
        <p>First name: <?php echo $_SESSION['fname']; ?></p>
        <p>Last name: <?php echo $_SESSION['lname']; ?></p>
        <p>Email: <?php echo $_SESSION['email']; ?></p>
        <p>Birthday: <?php echo $_SESSION['date']; ?></p>
        <form action="./index.php" method="POST">
            <input type="submit" value="Log Out" onclick="<?php session_destroy()?>"/>
        </form>
    </body>
</html>