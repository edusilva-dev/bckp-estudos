# Dependecies:
  - express
  - - @types/express -D
  - typeorm
  - reflect-metadata
  - sqlite3
  - ts-node-dev -D
  - typescript -D
  - - @types/typescript -D

# Create dev script:
  - Go to package.json and add this script: "typeorm": "ts-node-dev ./src/server.ts"

# Create typeorm script for migrations:
  - Go to package.json and add this script: "typeorm": "ts-node-dev node_modules/typeorm/cli.js"

# Commands:
  ## Init project:
    - yarn init -y
  ## Create migrations:
    - yarn typeorm migration:create -n "nome da migration"
  ## Run migrations:
    - yarn typeorm migration:run
  ## Revert migrations:
    - yarn typeorm migration:revert

# Run project:
  ## yarn dev