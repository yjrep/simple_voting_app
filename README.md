## Introduction
This simple **web application** allows users to **post questions** and **vote** on the questions.
It is built with **VueJS** and **ExpressJS**.
Backend works with **SQLite** database saved as `questions.db` and required table has been already created.

## Getting started
1. Clone the repository:

```bash
cd somewhere
git clone https://github.com/yjrep/simple_voting_app.git
cd simple_voting_app
```

2. Install the dependencies:

```bash
npm i
```

3. Run api server:

```bash
npm run api
```

4. Run app server:

```bash
npm run serve
```

5. Open the app in your browser at [http://localhost:8080](http://localhost:8080).

## Development

### Environment

- Runtime: [**NodeJS**](https://github.com/nodejs)
- Package Manager: [**NPM**](https://github.com/npm)

### Frontend

- Core:
    - Main: [**VueJS**](https://github.com/vuejs/vue)
    - Routing: [**Vue Router**](https://github.com/vuejs/vue-router)
- UI:
    - Icons: [**Material Icons**](https://fonts.google.com/icons)
- Utils:
    - AJAX: [**Axios**](https://github.com/axios/axios)

### Backend

The backend **API** and **Database**:

- Core:
    - Main: [**NodeJS**](https://github.com/nodejs/node)
    - Framework: [**ExpressJS**](https://github.com/expressjs/express)
- 💽 Database:
    - Main: [**SQLite**](https://www.sqlite.org)
    - ORM: [**Better-sqlite3**](https://github.com/WiseLibs/better-sqlite3)
- 🔧 Utils:
    - CORS: [**cors**](https://github.com/expressjs/cors)
  
## Disclaimer
- Testing has not been done.
- Web design and UI are not optimized for mobile devices.
- The app is not optimized for performance / security / accessibility / internationalization / localization.
- No documentation has been written.
- Limited comments have been written.
- The app is not containerized.