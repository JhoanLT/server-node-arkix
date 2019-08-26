# Test arkix

Server NODE JS

### Prerequisites

* [Node JS](https://nodejs.org/es/)
* [Mongo DB](https://www.mongodb.com/)

### Installing

```
git clone https://github.com/JhoanLT/server-node-arkix.git
```
```
cd server-node-arkix
```
```
npm install
```
```
npm start
```

## Routes(Local) - user
```
[POST] http://localhost:8080/api/v1/user/register
```
```
[POST] http://localhost:8080/api/v1/user/auth
```
## Routes(Production) - user
```
[POST] https://server-node-arkix.herokuapp.com/api/v1/user/register
```
```
[POST] https://server-node-arkix.herokuapp.com/api/v1/user/auth
```
## Routes(Local) - news
```
[GET]    http://localhost:8080/api/v1/news/list-by-user -*token*
```
```
[POST]   http://localhost:8080/api/v1/news/register     -*token*
```
```
[DELETE] http://localhost:8080/api/v1/news/delete/:id   -*token*
```

## Routes(Production) - news
```
[GET]    https://server-node-arkix.herokuapp.com/api/v1/news/list-by-user -*token*
```
```
[POST]   https://server-node-arkix.herokuapp.com/api/v1/news/register     -*token*
```
```
[DELETE] https://server-node-arkix.herokuapp.com/api/v1/news/delete/:id   -*token*
```
