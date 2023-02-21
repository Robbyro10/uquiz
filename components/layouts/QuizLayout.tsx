import Head from 'next/head';
import React, { FC, PropsWithChildren } from 'react'
import { Footer } from '../ui';

interface Props extends PropsWithChildren {
    title: string;
    pageDescription: string;
}

export const QuizLayout: FC<Props> = ({children, title, pageDescription}) => {
  return (
    <div className='flex flex-col py-3'>
    <Head>
        <title>{title}</title>
        <meta name="description" content={pageDescription} />
        <meta name="og:title" content={title} />
        <meta name="og:description" content={pageDescription} />
    </Head>
    <main>
        {children}
    </main>
    <Footer />
    </div>
  )
}
