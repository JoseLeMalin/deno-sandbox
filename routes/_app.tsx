import { type PageProps } from "$fresh/server.ts";
import Layout from "./_layout.tsx";
export default function App({ Component, state }: PageProps) {
  return (
    <html>
      <head>
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>test project</title>
        <link rel="stylesheet" href="/styles.css" />
      </head>
      <body>
        <Layout Component={Component}> 
          <Component />
        </Layout>

        {/* <Component /> */}
      </body>
    </html>
  );
}
