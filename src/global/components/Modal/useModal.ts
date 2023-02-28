import { useRef, useCallback, useEffect, MouseEvent } from 'react'
import { useSpring, animated } from 'react-spring'

interface IParamsHoook {
  isOpen: boolean
  onClose: () => void
}

export const useModal = ({ isOpen, onClose }: IParamsHoook) => {
  const modalRef = useRef<HTMLDivElement | null>(null)

  const animation = useSpring({
    config: {
      duration: 250,
    },
    opacity: isOpen ? 1 : 0,
    transform: isOpen ? 'translateY(0%)' : 'translateY(-100%)',
  })

  const handleCloseModal = (event: MouseEvent<HTMLDivElement>): void => {
    if (modalRef.current === event.target) {
      onClose()
    }
  }

  const keypressEscape = useCallback(
    (event: KeyboardEvent) => {
      if (event.key === 'Escape' && isOpen) {
        onClose()
      }
    },
    [isOpen, onClose]
  )

  useEffect(() => {
    document.addEventListener('keydown', keypressEscape)
    return () => document.removeEventListener('keydown', keypressEscape)
  }, [keypressEscape])

  return {
    modalRef,
    animated,
    animation,
    handleCloseModal,
  }
}
