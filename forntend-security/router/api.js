//Expressのルーディング用オブジェクトを作成する
const express = require("express");
const router = express.Router();

//GETメソッドでリクエストを受け取った時の処理を定義
router.get("/", (req, res) => {
    res.send({ message: "Hello" });
});

//他ファイルでも読み込めるようにエクスポート
module.exports = router;
