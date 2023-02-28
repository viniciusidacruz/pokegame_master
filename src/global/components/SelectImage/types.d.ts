import { InputHTMLAttributes } from 'react'

export interface ISelectImage extends InputHTMLAttributes<HTMLInputElement> {
  onDeleteThumbnail: () => void
  thumbnailSource?: string | ArrayBuffer | null
}

export type TThumbnailSource = Pick<IComponentParams, 'thumbnailSource'>
