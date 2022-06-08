function Saludo(props) {
  const { name, lastname } = props;
  return <div>Bienvenido {`${name} ${lastname}`}</div>;
}

export default Saludo;
