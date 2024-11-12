# My-typing-dojo
タイピングと日々の学習を同時に行える。タイピングアプリです。  
Renderで公開しているので、[My-typing-dojo](https://my-typing-dojo.onrender.com)から利用できます。  
```hoge```と入力して、```Login```ボタンを押して、プレイ開始です。  

## play demo  
![gif](https://github.com/user-attachments/assets/3ae47424-79a4-42bf-a5ef-91edd5128865)

このアプリは以下技術を利用しています。
<img src="https://img.shields.io/badge/-React-61DAFB.svg?logo=react&style=for-the-badge"> 
<img src="https://img.shields.io/badge/-Javascript-F7DF1E.svg?logo=javascript&style=for-the-badge"> 
<img src="https://img.shields.io/badge/-Postgresql-336791.svg?logo=postgresql&style=for-the-badge">  
<img src="https://img.shields.io/badge/-Vite-003791.svg?logo=&style=for-the-badge"> 
<img src="https://img.shields.io/badge/-Express-003791.svg?logo=&style=for-the-badge"> 
<img src="https://img.shields.io/badge/-Render-5391FE.svg?logo=powershell&style=for-the-badge">  
<img src="https://img.shields.io/badge/-chakra%20ui-258AAF.svg?logo=&style=for-the-badge"> 
<img src="https://img.shields.io/badge/-Knex-272822.svg?logo=&style=for-the-badge">  







This app illustrates how to use [Passport](https://www.passportjs.org/) with
[Express](https://expressjs.com/) to sign users in with [Google](https://www.google.com/).
Use this example as a starting point for your own web applications.

## Quick Start

To run this app, clone the repository and install dependencies:

```bash
$ git clone https://github.com/passport/todos-express-google.git
$ cd todos-express-google
$ npm install
```

This app requires OAuth 2.0 credentials from Google, which can be obtained by
[setting up](https://developers.google.com/identity/protocols/oauth2/openid-connect#appsetup)
a project in [Google API console](https://console.developers.google.com/apis/).
The redirect URI of the OAuth client should be set to `'http://localhost:3000/oauth2/redirect/google'`.

Once credentials have been obtained, create a `.env` file and add the following
environment variables:

```
GOOGLE_CLIENT_ID=__INSERT_CLIENT_ID_HERE__
GOOGLE_CLIENT_SECRET=__INSERT_CLIENT_SECRET_HERE__
```

Start the server.

```bash
$ npm start
```

Navigate to [`http://localhost:3000`](http://localhost:3000).

## Tutorial

Follow along with the step-by-step [Sign In with Google Tutorial](https://www.passportjs.org/tutorials/google/)
to learn how this app was built.

## Overview

This app illustrates how to build a todo app with sign in functionality using
Express, Passport, and the [`passport-google-oidc`](https://www.passportjs.org/packages/passport-google-oidc/)
strategy.

This app is a traditional web application, in which application logic and data
persistence resides on the server.  HTML pages and forms are rendered by the
server and client-side JavaScript is not utilized (or kept to a minimum).

This app is built using the Express web framework.  Data is persisted to a
[SQLite](https://www.sqlite.org/) database.  HTML pages are rendered using [EJS](https://ejs.co/)
templates, and are styled using vanilla CSS.

When a user first arrives at this app, they are prompted to sign in.  To sign
in, the user is redirected to Google using OpenID Connect.  Once authenticated,
a login session is established and maintained between the server and the user's
browser with a cookie.

After signing in, the user can view, create, and edit todo items.  Interaction
occurs by clicking links and submitting forms, which trigger HTTP requests.
The browser automatically includes the cookie set during login with each of
these requests.

When the server receives a request, it authenticates the cookie and restores the
login session, thus authenticating the user.  It then accesses or stores records
in the database associated with the authenticated user.

## Next Steps

* Add additional social login providers.

  Study [todos-express-social](https://github.com/passport/todos-express-social)
  to learn how to add multiple providers, giving users the choice of which
  social network account to use when signing in.

* Add passwordless.

  Study [todos-express-webauthn](https://github.com/passport/todos-express-webauthn)
  to learn how to let users sign in with biometrics or a security key.

## License

[The Unlicense](https://opensource.org/licenses/unlicense)

## Credit

Created by [Jared Hanson](https://www.jaredhanson.me/)