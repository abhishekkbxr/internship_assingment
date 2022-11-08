module.exports = {
  images: {
    domains: ["source.unsplash.com" ,"images.unsplash.com" , "3dmodels.arvillage.com"],
  },

  env:{
    "MONGO_URI":"mongodb+srv://abhishek:abhishek@cluster0.pno8r.mongodb.net/assingment?retryWrites=true&w=majority&ssl=true",
  
    "NEXT_PUBLIC_HOST":"http://localhost:3000/"
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
}
