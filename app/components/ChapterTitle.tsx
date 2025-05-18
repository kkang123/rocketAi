import React from "react";
import Image from "next/image";

import Header from "../../public/images/ChapterTitleBg/header_bg.svg";
import BrownBg from "../../public/images/ChapterTitleBg/brown_bg.svg";
import Footer from "../../public/images/ChapterTitleBg/footer_bg.svg";
import HeavenlyStems from "../../public/texts/甲乙丙丁戊己 庚辛壬癸子丑 寅卯辰巳午未 申酉戌亥甲乙.png";

import Icon from "../../public/assets/Group.svg";
import Vector from "../../public/assets/Vector.svg";
import Character from "../../public/assets/character.svg";
import Hand from "../../public/assets/hand.svg";
import Text from "../../public/assets/슥슥.svg";
import Speechbubble from "../../public/assets/speech bubble.svg";
import Speechbubble2 from "../../public/assets/speech bubble2.svg";
import Icon2 from "../../public/assets/Group-1 1.svg";
import CharacterBg from "../../public/assets/bg.svg";

interface ChapterTitleProps {
  number: number | string;
  title: string;
}

const ChapterTitle: React.FC<ChapterTitleProps> = ({ number, title }) => {
  return (
    <div className="relative w-full flex items-center justify-center overflow-visible bg-[#F3F2F0] min-h-screen  z-0">
      <div className="absolute top-0 w-full h-[652px] z-5">
        <Image
          src={BrownBg}
          alt="전체 배경"
          fill
          className="object-cover z-0"
        />
      </div>

      <div className="absolute top-0 w-full h-68 z-10">
        <Image src={Header} alt="최상단 배경" fill className="object-cover" />
      </div>

      <div className="absolute top-[423px] w-full h-60 z-25">
        <Image src={Footer} alt="하단 배경" fill className="object-cover" />
      </div>

      <div className="absolute top-0 left-0 w-full flex flex-col items-center z-8">
        <Image
          src={HeavenlyStems}
          alt="甲乙丙丁戊己 庚辛壬癸子丑 寅卯辰巳午未 申酉戌亥甲乙 위쪽"
          width={420}
          height={360}
          className="w-full h-auto"
        />
        <Image
          src={HeavenlyStems}
          alt="甲乙丙丁戊己 庚辛壬癸子丑 寅卯辰巳午未 申酉戌亥甲乙 아래쪽"
          width={420}
          height={360}
          className="w-full h-auto"
        />
      </div>

      <div className=" flex flex-col items-center w-full ">
        <h1 className="text-2xl whitespace-nowrap mt-[80px] text-white z-20">
          제 {number}장
        </h1>
        <div className="flex items-center mb-2 z-20">
          <Image src={Vector} alt="Vector" width={68.67} height={1} />
          <Image src={Icon} alt="Chapter Icon" width={20} height={20} />
          <Image src={Vector} alt="Vector" width={68.67} height={1} />
        </div>
        <h2 className="text-2xl whitespace-nowrap text-white z-20">{title}</h2>

        <div className="relative w-[297.56px] h-[520.98px] self-end mr-1">
          <Image
            src={Character}
            alt="Character"
            fill
            className="object-contain z-10"
          />

          <div className="absolute bottom-[-100px] left-[-140px] z-30">
            <Image src={Speechbubble} alt="말풍선" width={300} height={80} />
            <p className="absolute top-3/5 left-1/2 transform -translate-x-1/2 -translate-y-2/3 text-black text-sm font-medium w-4/5 text-center">
              이제 본격적으로 OO님의 사주팔자를 분석해볼 차례네요
            </p>
          </div>
        </div>

        <div className="w-full mt-24 z-50">
          <div className="flex justify-between items-center w-full">
            <div className="relativ mt-20">
              <Image src={Icon2} alt="문양" width={153} height={120} />
            </div>

            <div className="relative mr-6">
              <Image src={Hand} alt="붓글씨" width={120} height={285} />
              <Image
                src={Text}
                alt="슥슥"
                width={70}
                height={50}
                className="absolute -left-10 top-5"
              />
            </div>
          </div>
        </div>

        <div className="relative mt-10 w-full">
          <Image
            src={Speechbubble2}
            alt="말풍선"
            width={350}
            height={80}
            className="absolute -mt-36 z-50"
          />
          <p className="absolute -top-18 left-23 text-black text-[16px]  z-55 text-center">
            제가 oo님의 사주를 <br /> 보기 쉽게 표로 정리했어요
          </p>
          <Image
            src={CharacterBg}
            alt="이미지"
            width={376}
            height={306}
            className="w-full"
          />
          <div className="absolute bottom-0 left-0 w-full h-36 bg-gradient-to-b from-transparent to-[#F3F2EF]" />
        </div>
        {/*  */}
      </div>
    </div>
  );
};

export default ChapterTitle;
