@echo off
:inicio
set /p codigo="Ingrese el codigo: "

:: Ejecuta la consulta MySQL y almacena la salida en una variable
for /f "tokens=* usebackq" %%a in (`mysql -u root -D producto -e "SELECT nombre, precio, descripcion FROM articulos WHERE id = %codigo%"`) do (
    set "resultado=%%a"
)

:: Comprueba si la variable resultado está vacía
if not defined resultado (
    echo El codigo no existe.
) else (
    echo Resultados:
    echo %resultado%
)

:: Pregunta si desea buscar otro código
:confirmacion
set /p opcion="¿Desea buscar otro codigo? (S/N): "
if /i "%opcion%"=="S" (
    set resultado=
    goto :inicio
) else if /i "%opcion%"=="N" (
    echo Saliendo del programa...
    exit /b
)

