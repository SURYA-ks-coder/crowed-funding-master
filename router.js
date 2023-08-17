const express=require('express')
const router=express.Router()
const multer=require('multer')
const {upload}=require('./photos_Save_DB/photos_save_control') 

const fundraiser=require('./Registration/start_a_fundraiser_controler')
const patients=require('./Patient_Deatils/patient_information_controler')
const monthly_donate=require('./Monthly_Donate/monthly_donate_controler')
const bankdeatils=require('./BankDeatils/bank_deatils_controler')
const photos=require('./photos_Save_DB/photos_save_control')
const patientcard=require('./fundraiser_create/create_fundraiser_form-control')



router.get('/get_fundraiser',fundraiser.get_fundraiseer)
// router.get('/get_patient',patients.get_patient)
router.get('/get_monthly_donate',monthly_donate.get_monthly_donate)
router.get('/get_bank_deatils',bankdeatils.get_bankdeatils)
router.get('/get_photo',photos.get_photo)
router.get('/create_get_fundraiser',patientcard.get_create_fundraise)





router.post('/fundraiser',fundraiser.add_fundraiser)
router.post('/addfundraiser',fundraiser.find_fundraiser)
router.post('/updatefundraiser/:id',fundraiser.update_fundraiser)
router.post('/deletefundraiser/:id',fundraiser.delete_fundraiser)
router.post('/login',fundraiser.login)


router.post("/addphoto",upload, photos.add_photo); //upload single photo 
router.post('/updatephoto/:id',photos.update_photo) 
router.post('/deletephoto/:id',photos.delete_photo)


// router.post('/patient',patients.add_patient)
// router.post('/addpatient',patients.find_patient)
// router.post('/updatepatient/:id',patients.update_patient)
// router.post('/deletepatient/:id',patients.delete_patient)


router.post('/monthly_donate',monthly_donate.add_monthly_donate)
router.post('/addmonthly_donate',monthly_donate.find_monthly_donate)
router.post('/updatemonthly_donate/:id',monthly_donate.update_monthly_donate)
router.post('/deletemonthly_donate/:id',monthly_donate.delete_monthly_donate)

router.post('/bankdeatils',bankdeatils.add_bank_deatils)
router.post('/updatebankdeatils/:id',bankdeatils.update_bankdeatils)
router.post('/deletebankdeatils/:id',bankdeatils.delete_bankdeatils)


router.post('/create_fundraiser',patientcard.add_create_fundraise)
router.post('/delete_create_fundraiser/:id',patientcard.delete_create_fundraise)





module.exports=router