// import { FormControl, InputLabel } from '@mui/material'
// import { makeStyles } from '@mui/styles'
// import React, { useState } from 'react'
// import InputField from './InputField'


// const useStyles = makeStyles({
//     form: {
//       width: '40%',
//       display: 'grid',
//       marginTop: '1rem',
//       gap: '1rem',
//   },
//   })

// const PostComponent = ({ payload, description }) => {
//     const [payload, setPayload] = useState()
//     const [description, setDescription] = useState()
//     const classes = useStyles()
//   return (
//     <div>
//         <form className={classes.form}>
//           <InputLabel>Payload Name</InputLabel>
//           <FormControl>
//             <InputField fullWidth type='text' value={payload} onChange={(e) => setPayload(e.target.value)} placeholder='Payload Name' />
//           </FormControl>
//           <InputLabel>Payload Description</InputLabel>
//           <FormControl fullWidth>
//             <InputField multiline rows={4} type='text' placeholder="Describe your payload" value={description} onChange={(e) => setDescription(e.target.value)} />
//           </FormControl>
//         </form>
//     </div>
//   )
// }

// export default PostComponent