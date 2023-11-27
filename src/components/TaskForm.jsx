import React, { useState } from "react";
import { Box, Button, InputBase, InputLabel, Stack, Select, MenuItem } from "@mui/material";
import { styled } from '@mui/material/styles';


const dataExample = {
  id: 0,
  title: "momo",
  body: "qui dolorem ipsum, quia dolor sit amet consectetur adipisci velit, sed quia non numquam eius modi tempora incidunt, ut labore et dolore magnam aliquam quaerat voluptatem",
  label: "#F8BD1C",
}

const formFieldConfig = {
  id: { label: "ID", type: "hidden" },
  title: { label: "Titulo", type: "text" },
  body: { label: "Cuerpo", type: "textarea" },
  label: { label: "Etiqueta", type: "select", options: ["#F8BD1C", "#FF3838", "#F8F8F8"] },
}

export default function TaskForm({ data, submitFormData, cancelForm, submitText = 'Añadir' }) {
  const [formData, setFormData] = useState(data);

  const updateFormData = (e) => {
    const { name, value } = e.target;
    if (formData[name] !== value) {
      setFormData({ ...formData, [name]: value });
    }
  };


  const submitForm = (e) => {
    e.preventDefault();
    submitFormData(formData);
  };

  const renderFormField = (key, field, value, updateFormData) => {
    if (!field) return null;
    switch (field.type) {
      case "hidden":
        return (
          <input
            type="hidden"
            name={key}
            value={value}
          />
        );
      case "text":
        return (
          <>
            <InputLabel
              htmlFor="titulo-task"
              className="w-[287px] text-[13px] font-light leading-[19px] text-inherit pb-2"
            >
              {field.label}
            </InputLabel>
            <InputBase
              type="text"
              id={key}
              name={key}
              value={value}
              onChange={updateFormData}
              fullWidth
              slotProps={{ input: { className: "py-1.5" } }}
              className="h-[30px] rounded-[5px] border border-white border-opacity-20 bg-zinc-900 bg-opacity-50 px-3 text-[13px] font-light leading-[19px] text-inherit"
            />
          </>
        );
      case "textarea":
        return (
          <>
            <InputLabel
              htmlFor="titulo-task"
              className="w-[287px] text-[13px] font-light leading-[19px] text-inherit pb-2"
            >
              {field.label}
            </InputLabel>
            <InputBase
              id={key}
              name={key}
              value={value}
              onChange={updateFormData}
              multiline={true}
              maxRows={5}
              fullWidth
              className="rounded-[5px] border border-white border-opacity-20 bg-zinc-900 bg-opacity-50 px-3  text-[13px] font-light leading-[19px] text-inherit py-1.5"
            />
          </>
        );
      case "select":
        return (
          <Select
            native={false}
            id={key}
            name={key}
            value={value}
            onChange={updateFormData}
            className="h-[30px] rounded-[5px] border border-white border-opacity-20 bg-zinc-900 bg-opacity-50 px-3 text-[13px] font-light leading-[19px] text-inherit"
            sx={{
              '&:focus': {
                borderColor: 'red',
              }
            }}
          >
            {field.options.map((option) => (
              <MenuItem
                key={option}
                value={option}
                classes={{ root: 'bg-zinc-900' }}
                className="bg-zinc-900"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="60"
                  height="8"
                  viewBox="0 0 60 8"
                  fill="none"
                  className="my-2"
                >
                  <rect width="60" height="8" rx="4" fill={option} />
                </svg>
              </MenuItem>
            ))}
          </Select>
        );
      default:
        return null;
    }
  };

  return (
    <Box
      component="form"
      onSubmit={submitForm}
      className="flex w-[22.625rem] flex-col items-start gap-5 rounded-lg border border-white/20 bg-[#18191B80]/50 px-6 py-4 text-white"
    >
      <Stack direction="column" spacing={1.25} useFlexGap>
        {Object.keys(formData).map((key) => {
          return (
            <div key={key}>
              {renderFormField(key, formFieldConfig[key], formData[key], updateFormData)}
            </div>
          )
        })}
      </Stack>
      <Stack direction="row" spacing={1.5} useFlexGap>
        <Button
          variant="contained"
          disableElevation
          size="small"
          className="rounded-[5px] bg-blue-600 text-white"
          type="submit"
        >
          {submitText}
        </Button>
        <Button
          variant="outlined"
          color="error"
          size="small"
          className="rounded-[5px]"
          onClick={cancelForm}
        >
          Cancelar
        </Button>
      </Stack>
    </Box>
  );
}