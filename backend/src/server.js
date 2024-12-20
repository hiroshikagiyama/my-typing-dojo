const express = require('express');

const userController = require('./user/user.controller');
const sentenceController = require('./sentence/sentence.controller');
const typingLogController = require('./typingLog/typingLog.controller');
const authController = require('./auth/auth.controller');
const path = require('path');

const { setAuth, checkAuth } = require('./auth/auth');

function setupServer() {
  const app = express();
  app.use(express.json());
  // アプリ起動時の参照先
  app.use(express.static(path.join(__dirname, '../frontend/dist')));

  // 認証機能設定
  setAuth(app);

  // ログイン
  app.post('/api/login', authController.login);
  // ログアウト
  app.get('/api/logout', authController.logout);
  // サインアップ
  app.post('/api/signup', userController.save);
  // 認証状態を確認するためのエンドポイント
  app.get('/api/auth_check', authController.authCheck);

  // ===========================================================
  app.post('/api/record', checkAuth, typingLogController.add);
  app.get('/api/record/:id', checkAuth, typingLogController.index);
  app.get('/api/record', checkAuth, typingLogController.view);

  app.get('/api/users/:name', checkAuth, userController.index);
  app.get('/api/users', checkAuth, userController.view);

  app.get('/api/sentence/:tag', sentenceController.tag);
  app.get('/api/sentence', sentenceController.view);
  app.post('/api/sentence', sentenceController.save);

  return app;
}

module.exports = {
  setupServer,
};
