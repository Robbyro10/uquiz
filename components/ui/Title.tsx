import React, { FC, PropsWithChildren } from 'react'


interface Props {
    body: string;
}

export const Title: FC<Props> = ({ body }) => {
  return (
    <h1 className="text-center text-3xl font-bold my-3 animate__animated animate__fadeIn">
        {body}
    </h1>
  )
}
