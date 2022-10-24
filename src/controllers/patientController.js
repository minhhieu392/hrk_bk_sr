
import patientService from '../services/patientServices';
import { reject } from "lodash";

let postBookAppointment = async(req, res)=> {
    try{
        let infor = await patientService.postBookAppointment(req.body);
        return res.status(200).json(
            infor
        )
    }catch(e){
        return res.status(200).json({
            errCode: -1,
            errMessage: 'Error from the server111'
        })
    }
}

let postVerifyBookAppointment = async (req, res) => {
    try {
        let infor = await patientService.postVerifyBookAppointment(req.body);
        return res.status(200).json(
            infor
        )
    }catch (e) {
        console.log(e);
        return res.status(200).json({
            errCode: -1,
            errMessage: 'Error from the server'
        })
    }
}

module.exports= {
    postBookAppointment: postBookAppointment,
    postVerifyBookAppointment: postVerifyBookAppointment
}