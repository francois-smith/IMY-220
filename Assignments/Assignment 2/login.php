<?php
	// See all errors and warnings
	error_reporting(E_ALL);
	ini_set('error_reporting', E_ALL);

	$mysqli = mysqli_connect("localhost", "root", "", "dbuser");

	$email = isset($_POST["email"]) ? $_POST["email"] : null;
	$pass = isset($_POST["pass"]) ? $_POST["pass"] : null;
	$desc = isset($_POST["eventDescription"]) ? $_POST["eventDescription"] : null;
	$date = isset($_POST["eventDate"]) ? $_POST["eventDate"] : null;
	$file = isset($_FILES["picToUpload"]) ? $_FILES["picToUpload"] : null;
	$name = isset($_POST["eventName"]) ? $_POST["eventName"] : null;

	//Check if all fields have been set
	if($desc != null and $date != null and $file != null and $name != null)
	{
		$target_dir = "gallery/";
		$uploadOk = 1;

		//Check fole size
		if($_FILES['picToUpload']['size'][0] > 1048576)
		{
			echo showError("The file is too large");
			$uploadOk = 0;
		}	

		//Check mime type
		if($_FILES['picToUpload']['type'][0] != 'image/jpeg')
		{
			echo showError("The file is not an image");
			$uploadOk = 0;
		}

		//If all checks passed
		if($uploadOk == 1)
		{
			//Set target File Location and Name
			$target_file = $target_dir . basename($_FILES["picToUpload"]["name"][0]);

			//Check if the event name already exists before creating new event
			$res = $mysqli->query("SELECT * FROM tbevents WHERE name='".$name."'");
			if(mysqli_num_rows($res) > 0)
			{
				echo showError("Event Already Exists");
			}
			else
			{
				//Try and move file into target location
				if(move_uploaded_file($_FILES["picToUpload"]["tmp_name"][0], $target_file))
				{
					//Get user Id of user creating event
					$user_id;
					$query = "SELECT * FROM tbusers WHERE email = '$email'";
					$res = $mysqli->query($query);
					if($row = mysqli_fetch_array($res))
					{
						$user_id = $row['user_id'];
					}

					//Create event in database
					$query = "INSERT INTO tbevents (`user_id`, `name`, `description`, `date`) VALUES ('$user_id', '$name', '$desc', '$date');";
					$res = $mysqli->query($query);
					$event_id = $mysqli->insert_id;

					//Create gallery row in database
					$query = "INSERT INTO tbgallery (`event_id`, `image_name`) VALUES ('$event_id', '$target_file');";
					$mysqli->query($query);

					//Outpu success message
					echo'<div class="container">
						<div class="alert alert-success mt-3" role="alert">
							Event Successfully Created!
						</div>
					</div>';
				}
			}
		}
		//If error then output error message
		else 
		{
			echo showError("There was an error uploading your file");
		}
	}

	/**
	 * Prints an error message
	 */
	function showError($errorMessage)
	{
		return 
		'<div class="container">
			<div class="alert alert-danger mt-3" role="alert">
				'.$errorMessage.'
			</div>
		</div>';
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
						
				echo 
				"<div class='row eventsGallery'>
				<h3>UPCOMING EVENTS</h3>";
					$user_id;
					$query = "SELECT * FROM tbusers WHERE email = '$email'";
					$res = $mysqli->query($query);
					if($row = mysqli_fetch_array($res))
					{
						$user_id = $row['user_id'];
					}

					$query = "
						SELECT *
						FROM tbevents evt
						LEFT JOIN tbgallery gal ON gal.event_id = evt.event_id
						WHERE evt.user_id = '$user_id'
						";

					$res = $mysqli->query($query);
					while($row = mysqli_fetch_array($res))
					{
						echo "<div class='col-md-3 card'>
								<h5 class='card-title'>" . $row['date'] . "</h5>
								<img src='" . $row['image_name'] . "' class='card-img-top' alt='...'>
								<div class='card-body'>
									<h5 class='card-title'>" . $row['name'] . "</h5>
									<p class='card-text'>" . $row['description'] . "</p>
								</div>
						</div>";
					}
							
				echo "</div>";
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
