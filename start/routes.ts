/*
|--------------------------------------------------------------------------
| Routes file
|--------------------------------------------------------------------------
|
| The routes file is used for defining the HTTP routes.
|
*/

import EquipeJogadorsController from '#controllers/equipe_jogadors_controller'
import EquipesController from '#controllers/equipes_controller'
import GenerosController from '#controllers/generos_controller'
import JogadoresController from '#controllers/jogadores_controller'
import JogosController from '#controllers/jogos_controller'
import PartidaEquipesController from '#controllers/partida_equipes_controller'
import PartidasController from '#controllers/partidas_controller'
import TorneioEquipesController from '#controllers/torneio_equipes_controller'
import TorneiosController from '#controllers/torneios_controller'
import router from '@adonisjs/core/services/router'

router.get('/', async () => {
  return {
    message: 'Welcome to the XtremeTournament API',
    routes: [
      {equipes: '/equipes'},
      {jogadores: '/jogadores'},
      {equipeJogadores: '/equipe_jogadores'},
      {partidas: '/partidas'},
      {partidaEquipes: '/partida_equipes'},
      {torneios: '/torneios'},
      {jogos: '/jogos'},
      {generos: '/generos'},
    ]
  }
})

//Equipes e seus jogadores
router.resource('/equipes', EquipesController).apiOnly()
router.resource('/jogadores', JogadoresController).apiOnly()
router.resource('/equipe_jogadores', EquipeJogadorsController).apiOnly()

//Partidas e torneio
router.resource('/partidas', PartidasController).apiOnly()
router.resource('/partida_equipes', PartidaEquipesController).apiOnly()
router.resource('/torneios', TorneiosController).apiOnly()
router.resource('/torneio_equipes', TorneioEquipesController).apiOnly()

//Jogos e generos
router.resource('/jogos', JogosController).apiOnly()
router.resource('/generos', GenerosController).apiOnly()