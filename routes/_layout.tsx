import { PageProps } from "$fresh/server.ts";
import Header from "../components/Header.tsx";

export default function Layout({ Component, state }: PageProps) {
  // do something with state here

  return (
    <>
      <div class="grid align-middle justify-center px-4">
        <Header />
        <Component />

        <button type="button">Click the button</button>
      </div>
    </>
  );
}
