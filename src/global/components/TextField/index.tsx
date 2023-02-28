import { forwardRef } from 'react'

import * as Styles from './styles'
import { ITextField } from './types'

const TextField = forwardRef((props: ITextField, ref?: any) => {
  const { label, icon, id } = props
  return (
    <Styles.Group>
      {label && (
        <Styles.GroupLabel data-testid="group-label">
          {icon && icon}
          <Styles.Label data-testid="label-element" htmlFor={id}>
            {label}
          </Styles.Label>
        </Styles.GroupLabel>
      )}

      <Styles.Field data-testid="input-element" ref={ref} {...props} />
    </Styles.Group>
  )
})

TextField.displayName = 'TextField'

export default TextField
