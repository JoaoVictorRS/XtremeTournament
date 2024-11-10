import Jogo from '#models/jogo'
import type { HttpContext } from '@adonisjs/core/http'

export default class JogosController {
  async index({ request }: HttpContext) {

    const page = request.input('page', 1)
    const perPage = request.input('perPage', 6)

    return await Jogo.query().paginate(page, perPage)
  }

  async show({ params }: HttpContext) {
    return await Jogo.query()
      .where('id', params.id)
      .preload('genero')
      .preload('torneios')
      .first()
  }

  async store({ request }: HttpContext) {

    const dados = request.only(['nome', 'descricao', 'generoId', 'foto', 'cover'])

    return await Jogo.create(dados)
  }

  async update({ params, request }: HttpContext) {
    const jogo = await Jogo.findOrFail(params.id)
    const dados = request.only(['nome', 'descricao', 'generoId', 'foto', 'cover'])

    jogo.merge(dados)

    return await jogo.save()
  }

  async destroy({ params }: HttpContext) {
    const jogo = await Jogo.findOrFail(params.id)

    await jogo.delete()
    return { msg: 'Registro deletedo com sucesso', jogo }
  }
}