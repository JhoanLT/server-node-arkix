# Test arkix

Server NODE JS

### Prerequisites

NODE version 10+

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
node index.js
```

## Routes - user
```
[POST] http://localhost:8080/api/v1/user/register
```
```
[POST] http://localhost:8080/api/v1/user/auth
```

## Routes - news
```
[GET]    http://localhost:8080/api/v1/news/list-by-user -*token*
```
```
[POST]   http://localhost:8080/api/v1/news/register     -*token*
```
```
[DELETE] http://localhost:8080/api/v1/news/delete/:id   -*token*
```
