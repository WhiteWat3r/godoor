import { Link } from "react-router-dom";

export const FooterListItem = ({
  text,
  url,
  border,
  link,
}: {
  text: string;
  url?: string;
  border?: boolean;
  link?: boolean;
}) => {
  return link ? (
    <li>
      <Link
        to={url}
        className={`pointer block py-[6px] hover:text-[#A4A4A4] ${border ? "border-b-2 border-[#676767]" : ""}`}
      >
        {text}
      </Link>
    </li>
  ) : (
    <li>
      <span
        className={`block py-[6px] ${border ? "border-b-2 border-[#676767]" : ""}`}
      >
        {text}
      </span>
    </li>
  );
};
