import { useState } from "react";
import Title from "../../common/Title";
import TitleSmall from "../../common/TitleSmall";
import { dadviteData } from "../../../assets/data";
import { FaPlus, FaTimes } from "react-icons/fa";
import classNames from "classnames";
import NcImage from "../../NcImage/NcImage";
import { images } from "../../../assets/images";

const QuizItem = ({
  item,
  endLine,
}: {
  item: { question: string; answers: string[] };
  endLine: boolean;
}) => {
  const [isShow, setIsShow] = useState(false);

  return (
    <div>
      <div
        className="flex flex-row items-center justify-between pt-6 px-5"
        onClick={() => setIsShow(!isShow)}
      >
        <p className="text-xl xl:text-[24px] font-semibold">{item?.question}</p>
        <button>{isShow ? <FaTimes /> : <FaPlus />}</button>
      </div>
      <ul className="py-3">
        {item?.answers?.map((answer, index) => (
          <li
            style={{
              listStylePosition: "inside",
            }}
            key={index}
            className={classNames(
              !isShow && "hidden",
              "text-sm xl:text-[18px] font-semibold text-[#868A8D] px-10 list-disc"
            )}
          >
            {answer}
          </li>
        ))}
      </ul>
      <hr className={endLine ? "hidden" : ""} />
    </div>
  );
};

const HomeDadvite = () => {
  return (
    <div className="flex flex-col justify-center items-center py-[30px] md:py-[60px] relative overflow-hidden">
      <NcImage
        src={images.Ellipse}
        className="hidden md:flex absolute transform rotate-180 -left-10 -top-[100px] w-[200px]"
      />
      <TitleSmall title="Tư vấn" />
      <Title title="Câu Hỏi Thường Gặp" className=" mt-4 mb-5" />
      <div className="border border-gray-200 rounded-md w-3/4 xl:w-2/4 px-1 mx-1">
        {dadviteData?.map((item, index) => {
          return (
            <QuizItem
              key={index}
              item={item}
              endLine={dadviteData?.length - 1 === index}
            />
          );
        })}
      </div>
    </div>
  );
};

export default HomeDadvite;
