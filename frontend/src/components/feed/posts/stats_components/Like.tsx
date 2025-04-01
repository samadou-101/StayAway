import ThumbUpOffAltIcon from "@mui/icons-material/ThumbUpOffAlt";

const Like: React.FC<{ likes: number }> = ({ likes }) => {
  return (
    <div className="flex w-fit items-center justify-between gap-[0.06rem]">
      <ThumbUpOffAltIcon
        color="action"
        sx={{
          cursor: "pointer",
          "&:hover": { color: "black" },
        }}
      />
      <span className="ml-[0.2rem] text-sm">{likes}</span>
    </div>
  );
};

export default Like;
