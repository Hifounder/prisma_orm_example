### Prisma ORM 範例
> version`1.34.10`

[Prisma](https://www.prisma.io/docs/1.34/get-started) 可使用 GraphQL 或 RESTful API 強大的 ORM系統
此範例專案僅有 GraphQL
預先安裝 `docker` `node`

1. `docker-compose up -d` 後大概等個5秒繼續下一動作，MySQL的部分預先註解（若有容器版自行調整）
2. `npm i` 安裝此專案需要的套件
3. `npm run deploy` 新增database等相關資訊
4. `npm run seed` 灌入資料 或 修改資料

---

`npx prisma deploy` 若擁有預先的資料庫，可以自動抓取既有的資料庫欄位進入`datamodel.prisma`
前提是要先刪除檔案 `prisma` 資料夾 基於[官方](https://www.prisma.io/docs/1.34/get-started)使用方式去試作其設定
