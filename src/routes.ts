import {Router} from "express";
import { SettingsController } from "./controllers/SettingsController";

const  routes  = Router();

const settingsController = new SettingsController();

routes.post("/settings", settingsController.create);

routes.get('/settings', (request, response) => {
  response.json({
    "message": "Olá settings "
  });
});

export { routes};