import Link from "next/link";
import Head from "next/head";

export default function Layout({ children }) {
  return (
    <>
      <Head>
        <title>FullCalendar Next.js 13 Example</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="favicon" href="/favicon.ico" />
      </Head>
      <div className="navbar">
        <Link prefetch={false} href="/">
          Home
        </Link>
        <span>&nbsp;&nbsp;</span>
        <Link prefetch={false} href="/calendar">
          Calendar
        </Link>
        <span>&nbsp;&nbsp;</span>
        <Link prefetch={false} href="/about">
          About
        </Link>
      </div>
      <div>{children}</div>
    </>
  );
}
