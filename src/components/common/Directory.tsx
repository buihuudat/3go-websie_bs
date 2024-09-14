import { FaChevronRight } from "react-icons/fa";

const Directory = () => {
  return (
    <div className=" flex flex-row items-center font-semibold">
      <span>Trang chủ</span>
      <FaChevronRight />
      <span>Danh sách xe</span>
      <FaChevronRight className="text-mainColor" />
      <span className="text-mainColor">Chi tiết xe</span>
    </div>
  );
};

export default Directory;
