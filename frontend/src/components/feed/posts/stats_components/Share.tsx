import ShareIcon from "@mui/icons-material/Share";

const Share: React.FC<{ shares: number }> = ({ shares }) => {
  return (
    <div className="flex w-fit items-center justify-between gap-[0.06rem]">
      <ShareIcon
        color="action"
        sx={{
          cursor: "pointer",
          "&:hover": { color: "black" },
        }}
      />
      <span className="ml-[0.2rem] text-sm">{shares}</span>
    </div>
  );
};

export default Share;
