
## TS0101- TC01 — Happy Path - Log in with a valid Email and Password

**User Story:** US015  
**Objective:** Validate that a user can access to the AI Task Assistant App.  
**Preconditions:** The user has a valid account.  
**Steps (summary):**

| Step | Action | Expected Result |
| --- | --- | --- |
| 1 | Navigate to the Login page | Login form is displayed |
| 2 | Enter a valid email address | Email input accepts the value |
| 3 | Enter a valid password | Password input accepts the value and Password field masked (●●●●●)|
| 4 | Click “Login” |User is redirected to the dashboard/home screen |
| 5 | Validate username display | Logged‑in username appears in the UI |


## TS0101- TC02 — Log in with a non registered Email and Password
**Objective:** Validate user can not access with a non registered Email but with a valid Password. 
**Preconditions:** N/A
**Steps (summary):**

| Step | Action | Expected Result |
| --- | --- | --- |
| 1 | Navigate to the Login page | Login form is displayed |
| 2 | Enter an invalid email address> mail@yimail.com | Email input accepts the value |
| 3 | Enter a valid password> 12345678| Password input accepts the value and Password field masked (●●●●●)|
| 4 | Click “Login” |The message "Invalid credentials" should appear. - The User is Not redirected to the dashboard/home screen. |


## TS0101- TC03 — Log in with a Email with a wrong format (without @)
**Objective:** Validate user can not access with a Email with the wrong format but with a valid Password. 
**Preconditions:** N/A
**Steps (summary):**

| Step | Action | Expected Result |
| --- | --- | --- |
| 1 | Navigate to the Login page | Login form is displayed |
| 2 | Enter an invalid email address> mail | Email input accepts the value |
| 3 | Enter a valid password> 12345678| Password input accepts the value and Password field masked (●●●●●)|
| 4 | Click “Login” |The message "Please include an '@' in the email address. 'mail' is missing an '@'. - The User is Not redirected to the dashboard/home screen.  |


## TS0101- TC04 — Log in with a registered Email and wrong Password
**Objective:** Validate user can not access with a wrong Password. 
**Preconditions:** The user has a valid account.
**Steps (summary):**

| Step | Action | Expected Result |
| --- | --- | --- |
| 1 | Navigate to the Login page | Login form is displayed |
| 2 | Enter an invalid email address> Test01@mail.com | Email input accepts the value |
| 3 | Enter a valid password> 11111111| Password input accepts the value and Password field masked (●●●●●)|
| 4 | Click “Login” |The message "Invalid credentials" should appear. - The User is Not redirected to the dashboard/home screen. |


## TS0101- TC05 — Log in with a wrong Email and wrong Password
**Objective:** Validate user can not access with a wrong credentials. 
**Preconditions:** N/A
**Steps (summary):**

| Step | Action | Expected Result |
| --- | --- | --- |
| 1 | Navigate to the Login page | Login form is displayed |
| 2 | Enter an invalid email address> Test01@yimail.com | Email input accepts the value |
| 3 | Enter a valid password> 11111111| Password input accepts the value and Password field masked (●●●●●)|
| 4 | Click “Login” |The message "Invalid credentials" should appear. - The User is Not redirected to the dashboard/home screen. |


## TS0101- TC06 — Log in with a Email fields empty
**Objective:** Validate user can not access with a Email with the wrong format but with a valid Password. 
**Preconditions:** N/A
**Steps (summary):**

| Step | Action | Expected Result |
| --- | --- | --- |
| 1 | Navigate to the Login page | Login form is displayed |
| 2 | Leave the Email field empty | The empty field is accepted |
| 3 | Enter a valid password> 12345678| Password input accepts the value and Password field masked (●●●●●)|
| 4 | Click “Login” |The message "Email can't be empty.' appears. - The User is Not redirected to the dashboard/home screen.  |


## TS0101- TC07 — Log in with a Password fields empty
**Objective:** Validate user can not access with a empty Password. 
**Preconditions:** The user has a valid account.
**Steps (summary):**

| Step | Action | Expected Result |
| --- | --- | --- |
| 1 | Navigate to the Login page | Login form is displayed |
| 2 | Enter an invalid email address> Test01@mail.com | Email input accepts the value |
| 3 | Leave the password field empty | The empty field is accepted |
| 4 | Click “Login” |The message "Password must be at least 8 characters." should appear. - The User is Not redirected to the dashboard/home screen. |


## TS0101- TC08 — Log in with a Password with less than 8 characteres
**Objective:** Validate less than 8 characteres for the Password is not accepted. 
**Preconditions:** The user has a valid account.
**Steps (summary):**

| Step | Action | Expected Result |
| --- | --- | --- |
| 1 | Navigate to the Login page | Login form is displayed |
| 2 | Enter an invalid email address> Test01@mail.com | Email input accepts the value |
| 3 | Enter the password> 1234567 | The empty field is accepted |
| 4 | Click “Login” |The message "Password must be at least 8 characters." should appear. - The User is Not redirected to the dashboard/home screen. |


## TS0101- TC09 — Log in with a Both fields empty
**Objective:** Validate user can not access with empty Email and Password. 
**Preconditions:** N/A
**Steps (summary):**

| Step | Action | Expected Result |
| --- | --- | --- |
| 1 | Navigate to the Login page | Login form is displayed |
| 2 | Leave the Email field empty | The empty field is accepted |
| 3 | Leave the password field empty | The empty field is accepted |
| 4 | Click “Login” |The message "Email can't be empty.' appears. - The User is Not redirected to the dashboard/home screen.  |