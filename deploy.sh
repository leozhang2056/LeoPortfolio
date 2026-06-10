#!/bin/bash
set -e

echo "=== 启动自动部署流程 ==="

# 进入项目目录
cd /home/pi5/apps/LeoPortfolio

# 拉取最新代码
git fetch origin
git reset --hard origin/main
git clean -fd

# 安装依赖
npm ci --only=production

# 构建项目
npm run build

# 重启或启动 PM2 进程
if pm2 describe portfolio > /dev/null; then
    echo "正在重启 portfolio 应用..."
    pm2 restart portfolio
else
    echo "首次启动 portfolio 应用..."
    pm2 start npm --name portfolio -- start
fi

# 保存 PM2 进程列表
pm2 save

# 验证部署状态
if [ $? -eq 0 ]; then
    echo "=== 部署完成 ==="
    echo "应用地址: http://localhost:3000"
    echo "PM2 状态:"
    pm2 status portfolio
else
    echo "=== 部署失败 ==="
    exit 1
fi
