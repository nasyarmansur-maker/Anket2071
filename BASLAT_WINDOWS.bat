@echo off
echo ============================================
echo   OKUL ANKET SISTEMI - Baslatiliyor...
echo ============================================
echo.

REM Python kurulu mu kontrol et
python --version >nul 2>&1
if errorlevel 1 (
    echo HATA: Python bulunamadi!
    echo Lutfen https://python.org adresinden Python indirin.
    pause
    exit /b
)

REM Kütüphaneleri yükle
echo Kutuphaneler yukleniyor...
pip install flask openpyxl gunicorn -q

echo.
echo Sistem baslatiliyor...
echo Tarayicinizda su adresi acin: http://localhost:5000
echo.
echo Durdurmak icin bu pencereyi kapatin veya Ctrl+C basin.
echo.
python app.py
pause
