import { IModal } from './types'
import { useModal } from './useModal'
import { ModalContainer } from './styles'

export const Modal = ({ children, isOpen, onClose }: IModal) => {
  const { modalRef, animated, animation, handleCloseModal } = useModal({
    isOpen,
    onClose,
  })

  if (!isOpen) return null

  return (
    <ModalContainer
      ref={modalRef}
      onClick={handleCloseModal}
      data-testid="modal-container"
    >
      <animated.div style={animation}>{children}</animated.div>
    </ModalContainer>
  )
}
