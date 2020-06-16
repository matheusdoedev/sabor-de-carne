module.exports = {
  siteMetadata: {
    title: `Sabor de Carne`,
    description: `Churrascaria Sabor de Carne`,
    author: `@Matheusdoe-dev`,
    keywords: `Churrascaria, Carne, Churrasco, Rodizio, Sabor, Salvador, Bahia, Rio Vermelho, Comida, Restaurante, Som Ao Vivo, Peixes, Cordeiro, Porco, Bovinas, Salada, Caprese, Grega, Vinhos, Bebidas`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-styled-components`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/assets/`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `sabor-de-carne`,
        short_name: `sabor-de-carne`,
        start_url: `/`,
        background_color: `#FFFFFF`,
        theme_color: `#EB8242`,
        display: `minimal-ui`,
        icon: `src/assets/img/icons/brand.svg`,
      },
    },
  ],
};
