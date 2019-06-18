# Teste técnico Cuidas - API

Esse projeto foi criado para servir uma api de agendamentos para
o [teste técnico cuidas frontend](https://github.com/raphaellopes/cuidas-frontend).

## Para rodar local

Certifique que possui o mongo, node e yarn instalados, clone o repositório.
Na raiz do projeto, copie o arquivo `.env.example` como `.env` e rode:

### `yarn`

Para instalar as dependências

### `yarn start`

Roda o app em modo de desenvolvimento<br>
Abra [http://localhost:3001](http://localhost:3001) em alguma ferramenta
para debugar serviõs rest como o [insomnia](https://insomnia.rest/) ou
similar.


## Rodas disponíveis

### `POST /users`

Salva um novo usuário

```
// json body
{
  "name": "Fulano de tal",
  "email": "teste@teste.com",
  "phone": "912345678"
}
```

### `GET user/exists?email=some-email`

Verifica se um usuário existe, e retorna os dados e seus agendamentos. 
Caso não encontre, retorna vazio

### `POST /schedule`

Salva um agendamento de um usuário

```
// json body
{
  "user": "user-id",
  "date": "2019-06-18T16:00:00.147Z"
}
```

### `GET /schedule`

Retorna a lista de agendamentos

### `GET /schedule/available?date=2019-06-18`

Retorna a lista de horários disponíveis por dia selecionado

### `DELETE /schedule/:id`

Remove um agendamento
