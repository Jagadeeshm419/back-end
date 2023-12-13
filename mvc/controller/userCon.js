const User = require('../model/user')

//http://localhost:4000/api/getapi
const getdata = async(req,res)=>{
    let got;
    try{
        got = await User.find()
    }
    catch(err){
        console.log(err)
    }

    if(!got){
        return res.status(404).json({message: 'Page is not Found'})
    }
    return res.status(200).json({got})

}

//http://localhost:4000/api/postapi
const postdata = async(req,res) =>{
    const {name,email,password} = req.body;
    let pos;
    try{
        pos = new User({
            name,
            email,
            password
        })
        await pos.save();
    }
    catch(err){
        console.log(err)
    }

    if(!pos){
        return res.status(404).json({message: 'Page is not Found'})
    }
    return res.status(200).json({pos})

}

exports.getdata =  getdata;
exports.postdata =  postdata;