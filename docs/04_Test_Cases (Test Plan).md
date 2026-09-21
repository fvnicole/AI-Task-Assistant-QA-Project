## TC01 — Create a Task
**User Story:** US01  
**Acceptance Criteria:** AC01.1 – AC01.5  
**Objective:** Validate that a user can create a task successfully.  
**Preconditions:** User is on the task creation screen.  
**Steps (summary):**
- Enter a valid task description
- Click “Create Task”
- Validate UI, API response, and SQL storage
**Expected Result:** Task is created, displayed, and stored correctly.


---

TC01 — Create a Task
Related User Story: US01
Related AC: AC01.1 – AC01.5

| Step | Action | Expected Result |
| --- | --- | --- |
| 1 | Open the task creation field | Field is visible |
| 2 | Enter a valid task description | Text is accepted |
| 3 | Click “Create Task” | POST request is sent |
| 4 | Check UI list | Task appears immediately |
| 5 | Validate API response | Status 201, JSON schema valid |
| 6 | Validate SQL | Task stored with unique ID |



TC02 — Edit a Task
Related User Story: US02
Related AC: AC02.1 – AC02.5

| Step | Action | Expected Result |
| --- | --- | --- |
| 1 | Select an existing task | Task is highlighted |
| 2 | Click “Edit” | Edit field appears |
| 3 | Modify description | Text is updated |
| 4 | Save changes | PUT request is sent |
| 5 | Check UI | Updated text appears without refresh |
| 6 | Validate SQL | Updated description stored |


TC03 — Complete a Task
Related User Story: US03
Related AC: AC03.1 – AC03.5


| Step | Action | Expected Result |
| --- | --- | --- |
| 1 | Select a task | Task is visible |
| 2 | Click “Complete” | Status changes |
| 3 | Check UI | Task appears visually completed |
| 4 | Validate API | PUT/PATCH request sent |
| 5 | Validate SQL | Status = completed |


TC04 — Delete a Task
Related User Story: US04
Related AC: AC04.1 – AC04.5


| Step | Action | Expected Result |
| --- | --- | --- |
| 1 | Select a task | Task is visible |
| 2 | Click “Delete” | Confirmation appears |
| 3 | Confirm deletion | DELETE request sent |
| 4 | Check UI | Task disappears |
| 5 | Validate SQL | Task removed |



TC06 — Summarize a Task Using AI
Related User Story: US06
Related AC: AC06.1 – AC06.5


| Step | Action | Expected Result |
| --- | --- | --- |
| 1 | Select a long task | Task is visible |
| 2 | Click “Summarize with AI” | AI request sent |
| 3 | Validate API | Status 200, JSON contains summary |
| 4 | Check UI | Summary displayed |
| 5 | Validate SQL | Summary stored in metadata table |


TC07 — Improve Task Description Using AI
Related User Story: US07
Related AC: AC07.1 – AC07.5

| Step | Action | Expected Result |
| --- | --- | --- |
| 1 | Select unclear task | Task is visible |
| 2 | Click “Improve with AI” | AI request sent |
| 3 | Validate API | Status 200, improved text returned |
| 4 | Check UI | Improved text replaces original |
| 5 | Validate SQL | Improved version stored |


TC08 — Classify a Task Using AI
Related User Story: US08
Related AC: AC08.1 – AC08.5

| Step | Action | Expected Result |
| --- | --- | --- |
| 1 | Select a task | Task is visible |
| 2 | Click “Classify with AI” | AI request sent |
| 3 | Validate API | Status 200, category returned |
| 4 | Check UI | Category displayed |
| 5 | Validate SQL | Category stored |


TC09 — Suggest Priority Using AI
Related User Story: US09
Related AC: AC09.1 – AC09.5

| Step | Action | Expected Result |
| --- | --- | --- |
| 1 | Select a task | Task is visible |
| 2 | Click “Suggest Priority” | AI request sent |
| 3 | Validate API | Status 200, priority returned |
| 4 | Check UI | Priority displayed |
| 5 | Validate SQL | Priority stored |



TC10 — SQL Validation

| Step | Action | Expected Result |
| --- | --- | --- |
| 1 | Run SELECT * FROM tasks | All tasks appear |
| 2 | Run JOIN users + tasks | Correct relationships |
| 3 | Validate AI metadata | Summary/classification present |
| 4 | Compare SQL vs API | Data matches |



TC11 — API CRUD Testing (Postman)

| Step | Action | Expected Result |
| --- | --- | --- |
| 1 | Send POST /tasks | Status 201 |
| 2 | Send GET /tasks | Task appears |
| 3 | Send PUT /tasks/{id} | Status 200 |
| 4 | Send DELETE /tasks/{id} | Status 204 |
| 5 | Run collection in Newman | All tests pass |


TC12 — AI Endpoint Testing (Postman)
| Step | Action | Expected Result |
| --- | --- | --- |
| 1 | Send POST /ai/summarize | Summary returned |
| 2 | Send POST /ai/classify | Category returned |
| 3 | Send POST /ai/priority | Priority returned |
| 4 | Validate JSON schema | All fields present |
| 5 | Validate error handling | Graceful fallback |



TC13 — Cypress UI Automation

| Step | Action | Expected Result |
| --- | --- | --- |
| 1 | Run create task test | Task created |
| 2 | Run edit task test | Task updated |
| 3 | Run delete task test | Task removed |
| 4 | Intercept API | Request validated |
| 5 | Intercept AI | Response validated |