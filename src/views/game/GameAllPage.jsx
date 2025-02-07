import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import { selectAllGames, selectAllGamesStatus, selectGamesNextPage, selectGamesPrevPage } from '../../redux/store/gameSlice';
import { useEffect, useState } from 'react';
import { fetchAsyncGames } from '../../redux/utils/gameUtils';
import { Pagination, Preloader, Title } from '../../components/common';
import { STATUS } from '../../utils/status';
import { GameList } from '../../components/game';
import  {eclipse} from '../../utils/images'

const GameAllPage = () => {
  const dispatch = useDispatch();
  const games = useSelector(selectAllGames);
  const gamesStatus = useSelector(selectAllGamesStatus);
  const nextPage = useSelector(selectGamesNextPage);
  const prevPage = useSelector(selectGamesPrevPage);
  const [page, setPage] = useState(1);

  useEffect(() => {
    dispatch(fetchAsyncGames(page));
  }, [page]);

  const pageHandler = (pageValue) => setPage(pageValue);

  return (
    <GameAllPageWrapper>
      <div className='sc-games section'>
        <div className='container'>
          <Title titleName={{
            firstText: "Todos Los",
            secondText: "Juegos"
          }} />

    <div class="container">
        <h1>Eclipse Nocturno</h1>
        <img src={eclipse} alt="Imagen del juego"/>
        <div className='container_parrafo'>
            <p>
            Un misterioso eclipse ha sumido un pequeño pueblo en la oscuridad, desatando el pánico entre sus habitantes. Durante este caos, el hermano del protagonista queda atrapado en el pueblo. Al llegar, el protagonista descubre que el lugar está infestado de criaturas deformes y aterradoras, producto de experimentos científicos fallidos. A medida que investiga, se da cuenta de que el eclipse 
            puede ser un efecto secundario de un experimento más grande y siniestro.
            </p>
        </div>
    </div>
        </div>
      </div>
    </GameAllPageWrapper>
  )
}

export default GameAllPage;

const GameAllPageWrapper = styled.div`
  background-color: var(--clr-violet-dark-active);

  .sc-games{
    min-height: 100vh;
    padding-top: 65px;
  }

   h1 {
      color: #ff0000;
    }
        img {
            width: 600px;
            height : 450px;
            border-radius: 10px;
        }
         .container_parrafo {
           width : 550px
         }   
        p {
            font-size: 16px;
            margin-top: 10px;
            color : white
        }
`;
