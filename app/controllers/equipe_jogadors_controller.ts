import EquipeJogador from '#models/equipe_jogador'
import type { HttpContext } from '@adonisjs/core/http'

export default class EquipeJogadorsController {
  async index({request}: HttpContext) {
  
      const page = request.input('page', 1)
      const howMany = request.input('howMany', 5)
  
      return await EquipeJogador.query().paginate(page, howMany)
    }
  
    async show({params}: HttpContext){
      return await EquipeJogador.findOrFail(params.id)
    }
    
    async store({request}: HttpContext){
  
      const dados = request.only(['equipeId', 'partidaId'])
  
      return await EquipeJogador.create(dados)
    }
  
    async update({params, request}: HttpContext){
      const equipe_jogador = await EquipeJogador.findOrFail(params.id)
      const dados = request.only(['equipeId', 'partidaId'])
  
      equipe_jogador.merge(dados)
  
      return await equipe_jogador.save()
    }
  
    async destroy({params}: HttpContext){
      const equipe_jogador = await EquipeJogador.findOrFail(params.id)
      
      await equipe_jogador.delete()
      return {msg: 'Registro deletedo com sucesso', equipe_jogador}
    }
}