import Jogadore from '#models/jogadore'
import type { HttpContext } from '@adonisjs/core/http'

export default class JogadoresController {
  async index({ request }: HttpContext) {

    const page = request.input('page', 1)
    const perPage = request.input('perPage', 6)

    return await Jogadore.query().paginate(page, perPage)
  }

  async show({ params }: HttpContext) {
    return await Jogadore.query()
      .where('id', params.id)
      .preload('equipe')
      .first()
  }

  async store({ request }: HttpContext) {

    const dados = request.only(['nome_real', 'nick', 'idade', 'pais', 'foto'])

    return await Jogadore.create(dados)
  }

  async update({ params, request }: HttpContext) {
    const jogadore = await Jogadore.findOrFail(params.id)
    const dados = request.only(['nome_real', 'nick', 'idade', 'pais', 'foto'])

    jogadore.merge(dados)

    return await jogadore.save()
  }

  async destroy({ params }: HttpContext) {
    const jogadore = await Jogadore.findOrFail(params.id)

    await jogadore.delete()
    return { msg: 'Registro deletedo com sucesso', jogadore }
  }
}