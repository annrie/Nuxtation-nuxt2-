export default {
  asyncData(context) {
    return {
      baseUrl: context.env.baseUrl,
      baseDir: context.env.baseDir,
      basePath: context.env.basePath,
      siteName: context.env.siteName,
      siteDesc: context.env.siteDesc,
      siteKeywords: context.env.siteKeywords,
      ogpImages: context.env.ogpImages,
      shortName: context.env.shortName,
    };
  },
  head() {
    const head = { meta: [] };

    const title = this.meta.title;
    const desc = this.meta.desc;
    const type = this.meta.type;
    const image = this.meta.image;
    const keywords = this.meta.keywords;

    // title/ogpTitle
    if (title) {
      head.title = title;
      head.meta.push({
        hid: "og:title",
        property: "og:title",
        content: `${title} - ${this.siteName}`,
      });
    }

    // description
    if (desc) {
      head.meta.push({
        hid: "description",
        name: "description",
        content: desc,
      });
      head.meta.push({
        hid: "og:description",
        property: "og:description",
        content: desc,
      });
    } else if (!desc && title) {
      const descOmit = `The ${title} sample page on ${this.shortName} site. ${this.siteDesc}`;
      head.meta.push({
        hid: "description",
        name: "description",
        content: descOmit,
      });
      head.meta.push({
        hid: "og:description",
        property: "og:description",
        content: descOmit,
      });
    }

    // pagetype
    if (type) {
      head.meta.push({
        hid: "og:type",
        property: "og:type",
        content: type,
      });
    } else if (this.$route.path === "/") {
      head.meta.push({
        hid: "og:type",
        property: "og:type",
        content: "website",
      });
    }

    // page URL
    const urlset = `${this.baseUrl}${this.$router.history.base}${this.$route.path}`;
    head.meta.push({
      hid: '"og:url',
      property: "og:url",
      content: urlset,
    });

    // OGP img URL
    if (image) {
      head.meta.push({
        hid: "og:image",
        property: "og:image",
        content: this.ogpImages + image,
      });
    }

    return head;
  },
};
