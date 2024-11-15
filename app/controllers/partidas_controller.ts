import Partida from '#models/partida'
import type { HttpContext } from '@adonisjs/core/http'

export default class PartidasController {
  async index({ request }: HttpContext) {

    const page = request.input('page', 1)
    const perPage = request.input('perPage', 6)

    return await Partida.query().paginate(page, perPage)
  }

  async show({ params }: HttpContext) {
    return await Partida.query()
      .where('id', params.id)
      .preload('torneio')
      .preload('equipes')
      .first()
  }

  async store({ request }: HttpContext) {

    const dados = request.only(['dataPartida', 'resultado'])

    return await Partida.create(dados)
  }

  async update({ params, request }: HttpContext) {
    const partida = await Partida.findOrFail(params.id)
    const dados = request.only(['dataPartida', 'resultado'])

    partida.merge(dados)

    return await partida.save()
  }

  async destroy({ params }: HttpContext) {
    const partida = await Partida.findOrFail(params.id)

    await partida.delete()
    return { msg: 'Registro deletedo com sucesso', partida }
  }
}