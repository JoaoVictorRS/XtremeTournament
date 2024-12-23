import Genero from '#models/genero'
import type { HttpContext } from '@adonisjs/core/http'

export default class GenerosController {
  async index({ request }: HttpContext) {

    const page = request.input('page', 1)
    const perPage = request.input('perPage', 6)

    return await Genero.query().paginate(page, perPage)
  }

  async show({ params }: HttpContext) {
    return await Genero.query()
      .where('id', params.id)
      .preload('jogos')
      .first()
  }

  async store({ request }: HttpContext) {

    const dados = request.only(['nome'])

    return await Genero.create(dados)
  }

  async update({ params, request }: HttpContext) {
    const genero = await Genero.findOrFail(params.id)
    const dados = request.only(['nome'])

    genero.merge(dados)

    return await genero.save()
  }

  async destroy({ params }: HttpContext) {
    const genero = await Genero.findOrFail(params.id)

    await genero.delete()
    return { msg: 'Registro deletedo com sucesso', genero }
  }
}