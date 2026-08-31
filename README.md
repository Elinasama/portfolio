# 洪梓芸 · 个人品牌与产品策划作品集网站

一个零依赖的静态个人网站：蓝色洞洞板 + 旅行手账风格（蓝白渐变 + ins 风），双击 `index.html` 即可在浏览器打开，不需要安装任何环境，也可以直接部署到 GitHub Pages / Netlify / Vercel。

## 文件夹结构

```
洪梓芸作品集网站/
├─ index.html              网站页面（所有文案都在这一个文件里）
├─ css/style.css           全部样式（颜色、布局、动画）
├─ js/
│  ├─ icons.js             图标（由 Phosphor 图标库生成，离线可用）
│  └─ main.js              交互（菜单、主题、手风琴、复制邮箱等）
├─ assets/fonts/           自托管字体 Outfit（英文/数字用，中文用系统字体）
├─ images/
│  ├─ hzy.jpg              职业照（当前页面使用）
│  ├─ avatar.png           旧占位头像（已不再使用，可删除）
│  ├─ four seasons.jpg     "四时记"品牌 VI 作品图
│  ├─ dy.png               抖音爆款视频作品图
│  ├─ IP.jpg               IP 衍生周边作品图
│  ├─ favicon.png          网站图标
│  └─ og-cover.png         分享到微信/社交平台时的封面图
└─ 洪梓芸_游戏策划与品牌运营_简历.pdf   一键下载的简历
```

## 使用前需要替换的内容

1. **职业照**：页面当前使用 `images/hzy.jpg`。以后换照片，直接覆盖这个文件（保持同名）即可，不需要改代码。
2. **作品集图片**："四时记"、抖音爆款视频、IP 周边三处已使用真实作品图（`four seasons.jpg`、`dy.png`、`IP.jpg`）。个人简历网页、公众号推文两处仍是渐变占位图，右下角有"替换作品图"提示。把真实作品截图/照片放到 `images/` 里，然后在 `index.html` 中把对应的 `<div class="project-cover ...">` 或 `<a class="pf-cover ...">` 替换成 `<img src="images/你的图片.png" alt="作品说明">`。
3. **社交链接**：页脚里 Instagram、抖音、小红书、哔哩哔哩、微信的 `#` 占位链接，改成你的主页地址（微信可换成二维码图片）。
4. **联系方式**：手机号 13715556571 和邮箱 elina07@126.com 在"关于我"、悬浮按钮、页脚等位置，如需更换请全文搜索统一替换。
5. **简历 PDF**：`洪梓芸_游戏策划与品牌运营_简历.pdf` 已替换为最新版简历（可立即到岗版），之后有更新直接覆盖同名文件，下载按钮会自动生效。

## 小技巧

- **深色模式**：右上角月亮/太阳按钮可切换，也会自动跟随系统设置。
- **手机浏览**：导航会收进菜单按钮，悬浮按钮自动变成图标。
- **改颜色**：想微调蓝白色调，编辑 `css/style.css` 顶部的 `:root` 变量即可，比如把 `--accent: #2563eb` 换成你喜欢的蓝色。

## 部署到 GitHub Pages（免费）

1. 在 GitHub 新建一个仓库，名字比如 `ziyun-portfolio`。
2. 把文件夹里的**所有文件**上传到仓库（README 可保留）。
3. 打开仓库 Settings → Pages，Source 选择 `main` 分支，保存。
4. 等 1 分钟左右，访问 `https://你的用户名.github.io/ziyun-portfolio/` 即可。

如果不想用 GitHub，也可以把整个文件夹拖到 [Netlify Drop](https://app.netlify.com/drop) 直接上线。

## 说明

- 网站由 Codex 根据《洪梓芸 · 个人品牌与产品策划作品集网站架构文档》从 0 到 1 搭建。
- 图标来自开源项目 [Phosphor Icons](https://phosphoricons.com/)（MIT 协议），已本地化，无需联网。
- 英文/数字字体 Outfit 已自托管，中文使用系统字体（微软雅黑 / 苹方），离线可用。
