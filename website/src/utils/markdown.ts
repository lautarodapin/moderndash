import { marked } from "marked";

export const markdownParser = (text: string) => marked.parse(text, { mangle: false, headerIds: false });