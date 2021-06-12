import shrek from '../service/dice';
import teste from './Title'



function card() {
  return (
    <div>
      <teste>Personagens Shrek</teste>
      {shrek.map((item) => (
        <div>
          <p>{item.nome}</p>
          <img src={item.img} alt={item.img} width={100} />
          <p>{item.descrição}</p>
        </div>
      ))}
    </div>
  );
}
export default card;