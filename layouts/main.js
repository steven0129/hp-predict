import React from 'react'
import Head from 'next/head'

export default ({ children }) => (
    <div >
        <Head>
            <title>HP Predict</title>
            <meta name="viewport" content="initial-scale=1.0, width=device-width" />
            <link rel='stylesheet' href='https://maxcdn.bootstrapcdn.com/bootstrap/latest/css/bootstrap.min.css' />
            <link rel='stylesheet' href='https://maxcdn.bootstrapcdn.com/bootstrap/latest/css/bootstrap-theme.min.css' />
            <link rel='stylesheet' href='/static/main.css' />
        </Head>
        {children}
    </div >
)