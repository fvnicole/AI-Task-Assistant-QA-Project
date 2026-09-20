## US01 — Create a Task
### As a user, I want to create a new task so that I can keep track of things I need to do.
- AC01.1 The user can enter a task description.
- AC01.2 The system must send a POST request to the API.
- AC01.3 The task must appear in the task list immediately.
- AC01.4 The task must be stored in the database with a unique ID.
- AC01.5 The UI must confirm successful creation.

## TS0201- TC01 — Happy Path - Create a task with valid description

**User Story:** US01  
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




## TS0201- TC02 – Attempt to create a task with empty description (negative)
**User Story:** US01  
**Objective:** 
**Preconditions:** -  
**Steps (summary):**

## TS0201- TC03 – minlength y maxlength
**User Story:** US01  
**Objective:** 
**Preconditions:** -  
**Steps (summary):**

## TS0201- TC04 – Blank spaces validation
**User Story:** US01  
**Objective:** 
**Preconditions:** -  
**Steps (summary):**

## TS0201- TC05 – Special Characters
**User Story:** US01  
**Objective:** 
**Preconditions:** -  
**Steps (summary):**
  
## TS0201- TC06 – Validate tag colors for Category
**User Story:** US01  
**Objective:** 
**Preconditions:** -  
**Steps (summary):**

## TS0201- TC07 – Validate tag colors for Priority
**User Story:** US01  
**Objective:** 
**Preconditions:** -  
**Steps (summary):**









