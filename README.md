## Description

SWAPI-GQL is a GraphQL wrapper for the Star Wars API (SWAPI). It is built using NestJS and Apollo Server.
Additionally, it uses Postgres to cache data (because of SWAPI long response times) what gives additional opportunity to get gql nested data.

## Architecture Design

### Description

App has 3 layers.
Each layer is a separate module.
API is handling all GQL staff.
Core is handling all application logic - uses infrastructure layer to get data.
Infrastructure is handling all data related stuff - uses swapi to get data or repositories to get and save data to database.

## Todo

- [ ] Add tests
- [x] Add caching
- [x] Cache check
- [ ] Documentation
- [x] Types for swapi, domain, gql, typeorm
- [ ] Nested gQL queries

### API

Api is built using GQL and Apollo Server.

## Installation

```bash
$ yarn install
```

## Running the app

```bash
# development
$ yarn run start

# watch mode
$ yarn run start:dev

# production mode
$ yarn run start:prod
```

## Test

```bash
# unit tests
$ yarn run test

# e2e tests
$ yarn run test:e2e

# test coverage
$ yarn run test:cov
```

## Support

Nest is an MIT-licensed open source project. It can grow thanks to the sponsors and support by the amazing backers. If you'd like to join them, please [read more here](https://docs.nestjs.com/support).

## Stay in touch

- Author - [Kamil Myśliwiec](https://kamilmysliwiec.com)
- Website - [https://nestjs.com](https://nestjs.com/)
- Twitter - [@nestframework](https://twitter.com/nestframework)

## License

Nest is [MIT licensed](LICENSE).
