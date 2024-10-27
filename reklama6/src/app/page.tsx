"use client";

import { Loading } from "@components";
import dynamic from "next/dynamic";
const Search = dynamic(() => import("../../libs/components/search/Search"), {
  ssr: false,
  loading: () => <Loading />,
});

export default function Home() {
  return (
    <div>
      <Search />
    </div>
  );
}
