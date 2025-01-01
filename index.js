import { extract } from "@extractus/article-extractor";

const input = "https://www.avesdechile.cl/204.htm";

// here we use top-level await, assume current platform supports it
try {
  const article = await extract(input);
  console.log(article.content);
} catch (err) {
  console.error(err);
}
