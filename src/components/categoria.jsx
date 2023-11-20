import { WrapText } from '@mui/icons-material'
import { Typography } from '@mui/material'
import React, { useState } from 'react'
import IconButton from '@mui/material/IconButton';

export default function Categoria() {
    //  const [categoriaTitle, setCategoriaTitle] = useState(props.categoriaTitle)

    return (
        <div className='bg-[#18191B80]/50 w-[22.625rem] border-white/20 text-white border rounded-lg pt-1 pb-1 pl-4 pr-3 flex items-center justify-between'>
            <Typography className='py-1 font-semibold'>
                Lorem ipsum papu relleno
            </Typography>
            <IconButton color='primary'>
                <WrapText></WrapText>
            </IconButton>
        </div>
    )
}
