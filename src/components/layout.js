import React from 'react';
import useSiteMetadata from '../hooks/use-site-metadata';
import { createGlobalStyle } from 'styled-components'
import styled from 'styled-components';
import Header from './header';
import Helmet from 'react-helmet';

const GlobalStyle = createGlobalStyle`
* {
  box-sizing: border-box;
  margin: 0;
}
html, body {
  margin: 0;
  color: 555;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Arial, sans-serif;
  font-size: 18px;
  line-height: 1.4; 
}
" + " {
  margin-top: 1rem;
}
div {
  margin-top: 0;
}
h1, h2, h3, h4, h5, h6 {
  color: #222;
  line-height: 1.1;
 + * {
   margin-top: 0.5rem;
  }
} 
strong: {
  color: #222;
}

li {
  margin-top: 0.25rem;
}

`

const Main = styled.main`
  margin: 2rem auto 4rem;
  max-width: 90vw;
  width: 550px;
`;





const LayOut = ({ children }) => {
  const { title, description } = useSiteMetadata();
  console.log(title)
  return (
    <>
      <GlobalStyle />
      <Helmet>
        <html lang='en' />
        <title>{title}</title>
        <meta name='description' content={description} />
      </Helmet>
      <Header />
      <Main>
        {children}
      </Main>
    </>
  )

}

export default LayOut;