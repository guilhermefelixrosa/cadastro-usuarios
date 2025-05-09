import { useEffect } from 'react'
import "./style.css";
import Trash from "../../assets/trash-icon.svg";
import api from "../../services/api";

function Home() {
  // const users = [
  //   {
  //     id: "123456789",
  //     name: "Guilherme",
  //     age: 25,
  //     email: "gui@email.com",
  //   },
  //   {
  //     id: "1234567891",
  //     name: "Aline",
  //     age: 32,
  //     email: "ali@email.com",
  //   },
  // ];

  let users = []

  async function getUsers() {
    users = await api.get("/usuarios");
    console.log('Response: '+response.data);
  }

  useEffect(() => {
    getUsers() 
  }, [])

  return (
    <>
      <div className="container">
        <form action="">
          <h1>Cadastro de usuários</h1>
          <input placeholder="Nome" name="nome" type="text" />
          <input placeholder="Idade" name="idade" type="number" />
          <input placeholder="E-mail" name="email" type="email" />
          <button type="button">Cadastrar</button>
        </form>
        {users.map((users) => (
          <div key={users.id} className="card">
            <div>
              <p>Nome: {users.name}</p>
              <p>Idade: {users.age}</p>
              <p>Email: {users.email}</p>
              <button>
                <img src={Trash} alt="" />
              </button>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default Home;
