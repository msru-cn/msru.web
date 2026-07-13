"use client";

import { Check, Send } from "lucide-react";
import { useState } from "react";
import { cn } from "@/lib/cn";
import { type AccentColor, getAccent } from "../accent";

export interface FormField {
  name: string;
  label: string;
  type?: "text" | "email" | "tel" | "textarea" | "select";
  placeholder?: string;
  required?: boolean;
  options?: string[];
}
export interface ContactFormProps {
  heading?: string;
  subtitle?: string;
  fields: FormField[];
  submitLabel?: string;
  /** 提交目标邮箱；给了就用 mailto 拼装，否则纯本地演示成功态。 */
  submitEmail?: string;
  accentColor?: AccentColor;
}

/**
 * 联系表单块 —— glass-stage 背景 + 玻璃表单面板。字段可配置化。
 * client 组件(受控输入)。无后端时：有 submitEmail 走 mailto，否则显示本地成功态。
 * 明暗双主题自适应。
 */
export function ContactForm({
  heading,
  subtitle,
  fields,
  submitLabel = "提交",
  submitEmail,
  accentColor = "blue",
}: ContactFormProps) {
  const accent = getAccent(accentColor);
  const [values, setValues] = useState<Record<string, string>>({});
  const [sent, setSent] = useState(false);

  const set = (name: string, v: string) => setValues((prev) => ({ ...prev, [name]: v }));

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (submitEmail) {
      const subject = encodeURIComponent(heading ?? "网站表单提交");
      const body = encodeURIComponent(fields.map((f) => `${f.label}: ${values[f.name] ?? ""}`).join("\n"));
      window.location.href = `mailto:${submitEmail}?subject=${subject}&body=${body}`;
    }
    setSent(true);
  };

  return (
    <section className="glass-stage py-24 md:py-28">
      <div className="mx-auto max-w-2xl px-6">
        {(heading || subtitle) && (
          <div className="mb-10 text-center">
            {heading && (
              <h2 className="text-balance text-3xl font-bold tracking-tight text-zinc-900 md:text-4xl dark:text-white">
                {heading}
              </h2>
            )}
            {subtitle && <p className="mt-3 text-zinc-500 dark:text-zinc-400">{subtitle}</p>}
          </div>
        )}

        <form onSubmit={handleSubmit} className="glass glass-strong flex flex-col gap-5 rounded-[2rem] p-8 md:p-10">
          {fields.map((f) => (
            <div key={f.name} className="flex flex-col gap-2 text-sm font-medium text-zinc-700 dark:text-zinc-200">
              <label htmlFor={f.name}>
                {f.label}
                {f.required && <span className="ml-1 text-rose-500">*</span>}
              </label>
              {f.type === "textarea" ? (
                <textarea
                  id={f.name}
                  name={f.name}
                  required={f.required}
                  placeholder={f.placeholder}
                  rows={4}
                  value={values[f.name] ?? ""}
                  onChange={(e) => set(f.name, e.target.value)}
                  className="glass-subtle rounded-xl px-4 py-3 text-zinc-900 outline-none transition focus:ring-2 focus:ring-blue-500/40 dark:text-white"
                />
              ) : f.type === "select" ? (
                <select
                  id={f.name}
                  name={f.name}
                  required={f.required}
                  value={values[f.name] ?? ""}
                  onChange={(e) => set(f.name, e.target.value)}
                  className="glass-subtle rounded-xl px-4 py-3 text-zinc-900 outline-none transition focus:ring-2 focus:ring-blue-500/40 dark:text-white"
                >
                  <option value="">{f.placeholder ?? "请选择"}</option>
                  {f.options?.map((o) => (
                    <option key={o} value={o}>
                      {o}
                    </option>
                  ))}
                </select>
              ) : (
                <input
                  id={f.name}
                  name={f.name}
                  type={f.type ?? "text"}
                  required={f.required}
                  placeholder={f.placeholder}
                  value={values[f.name] ?? ""}
                  onChange={(e) => set(f.name, e.target.value)}
                  className="glass-subtle rounded-xl px-4 py-3 text-zinc-900 outline-none transition focus:ring-2 focus:ring-blue-500/40 dark:text-white"
                />
              )}
            </div>
          ))}

          <button
            type="submit"
            className={cn(
              "group mt-2 inline-flex h-13 items-center justify-center gap-2 rounded-full bg-linear-to-r px-8 text-base font-medium text-white shadow-lg transition-all duration-[var(--dur-base)] ease-[var(--ease-glass)] hover:scale-[1.02]",
              accent.gradientFrom,
              "to-cyan-500 shadow-blue-500/25",
            )}
          >
            {sent ? <Check className="size-4" /> : <Send className="size-4" />}
            {sent ? "已提交，感谢！" : submitLabel}
          </button>
        </form>
      </div>
    </section>
  );
}
