import "./styles.css";

function Eventos(props) {
  function Interino() {
    console.log("click");
  }

  return (
    <div className="Interin">
      <h2>{props.title}</h2>
      <button onClick={Interino}>Borrar tarea</button>
    </div>
  );
}
export default Eventos;
