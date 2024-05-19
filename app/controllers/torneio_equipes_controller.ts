import TorneioEquipe from '#models/torneio_equipe'
import type { HttpContext } from '@adonisjs/core/http'

export default class TorneioEquipesController {
  async index({request}: HttpContext) {
  
      const page = request.input('page', 1)
      const howMany = request.input('howMany', 5)
  
      return await TorneioEquipe.query().paginate(page, howMany)
    }
  
    async show({params}: HttpContext){
      return await TorneioEquipe.findOrFail(params.id)
    }
    
    async store({request}: HttpContext){
  
      const dados = request.only(['equipeId', 'torneioId'])
  
      return await TorneioEquipe.create(dados)
    }
  
    async update({params, request}: HttpContext){
      const torneio_equipe = await TorneioEquipe.findOrFail(params.id)
      const dados = request.only(['equipeId', 'torneioId'])
  
      torneio_equipe.merge(dados)
  
      return await torneio_equipe.save()
    }
  
    async destroy({params}: HttpContext){
      const torneio_equipe = await TorneioEquipe.findOrFail(params.id)
      
      await torneio_equipe.delete()
      return {msg: 'Registro deletedo com sucesso', torneio_equipe}
    }
}