import express from "express";
import { protect } from "../middleware/authMiddleare.js";
import { authUser, regiterUser, logoutUser, getUserProfile, updateUserProfile } from "../controller.js/userController.js";


const router = express.Router();


router.post('/auth', authUser)
router.post('/', regiterUser)
router.post('/logout', logoutUser)
router.route('/profile').get(protect, getUserProfile).put(protect, updateUserProfile);
export default router;
