## US01 — Create a Task
### As a user, I want to create a new task so that I can keep track of things I need to do.
- AC01.1 The user can enter a task description.
- AC01.2 The system must send a POST request to the API.
- AC01.3 The task must appear in the task list immediately.
- AC01.4 The task must be stored in the database with a unique ID.
- AC01.5 The UI must confirm successful creation.

---

## US02 — Edit a Task
### As a user, I want to edit an existing task so that I can update its description or details.
- AC02.1 The user can modify the description of an existing task.
- AC02.2 The system must send a PUT request to the API.
- AC02.3 The updated task must appear in the UI without refresh.
- AC02.4 The database must reflect the updated description.
- AC02.5 The system must prevent saving empty descriptions.

---

## US03 — Complete a Task
### As a user, I want to mark a task as completed so that I can track my progress.
- AC03.1 The user can mark a task as completed.
- AC03.2 The UI must visually differentiate completed tasks.
- AC03.3 The system must send a PUT/PATCH request to update status.
- AC03.4 The database must store the completed status.
- AC03.5 Completed tasks must remain visible.

---

## US04 — Delete a Task
### As a user, I want to delete a task so that I can remove items I no longer need.
- AC04.1 The user can delete a task.
- AC04.2 The system must send a DELETE request.
- AC04.3 The task must disappear from the UI immediately.
- AC04.4 The database must remove the record.
- AC04.5 The system must prevent accidental deletion.

---

## US05 — View All Tasks
### As a user, I want to see a list of all my tasks so that I can understand what I need to do.
- AC05.1 The system must display all tasks retrieved from the API.
- AC05.2 The UI must show tasks in a clear list format.
- AC05.3 The system must handle empty lists gracefully.
- AC05.4 The system must refresh the list after CRUD operations.
- AC05.5 The list must match the database content.


---

## US06 — Summarize a Task Using AI
### As a user, I want the AI to summarize a long task description so that I can quickly understand its main idea.
- AC06.1 The user can request an AI summary.
- AC06.2 The system must send a POST request to the AI endpoint.
- AC06.3 The AI response must be displayed in the UI.
- AC06.4 The summary must be stored in the database.
- AC06.5 The system must handle AI errors gracefully.

---

## US07 — Improve Task Description Using AI
### As a user, I want the AI to rewrite or improve unclear task descriptions so that they become more actionable.
- AC07.1 The user can request an improved description.
- AC07.2 The system must send a POST request to the AI endpoint.
- AC07.3 The improved description must replace the original.
- AC07.4 The database must store the improved version.
- AC07.5 The system must prevent overwriting with empty AI responses.



## US08 - Classify a Task Using AI
### As a user, I want the AI to classify my task (e.g., work, personal, urgent) so that I can organize my tasks better
- AC08.1 The user can request AI classification.
- AC08.2 The system must send a POST request to the AI endpoint.
- AC08.3 The classification must appear in the UI.
- AC08.4 The classification must be stored in the database.
- AC08.5 The system must support multiple categories (work, personal, urgent, etc.).

## US09 — Suggest Priority Using AI
### As a user, I want the AI to suggest a priority level (high, medium, low) so that I know which tasks to focus on first.
- AC09.1 The user can request AI priority suggestion.
- AC09.2 The system must send a POST request to the AI endpoint.
- AC09.3 The priority must appear in the UI.
- AC09.4 The priority must be stored in the database.
- AC09.5 The system must validate that priority is one of: high, medium, low.

## US10 — Validate Task Data in SQL
### As a QA engineer, I want to validate task data in a local SQL database so that I can ensure data consistency.
- AC10.1 The database must contain all tasks created via API/UI.
- AC10.2 SQL queries must return correct task status and metadata.
- AC10.3 JOIN queries must correctly link users and tasks.
- AC10.4 AI metadata must be stored in a separate table or dataset.
- AC10.5 SQL validation must match API responses.

## US11 — Test CRUD API Endpoints
### As a QA engineer, I want to test the API endpoints for creating, editing, listing, and deleting tasks so that I can verify backend functionality.
- AC11.1 All CRUD endpoints must return valid HTTP status codes.
- AC11.2 API responses must follow the expected JSON schema.
- AC11.3 API must reject invalid payloads.
- AC11.4 API chaining must work (create → update → delete).
- AC11.5 API tests must run via Postman and Newman.

## US12 — Test AI Endpoints
### As a QA engineer, I want to test AI endpoints (summarize, classify, priority, rewrite) so that I can validate AI behavior and responses.
- AC12.1 AI endpoints must return valid JSON responses.
- AC12.2 AI responses must be validated for content.
- AC12.3 AI errors must be handled gracefully.
- AC12.4 AI tests must run via Postman and Cypress intercept.
- AC12.5 AI responses must be stored in the database.

## US13 — Automate UI Flows with Cypress
### As a QA engineer, I want to automate UI flows so that I can ensure the application works correctly across different scenarios.
- AC13.1 Cypress must automate all CRUD flows.
- AC13.2 Cypress must intercept API and AI calls.
- AC13.3 Cypress tests must validate UI updates.
- AC13.4 Cypress must generate evidence (screenshots/videos).
- AC13.5 Cypress tests must run locally without backend changes.






## US03 — Field Validation on Task Creation/Edit
### As a user, I want the system to enforce sensible limits on task fields so that the data I save stays valid.
- AC03.1 The title field must not be empty or contain only whitespace.
- AC03.2 The title field has no maximum length enforced by the frontend, backend, or database.
- AC03.3 The description field can be left empty when creating a task.
- AC03.4 The description field must not be empty or contain only whitespace when editing an existing task, if the field is included in the update request.
- AC03.5 The description field has no maximum length enforced by the frontend, backend, or database.

---

## US04 — Field Validation on Account Registration
### As a user, I want the system to enforce sensible limits on my account fields so that registration data stays valid.
- AC04.1 The name field must not be empty or contain only whitespace.
- AC04.2 The name field has no maximum length enforced by the frontend, backend, or database.
- AC04.3 The email field must match a basic email pattern (text@text.text) to be accepted.
- AC04.4 The email field has no maximum length enforced by the frontend, backend, or database.
- AC04.5 The password field must be at least 8 characters long.
- AC04.6 The password field has no maximum length enforced by the frontend, backend, or database.

---
