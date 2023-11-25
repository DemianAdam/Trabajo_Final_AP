import { Box, Button, InputBase, InputLabel, Stack } from "@mui/material";
import React from "react";

const SvgComponent = React.memo(() => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="60"
    height="8"
    viewBox="0 0 60 8"
    fill="none"
  >
    <rect width="60" height="8" rx="4" fill="#FF3838" />
  </svg>
));

export default function TaskForm() {
  return (
    <Box
      component="form"
      onSubmit={(e) => e.preventDefault()}
      className="flex w-[22.625rem] flex-col items-start gap-5 rounded-lg border border-white/20 bg-[#18191B80]/50 px-6 py-4 text-white"
    >
      <Stack direction="column" spacing={1.25} useFlexGap>
        <InputLabel
          htmlFor="titulo-task"
          className="w-[287px] text-[13px] font-light leading-[19px] text-inherit"
        >
          Titulo
        </InputLabel>
        <InputBase
          type="text"
          id="titulo-task"
          placeholder="Lorem ipsum dolor sit"
          fullWidth
          slotProps={{ input: { className: "py-1.5" } }}
          className="h-[30px] rounded-[5px] border border-white border-opacity-20 bg-zinc-900 bg-opacity-50 px-3 text-[13px] font-light leading-[19px] text-inherit"
        />
      </Stack>
      <Stack direction="column" spacing={1.25} useFlexGap>
        <InputLabel
          htmlFor="cuerpo-task"
          className="w-[287px] text-[13px] font-light leading-[19px] text-inherit"
        >
          Cuerpo
        </InputLabel>
        <InputBase
          type="text"
          id="cuerpo-task"
          multiline
          minRows={3}
          fullWidth
          placeholder="Lorem ipsum dolor sit amet consectetur, adipiscing elit auctor penatibus volutpat posuere, sodales praesent libero mus"
          slotProps={{ input: { className: "py-1.5" } }}
          className="rounded-[5px] border border-white border-opacity-20 bg-zinc-900 bg-opacity-50 px-3  text-[13px] font-light leading-[19px] text-inherit"
        />
      </Stack>
      <SvgComponent />
      <Stack direction="row" spacing={1.5} useFlexGap>
        <Button
          variant="contained"
          disableElevation
          size="small"
          className="rounded-[5px] bg-blue-600"
        >
          Añadir
        </Button>
        <Button
          variant="outlined"
          color="error"
          size="small"
          className="rounded-[5px]"
        >
          Cancelar
        </Button>
      </Stack>
    </Box>
  );
}
