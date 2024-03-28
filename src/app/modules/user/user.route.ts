import { Router } from "express";
import { userController } from "./user.controller";

const route = Router()
route.post('/register',userController.createUserIntoDB)

export const userRoute= route