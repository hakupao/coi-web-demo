# COI Web Demo

[![React](https://img.shields.io/badge/React-19-61DAFB?logo=react&logoColor=white)](https://react.dev/)
[![Vite](https://img.shields.io/badge/Vite-7-646CFF?logo=vite&logoColor=white)](https://vite.dev/)
[![GitHub Pages](https://img.shields.io/badge/Deploy-GitHub%20Pages-222222?logo=githubpages&logoColor=white)](https://hakupao.github.io/coi-web-demo/)

一个用于展示“利益相反（COI）申告管理系统”界面与流程的前端演示项目。

本项目以研究机构、医院、高校等场景中的 COI 管理业务为背景，模拟了研究者、事务局和管理员在申告、审查、提醒、统计等环节中的典型操作流程。当前版本为纯前端静态 Demo，页面中的数据为演示数据，适合用于方案展示、界面原型说明和前端效果预览。

## 在线体验

- GitHub Pages: [https://hakupao.github.io/coi-web-demo/](https://hakupao.github.io/coi-web-demo/)
- GitHub Repository: [https://github.com/hakupao/coi-web-demo](https://github.com/hakupao/coi-web-demo)

项目已部署在 GitHub Pages，可直接通过上方链接体验。

## 页面预览

<p>
  <img src="./docs/images/dashboard.png" alt="Dashboard Preview" width="32%" />
  <img src="./docs/images/research.png" alt="Research Preview" width="32%" />
  <img src="./docs/images/applications.png" alt="Applications Preview" width="32%" />
</p>

## 适用场景

- 用于展示 COI 管理系统的产品原型和界面方案
- 用于向客户、老师、团队或面试场景演示前端实现效果
- 用于后续接入后端前的需求确认和页面结构验证
- 用于 GitHub Pages 上的静态站点作品展示

## 项目亮点

- 面向 COI 申告管理场景的完整前端演示
- 包含研究者视角与管理端视角的典型页面
- 适合用于产品原型展示、客户沟通和功能说明
- 基于 React + Vite 构建，启动和部署都比较轻量
- 使用 `HashRouter` 与 GitHub Pages 配置，便于静态站点部署

## 功能模块

### 1. 仪表盘

展示当前 COI 申告状态、待处理事项、提醒信息和近期活动，帮助用户快速了解整体情况。

### 2. 研究列表

展示用户参与的研究项目及其 COI 状态，包括研究编号、课题名称、角色、研究周期和申告状态等信息。

### 3. 个人 COI 申告

用于查看和管理年度 COI 定期申告记录，支持从历史年度数据中引用信息，降低重复录入成本。

### 4. 申请管理

面向事务局或委员会的工作台，包含：

- 申告审查
- 告警管理
- 报表/PDF 输出入口

### 5. 系统管理

包含系统基础配置相关的演示页面，例如：

- 用户管理
- 权限管理
- 组织管理
- 企业主数据管理
- 系统参数配置

## 技术栈

- React 19
- Vite 7
- React Router DOM 7
- Lucide React
- ESLint
- gh-pages

## 项目结构

```text
COI_Web_Demo/
├─ public/
├─ src/
│  ├─ components/   # 通用布局、头部、侧边栏等
│  ├─ pages/        # 业务页面
│  ├─ App.jsx       # 路由入口
│  ├─ main.jsx      # 应用挂载入口
│  ├─ App.css
│  └─ index.css
├─ dist/            # 构建产物
├─ package.json
└─ vite.config.js
```

## 本地开发

### 安装依赖

```bash
npm install
```

### 启动开发环境

```bash
npm run dev
```

默认启动后可在本地开发地址中访问页面。

### 构建生产版本

```bash
npm run build
```

### 本地预览构建结果

```bash
npm run preview
```

## 部署说明

本项目已经配置好 GitHub Pages 部署所需的基础设置：

- `vite.config.js` 中设置了 `base: '/coi-web-demo/'`
- `src/main.jsx` 中使用了 `HashRouter`
- `package.json` 中包含 `predeploy` 和 `deploy` 脚本

执行以下命令即可将构建结果发布到 GitHub Pages：

```bash
npm run deploy
```

当前线上地址：

- [https://hakupao.github.io/coi-web-demo/](https://hakupao.github.io/coi-web-demo/)

## 当前项目定位

这是一个前端静态演示项目，当前不包含：

- 后端服务
- 数据库
- 真实登录鉴权
- 实际 API 联调
- 持久化数据写入

因此，它更适合用于以下用途：

- 产品原型演示
- UI/UX 展示
- 业务流程说明
- 后续系统开发前的需求确认

## 后续可扩展方向

- 接入后端 API，替换页面中的静态演示数据
- 增加登录、角色权限和用户体系
- 对接研究项目、企业主数据、申告记录等真实数据源
- 增加搜索、筛选、表单提交流程和状态流转
- 实现 PDF/CSV 导出与审批记录留痕

## 仓库地址

- GitHub Repository: [https://github.com/hakupao/coi-web-demo](https://github.com/hakupao/coi-web-demo)

## 日本語概要

本リポジトリは、利益相反（COI）申告管理システムの画面構成と業務フローを可視化するためのフロントエンド Demo です。

- 研究一覧
- 個人 COI 申告
- 申請審査ワークスペース
- システム管理

GitHub Pages に公開済みです。

- Demo Site: [https://hakupao.github.io/coi-web-demo/](https://hakupao.github.io/coi-web-demo/)

## License

当前仓库未单独声明 License。如需开源发布，建议补充对应 License 文件。
