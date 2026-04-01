# COI Web Demo

[![React 19](https://img.shields.io/badge/React-19-61DAFB?logo=react&logoColor=white)](https://react.dev/)
[![Vite 7](https://img.shields.io/badge/Vite-7-646CFF?logo=vite&logoColor=white)](https://vite.dev/)
[![React Router 7](https://img.shields.io/badge/React%20Router-7-CA4245?logo=reactrouter&logoColor=white)](https://reactrouter.com/)
[![GitHub Pages](https://img.shields.io/badge/Live%20Demo-GitHub%20Pages-222222?logo=githubpages&logoColor=white)](https://hakupao.github.io/coi-web-demo/)
[![GitHub Actions](https://img.shields.io/github/actions/workflow/status/hakupao/coi-web-demo/deploy.yml?branch=main&label=Pages%20Deploy)](https://github.com/hakupao/coi-web-demo/actions/workflows/deploy.yml)
[![Responsive](https://img.shields.io/badge/Responsive-PC%20%26%20Mobile-0f766e)](https://hakupao.github.io/coi-web-demo/)

一个用于展示“利益相反（COI）申告管理系统”界面与典型流程的前端静态 Demo。项目聚焦研究机构、医院、高校等场景中的 COI 申告、审查、提醒与系统管理，适合作为方案展示、需求确认、作品集演示和前端界面原型。

## 在线体验

- GitHub Pages: [https://hakupao.github.io/coi-web-demo/](https://hakupao.github.io/coi-web-demo/)
- Repository: [https://github.com/hakupao/coi-web-demo](https://github.com/hakupao/coi-web-demo)
- 部署方式: push 到 `main` 后由 GitHub Actions 自动构建并发布到 GitHub Pages

## 页面预览

<p>
  <img src="./docs/images/dashboard.png" alt="COI Dashboard Preview" width="32%" />
  <img src="./docs/images/research.png" alt="COI Research List Preview" width="32%" />
  <img src="./docs/images/applications.png" alt="COI Application Workspace Preview" width="32%" />
</p>

## 项目亮点

- 覆盖 COI 业务中常见的仪表盘、研究列表、个人申告、申請管理与系统管理页面
- 采用 `HashRouter` + GitHub Pages，静态托管即可直接访问
- 桌面端与手机端均已完成本地可视化验收，支持响应式浏览
- 使用演示数据快速呈现产品概念，适合做对外展示或内部评审

## 适用场景

- 向医院、大学、研究机构展示 COI 管理系统的产品原型
- 在售前提案、招投标材料、客户说明会中展示业务流程与 UI 方案
- 在前后端联调前先确认页面结构、导航逻辑与关键交互
- 作为 GitHub Pages 上可公开访问的前端作品集项目

## 功能模块

- `ダッシュボード`：展示申告状态、提醒、近期活动与待办任务
- `研究一覧`：展示研究课题、角色、期间与 COI 处理状态
- `COI個人申告`：模拟个人年度 COI 申告和历史记录引用流程
- `申請管理`：展示事务局 / 委员会审查、差戻し、告警管理等工作台
- `システム管理`：展示用户、权限、组织与基础配置类页面结构

## 技术栈

- React 19
- Vite 7
- React Router DOM 7
- Lucide React
- ESLint
- GitHub Actions
- GitHub Pages

## 本地开发

```bash
npm install
npm run dev
```

默认开发地址：

```text
http://127.0.0.1:5173/coi-web-demo/
```

生产构建与预览：

```bash
npm run build
npm run preview
```

## GitHub Pages 自动部署

仓库已包含 GitHub Pages 自动部署工作流：

- 推送到 `main` 分支后自动执行 `npm ci` 和 `npm run build`
- 构建产物 `dist/` 会通过 GitHub Actions 发布到 GitHub Pages
- `vite.config.js` 已设置 `base: '/coi-web-demo/'`
- 路由使用 `HashRouter`，适合 GitHub Pages 这样的静态托管环境

如果你将此项目 fork 到其他仓库名，请同步修改 `vite.config.js` 中的 `base` 路径。

## 项目定位

这是一个面向展示与原型说明的静态前端项目，当前不包含：

- 后端 API
- 数据库
- 真实登录鉴权
- 持久化写入
- 实际业务审批联动

## 日本語概要

本リポジトリは、利益相反（COI）申告管理システムの画面構成と業務フローを可視化するためのフロントエンド Demo です。ダッシュボード、研究一覧、個人申告、申請管理ワークスペースなどを収録しており、GitHub Pages でそのまま公開できます。研究機関・病院・大学向けの提案資料や UI モックの共有用途に適しています。
