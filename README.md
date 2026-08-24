# AI-Task-Assistant-QA-Project

Project Summary

This project is designed to demonstrate a complete QA workflow using real tools, real APIs, and real automation.

AI Task Assistant is a smart task‑management system where users can:

- Create tasks
- Edit tasks
- Mark tasks as completed
- Delete tasks
- View task lists

Additionally, the application integrates AI features to help users:

- Summarize long task descriptions
- Improve unclear descriptions
- Classify tasks (work, personal, urgent, etc.)
- Suggest priority levels



Objectives
--------------------

This repository showcases a QA Technical Fullstack profile capable of working across:

- UI Testing
- API Testing
- AI Endpoint Testing
- SQL Data Validation
- Automation (Cypress)
- Documentation (User Stories, AC, Test Cases, Bug Reports)
- Evidence collection
- Test strategy design


Components Included
1. UI Automation (Cypress)
- End‑to‑end tests for task creation, editing, deletion, and completion
- Interception of API calls
- Interception and validation of AI responses
- Evidence (screenshots, GIFs)

2. API Testing (Postman)
- CRUD operations for tasks
- AI endpoints (summarize, classify, priority, rewrite)
- Pre‑request scripts
- Test scripts
- Chaining
- Environment variables
- Evidence of responses and validations

3. AI Testing
- Payload examples
- Response validation
- Integration with UI and API tests
- Mocking and intercepting AI responses
- Evidence of AI behavior

4. SQL Validation
- Local dataset simulating users, tasks, and AI metadata
- Queries for validation, JOINs, filtering, and bug reproduction
- Evidence of query results

5. Documentation (PO + QA)
- User Stories
- Acceptance Criteria
- Test Cases
- Bug Reports
- Test Strategy
- AI Testing Guide
- SQL Validation Guide

6. About Section
 - Professional summary
 - Technical stack used in the project


Technologies Used
- Cypress (UI automation)
- Postman (API testing)
- Groq / OpenAI / HuggingFace API (AI endpoints)
- GoRest API (CRUD operations)
- SQLite / PostgreSQL (local SQL validation)
- JavaScript (scripts for Postman + Cypress)
- Markdown (documentation)


This repository demonstrates the ability to work as a QA Technical Fullstack, combining:
 - Manual testing
 - Technical testing
 - Automation
 - AI testing
 - SQL validation
 - Documentation
 - Modern tooling

It reflects real‑world QA responsibilities in companies adopting AI‑enhanced workflows.


Contact
If you want to know more about my QA technical experience or this project, feel free to reach out.

About autor: 
Nicole Fulcar
fulcarnicole@gmail.com



---

# AI Task Assistant — QA Automation Project

This repository contains the complete QA automation framework for the **AI Task Assistant** project.  
It is designed to demonstrate professional-level skills in:

- API Testing  
- Automated test execution  
- CI/CD integration  
- Reporting and analytics  
- Scalable QA architecture  

The project follows a modular structure that supports future expansion into UI automation, SQL validation, and AI endpoint testing.

---

## Project Structure

```
AI-Task-Assistant-QA-Project
│
├── api/                     # Postman collections and API test scripts
├── ui-automation/           # UI automation (future expansion)
├── sql/                     # SQL validation (future expansion)
├── ai/                      # AI endpoint testing (future expansion)
├── docs/                    # Technical and functional documentation
├── newman/                  # Newman-related utilities
├── reports/                 # Automatically generated test reports
├── run-tests.ps1            # One-click test execution script
└── .github/workflows/       # GitHub Actions CI/CD pipelines
      └── api-tests.yml
```

---

## Technologies Used

- Postman  
- Newman CLI  
- Node.js 20+  
- PowerShell  
- GitHub Actions  
- JSON Reports  
- CLI Reports  

---

## Running API Tests

### Manual execution (CLI)

```
newman run api/AITaskAssistantAPITesting.postman_collection.json -r cli
```

### Generate JSON report

```
newman run api/AITaskAssistantAPITesting.postman_collection.json -r json --reporter-json-export reporte.json
```

---

## Automatic Timestamped Reports

Reports are stored in the `/reports` directory with a timestamp for historical tracking.

### JSON report

```
newman run api/AITaskAssistantAPITesting.postman_collection.json -r json --reporter-json-export "reports/report_$(Get-Date -Format yyyyMMdd_HHmmss).json"
```

### TXT report

```
newman run api/AITaskAssistantAPITesting.postman_collection.json -r cli | Out-File -Encoding utf8 "reports/report_$(Get-Date -Format yyyyMMdd_HHmmss).txt"
```

---

## One‑Click Execution Script

File: `run-tests.ps1`

```
# Create reports folder if missing
if (!(Test-Path -Path "reports")) {
    New-Item -ItemType Directory -Path "reports" | Out-Null
}

# Timestamp
$timestamp = Get-Date -Format "yyyyMMdd_HHmmss"

# CLI report
newman run api/AITaskAssistantAPITesting.postman_collection.json -r cli | Out-File -Encoding utf8 "reports/report_$timestamp.txt"

# JSON report
newman run api/AITaskAssistantAPITesting.postman_collection.json -r json --reporter-json-export "reports/report_$timestamp.json"

Write-Host "Execution completed. Reports saved in /reports"
```

Run it with:

```
./run-tests.ps1
```

---

## CI/CD with GitHub Actions

File: `.github/workflows/api-tests.yml`

```
name: API Tests

on:
  push:
    branches: [ main ]
  pull_request:
    branches: [ main ]
  workflow_dispatch:

jobs:
  run-api-tests:
    runs-on: ubuntu-latest

    steps:
    - name: Checkout repository
      uses: actions/checkout@v4

    - name: Setup Node
      uses: actions/setup-node@v4
      with:
        node-version: 20

    - name: Install Newman
      run: npm install -g newman

    - name: Run Newman tests
      run: newman run api/AITaskAssistantAPITesting.postman_collection.json -r json --reporter-json-export report.json

    - name: Upload report
      uses: actions/upload-artifact@v4
      with:
        name: newman-report
        path: report.json
```

This pipeline installs Node, installs Newman, runs your API tests, generates a JSON report, and uploads it as an artifact.

---

## Dashboards and Analytics

Using the generated JSON reports, you can build:

- HTML dashboards  
- Charts with Chart.js  
- Trend analysis  
- Performance metrics  
- Executive summaries  

Advanced dashboards will be added in future iterations.

---

## Author

**Nicole Fulcar**  
QA Manual Tester & Product Owner  
Braunschweig, Germany

---
