import Head from "next/head"
import React, {FC} from "react"
import {BlitzLayout} from "@blitzjs/next"

const Layout: BlitzLayout<{title?: string; children?: React.ReactNode}> = ({title, children}) => {
  return (
    <>
      <Head>
        <title>{title || "FrontX"}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className='min-h-full bg-gray-100 flex'>
        <section className="hidden md:w-1/2 md:flex justify-items-center content-center min-h-full place-items-center p-16 bg-gradient-to-br from-orange-400 to-purple-500">
          <img src="/img/logo-white.svg" alt="Logo" />
        </section>

        <section className="md:w-1/2 container p-4 md:p-8">
          <div className="m-auto bg-white rounded-md flex-row p-4 md:p-8">
            <img src="/img/logo.svg" alt="Logo" className="block md:hidden w-full md:w-64 align-middle mb-4" />
            {children}
          </div>
        </section>
      </main>
    </>
  )
}

export default Layout
