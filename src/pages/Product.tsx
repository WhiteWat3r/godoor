import useBreakpoint from "@/hooks/useBreakpoint";
import { useParams } from "react-router-dom";
import { doors } from "@/utils/constants";

export const Product = () => {
  const { isDesktop } = useBreakpoint();
  const { productId } = useParams();
  const product = doors.find((door) => door.id === Number(productId));

  return (
    product && (
      <div className="container py-8">
        стр товара<span>/</span>
      </div>
    )
  );
};
