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
                Eclipse Nocturno es un juego de terror y supervivencia inspirado en Resident Evil y Alien: Isolation. 
                Explora un mundo oscuro y lleno de peligros donde el miedo y la estrategia son clave para sobrevivir.
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
