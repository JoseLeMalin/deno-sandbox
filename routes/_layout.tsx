import { PageProps } from "$fresh/server.ts";

export default function Layout(
  { Component, state, url }: PageProps<undefined>,
) {
  // do something with state here
  return (
    <div class="layout">
      <Component />
    </div>
  );
}
