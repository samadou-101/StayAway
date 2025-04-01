import SmsOutlinedIcon from "@mui/icons-material/SmsOutlined";

const Comments: React.FC<{ comments: string }> = ({ comments }) => {
  return (
    <div className="flex w-fit items-center justify-between gap-[0.09rem]">
      <SmsOutlinedIcon
        color="action"
        sx={{
          cursor: "pointer",
          "&:hover": { color: "black" },
        }}
      />
      <span className="ml-[0.2rem] text-sm">{comments}</span>
    </div>
  );
};

export default Comments;
