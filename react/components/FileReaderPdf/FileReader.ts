import Swal from 'sweetalert2'

export const fileReader = async()=>{
  const { value: file } = await Swal.fire({
  title: 'Seleccione archivo en formato PDF',
  input: 'file',
  inputAttributes: {
    'accept': 'application/pdf',
    'aria-label': 'Upload your PDF file'
    }
})

if (file) {
  const reader = new FileReader()
  reader.onload = () => {
    Swal.fire({
      icon : "success",
      title: 'PDF cargado con éxito',
      html: `<iframe width="100%" height="500px" src="${reader.result}" frameborder="0"></iframe>`
    })
  }
  reader.readAsDataURL(file)
}
}
