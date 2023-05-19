'use client'

import { ChangeEvent, useState } from "react"

export const MediaPicker = () => {
  const [preview, setPreview] = useState<null | string>(null);

  function onFileSelected(event: ChangeEvent<HTMLInputElement>) {
    const { files } = event.target;

    if (!files) {
      return;
    }

    const previewUrl = URL.createObjectURL(files[0]);

    setPreview(previewUrl);
  }

  return (
    <>
      <input
        onChange={onFileSelected}
        type='file'
        id='midia'
        name="coverUrl"
        className='invisible h-0 w-0'
        accept="image/*"
      />

      {
        preview &&
        // eslint-disable-next-line @next/next/no-img-element
        <img
          src={preview}
          alt=""
          className="w-full aspect-video rounded-lg object-cover"
        />
      }
    </>
  )
}