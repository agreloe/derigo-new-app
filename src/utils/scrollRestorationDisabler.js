import Head from "next/head";

export default function ScrollRestorationDisabler({children}) {
  return (
    <Head>
      <script
        dangerouslySetInnerHTML={{
          __html: `history.scrollRestoration = "manual"`,
        }}
      />
      {children}
    </Head>
  );
}