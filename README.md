# 中梦集团官网 — Vercel + Supabase 部署指南

## 一键部署

### 1. 创建 Supabase 项目（5 分钟）

1. 打开 [supabase.com](https://supabase.com) → 用 GitHub 登录
2. 点击 **New project** → 填名字（如 `zhongmeng-website`）→ 设置数据库密码 → 选 **Southeast Asia (Singapore)** 区域 → 创建
3. 进入项目 → 左侧 **SQL Editor** → 粘贴 `supabase/migrations/001_init.sql` 的全部内容 → **Run**
4. 左侧 **Storage** → **New bucket** → 名字填 `uploads` → **Public bucket** 打开 → 创建
5. 左侧 **Settings** → **API** → 复制 **Project URL** 和 **anon public key**

### 2. 部署到 Vercel（3 分钟）

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone)

或手动操作：

1. 把代码推到你自己的 GitHub 仓库
2. 打开 [vercel.com](https://vercel.com) → 用 GitHub 登录
3. **Add New** → **Project** → 导入你的仓库
4. Framework 自动识别为 Next.js，无需改配置
5. 展开 **Environment Variables**，添加 4 个变量：
   - `NEXT_PUBLIC_SUPABASE_URL` = 你的 Supabase Project URL
   - `NEXT_PUBLIC_SUPABASE_ANON_KEY` = 你的 anon key
   - `SUPABASE_SERVICE_ROLE_KEY` = 你的 service_role key（重要：写文章/上传用）
   - `ADMIN_PASSWORD` = 后台密码（默认 zhongmeng2026）
6. 点击 **Deploy**，等 2 分钟

### 3. 导入初始数据

部署成功后，在 Supabase SQL Editor 中运行 `supabase/seed.sql` 导入现有 27 篇文章。

## 访问

- 公开网站：`https://你的项目.vercel.app`
- 后台管理：`https://你的项目.vercel.app/admin`
- 默认密码：`zhongmeng2026`

## 技术栈

- **前端**: Next.js 16 + React 19 + Tailwind CSS 4
- **数据库**: Supabase (PostgreSQL)
- **文件存储**: Supabase Storage
- **部署**: Vercel
- **免费额度**: 够用（Supabase 免费 500MB 数据库 + 1GB 存储，Vercel 免费 100GB 带宽）
