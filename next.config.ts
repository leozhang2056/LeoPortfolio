import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'standalone', // 启用独立输出，支持 Docker 部署
  experimental: {
    // 其他实验性配置
  }
};

export default nextConfig;
