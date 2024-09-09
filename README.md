# Chat Backend Server

Este es un servidor para una aplicación de chat, que utiliza sockets para el manejo de mensajes en tiempo real.

## Características principales

- CRUD de usuarios.
- Mensajes en tiempo real a través de sockets.

## Requisitos previos

Antes de comenzar, asegúrese de tener instalados los siguientes programas y herramientas:

- [Google Chrome](https://www.google.com/chrome/)
- [Visual Studio Code](https://code.visualstudio.com/)
- [Postman](https://www.postman.com/)
- [MongoDB Compass](https://www.mongodb.com/products/compass)
- [Git](https://git-scm.com/)
- [Node.js](https://nodejs.org/)
- [MongoDB Atlas](https://www.mongodb.com/cloud/atlas)

## Guía de instalación y configuración

1. Clone este repositorio en su máquina local:

   ```bash
   git clone https://github.com/usuario/chat-backend-server.git
   cd chat-backend-server
   ```

2. Instale las dependencias necesarias:

   ```bash
   npm install
   ```

3. Cree un archivo `.env` en la raíz del proyecto con las siguientes variables:

   ```env
   PORT=3000
   DB_CNN=mongodb+srv://<usuario>:<password>@cluster0.mongodb.net/<dbname>
   JWT_KEY=<su-clave-jwt>
   ```

   - Reemplace `<usuario>`, `<password>`, y `<dbname>` con los detalles de su base de datos de MongoDB Atlas.
   - Asigne una clave secreta a `JWT_KEY` para la autenticación.

4. Inicie el servidor:

   ```bash
   npm start:dev
   ```

5. La API estará disponible en `http://localhost:3000` y podrá ser probada usando [Postman](https://www.postman.com/).

## Licencia

Este proyecto está licenciado bajo la **Apache License, Version 2.0**. Puede ver los detalles completos en el archivo `LICENSE` o en [Apache License 2.0](https://www.apache.org/licenses/LICENSE-2.0).