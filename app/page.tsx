import React from "react";
import ChapterTitle from "./components/ChapterTitle";
import BirthChart from "./components/BirthChart";

export default function Home() {
  return (
    <div className="w-full mx-auto max-w-md overflow-x-auto min-w-[448px] flex flex-col items-center bg-[#F3F2F0] pb-20">
      <ChapterTitle number={1} title="나의 사주 팔자" />
      <BirthChart />
    </div>
  );
}
