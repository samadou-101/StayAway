import { useState } from "react";
import style from "./styles/content.module.css";
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
    <div className={style["text-container"]}>
      <p className={`${style["text"]} ${expanded ? style["expanded"] : ""} `}>
        {!expanded && pContent?.length > 190 ? (
          <>
            {getFirstNWords(pContent, 20)}
            <strong> ... </strong>
            <a href="" onClick={handleReadMore}>
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
