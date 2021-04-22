import {Request, Response} from "express";
import { getCustomRepository } from "typeorm";
import { SettingsRepository } from "../repositories/SettingsRepository";


class SettingsController {

  async create(request: Request, response: Response){
    //desestruturação do objeto
    const { chat, username } = request.body;

    const settingsRepository = getCustomRepository(SettingsRepository);

    const settings = settingsRepository.create({
      chat,
      username
    });

    await settingsRepository.save(settings);
    return response.json(settings);
  }

}

export { SettingsController};

/**
 * GET = Buscar
 * POST = Criação
 * PUT = Alteração
 * DELETE = Apaga
 * PATCH = alterar informação especifica
 */


/**
 * Tipos de paramentros
 * Routes params => paramentos de rotas
 * Query params => filtros e buscas
 * Body => {
 * json
 * }
 */