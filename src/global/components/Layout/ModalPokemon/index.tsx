import Image from 'next/image'

import { useModalPokemon } from '@hooks/useModalPokemon'
import { ALTERNATIVE_TEXTS } from '@constants/alternatives'

import { Heading } from '@components/index'

import * as Styles from './styles'
import { IModalPokemon } from './types'

export function ModalPokemon({ data, onClose, isEditable }: IModalPokemon) {
  const {
    hp_filtered,
    renderListTypes,
    renderFieldForEdit,
    renderListAbilities,
    renderListStatistics,
    handleAddToPokemonList,
    handleRemovePokemonList,
  } = useModalPokemon({
    data,
    onClose,
    isEditable,
  })

  return (
    <Styles.Background>
      <Styles.Wrapper>
        <Styles.Header>
          <Styles.AvatarProfile>
            <Image
              width={200}
              height={200}
              alt={`Imagem do pokemon ${data?.name}`}
              src={data?.thumbnail ?? data?.sprites?.front_default}
            />
          </Styles.AvatarProfile>

          <Styles.ButtonClose
            type="button"
            onClick={onClose}
            data-testid="button-close-modal"
          >
            <Image
              width={24}
              height={24}
              src="/close.png"
              alt={ALTERNATIVE_TEXTS.iconClose}
            />
          </Styles.ButtonClose>
        </Styles.Header>
        <Styles.Container>
          <Styles.Content>
            <Styles.HeaderName>{renderFieldForEdit()}</Styles.HeaderName>

            <Styles.Row justifyContent="space-between" mt={32}>
              <Styles.Column>
                <Heading
                  level={3}
                  title="HP"
                  size="regular"
                  color="neutral_700"
                />

                <Heading
                  level={4}
                  size="large"
                  color="neutral_700"
                  data-testid="hp-value"
                  title={`${data?.hp ?? hp_filtered}/${
                    data?.hp ?? hp_filtered
                  }`}
                />
              </Styles.Column>

              <Styles.Column>
                <Heading
                  level={3}
                  title="Altura"
                  size="regular"
                  color="neutral_700"
                />

                <Heading
                  level={4}
                  size="large"
                  color="neutral_700"
                  title={`${data?.height} m`}
                />
              </Styles.Column>

              <Styles.Column>
                <Heading
                  level={3}
                  title="Peso"
                  size="regular"
                  color="neutral_700"
                />

                <Heading
                  level={4}
                  size="large"
                  color="neutral_700"
                  title={`${data?.weight} kg`}
                />
              </Styles.Column>
            </Styles.Row>

            <Styles.Group>
              <Styles.Title
                level={4}
                width={40}
                title="TIPO"
                size="regular"
                weight="semibold"
              />

              <Styles.List isGap>{renderListTypes()}</Styles.List>
            </Styles.Group>

            <Styles.Group>
              <Styles.Title
                level={4}
                width={30}
                size="regular"
                weight="semibold"
                title="HABILIDADES"
              />

              <Styles.List>{renderListAbilities()}</Styles.List>
            </Styles.Group>

            {isEditable && (
              <Styles.Group>
                <Styles.Title
                  level={4}
                  width={28}
                  size="regular"
                  weight="semibold"
                  title="ESTATÍSTICAS"
                />

                <Styles.ColumnStats>
                  {renderListStatistics()}
                </Styles.ColumnStats>
              </Styles.Group>
            )}

            {isEditable ? (
              <Styles.ButtonFooter
                type="button"
                title="LIBERAR POKEMON"
                data-testid="remove-pokemon-list"
                onClick={() => handleRemovePokemonList()}
                arial-label="Botão para liberar um pokemon"
              />
            ) : (
              <Styles.PokeballImage
                width={106}
                height={106}
                src="/pokeball.png"
                alt={ALTERNATIVE_TEXTS.pokeball}
                onClick={() => handleAddToPokemonList()}
              />
            )}
          </Styles.Content>
        </Styles.Container>
      </Styles.Wrapper>
    </Styles.Background>
  )
}
