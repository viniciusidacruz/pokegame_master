import Head from 'next/head'
import Image from 'next/image'
import { Fragment } from 'react'

import { ALTERNATIVE_TEXTS } from '@constants/alternatives'
import { useGeneratePokeModal, useMovement } from '@hooks/index'

import { Modal, ModalPokemon, Sidebar } from '@components/index'

import * as Styles from '@styles/pages/Map'

export default function Map() {
  const { handleCloseModal, showModalPokemon, handleOpenModal } =
    useGeneratePokeModal()

  const {
    ashRef,
    pokemon,
    renderTooltip,
    positionAshImage,
    handleSearchPokemon,
  } = useMovement(handleOpenModal)

  return (
    <Fragment>
      <Head>
        <title>Mapa | Pokegame</title>
      </Head>
      <Styles.Main>
        <Sidebar data-testid="sidebar-element" />
        <Styles.WrapperAsh ref={ashRef} data-testid="ash-element">
          {renderTooltip()}
          <Image
            width={48}
            height={48}
            src={positionAshImage}
            alt={ALTERNATIVE_TEXTS.ash}
            onClick={handleSearchPokemon}
          />
        </Styles.WrapperAsh>

        <Modal
          isOpen={showModalPokemon}
          onClose={handleCloseModal}
          data-testid="modal-element"
        >
          <ModalPokemon data={pokemon} onClose={handleCloseModal} />
        </Modal>
      </Styles.Main>
    </Fragment>
  )
}
