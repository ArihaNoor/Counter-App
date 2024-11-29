# Counter Application with Database Integration  

## Table of Contents  
- [Overview](#overview)  
- [Features](#features)  

---

## Overview  
This Counter Application enables users to:  
- Increment and decrement a counter value.  
- Store counter increments in a database, including a timestamp and unique random name.  
- Display all stored counters.  
- Delete specific counters.  

---

## Features  
1. **Counter Increment**  
   - Increases the counter value by 1.  
   - Saves the incremented counter in the database with:  
     - Counter value.  
     - Timestamp of increment.  
     - A randomly generated name.  

2. **Counter Decrement**  
   - Decreases the counter value by 1.  
   - Deletes the most recent incremented counter record from the database.  

3. **Display All Saved Counters**  
   - Fetches and displays all counter records from the database.  

4. **Delete Specific Counter**  
   - Allows users to delete a specific counter record using a dedicated delete button.  
