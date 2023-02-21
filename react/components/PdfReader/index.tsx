import React from 'react';
import { fileReader } from '../FileReaderPdf/FileReader';
import { CSS_HANDLES } from '../../CssHandles';
//@ts-ignore
import { useCssHandles } from "vtex.css-handles";
import './index.css'


export const PdfReader = () => {

  const handles = useCssHandles(CSS_HANDLES)
  return (
    <div className={handles.container__pdf}>
      <p>Lector PDF</p>
      <img onClick={()=> fileReader()} src="https://play-lh.googleusercontent.com/BkRfMfIRPR9hUnmIYGDgHHKjow-g18-ouP6B2ko__VnyUHSi1spcc78UtZ4sVUtBH4g" alt="" />
    </div>
  )
}
