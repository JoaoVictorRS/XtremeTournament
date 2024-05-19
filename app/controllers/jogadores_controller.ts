import Jogadore from '#models/jogadore'
import type { HttpContext } from '@adonisjs/core/http'

export default class JogadoresController {
  async index({ request }: HttpContext) {

    const page = request.input('page', 1)
    const howMany = request.input('howMany', 5)

    return await Jogadore.query().paginate(page, howMany)
  }

  async show({ params }: HttpContext) {
    return await Jogadore.findOrFail(params.id)
  }

  async store({ request }: HttpContext) {

    const dados = request.only(['nome_real', 'nick', 'idade', 'pais'])

    return await Jogadore.create(dados)
  }

  async update({ params, request }: HttpContext) {
    const jogadore = await Jogadore.findOrFail(params.id)
    const dados = request.only(['nome_real', 'nick', 'idade', 'pais'])

    jogadore.merge(dados)

    return await jogadore.save()
  }

  async destroy({ params }: HttpContext) {
    const jogadore = await Jogadore.findOrFail(params.id)

    await jogadore.delete()
    return { msg: 'Registro deletedo com sucesso', jogadore }
  }
}