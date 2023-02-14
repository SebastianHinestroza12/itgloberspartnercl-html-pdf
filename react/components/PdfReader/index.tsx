import React, {useEffect, useState } from 'react';
import { PropsPdf } from '../../interfaces';


export const PdfReader = ({ pdfUrl, width, height }: PropsPdf) => {
  const [mounted, setMounted] = useState(false);

      useEffect(()=>{
        setMounted(true)
    }, [])

  return (
      <div>
        {
          mounted && (
            <div className='flex justify-center'>
                <object
                data={pdfUrl}
                type="application/pdf"
                width={width}
                height={height}
                >
                    <iframe title="PDF" src={pdfUrl} width={width} height={height}>
                        <p>Este navegador no soporta PDF!</p>
                    </iframe>
                </object>
            </div>
          )
        }
      </div>
  )
}
