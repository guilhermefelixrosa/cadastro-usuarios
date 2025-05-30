import { useEffect, useState} from 'react'
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

  const [users, setUsers] = useState([]) //Devo usar a essa forma para dizer que uma variável mudou o status

  async function getUsers() {
    const usersFromDB = await api.get("/usuarios");
    setUsers(usersFromDB.data)
    console.log('Response: '+ users);
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
        {users.map((user) => (
          <div key={user.id} className="card">
            <div>
              <p>Nome: {user.name}</p>
              <p>Idade: {user.age}</p>
              <p>Email: {user.email}</p>
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
