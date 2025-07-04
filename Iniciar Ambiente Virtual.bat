@echo off
cd /d "%~dp0"
start powershell.exe -NoExit -Command "cd '%cd%'; .\venv\Scripts\activate"

