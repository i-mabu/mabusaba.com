# まぶ鯖 公式サイト

Discordコミュニティ「まぶ鯖」の公式サイトです。

- サイト本体: `index.html`（単一ファイル、画像などのアセットは埋め込み済み）
- 招待リンク: https://discord.gg/GKkW4wCAVp
- 公式X: https://x.com/mabu_saba
- 公式サイト: https://mabusaba.com/

## 公開（Cloudflare Pages）

2026-11-15に GitHub Pages から Cloudflare Pages へ移行することにしました。

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

設定ファイル:
- `wrangler.toml` — Pagesプロジェクト設定（name / 出力ディレクトリ）
- `_headers` — セキュリティヘッダー

※ 旧 GitHub Pages 用の `CNAME` ファイルは移行に伴い削除しました。GitHub Pages 側は Settings → Pages で無効化してください（Cloudflare のカスタムドメインが有効になった後でOK）。
