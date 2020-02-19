import React from 'react'

const Home = ({ info }) => (
  <div>
    This came from server-side:
    <pre>{JSON.stringify(info, null, 2)}</pre>
  </div>
)

// optional (async) function that sets up initial props
Home.getInitialProps = ctx => {
  return { info: ctx }
}

export default Home
