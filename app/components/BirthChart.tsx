"use client";

import Image from "next/image";

import ChartLayerLeft from "../../public/assets/ChartLayerLeft.svg";
import ChartLayerRight from "../../public/assets/ChartLayerRight.svg";

type Cell = {
  char: string | string[];
  meaning: string | string[];
  color?: string;
  cheonganIm?: string;
};

type Row = {
  label: string;
  subLabel: string;
  cells: Cell[];
};

type ChartData = {
  name: string;
  birthDate: string;
  headers: string[];
  rows: Row[];
};

export default function BirthChart() {
  const chartData: ChartData = {
    name: "김로켓님의 사주",
    birthDate: "1980년 8월27일 08:10",
    headers: ["時", "日", "月", "年"],
    rows: [
      {
        label: "十星",
        subLabel: "(십성)",
        cells: [
          { char: "壬", meaning: "임관", color: "" },
          { char: "丁", meaning: "정관", color: "" },
          { char: "癸", meaning: "계수", color: "" },
          { char: "癸", meaning: "계수", color: "" },
        ],
      },
      {
        label: "天干",
        subLabel: "(천간)",
        cells: [
          {
            char: "壬",
            meaning: "임",
            cheonganIm: "陽水",
            color: "bg-[#2F2F2F] text-white",
          },
          {
            char: "丁",
            meaning: "정",
            cheonganIm: "陽水",
            color: "bg-[#C23030] text-white",
          },
          {
            char: "癸",
            meaning: "계",
            cheonganIm: "陽水",
            color: "bg-[#2F2F2F] text-white",
          },
          {
            char: "癸",
            meaning: "계",
            cheonganIm: "陽水",
            color: "bg-[#2F2F2F] text-white",
          },
        ],
      },
      {
        label: "地支",
        subLabel: "(지지)",
        cells: [
          {
            char: "寅",
            meaning: "인",
            cheonganIm: "陽水",
            color: "bg-[#18868B] text-white",
          },
          {
            char: "巳",
            meaning: "사",
            cheonganIm: "陽水",
            color: "bg-[#C23030] text-white",
          },
          {
            char: "亥",
            meaning: "해",
            cheonganIm: "陽水",
            color: "bg-[#2F2F2F] text-white",
          },
          {
            char: "西",
            meaning: "유",
            cheonganIm: "陽水",
            color: "bg-white border border-black",
          },
        ],
      },
      {
        label: "十星",
        subLabel: "(십성)",
        cells: [
          { char: "比肩", meaning: "비견", color: "" },
          { char: "劫財", meaning: "겁재", color: "" },
          { char: "食神", meaning: "식신", color: "" },
          { char: "偏財", meaning: "편재", color: "" },
        ],
      },
      {
        label: "十二運",
        subLabel: "(십이운성)",
        cells: [
          { char: "死", meaning: "사" },
          { char: "帝", meaning: "제왕" },
          { char: "胎", meaning: "태" },
          { char: "長生", meaning: "장생" },
        ],
      },
      {
        label: "十二神殺",
        subLabel: "(십이신살)",
        cells: [
          { char: "勾殺", meaning: "구살" },
          { char: "地殺", meaning: "지살" },
          { char: "驛馬殺", meaning: "역마살" },
          { char: "將星殺", meaning: "장성살" },
        ],
      },
      {
        label: "貴人",
        subLabel: "(귀인)",
        cells: [
          { char: "", meaning: "없음" },
          { char: "", meaning: "없음" },
          { char: "天乙", meaning: "천을귀인" },
          {
            char: ["天乙", "太極", "文昌"],
            meaning: ["천을귀인", "태극귀인", "문창귀인"],
          },
        ],
      },
    ],
  };

  return (
    <div className="flex flex-col max-w-md p-4 bg-[#F5F3EC] font-sans w-[424px] border-[3px] border-[#1B2F49] shadow-[0px_4px_4px_rgba(0,0,0,0.25)] z-60 -mt-6 relative">
      <div className="absolute top-0 border-[1px] border-[#2B557E] border-t-0 border-b-0 w-[408px] h-[640px] self-center"></div>
      <div className="absolute top-2 border-[1px] border-[#2B557E] border-l-0 border-r-0 w-[424px] h-[624px] self-center"></div>

      <div className="text-center mb-4 w-[424px] self-center">
        <div className="flex items-center justify-around gap-11">
          <Image
            src={ChartLayerLeft}
            alt="Chart Layer Left"
            className="mt-auto"
          />

          <div className="flex flex-col">
            <h2 className="text-xl font-bold mx-4">{chartData.name}</h2>
            <div className="text-lg mt-2">{chartData.birthDate}</div>
          </div>
          <Image src={ChartLayerRight} alt="Chart Layer Right" />
        </div>
      </div>

      <div>
        <div className="flex border-b border-gray-800">
          <div className="w-20 border-r border-gray-800 text-center py-2"></div>
          {chartData.headers.map((header, idx) => (
            <div
              key={idx}
              className="flex-1 border-r border-gray-800 text-center py-2 font-bold"
            >
              {header}
            </div>
          ))}
        </div>

        {chartData.rows.map((row, rowIdx) => (
          <div key={rowIdx} className="flex border-b border-gray-800">
            <div className="flex flex-col items-center justify-center w-20 border-r border-gray-800 p-1 text-center">
              <div className="text-sm font-medium">{row.label}</div>
              <div className="text-xs text-gray-600">{row.subLabel}</div>
            </div>

            {row.cells.map((cell, cellIdx) => (
              <div
                key={cellIdx}
                className="flex-1 border-r border-gray-800 p-1 bg-white"
              >
                <div
                  className={`h-full flex flex-col items-center justify-center rounded-2xl gap-0.5  ${
                    cell.color ?? ""
                  }`}
                >
                  {row.label === "天干" || row.label === "地支" ? (
                    <>
                      <div className="flex flex-col justify-center items-center py-1 ">
                        {cell.meaning && (
                          <div className="text-[8px]">{cell.meaning}</div>
                        )}
                        <div className="text-2xl font-bold">{cell.char}</div>
                        <div className="text-[8px]">{cell.cheonganIm}</div>
                      </div>
                    </>
                  ) : Array.isArray(cell.char) &&
                    Array.isArray(cell.meaning) ? (
                    <div className="flex flex-col items-center py-1">
                      {cell.char.map((c, i) => (
                        <div key={i} className="text-center">
                          <div className="text-[14px] font-bold">{c}</div>
                          <div className="text-[10px]">({cell.meaning[i]})</div>
                        </div>
                      ))}
                    </div>
                  ) : (
                    <div className="flex flex-col items-center py-1">
                      <div className="text-[14px] font-bold">{cell.char}</div>
                      {cell.meaning && (
                        <div className="text-[10px]">({cell.meaning})</div>
                      )}
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
