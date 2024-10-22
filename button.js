
<html>
	<head>
		<title>Angular Button</title>
		<style>
			.btn {
				background-color: #4CAF50;
				border: none;
				color: white;
				padding: 15px 32px;
				text-align: center;
				text-decoration: none;
				display: inline-block;
				font-size: 16px;
				cursor: pointer;
			}
			
			.btn:hover {
				background-color: #3E8E41;
			}
		</style>
	</head>
	<body>
		<!-- Angular Button -->
		<button class="btn" (click)="onButtonClick()">Click me</button>
		
		<script>
			function onButtonClick() {
				// Perform action on button click
			}
		</script>
	</body>
</html>