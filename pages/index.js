import React, { useState, useEffect } from 'react';

import Head from 'next/head'

export default function Home() {
  const [redirect, setRedirect] = useState(null);

  useEffect(() => {
    setRedirect(window.location.replace("https://docs.google.com/document/d/17eZ7OmvG1GaDqpVcyz-YQPZByJqB3-NxqVIlnLmtQpg/edit?usp=sharing"));
  }, []);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <Head>
        <title>Unfold Yours</title>
        <meta
          name="Unfold Yours"
          content="Unfold Yours, Learn Others"
          key="desc"
        />
      </Head>

      <main>
        {redirect}
      </main>

      <footer>
      </footer>
    </div>
  )
}
