import { icons, images } from "./images";
import {
  addressIcon,
  carIcon,
  heartIcon,
  listIcon,
  moreIcon1,
  moreIcon2,
  moreIcon3,
  moreIcon4,
  moreIcon5,
  phoneIcon,
  volang,
  walletIcon,
} from "./images/svgImage";
import { IHeaderData } from "./types";
import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram } from "react-icons/fa";

export const headerData: IHeaderData[] = [
  {
    title: "Giới thiệu",
    path: "/",
    id: "#introduce",
  },
  {
    title: "Trở thành chủ xe",
    path: "/tro-thanh-chu-xe",
    id: "#become-a-driver",
  },
  {
    title: "Danh sách xe",
    path: "/danh sach xe",
    id: "#car-list",
  },
  {
    title: "Xe đang thuê",
    path: "/xe-dang-thue",
    id: "#rented-car-list",
  },
];

export const infoCompany = [
  {
    icon: icons.phoneIcon2,
    content: "Hotline: 0938266958 (ZALO)",
    path: "",
  },
  {
    icon: icons.emailIcon2,
    content: "Email: info@ontracking.com.vn",
    path: "",
  },
  {
    icon: icons.addressIcon,
    content:
      "68 Nguyễn Huệ, Phường Bến Nghé, Quận 1, Thành phố Hồ Chí Minh, Việt Nam",
    path: "",
  },
];

export const socialData = [
  {
    icon: FaFacebook,
    path: "",
  },
  {
    icon: FaTwitter,
    path: "",
  },
  {
    icon: FaLinkedin,
    path: "",
  },
  {
    icon: FaInstagram,
    path: "",
  },
];

export const policies = [
  {
    title: "Về chúng tôi",
    path: "",
  },
  {
    title: "Chính sách và Quy định",
    path: "",
  },
  {
    title: "Chính sách bảo hiểm",
    path: "",
  },
  {
    title: "Cơ chế giải quyết khiếu nại, tranh chấp",
    path: "",
  },
  {
    title: "Quy chế hoạt động",
    path: "",
  },
  {
    title: "Bảo mật thông tin",
    path: "",
  },
];

export const partners = [
  {
    title: "Đối tác bãi xe",
    path: "",
  },
  {
    title: "Đăng ký lắp đặt Safebox",
    path: "",
  },
];

export const findOutMore = [
  {
    title: "Hướng dẫn chung",
    path: "",
  },
  {
    title: "Hướng dẫn đặt xe",
    path: "",
  },
  {
    title: "Hướng dẫn dành cho chủ xe",
    path: "",
  },
  {
    title: "Hướng dẫn thanh toán",
    path: "",
  },
  {
    title: "Câu hỏi thường gặp",
    path: "",
  },
  {
    title: "Cảm nhận khách hàng",
    path: "",
  },
  {
    title: "Tin tức",
    path: "",
  },
];

export const dadviteData = [
  {
    question: "Điều kiện và thủ tục để đặt xe trên 3GO ?",
    answers: [
      "Theo yêu cầu của tài xế: Một số tài xế có thể yêu cầu người thuê xe đặt cọc nhằm đảm bảo rằng khách hàng sẽ thực sự sử dụng dịch vụ và thanh toán phí xe sau khi kết thúc chuyến đi.",
      "Trong các trường hợp đặc biệt: Có thể có các trường hợp đặc biệt như khi thuê xe trong thời gian dài hoặc điều kiện đặc biệt (ví dụ như đi xa, đi ngày lễ, hay khi yêu cầu dịch vụ đặc biệt) mà nhà cung cấp dịch vụ có thể yêu cầu đặt cọc.",
    ],
  },
  {
    question: "Thuê xe trên ứng dụng 3GO có cần đặt cọc không?",
    answers: [
      "3GO áp dụng số tiền đặt cọc đảm bảo 2.000.000 đồng/ lần đặt xe. Số tiền sẽ được hoàn lại cho bạn sau khi kết thúc chuyến đi.",
      "Để dễ dàng thanh toán, số tiền đặt cọc đảm bảo sẽ thanh toán cùng phí đặt xe.",
    ],
  },
  {
    question: "Làm sao để thuê xe trên ứng dụng 3GO?",
    answers: [
      "Tải và đăng nhập vào ứng dụng 3GO.",
      "Chọn loại xe và nhập điểm đón và điểm đến.",
      "Chờ tài xế xác nhận và hoàn tất chuyến đi sau khi xe đến điểm đón.",
    ],
  },
  {
    question:
      "Thời gian thuê xe và quãng đường giới hạn được 3GO quy định thế nào?",
    answers: [
      "Thời gian thuê xe: Thường thì bạn có thể thuê xe trong một khoảng thời gian cụ thể, ví dụ như từ vài giờ đến một ngày. Tuy nhiên, các ứng dụng đặt xe như 3GO có thể có các gói dịch vụ khác nhau cho thuê theo giờ, theo ngày hoặc dài hạn.",
      "Quãng đường giới hạn: Thường thì bạn có thể sử dụng xe để đi một quãng đường nhất định từ điểm đón đến điểm đến. Tuy nhiên, có thể có các hạn chế về khoảng cách tối đa hoặc vùng phạm vi mà xe có thể di chuyển, đặc biệt là trong các ứng dụng cung cấp dịch vụ taxi hay xe máy.",
    ],
  },
  {
    question: "Phí thuê xe được tính thế nào?",
    answers: [
      "Loại xe: Phí thuê có thể khác nhau tùy thuộc vào loại xe bạn chọn (ví dụ: taxi, xe máy, xe hơi sang trọng).",
      "Thời gian thuê: Phí có thể tính theo giờ hoặc theo ngày, tùy thuộc vào gói dịch vụ bạn chọn.",
      "Quãng đường di chuyển: Nếu phí tính dựa trên quãng đường, thì khoản phí sẽ được tính dựa trên khoảng cách từ điểm đón đến điểm đến.",
      "Phụ phí và chi phí khác: Có thể có các phụ phí bổ sung như phí đón khách từ sân bay, phí ngoài giờ, phí đi qua trạm thu phí, và các chi phí khác tùy thuộc vào điều khoản của nhà cung cấp dịch vụ.",
    ],
  },
];

export interface ICarData {
  featuredImage: string;
  title: string;
  href: string;
  like: number;
  saleOff: boolean;
  isAds: boolean;
  price: string;
  reviewStart: number;
  reviewCount: number;
  seats: number;
  gearshift: string;
  address: string;
}

export const carData: ICarData[] = [
  {
    featuredImage: images.carTemo,
    title: "Mitsubishi XPANDER 2022",
    href: "#",
    like: 0,
    saleOff: false,
    isAds: false,
    price: "1500",
    reviewStart: 4.5,
    reviewCount: 0,
    seats: 7,
    gearshift: "Số tự động",
    address: "Tạ Hiện, Q2",
  },
  {
    featuredImage: images.carTemo,
    title: "Mitsubishi XPANDER 2022",
    href: "#",
    like: 0,
    saleOff: false,
    isAds: false,
    price: "1500",
    reviewStart: 4.5,
    reviewCount: 0,
    seats: 7,
    gearshift: "Số tự động",
    address: "Tạ Hiện, Q2",
  },
  {
    featuredImage: images.carTemo,
    title: "Mitsubishi XPANDER 2022",
    href: "#",
    like: 0,
    saleOff: false,
    isAds: false,
    price: "1500",
    reviewStart: 4.5,
    reviewCount: 0,
    seats: 7,
    gearshift: "Số tự động",
    address: "Tạ Hiện, Q2",
  },
  {
    featuredImage: images.carTemo,
    title: "Mitsubishi XPANDER 2022",
    href: "#",
    like: 0,
    saleOff: false,
    isAds: false,
    price: "1500",
    reviewStart: 4.5,
    reviewCount: 0,
    seats: 7,
    gearshift: "Số tự động",
    address: "Tạ Hiện, Q2",
  },
];

export interface INewsData {
  image: string;
  createdAt: string;
  title: string;
  content: string;
  href: string;
}
export const newsData: INewsData[] = [
  {
    image: images.news.image1,
    createdAt: "19/6/2024",
    title: "Các Hình Thức Dịch Vụ Cho Thuê Xe Tự Lái",
    content:
      "Thuê xe tự lái là dịch vụ được nhiều khách hàng lựa chọn bởi sự tiện lợi, đáp ứng đầy đủ nhu cầu đi lại",
    href: "",
  },
  {
    image: images.news.image2,
    createdAt: "19/6/2024",
    title: "kinh nghiệm thuê xe hơi ngày tết",
    content:
      "Tết Nguyên Đán là thời điểm nhu cầu thuê xe về quê hay đi du lịch tăng cao. Điều này sẽ khiến bạn khó tránh",
    href: "",
  },
];

export const carType1 = [
  "4 Chỗ",
  "Màu bạc",
  "Tiêu hao 8l/100km",
  "Số tự động",
  "Nhiên liệu xăng",
];
export const carType2 = [
  "Bản đồ",
  "Camera cập lề",
  "Định vị GPS",
  "Cảnh báo tốc độ",
];

export const carMoreData = [
  {
    icon: moreIcon1,
    title: "Giấy tờ thuê xe",
    content: [
      {
        ul: "Chọn 1 trong 2 hình thức",
        li: [
          "GPLX (đối chiếu) & CCCD (đối chiếu VNeID)",
          "GPLX (đối chiếu) & Passport (giữ lại)",
        ],
      },
    ],
  },
  {
    icon: moreIcon2,
    title: "Tài sản thế chấp",
    content: [
      {
        ul: "Khái niệm và quy trình tài sản thế chấp",
        li: [
          "Tài sản thế chấp là một phương thức đảm bảo cho vay tiền, bao gồm đất đai, nhà cửa, và tài sản gia tăng khác.",
          "Quá trình thế chấp bao gồm việc cung cấp tài sản như bảo đảm cho khoản vay, nhằm giảm thiểu rủi ro cho bên cho vay.",
          "Việc đặt cọc tài sản thế chấp đòi hỏi pháp lý và thủ tục hợp lý, bảo vệ quyền lợi của cả bên cho vay và người vay.",
        ],
      },
    ],
  },
  {
    icon: moreIcon3,
    title: "Điều khoản",
    content: [
      {
        ul: "Quy định khác:",
        li: [
          "Sử dụng xe đúng mục đích",
          "Không sử dụng xe thuê vào mục đích phi pháp trái pháp luật",
          "Không sử dụng xe thuê để cầm cố, thế chấp",
          "Không hút thuốc, nhả kẹo cao su, xả rác trong xe",
          "Không chở hàng quốc cấm dễ cháy nổ",
        ],
      },
    ],
  },
  {
    icon: moreIcon4,
    title: "Phụ phí có thể phát sinh",
    content: [
      {
        ul: "Phí vượt giới hạn: 5 000đ / km",
        li: [
          "Phụ phí phát sinh nếu di chuyển vượt quá 350km khi thuê xe 1 ngày",
        ],
      },
      {
        ul: "Phụ phí khác",
        li: [
          "Phụ phí phát sinh nếu trả xe trễ, xe không đảm bảo vệ sinh hoặc bị ám mùi",
        ],
      },
    ],
  },
  {
    icon: moreIcon5,
    title: "Chính sách hủy chuyến",
    content: [
      {
        ul: "An tâm thuê xe, không lo bị hủy chuyến với Chính sách hủy chuyến của 3GO",
      },
    ],
  },
];

export const navProfileData = [
  {
    icon: walletIcon,
    title: "Tiện ích",
    href: "/utility",
  },
  {
    icon: carIcon,
    title: "Xe đang thuê",
    href: "/current-rental",
  },
  {
    icon: volang,
    title: "Quản lý xe cho thuê",
    href: "/rental-management",
  },
  {
    icon: heartIcon,
    title: "Xe yêu thích",
    href: "/favorite-vehicles",
  },
  {
    icon: addressIcon,
    title: "Sổ địa chỉ",
    href: "/address-book",
  },
  {
    icon: listIcon,
    title: "Điều khoản và chính sách",
    href: "/terms-and-policies",
  },
  {
    icon: phoneIcon,
    title: "Liên hệ và góp ý",
    href: "/contact-and-feedback",
  },
];

export const tabProfileData = [
  {
    title: "Đang thuê",
    type: "dang-thue",
  },
  {
    title: "Chờ xác nhận",
    type: "cho-xac-nhan",
  },
  {
    title: "Đã xác nhận",
    type: "da-xac-nhan",
  },
  {
    title: "Đã huỷ",
    type: "da-huy",
  },
  {
    title: "Đã kết thúc",
    type: "da-ket-thuc",
  },
];
