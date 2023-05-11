const express = require("express");
const api = require("./router/api"); //api用ルーディングファイルの読み込み
const app = express();
const port = 3000;

app.use(express.static("public"));

app.use("/api", api); //apiというパス名をルーディング用オブジェクトに紐づける

app.get("/", (req, res, next) => {
    res.end("Top page");
});

//サーバー起動
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
