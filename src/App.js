import "./styles.css";
import Bienvenido from "./Bienvenido";
import Amigos from "./Componente";
import Eventos from "./Eventos";
import Contador from "./Contador";
import Modular from "./Modular";
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
      <br />
      <div className="Aprendiendo">
        <Eventos title="Aprender React" />
      </div>
      <br />
      <div className="grefg">
        <Contador title="Esto es un contador" />
      </div>
      <div>
        <button id="btnModal">Abrir modal</button>
        <div id="myModal" class="modalContainer">
          <div class="modal-content">
            <span class="close">×</span> <h2>Modal</h2>
            <p>Se ha desplegado el modal y bloqueado el scroll del body!</p>
          </div>
        </div>
      </div>
      ;
    </div>
  );
}
