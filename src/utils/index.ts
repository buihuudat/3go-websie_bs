export const formatCurrency = (price: number) => {
  const formattedPrice = new Intl.NumberFormat("vi-VN", {
    style: "currency",
    currency: "VND",
  }).format(Number(price));
  return formattedPrice;
};
