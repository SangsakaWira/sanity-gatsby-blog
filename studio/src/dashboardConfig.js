export default {
  widgets: [
    { name: "structure-menu" },
    {
      name: "project-info",
      options: {
        __experimental_before: [
          {
            name: "netlify",
            options: {
              description:
                "NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.",
              sites: [
                {
                  buildHookId:
                    "611693250a8d8710760f110b",
                  title: "Sanity Studio",
                  name: "sanity-gatsby-blog-studio-uq48etcy",
                  apiId: "98a32a87-984e-41b7-b263-de132dec3421",
                },
                {
                  buildHookId: "6116932515f7820ef89ee305",
                  title: "Blog Website",
                  name: "sanity-gatsby-blog-web-1qdbz3rc",
                  apiId: "fba72b27-dafb-4571-9828-5a1f77d49429",
                },
              ],
            },
          },
        ],
        data: [
          {
            title: "GitHub repo",
            value:
              "https://github.com/SangsakaWira/sanity-gatsby-blog",
            category: "Code",
          },
          {
            title: "Frontend",
            value: "https://sanity-gatsby-blog-web-1qdbz3rc.netlify.app",
            category: "apps",
          },
        ],
      },
    },
    { name: "project-users", layout: { height: "auto" } },
    {
      name: "document-list",
      options: {
        title: "Recent blog posts",
        order: "_createdAt desc",
        types: ["post"],
      },
      layout: { width: "medium" },
    },
  ],
};
