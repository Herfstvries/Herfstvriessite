module.exports = {
    siteMetadata: {
        description: `Music and sound for immersive experiences`,
        author: `@bttrcode`,
        image: `src/images/background.jpg`,
        siteUrl: `https://nozemaudio.com`,
    },
    plugins: [
        `gatsby-plugin-sass`,
        `gatsby-plugin-sharp`,
        `gatsby-transformer-sharp`,
        {
            resolve: `gatsby-plugin-google-fonts`,
            options: {
                fonts: [
                    `Montserrat:300`
                ],
                display: `swap`
            }
        },
        {
            resolve: `gatsby-plugin-react-svg`,
            options: {
                rule: {
                    include: /svg/
                }
            }
        },
        {
            resolve: 'gatsby-plugin-robots-txt',
            options: {
                host: 'https://nozemaudio.com',
                sitemap: 'https://nozemaudio.com/sitemap.xml',
                policy: [{ userAgent: '*', allow: '/' }]
            }
        },
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                name: `images`,
                path: `${__dirname}/static/images/`,
            }
        },
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                name: `projects`,
                path: `${__dirname}/content/projects/`,
            }
        },
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                name: `highlights`,
                path: `${__dirname}/content/highlights/`,
            }
        },
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                name: `pages`,
                path: `${__dirname}/content/pages/`,
            }
        },
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                name: `settings`,
                path: `${__dirname}/content/settings/`,
            }
        },
        {
            resolve: `gatsby-transformer-remark`,
            options: {
                plugins: [
                    {
                        resolve: `gatsby-remark-relative-images`,
                        options: {
                            name: `uploads`,
                        },
                    },
                    {
                        resolve: `gatsby-remark-images`,
                        options: {
                            maxWidth: 1920,
                        },
                    },
                ],
            },
        },
        `gatsby-plugin-netlify-cms`,
        `gatsby-plugin-transition-link`,
        `gatsby-plugin-sass`,
        {
            resolve: `gatsby-plugin-manifest`,
            options: {
                name: `Nozem audio`,
                short_name: `Nozem`,
                start_url: `/`,
                background_color: `#333333`,
                theme_color: `#333333`,
                display: `standalone`,
                icon: `./static/images/nozem-white-N.png`,
                orientation: `portrait-primary`,
                lang: `en-US`
            }
        },
        `gatsby-plugin-sitemap`
    ]
};
