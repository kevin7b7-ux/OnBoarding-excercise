# OnBoarding-excercise
Ejercicio introductorio, que consiste en una aplicación sobre la gestión de créditos de libre inversión(Creación, Actualización y Visualización). Las solicitudes se gestiona a través de una API-REST básica y autenticación con JWT. El cliente está desarrollado con Angular.


## Configuración

## Requisitos

* Node.js 18.x
* npm 8.x
* Java 17
* Gradle 7.x

## Instalación

1. Clonar el repositorio: git clone https://github.com/[usuario]/[nombre-de-la-aplicación].git
2. Instalar las dependencias del frontend:
    ```bash
   cd onboarding-app/
   npm install
3. Instalar las dependencias del backend:
    ```bash
   cd backend
   gradle build

## Ejecución

1. Iniciar el backend:
   ```bash
   cd onboarding-rest
   gradle bootRun

2. Iniciar el frontend:
    ```bash
   cd frontend
   npm start
