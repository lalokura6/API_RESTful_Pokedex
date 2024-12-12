# API RESTful para una Pokédex

Aplicación creada con JAVASCRIPT y db-local

1. 📝 Pasos para Ejecutar:

- Clonar el repositorio
- Instalar dependencias: npm install
- Configurar variables de entorno (opcional)
- Iniciar servidor: npm start (nodemon)

2. 🚀 Endpoints: 

- Registro: POST /auth/register
- Login: POST /auth/login
- Listar Pokémon: GET /pokemon
- Detalles Pokémon: GET /pokemon/:id
- Mis Pokémon: GET /pokemon/trainer/mypokemons
- Crear Pokémon: POST /pokemon
- Actualizar Pokémon: PUT /pokemon/:id
- Eliminar Pokémon: DELETE /pokemon/:id


3. Copiar y completar para crear un usuario:

  {
      "username": "",
      "password": ""
  }


4. Copiar y completar para crear un pokemon:

  {
    "name": "",
    "type": "",
    "level": "",
}
