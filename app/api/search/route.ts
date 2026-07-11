import { createTokenizer } from "@orama/tokenizers/mandarin";
import { createFromSource } from "fumadocs-core/search/server";
import { source } from "@/lib/source";

// 1. 初始化原生的中文分词器
const mandarinTokenizer = createTokenizer();

// 2. 包装并重写分词器，强制执行小写转换
const caseInsensitiveMandarinTokenizer = {
  ...mandarinTokenizer,
  tokenize: (raw: string, language?: string, prop?: string) => {
    // 关键点：在传入底层分词器前，先将原始文本强制转为小写
    const lowercasedText = raw ? raw.toLowerCase() : raw;
    return mandarinTokenizer.tokenize(lowercasedText, language, prop);
  },
};

export const { GET } = createFromSource(source, {
  components: {
    // 3. 注入我们自定义的分词器
    tokenizer: caseInsensitiveMandarinTokenizer,
  },
  search: {
    tolerance: 0,
    threshold: 0.5,
  },
});
