# まぶ鯖 公式サイト

Discordコミュニティ「まぶ鯖」の公式サイトです。Cloudflare Pages で公開します。
静的サイト（ビルドなし）で、このリポジトリは2026-11-19に Cloudflare Pages 用に作り直しました。
独自ドメイン（mabusaba.com）は当面使わず、pages.dev のURLで公開します。

- 公式サイト: [mabusaba-com.pages.dev](https://mabusaba-com.pages.dev/)
- Discord招待: [discord.gg/GKkW4wCAVp](https://discord.gg/GKkW4wCAVp)（短縮: [mabusaba-com.pages.dev/discord](https://mabusaba-com.pages.dev/discord)）
- 公式X: [@mabu_saba](https://x.com/mabu_saba)（短縮: [mabusaba-com.pages.dev/x](https://mabusaba-com.pages.dev/x)）
- 公式note: [note.com/mabu_saba](https://note.com/mabu_saba)（短縮: [mabusaba-com.pages.dev/note](https://mabusaba-com.pages.dev/note)、開設後に有効）

## 構成

```
index.html            トップページ（全セクション）
404.html              404ページ
assets/css/style.css  スタイル（ダーク基調 / ライトは端末設定に追従）
assets/js/main.js     招待リンクコピー / スクロール表示 / 年表示
assets/images/        ヒーロー・連携セクションのイラスト（WebP）
favicon.svg           三日月ファビコン
_headers              セキュリティヘッダー + アセットのキャッシュ
_redirects            /discord /x /note の短縮リンク
robots.txt / sitemap.xml
wrangler.toml         Pages設定（name = mabusaba-com, 出力はルート）
```

セクション: ヒーロー / できること / 公式メディア（Discord・X・note）/ mabubot紹介 / 安心の取り組み / 他サーバー連携 / FAQ / 参加

## 公開（Cloudflare Pages）

### 初回セットアップ（Cloudflareダッシュボード）

1. Cloudflare → **Workers & Pages** → **Create** → **Pages** → **Connect to Git**
2. リポジトリ `i-mabu/mabusaba.com` を選択
3. ビルド設定:
   - Project name: `mabusaba-com`
   - Production branch: `main`
   - Framework preset: **None**
   - Build command: （空欄）
   - Build output directory: `/`（ルート）
4. **Save and Deploy** → [mabusaba-com.pages.dev](https://mabusaba-com.pages.dev/) で公開される

独自ドメイン（mabusaba.com）は当面使いません。将来使う場合は、プロジェクトの **Custom domains** から追加し、index.html の canonical / OGP と sitemap.xml のURLもドメイン側へ差し替えてください。

### 通常の更新

`main` へ push すると Cloudflare Pages が自動で再デプロイします。

## ローカル確認

```bash
python3 -m http.server 8000
# http://localhost:8000 を開く
```
