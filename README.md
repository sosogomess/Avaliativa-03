# Atividade Avaliativa Back-End

## Contextualização:

Uma rede de restaurantes está expandindo seus negócios e precisa de um sistema para gerenciar seu cardápio digital. Cada prato oferecido precisa ser catalogado com informações detalhadas para que os clientes possam visualizar o menu completo através de um aplicativo. A empresa necessita de uma API backend robusta que permita aos administradores gerenciar facilmente o catálogo de pratos, realizando operações de criação, consulta, atualização e remoção de itens do cardápio.

## Projeto: Sistema de Gerenciamento de Cardápio Digital:

Você foi contratado para desenvolver a API backend que dará suporte ao cardápio digital da rede de restaurantes. O sistema deve ser construído utilizando Node.js com Express como framework web, e Prisma ORM para interação com o banco de dados.

## Funcionalidades

- `GET /dishes` - Listar todos os pratos
- `GET /dishes/:id` - Obter detalhes de um prato específico
- `POST /dishes` - Adicionar um novo prato
- `PUT /dishes/:id` - Atualizar informações de um prato
- `DELETE /dishes/:id` - Remover um prato do cardápio

## Como Executar o Projeto:

1. Clonar o Repositório


```
git clone https://github.com/sosogomess/Avaliativa-03.git

 ```
2. Instalar Dependências:

```
npm install

```

4. Executar as Migrações:

```
npx prisma migrate dev

```

5. Iniciar o Servidor:

```
npm run dev

```

## Exemplos de Uso

1. Listar todos os pratos:

```
GET /pratos

```
Resposta:

  {
    "id": 1,
    "name": "Pizza Margherita",
    "description": "Pizza clássica italiana com molho de tomate, mussarela e manjericão.",
    "price": 34.99,
    "category": "Pizzas",
    "ingredients": "Massa de pizza, molho de tomate, mussarela, manjericão",
    "imageUrl": "https://example.com/images/pizza-margherita.jpg",
    "prepTime": 15
  }

2. Obter detalhes de um prato por Id:


```
GET /pratos/1

```
Resposta:

{
  "id": 1,
  "name": "Pizza Margherita",
  "description": "Pizza clássica italiana com molho de tomate, mussarela e manjericão.",
  "price": 34.99,
  "category": "Pizzas",
  "ingredients": "Massa de pizza, molho de tomate, mussarela, manjericão",
  "imageUrl": "https://example.com/images/pizza-margherita.jpg",
  "prepTime": 15
}

3. Adicionar um novo prato:

```
POST /pratos/1

```
Teste:

{
  "name": "Spaghetti Carbonara",
  "description": "Massa italiana com molho cremoso de ovos, queijo parmesão e bacon.",
  "price": 29.99,
  "category": "Massas",
  "ingredients": "Spaghetti, ovos, queijo parmesão, bacon, pimenta-do-reino",
  "imageUrl": "https://example.com/images/spaghetti-carbonara.jpg",
  "prepTime": 25
}

Resposta:

{
  "id": 2,
  "name": "Spaghetti Carbonara",
  "description": "Massa italiana com molho cremoso de ovos, queijo parmesão e bacon.",
  "price": 29.99,
  "category": "Massas",
  "ingredients": "Spaghetti, ovos, queijo parmesão, bacon, pimenta-do-reino",
  "imageUrl": "https://example.com/images/spaghetti-carbonara.jpg",
  "prepTime": 25
}

4. Atualizar um prato por Id:

```
PUT /pratos/1

```

Teste:

{
  "name": "Pizza Margherita Atualizada",
  "description": "Pizza clássica italiana com molho de tomate fresco, mussarela e manjericão.",
  "price": 36.99,
  "category": "Pizzas",
  "ingredients": "Massa de pizza, molho de tomate fresco, mussarela, manjericão",
  "imageUrl": "https://example.com/images/pizza-margherita.jpg",
  "prepTime": 20
}

Resposta:

{
  "id": 1,
  "name": "Pizza Margherita Atualizada",
  "description": "Pizza clássica italiana com molho de tomate fresco, mussarela e manjericão.",
  "price": 36.99,
  "category": "Pizzas",
  "ingredients": "Massa de pizza, molho de tomate fresco, mussarela, manjericão",
  "imageUrl": "https://example.com/images/pizza-margherita.jpg",
  "prepTime": 20
}

5. Remover um prato:


```
DELETE /pratos/1


```
Resposta:

{
  "message": "Prato removido com sucesso!"
}
