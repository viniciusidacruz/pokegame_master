import { act } from '@testing-library/react'
import { renderHook } from '@testing-library/react-hooks'

import { usePokemonCreate } from '.'

describe('usePokemonCreate', () => {
  test('should return initial values', () => {
    const { result } = renderHook(() => usePokemonCreate())

    expect(result.current.imageURL).toBe(null)
    expect(result.current.selectedMyPokemon).toBe(null)
    expect(result.current.isModalCreateOpen).toBe(false)
  })

  test('should change state modal', () => {
    const { result } = renderHook(() => usePokemonCreate())

    expect(result.current.isModalCreateOpen).toBe(false)

    act(() => {
      result.current.handleOpenModalCreate()
    })

    expect(result.current.isModalCreateOpen).toBe(true)

    act(() => {
      result.current.handleCloseModalCreate()
    })

    expect(result.current.isModalCreateOpen).toBe(false)
  })
})

export {}
