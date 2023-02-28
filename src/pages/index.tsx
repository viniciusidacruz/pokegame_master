import Head from 'next/head'
import Image from 'next/image'
import { Fragment } from 'react'

import { Redirect } from '@components/Redirect'

import { ALTERNATIVE_TEXTS } from '@constants/alternatives'

import { Main } from '@styles/pages/Home'

export default function Home() {
  return (
    <Fragment>
      <Head>
        <title>Start | Pokegame</title>
      </Head>

      <Main>
        <Image
          height={99}
          width={270}
          src="/pokemonLogo.png"
          data-testid="logo-pokemon"
          alt={ALTERNATIVE_TEXTS.logo}
        />
        <Redirect title="START" path="/map" data-testid="redirect-to-map" />
      </Main>
    </Fragment>
  )
}
