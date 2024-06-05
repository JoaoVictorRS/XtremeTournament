import Torneio from '#models/torneio'
import type { HttpContext } from '@adonisjs/core/http'

export default class TorneiosController {
  async index({request}: HttpContext) {
  
      const page = request.input('page', 1)
      const perPage = request.input('perPage', 5)
  
      return await Torneio.query().paginate(page, perPage)
    }
  
    async show({params}: HttpContext){
      return await Torneio.query()
        .where('id', params.id)
        .preload('jogo')
        .preload('equipes')
        .preload('partidas')
        .first()
    }
    
    async store({request}: HttpContext){
  
      const dados = request.only(['nome', 'dataInicio', 'dataFim', 'jogoId'])
  
      return await Torneio.create(dados)
    }
  
    async update({params, request}: HttpContext){
      const torneio = await Torneio.findOrFail(params.id)
      const dados = request.only(['nome', 'dataInicio', 'dataFim', 'jogoId'])
  
      torneio.merge(dados)
  
      return await torneio.save()
    }
  
    async destroy({params}: HttpContext){
      const torneio = await Torneio.findOrFail(params.id)
      
      await torneio.delete()
      return {msg: 'Registro deletedo com sucesso', torneio}
    }
}