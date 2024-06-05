import EquipeJogador from '#models/equipe_jogador'
import type { HttpContext } from '@adonisjs/core/http'

export default class EquipeJogadorsController {
  async index({ request }: HttpContext) {

    const page = request.input('page', 1)
    const perPage = request.input('perPage', 5)

    return await EquipeJogador.query().paginate(page, perPage)
  }

  async show({ params }: HttpContext) {
    return await EquipeJogador.query()
      .where('id', params.id)
      .preload('equipe')
      .preload('jogador')
      .first()
  }

  async store({ request }: HttpContext) {

    const dados = request.only(['equipeId', 'jogadoreId'])

    return await EquipeJogador.create(dados)
  }

  async update({ params, request }: HttpContext) {
    const equipe_jogador = await EquipeJogador.findOrFail(params.id)
    const dados = request.only(['equipeId', 'jogadoreId'])

    equipe_jogador.merge(dados)

    return await equipe_jogador.save()
  }

  async destroy({ params }: HttpContext) {
    const equipe_jogador = await EquipeJogador.findOrFail(params.id)

    await equipe_jogador.delete()
    return { msg: 'Registro deletedo com sucesso', equipe_jogador }
  }
}