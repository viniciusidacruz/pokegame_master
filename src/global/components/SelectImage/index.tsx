import { forwardRef } from 'react'

import * as Styles from './styles'
import { ISelectImage } from './types'

const SelectImage = forwardRef((props: ISelectImage, ref?: any) => {
  const { thumbnailSource, onDeleteThumbnail, id } = props

  if (thumbnailSource) {
    return (
      <Styles.Header data-testid="header-thumbnail">
        <Styles.Thumbnail thumbnailSource={thumbnailSource}>
          <Styles.IconTrash
            onClick={onDeleteThumbnail}
            data-testid="button-element"
          />
        </Styles.Thumbnail>
      </Styles.Header>
    )
  }

  return (
    <Styles.SelectImage htmlFor={id} data-testid="content-field">
      <Styles.Icons>
        <Styles.IconCamera />
        <Styles.IconPlus />
      </Styles.Icons>
      <Styles.Input type="file" accept="image/*" ref={ref} {...props} />
    </Styles.SelectImage>
  )
})

SelectImage.displayName = 'SelectImage'

export default SelectImage
