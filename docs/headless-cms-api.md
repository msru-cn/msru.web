# 分布式边缘同步 API (`/api/cms`) 全量接口参考文档

详细参考请见网站内部 FumaDocs 文档源文件：[content/docs/cms/integrations/edge-sync-api.mdx](../content/docs/cms/integrations/edge-sync-api.mdx)。

## Token 来源与 Coolify 环境变量配置
在 Coolify 环境变量配置中添加：
```env
CMS_API_KEY=your_secure_random_token_64_chars
```

## 统一鉴权与请求格式
```http
POST /api/cms
Authorization: Bearer your_secure_random_token_64_chars
Content-Type: application/json
```

## 支持的 5 大功能指令 (`action`)

### 1. `upsert_marketing` (营销页 SDUI)
```json
{
  "action": "upsert_marketing",
  "slug": "products/mes",
  "blocks": [{ "type": "hero", "headline": "智能制造 MES 系统" }],
  "meta": { "title": "MES 系统 | MSRU" }
}
```

### 2. `delete_marketing` (删除营销页)
```json
{
  "action": "delete_marketing",
  "slug": "products/mes"
}
```

### 3. `upsert_docs` (技术文档 MDX)
```json
{
  "action": "upsert_docs",
  "slug": "guide/quickstart",
  "title": "快速开始手册",
  "description": "说明描述",
  "content": "# 快速开始\n\n正文内容..."
}
```

### 4. `delete_docs` (删除技术文档)
```json
{
  "action": "delete_docs",
  "slug": "guide/quickstart"
}
```

### 5. `execute_sql` (万能 SQL 通道)
```json
{
  "action": "execute_sql",
  "sql": "SELECT COUNT(*) as total FROM cms_marketing_pages",
  "type": "get"
}
```
