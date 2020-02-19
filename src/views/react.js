require('@babel/register')({
  presets: ['@babel/preset-react', '@babel/preset-env']
})

const React = require('react')
const ReactDOMServer = require('react-dom/server')

module.exports = loc => {
  const Component = require(loc).default || require(loc)

  return async (req, res) => {
    // add any SSR props you want, here
    const ctx = { req, res }
    const props = Component.getInitialProps ? await Component.getInitialProps(ctx) : {}
    props.headers = props.headers || { 'content-type': 'text/html' }
    const body = ReactDOMServer.renderToString(React.createElement(Component, props))
    // you can pull more out of props, if you need it.
    return {
      statusCode: props.statusCode || 200,
      headers: props.headers,
      body
    }
  }
}
