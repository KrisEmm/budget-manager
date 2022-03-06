import React, { useEffect, useState } from 'react';
import './App.css';
import { Form } from "./components/Form";
import { List } from "./components/List";
import { Manager } from './components/Manager';
import { Question } from "./components/Question";
function App() {
  const [showQuestion, setShowQuestion] = useState(true)
  const [thereAreNewExpense, setThereAreNewExpense] = useState(false)
  const [expenses, setExpenses] = useState([])
  const [expense, setExpense] = useState({})
  const [budget, setBudget] = useState(0)
  const [remainder, setRemainder] = useState(0)


  useEffect(() => {
    if (thereAreNewExpense) {
      setExpenses([
        ...expenses,
        expense
      ])
      setThereAreNewExpense(false)
      setRemainder(remainder - expense.amount)
    }
  }, [expense, expenses, thereAreNewExpense, remainder])

  return (
    <div className="container">
      <header>
        <h1>Presupuesto Semana</h1>
      </header>
      <div className="contenido-principal contenido">
        {showQuestion
          ? (
            <Question
              setBudget={setBudget}
              setRemainder={setRemainder}
              setShowQuestion={setShowQuestion}
            />
          )
          : (
            <div className="row">
              <div className="one-half column">
                <Form
                  setExpense={setExpense}
                  setThereAreNewExpense={setThereAreNewExpense}
                />
              </div>
              <div className="one-half column">
                <List
                  expenses={expenses}
                />
                <Manager
                  budget={budget}
                  remainder={remainder}
                />
              </div>
            </div>
          )
        }
      </div>
    </div>
  );
}

export default App;
