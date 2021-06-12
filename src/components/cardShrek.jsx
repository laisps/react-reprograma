import shrek from '../service/dice';
// import {text, teste} from './styled';

function card() {
  return (
    <div>
      <h1>Personagens Shrek</h1>
      {shrek.map((item) => (
        <div>
          <p>{item.nome}</p>
          <img src={item.img} alt={item.img} width={150} />
          <p>{item.descrição}</p>
        </div>
      ))}
    </div>
  );
}
export default card;