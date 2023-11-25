import { MoreHoriz, WrapText } from "@mui/icons-material";
import { Typography } from "@mui/material";
import React, { useState } from "react";
import IconButton from "@mui/material/IconButton";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";

export default function Categoria({ title }) {
  //  const [categoriaTitle, setCategoriaTitle] = useState(props.categoriaTitle)
  return (
    <div className="flex w-[22.625rem] items-center justify-between rounded-lg border border-white/20 bg-[#18191B80]/50 pb-1 pl-4 pr-3 pt-1 text-white">
      <Typography className="py-1 font-semibold">
        {title}
      </Typography>
      <IconButton color="primary">
        <WrapText></WrapText>
      </IconButton>
    </div>
  );
}