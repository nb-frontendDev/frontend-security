//Expressのルーディング用オブジェクトを作成する
const express = require("express");
const router = express.Router();

router.use(express.json());

//GETメソッドでリクエストを受け取った時の処理を定義
router.get("/", (req, res) => {
    res.setHeader("X-Timestamp", Date.now()); //現在の時刻をデータとして受け取る
    let message = req.query.message; //クエリ文字列を受け取る
    const lang = req.headers["x-lang"];

    if (message === "") {
        res.status(400);

        if (lang === "en") {
            message = "message is empty";
        } else {
            message = "messageの値は空です";
        }

        message = "messageの値が空です。";
    }
    res.send({ message });
});

router.post("/", (req, res) => {
    const body = req.body; //req.bodyにはリクエストボディが格納されている
    console.log(body);
    res.end();
});

//他ファイルでも読み込めるようにエクスポート
module.exports = router;
