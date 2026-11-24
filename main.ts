import { mkdirSync, writeFileSync } from "node:fs";
import { join, resolve } from "node:path";

function writeEntry(outDir: string, line: string): string {
  const target = join(outDir, "entry.txt");
  mkdirSync(outDir, { recursive: true });
  writeFileSync(target, line, "utf8");
  return target;
}

const outDir = resolve(process.env.MAKEFUN_OUTPUT_DIR ?? "/output");
const line = "By spring you will outgrow this windowsill, and the cat who knocked you over twice will finally ask for your autograph.";

const target = writeEntry(outDir, line);
console.log(`wrote ${line.length} chars to ${target}`);
