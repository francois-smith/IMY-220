<!DOCTYPE html>
<html>
<head>
	<title>IMY 220 - Prac 2</title>
	<meta charset="utf-8" />
    <!-- Francois Smith u21649988-->
</head>
<body>
	<?php
		//Get number of rows on page load 
		$rows = isset($_GET["numRows"]) ? $_GET["numRows"] : null;
	?>
	
    <form action="" method="GET">
		<label for="nRows">Number of rows: </label>
		<input type="number" id="nRows" value="<?php echo $rows; ?>" name="numRows" />
		<input type="submit" name="" value="Change"/>
	</form>
	
    <?php
		echo "</br>";

		//====================== Part 1 ======================
		$file = fopen("names.txt", "r");
		$names = [];

		//Try and open the file
		if($file)
		{
			//Read the file into an array
			while (($line = fgets($file)) !== false) {
				array_push($names, $line);
			}
			//Close the file after names have been read
			fclose($file);
			$rows = isset($_GET["numRows"]) ? $_GET["numRows"] : null;

			echo "<table border='1'>";
				//Check if rows are set
				if($rows == null)
				{
					//If not populate data into single row
					echo "<tr>";
					for($i = 0; $i < count($names); $i++)
					{
						echo "<td>";
							echo $names[$i];
						echo "</td>";
					}
					echo "</tr>";
				}
				//If row amount is set
				else
				{
					//Set amount of items per row
					$instances = ceil(count($names)/$rows);
					//Used for getting next name
					$index = 0;

					//For amount of rows
					for($i = 0; $i < $rows; $i++)
					{	
						echo "<tr>";
						$j = 0;
						//For amount of items per row and if there are still names to be read
						while($j < $instances && $index < count($names))
						{
							echo "<td>";
								echo $names[$index];
							echo "</td>";
							$index++;
							$j++;
						}
						echo "</tr>";
					}
				}
			echo "</table>";
		} else {
			echo "<p>Error opening file</p>";
		} 

		echo "</br>";

		//====================== Part 2 =======================
		//Second form
		echo '
			<form action="" method="GET">
				<input type="hidden" id="" value="'.$rows.'" name="numRows" />
				<input type="submit" name="split" value="Split and create groups"/>
			</form>
		';
		
		echo "</br>";

		//Check if split should happen
		$split = isset($_GET["split"]) ? true : false;
		if($split)
		{
			//Create 2 groups from names array
			$middleIndex = floor((count($names)-1) / 2);
			$group1 = array_slice($names, 0, $middleIndex+1);
			$group2 = array_reverse(array_slice($names, $middleIndex+1));

			//Find largest array to know rows needed
			$rows = max(count($group1), count($group2));
			echo "<table border='1'>";
			for($i = 0; $i < $rows; $i++)
			{
				//Check if there are still names to be read
				echo "<tr><td>";
					if(isset($group1[$i]))
					{
						echo $group1[$i];
					}
					//If second array still has values left
					if(isset($group2[$i]))
					{
						echo " and ";
						echo $group2[$i];
					}
				echo "</td></tr>";
			}
			echo "</table>";
		}
	?>
</body>
</html>