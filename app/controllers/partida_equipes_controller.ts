import PartidaEquipe from '#models/partida_equipe'
import type { HttpContext } from '@adonisjs/core/http'

export default class PartidaEquipesController {
  async index({ request }: HttpContext) {

    const page = request.input('page', 1)
    const perPage = request.input('perPage', 5)

    return await PartidaEquipe.query().paginate(page, perPage)
  }

  async show({ params }: HttpContext) {
    return await PartidaEquipe.query()
      .where('id', params.id)
      .preload('partida')
      .preload('equipe')
      .first()
  }

  async store({ request }: HttpContext) {

    const dados = request.only(['jogadorId', 'equipeId'])

    return await PartidaEquipe.create(dados)
  }

  async update({ params, request }: HttpContext) {
    const partida_equipe = await PartidaEquipe.findOrFail(params.id)
    const dados = request.only(['jogadorId', 'equipeId'])

    partida_equipe.merge(dados)

    return await partida_equipe.save()
  }

  async destroy({ params }: HttpContext) {
    const partida_equipe = await PartidaEquipe.findOrFail(params.id)

    await partida_equipe.delete()
    return { msg: 'Registro deletedo com sucesso', partida_equipe }
  }
}