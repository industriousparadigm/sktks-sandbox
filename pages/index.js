import Head from 'next/head'
import styled from 'styled-components'
import { H1, H2, Text } from 'styles/DesignSystem'

export default function Home() {
  return (
    <div>
      <Head>
        <title>NextJS Starter</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <H1>
          Welcome to <a href="https://nextjs.org">Next.js!</a>
        </H1>
        <H2>Carrying React devs since 2016</H2>

        <Text>
          Get started by editing <code>pages/index.js</code>
        </Text>
      </main>

      <footer>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer">
          Powered by <Image src="/vercel.svg" alt="Vercel Logo" />
        </a>
      </footer>
    </div>
  )
}

const Image = styled.img`
  height: 1rem;
`
