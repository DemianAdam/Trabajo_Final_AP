import { WrapText } from "@mui/icons-material";
import { Typography } from "@mui/material";
import IconButton from "@mui/material/IconButton";
import React from "react";

export default function Categoria() {
  //  const [categoriaTitle, setCategoriaTitle] = useState(props.categoriaTitle)

  return (
    <div className="flex w-[22.625rem] items-center justify-between rounded-lg border border-white/20 bg-[#18191B80]/50 pb-1 pl-4 pr-3 pt-1 text-white">
      <Typography className="py-1 font-semibold">
        Lorem ipsum papu relleno
      </Typography>
      <IconButton color="primary">
        <WrapText></WrapText>
      </IconButton>
    </div>
  );
}
