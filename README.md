Counter Application with Database Integration
Objective:
Create a counter application that increments and decreases a counter value, while interacting with a database to store and manage the counter’s history. The application should include features to display all saved counters and provide the ability to delete specific counters.
Requirements:
1.	Counter Increment:
o	Each time the counter is increased, the application should:
	Increment the counter value.
	Save the incremented counter to the database with the following details:
	The timestamp of the increment (the exact time when the increment happens).
o	The saved counter entry should store the counter’s value, the random name, and the timestamp of the increment.
2.	Counter Decrement:
o	When the counter is decremented, the application should:
	Decrement the counter value.
	Remove the previously saved counter record from the database (the most recent incremented counter record should be deleted).
3.	Display All Saved Counters:
o	Provide a feature (e.g., a button) that retrieves and displays all saved counter records from the database.
4.	Delete Counter:
o	For each saved counter, include a delete button that allows the user to delete that specific counter record from the database                      .
