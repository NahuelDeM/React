import "./styles.css";
import Bienvenido from "./Bienvenido";
import Amigos from "./Componente";
import Eventos from "./Eventos";
const nombres = ["Jose", "Carla", "Vale", "Pancho"];
const lastname = ["Sanchez"];

export default function App() {
  return (
    <div className="App">
      <div className="Bienvenido">
        <Bienvenido name="Nahuel" lastname="Velazquez" />
      </div>
      <h1>Esto es una caja</h1>
      <div className="bordecaja">
        <h2>¿Deseas aprender react?</h2>
        <button>Si</button>
        <button>No</button>
      </div>
      <br />
      <div className="Amigos">
        <Amigos name="Jose" />
        <Amigos name="Sol" />
        <Amigos name="German" />
        <Amigos name="Pablo" />
        <Amigos name="Tammy" />
      </div>
      <br />
      <div className="NyA">
        {nombres.map((nombre) => (
          <Bienvenido name={nombre} lastname={lastname} />
        ))}
      </div>
      <div>
        <Eventos title="Aprender React" />
      </div>
    </div>
  );
}
