const { hot } = require("react-hot-loader/root")

// prefer default export if available
const preferDefault = m => m && m.default || m


exports.components = {
  "component---cache-dev-404-page-js": hot(preferDefault(require("/home/matheusdoe/Projetos/Sabor-de-Carne/.cache/dev-404-page.js"))),
  "component---src-pages-index-jsx": hot(preferDefault(require("/home/matheusdoe/Projetos/Sabor-de-Carne/src/pages/index.jsx")))
}

