# まぶ鯖 公式サイト

Discordコミュニティ「まぶ鯖」の公式サイトです。Cloudflare Pages で公開します。
2026-11-15に Cloudflare Pages 向けに全面リニューアルしました（静的サイト、ビルドなし）。

- 公式サイト: https://mabusaba.com/
- Discord招待: https://discord.gg/GKkW4wCAVp （短縮: https://mabusaba.com/discord）
- 公式X: https://x.com/mabu_saba （短縮: https://mabusaba.com/x）
- 公式note: https://note.com/mabu_saba （短縮: https://mabusaba.com/note、開設後に有効）

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
4. **Save and Deploy** → `https://mabusaba-com.pages.dev` で仮公開される
5. プロジェクト → **Custom domains** → `mabusaba.com` と `www.mabusaba.com` を追加
   - ドメインのDNSがCloudflareにある場合は自動で反映されます
   - DNSが他社にある場合は、ネームサーバーをCloudflareへ移すか、案内に従ってCNAMEを設定してください

### 通常の更新

`main` へ push すると Cloudflare Pages が自動で再デプロイします。

※ 旧 GitHub Pages 用の `CNAME` ファイルは移行に伴い削除済みです。GitHub Pages 側は Settings → Pages で無効化してください（Cloudflare のカスタムドメインが有効になった後でOK）。

## ローカル確認

```bash
python3 -m http.server 8000
# http://localhost:8000 を開く
```
