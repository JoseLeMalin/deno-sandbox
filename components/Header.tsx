import { Button } from "./Button.tsx";

export default function Header() {
  return (
    <>
      <header class="bg-slate-400">
        <div class="flex flex-row align-middle content-start gap-4">
          <Button>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className="size-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
              />
            </svg>
          </Button>
          <h1>Header</h1>
        </div>
      </header>
    </>
  );
}
