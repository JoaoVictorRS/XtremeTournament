import type { HttpContext } from '@adonisjs/core/http'

import TorneioPartida from "#models/torneio_partida"

export default class TorneioPartidasController {
  async index({request}: HttpContext) {
  
      const page = request.input('page', 1)
      const howMany = request.input('howMany', 5)
  
      return await TorneioPartida.query().paginate(page, howMany)
    }
  
    async show({params}: HttpContext){
      return await TorneioPartida.findOrFail(params.id)
    }
    
    async store({request}: HttpContext){
  
      const dados = request.only(['torneioId', 'partidaId'])
  
      return await TorneioPartida.create(dados)
    }
  
    async update({params, request}: HttpContext){
      const torneio_partida = await TorneioPartida.findOrFail(params.id)
      const dados = request.only(['torneioId', 'partidaId'])
  
      torneio_partida.merge(dados)
  
      return await torneio_partida.save()
    }
  
    async destroy({params}: HttpContext){
      const torneio_partida = await TorneioPartida.findOrFail(params.id)
      
      await torneio_partida.delete()
      return {msg: 'Registro deletedo com sucesso', torneio_partida}
    }
}