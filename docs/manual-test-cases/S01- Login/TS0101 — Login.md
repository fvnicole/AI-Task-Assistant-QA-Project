
## TS0101- TC01 — Happy Path - Log in with a valid Email and Password

**User Story:** US015  
**Objective:** Validate that a user can create a task successfully.  
**Preconditions:** - The user has a valid account. - User is on the task creation screen.  
**Steps (summary):**

| Step | Action | Expected Result |
| --- | --- | --- |
| 1 | Open the task creation field | Field is visible |
| 2 | Enter a valid task description | Text is accepted |
| 3 | Click “Create Task” | POST request is sent |
| 4 | Check UI list | Task appears immediately |
| 5 | Validate API response | Status 201, JSON schema valid |
| 6 | Validate SQL | Task stored with unique ID |
