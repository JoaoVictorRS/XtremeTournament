import Equipe from '#models/equipe'
import type { HttpContext } from '@adonisjs/core/http'

export default class EquipesController {
  async index({request}: HttpContext) {
  
      const page = request.input('page', 1)
      const howMany = request.input('howMany', 5)
  
      return await Equipe.query().paginate(page, howMany)
    }
  
    async show({params}: HttpContext){
      return await Equipe.findOrFail(params.id)
    }
    
    async store({request}: HttpContext){
  
      const dados = request.only(['nome', 'regiao'])
  
      return await Equipe.create(dados)
    }
  
    async update({params, request}: HttpContext){
      const equipe = await Equipe.findOrFail(params.id)
      const dados = request.only(['nome', 'regiao'])
  
      equipe.merge(dados)
  
      return await equipe.save()
    }
  
    async destroy({params}: HttpContext){
      const equipe = await Equipe.findOrFail(params.id)
      
      await equipe.delete()
      return {msg: 'Registro deletedo com sucesso', equipe}
    }
}