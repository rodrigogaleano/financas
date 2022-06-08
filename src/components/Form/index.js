import React, { useState } from "react";
import * as C from "./styles";

function Form() {
  const [desc, setDesc] = useState("");
  const [amount, setAmount] = useState("");
  const [isExpense, setExpense] = useState(false);

  const handleSave = () => {
    if (!desc || !amount) {
      alert('Por favor, preencha todos os campos');
      return;
    } else if (amount < 1) {
      alert('Por favor, preencha um valor maior que 0');
      return;
    }
  }

  return (
    <>
      <C.Container>
        <C.InputContent>
          <C.Label>Descrição</C.Label>
          <C.Input value={desc} onChange={e => setDesc(e.target.value)} />
        </C.InputContent>
        <C.InputContent>
          <C.Label>Valor</C.Label>
          <C.Input value={amount} type="number" onChange={e => setAmount(e.target.value)} />
        </C.InputContent>
        <C.RadioGroup>
          <C.Input
            type="radio"
            id="rIncome"
            defaultChecked
            name="group1"
            onChange={() => setExpense(!isExpense)}
          />
          <C.Label htmlFor="rIncome">Entrada</C.Label>
          <C.Input
            type="radio"
            id="rExpense"
            name="group1"
            onChange={() => setExpense(!isExpense)}
          />
          <C.Label htmlFor="rExpense">Saída</C.Label>
          <C.Button onClick={handleSave}>Adicionar</C.Button>
        </C.RadioGroup>
      </C.Container>
    </>
  )
}

export default Form;