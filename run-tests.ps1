# Crear carpeta de reportes si no existe
if (!(Test-Path -Path "reports")) {
    New-Item -ItemType Directory -Path "reports" | Out-Null
}

# Timestamp
$timestamp = Get-Date -Format "yyyyMMdd_HHmmss"

# Ejecutar Newman con reporter CLI
newman run api/AITaskAssistantAPITesting.postman_collection.json -r cli | Out-File -Encoding utf8 "reports/reporte_$timestamp.txt"

# Ejecutar Newman con reporter JSON
newman run api/AITaskAssistantAPITesting.postman_collection.json -r json --reporter-json-export "reports/reporte_$timestamp.json"

Write-Host "Ejecución completada. Reportes generados en /reports"
