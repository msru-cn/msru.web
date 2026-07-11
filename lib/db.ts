import Database from "better-sqlite3";
import { existsSync, mkdirSync } from "node:fs";
import { dirname, resolve } from "node:path";

let instance: Database.Database | null = null;

const SEED_PRODUCTS: Array<[string, string, string, string, string, string, number]> = [
  ["mes", "MES 执行", "生产的艺术。精益求精。", "全流程质量追溯与调度，让每一道工序精准无误。", "blue", "Cpu", 1],
  ["wms", "WMS 仓储", "极智流转。尽在掌握。", "数字孪生与立库智能控制，打造黑灯级立体大仓储。", "emerald", "Package", 2],
  ["aps", "APS 架构", "全局视野。运筹帷幄。", "基于约束理论的高级动态排程，确保交期推演滴水不漏。", "amber", "Calendar", 3],
  ["qms", "QMS 品控", "绝不妥协。万无一失。", "贯穿产品全生命周期的控制标准与统计 SPC 防错闭环。", "rose", "ShieldCheck", 4],
  ["eam", "EAM 资产", "预置维护。防患未然。", "基于工况大数据的预测性维护与备件台账全生命周期追踪。", "slate", "Settings", 5],
  ["iot", "IoT 互联", "万物归一。即插即接。", "千万级高并发接入能力，百万级异构设备数采秒级边缘计算。", "purple", "Network", 6],
  ["ai", "人工智能", "超能觉醒。探知未来。", "基于深度预测模型的智能调度、高精度视觉质检与工艺时序剖析。", "fuchsia", "Zap", 7],
];

function dbPath(): string {
  const p = process.env.DATABASE_PATH ?? "./data/msru-web.db";
  return resolve(process.cwd(), p);
}

function init(db: Database.Database): void {
  db.exec(`
    CREATE TABLE IF NOT EXISTS marketing_products (
      slug TEXT PRIMARY KEY,
      title TEXT NOT NULL,
      tagline TEXT NOT NULL,
      description TEXT NOT NULL,
      accent_color TEXT NOT NULL,
      icon TEXT NOT NULL,
      sort_order INTEGER NOT NULL DEFAULT 0
    );
  `);
  const count = db.prepare("SELECT COUNT(*) AS n FROM marketing_products").get() as { n: number };
  if (count.n === 0) {
    const stmt = db.prepare(
      "INSERT INTO marketing_products (slug, title, tagline, description, accent_color, icon, sort_order) VALUES (?, ?, ?, ?, ?, ?, ?)",
    );
    const tx = db.transaction((rows: typeof SEED_PRODUCTS) => {
      for (const r of rows) stmt.run(...r);
    });
    tx(SEED_PRODUCTS);
  }
}

export function db(): Database.Database {
  if (!instance) {
    const path = dbPath();
    const dir = dirname(path);
    if (!existsSync(dir)) mkdirSync(dir, { recursive: true });
    instance = new Database(path);
    instance.pragma("journal_mode = WAL");
    init(instance);
  }
  return instance;
}
