import SeoPane from "sanity-plugin-seo-pane";

// ...all other list items

S.view
  .component(SeoPane)
  .options({
    keywords: `seo.keywords`,
    synonyms: `seo.synonyms`,
    url: (doc) => resolveProductionUrl(doc),
  })
  .title("SEO");
