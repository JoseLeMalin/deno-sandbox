import { PageProps } from "$fresh/server.ts";



export default function User(props: PageProps) {
  return (
    <main>
      <h1>About</h1>
      <p>This is the about page.</p>
      {props.params.user_id}
    </main>
  );
}
