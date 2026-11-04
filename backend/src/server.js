import express from 'express'
import cors from 'cors'
const app=express()
app.use(cors())
app.use(express.json())
app.get('/api/health',(req,res)=>res.json({status:'ok', brand:'LUMEAHAIRGH'}))
app.get('/api/collections',(req,res)=>res.json([
  {id:1,name:'Bone Straight 24 inch',price:850, currency:'GHS'},
  {id:2,name:'Frontal Wig',price:1200, currency:'GHS'},
  {id:3,name:'Ghana Weaving',price:450, currency:'GHS'}
]))
app.post('/api/bookings',(req,res)=>res.json({ok:true, message:'Booking received', data:req.body}))

if (!process.env.VERCEL) {
  app.listen(5000,()=>console.log('LUMEAHAIRGH Backend running on 5000'))
}

export default app
