import { act } from '@testing-library/react'
import { renderHook } from '@testing-library/react-hooks'

import { useGeneratePokeModal } from '.'

describe('useGeneratePokeModal', () => {
  test('should return initial values', () => {
    const { result } = renderHook(() => useGeneratePokeModal())

    expect(result.current.showModalPokemon).toBe(false)
  })

  test('should change state modal', () => {
    const { result } = renderHook(() => useGeneratePokeModal())

    expect(result.current.showModalPokemon).toBe(false)

    act(() => {
      result.current.handleOpenModal()
    })

    expect(result.current.showModalPokemon).toBe(true)

    act(() => {
      result.current.handleCloseModal()
    })

    expect(result.current.showModalPokemon).toBe(false)
  })
})

export {}
