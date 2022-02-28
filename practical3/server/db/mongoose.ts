import mongoose from 'mongoose'
mongoose.connect("mongodb+srv://shubh22:shubh22@cluster0.ckvsh.mongodb.net/Todo?retryWrites=true&w=majority", {

})
    .then(() => console.log("Connection successful"))
    .catch((err: string) => console.log("no connection", err));

