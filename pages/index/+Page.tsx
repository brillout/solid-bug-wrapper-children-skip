import { Counter } from "./Counter.js";

export default function Page() {
  return (
    <>
      <h1>My Vike app</h1>
      This page is:
      <ul>
        <li>Rendered to HTML.</li>
        <li>
          Interactive. <Counter />
        </li>
      </ul>
      Head component:
      <Head>
        <span>Hello</span>
      </Head>
    </>
  );
}

function Head({ children }: any) {
  return null
}
