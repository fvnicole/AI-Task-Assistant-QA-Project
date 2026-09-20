## US01 — Create a Task
### As a user, I want to create a new task so that I can keep track of things I need to do.
- AC01.1 The user can enter a task description.
- AC01.2 The system must send a POST request to the API.
- AC01.3 The task must appear in the task list immediately.
- AC01.4 The task must be stored in the database with a unique ID.
- AC01.5 The UI must confirm successful creation.
- AC01.6 The title field must not be empty or contain only whitespace.
- AC01.7 The title field has no maximum length enforced by the frontend, backend, or database.
- AC01.8 The description field can be left empty when creating a task.
- AC01.9 The description field has no maximum length enforced by the frontend, backend, or database.

---

## US02 — Edit a Task
### As a user, I want to edit an existing task so that I can update its description or details.
- AC02.1 The user can modify the description of an existing task.
- AC02.2 The system must send a PUT request to the API.
- AC02.3 The updated task must appear in the UI without refresh.
- AC02.4 The database must reflect the updated description.
- AC02.5 The system must prevent saving empty descriptions.
- AC02.6 The title field, if included in the update, must not be empty or contain only whitespace.
- AC02.7 The title field has no maximum length enforced by the frontend, backend, or database.
- AC02.8 The description field, if included in the update, must not be empty or contain only whitespace.
- AC02.9 The description field has no maximum length enforced by the frontend, backend, or database.

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

---

## US14 — Register a New Account
### As a user, I want to create an account with my name, email, and password so that I can start using the app.
- AC05.1 The user can enter their name, email, and password on the registration screen.
- AC05.2 The system must send a POST request to the API with the entered data.
- AC05.3 On valid data, the API must create a new user and return a JWT token and the user's data.
- AC05.4 On successful registration, the UI must log the user in automatically and show the task list, without requiring a separate login step.
- AC05.5 The system must reject registration if an account with that email already exists, and show an error message without creating a duplicate user.
- AC05.6 The name field must not be empty or contain only whitespace.
- AC05.7 The name field has no maximum length enforced by the frontend, backend, or database.
- AC05.8 The email field must match a basic email pattern (text@text.text) to be accepted.
- AC05.9 The email field has no maximum length enforced by the frontend, backend, or database.
- AC05.10 The password field must be at least 8 characters long.
- AC05.11 The password field has no maximum length enforced by the frontend, backend, or database.

---

## US15 — Log In
### As a user, I want to log in with my email and password so that I can access my tasks.
- AC06.1 The user can enter their email and password on the login screen.
- AC06.2 The system must send a POST request to the API with the entered credentials.
- AC06.3 On valid credentials, the API must return a JWT token and the user's data.
- AC06.4 On successful login, the UI must store the session and show the user's task list without requiring a page reload.
- AC06.5 The session must persist across page reloads — the app must restore the logged-in state using the stored token, without asking the user to log in again.
- AC06.6 The email field must not be empty.
- AC06.7 The password field must not be empty.
- AC06.8 The email field has no maximum length enforced by the frontend, backend, or database.
- AC06.9 The password field has no maximum length enforced by the frontend, backend, or database.
- AC06.10 The frontend enforces a minimum password length of 8 characters before allowing the login form to be submitted, but the backend login endpoint itself does not enforce this minimum — a password shorter than 8 characters sent directly to the API is accepted for the check (it just fails authentication if it doesn't match the stored one). The 8-character minimum is only enforced by the backend on registration, not on login.
- AC06.11 On invalid credentials (wrong email or wrong password), the system must reject the login and show an error message to the user.
- AC06.12 The system must return the same generic error message ("credenciales invalidas" / "invalid credentials") whether the email does not exist or the password is incorrect, so as not to reveal which emails are registered.

---

