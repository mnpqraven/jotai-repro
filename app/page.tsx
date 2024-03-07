"use client";

import { useAtomValue } from "jotai";
import { helloAtom } from "./_store";

export default function Home() {
  const hello = useAtomValue(helloAtom);
  return (
    <>
      hello world <br />
      {hello}
    </>
  );
}
