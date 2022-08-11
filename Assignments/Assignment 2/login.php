<?php
	// See all errors and warnings
	error_reporting(E_ALL);
	ini_set('error_reporting', E_ALL);

	$mysqli = mysqli_connect("localhost", "root", "", "dbuser");

	$email = isset($_POST["email"]) ? $_POST["email"] : null;
	$pass = isset($_POST["pass"]) ? $_POST["pass"] : null;

	if($_SERVER['REQUEST_METHOD'] == 'POST') {
		$userEmail = isset($_POST["email"]) ? $_POST["email"] : null;
		$userPass = isset($_POST["pass"]) ? $_POST["pass"] : null;
		$desc = isset($_POST["eventDescription"]) ? $_POST["eventDescription"] : null;
		$date = isset($_POST["eventDate"]) ? $_POST["eventDate"] : null;
		$files = isset($_POST["picToUpload[]"]) ? $_POST["picToUpload[]"] : null;
		$name = isset($_POST["eventName"]) ? $_POST["eventName"] : null;

		if($desc != null and $date != null and $files != null and $name != null){
			if($_FILES['name']['size'] > 1048576){
				
			}
		}
	}
?>

<!DOCTYPE html>
<html>
<head>
	<title>IMY 220 - Assignment 2</title>
	<meta charset="utf-8" />
	<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.0/dist/css/bootstrap.min.css" integrity="sha384-KyZXEAg3QhqLMpG8r+8fhAXLRk2vvoC2f3B09zVXn8CA5QIVfZOJ3BCsw2P0p/We" crossorigin="anonymous">
	<link rel="stylesheet" type="text/css" href="style.css" />
	<meta charset="utf-8" />
	<meta name="author" content="Name Surname">
	<!-- Francois Smith u21649988 -->
</head>
<body>
	<div class="container">
		<?php 
			$query = "SELECT * FROM tbusers WHERE email = '$email' AND password = '$pass'";
			$res = $mysqli->query($query);
			if($row = mysqli_fetch_array($res))
			{
				echo 	"<table class='table table-bordered mt-3'>
							<tr>
								<td>Name</td>
								<td>" . $row['name'] . "</td>
							<tr>
							<tr>
								<td>Surname</td>
								<td>" . $row['surname'] . "</td>
							<tr>
							<tr>
								<td>Email Address</td>
								<td>" . $row['email'] . "</td>
							<tr>
							<tr>
								<td>Birthday</td>
								<td>" . $row['birthday'] . "</td>
							<tr>
						</table>";
						

				echo 	"<form action='' method='POST' enctype='multipart/form-data'>
							<div class='form-group'>
								
								<label for='eventName'>Event Name:</label><br>
								<input type='text' class='form-control' name='eventName' /><br>								
								<label for='eventDescription'>Event Description:</label><br>
								<input type='text' class='form-control' name='eventDescription' /><br>

								<label for 'eventDate'>Event date:</label><br>
								<input type='date' class='form-control' name='eventDate' /><br>	

								<input type='file' class='form-control' name='picToUpload[]' id='picToUpload' multiple='multiple' /><br/>		
								
								<input type='hidden' name='email' value='$email' />

								<input type='hidden' name='pass' value='$pass' />

								<input type='submit' class='btn-standard' value='Upload event' name='submit' />
							</div>
					  	</form>";				
			}//end if

			else
			{
				echo '<div class="alert alert-danger mt-3" role="alert">
						You are not registered on this site!
					</div>';
			}//end else
		?>
	</div>
</body>
</html>
