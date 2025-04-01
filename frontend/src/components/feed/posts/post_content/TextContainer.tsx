import { useState } from "react";

interface TextContainerProps {
  pContent: string;
}

const TextContainer: React.FC<TextContainerProps> = ({ pContent }) => {
  const [expanded, setExpanded] = useState<boolean>(false);

  const getFirstNWords = (str: string, n: number): string => {
    const result = str.split(" ").slice(0, n).join(" ");
    return result;
  };

  const handleReadMore = (e: React.MouseEvent) => {
    e.preventDefault();
    setExpanded(!expanded);
  };

  return (
    <div className="px-4 pt-4">
      <p
        className={`overflow-hidden leading-[1.6] break-words text-ellipsis whitespace-pre-wrap text-black [-webkit-box-orient:vertical] [-webkit-line-clamp:4] ${
          expanded
            ? "text-ellipsis-unset overflow-visible [-webkit-line-clamp:unset]"
            : ""
        }`}
      >
        {!expanded && pContent?.length > 190 ? (
          <>
            {getFirstNWords(pContent, 20)}
            <strong className="font-extrabold"> ... </strong>
            <a
              href=""
              className="font-bold text-black no-underline"
              onClick={handleReadMore}
            >
              read more
            </a>
          </>
        ) : (
          pContent
        )}
      </p>
    </div>
  );
};

export default TextContainer;
