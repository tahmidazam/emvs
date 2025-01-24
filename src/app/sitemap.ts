import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://www.emmamedvetsoc.co.uk/",
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1,
    },
    {
      url: "https://www.emmamedvetsoc.co.uk/committee",
      changeFrequency: "monthly",
      lastModified: new Date(),
      priority: 0.8,
    },
    {
      url: "https://www.emmamedvetsoc.co.uk/lectures",
      lastModified: new Date(),
      changeFrequency: "monthly",

      priority: 0.8,
    },
    {
      url: "https://www.emmamedvetsoc.co.uk/sponsors",
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
  ];
}
