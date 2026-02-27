import { SetStateAction, useState } from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function RootLayout() {

  const [contador, setContador] = useState(1);

  const [primeiroValor, setPrimeiroValor] = useState("");
  const [segundoValor, setSegundoValor] = useState("");
  const [operadora, setOperadora] = useState(null);

  function somarUm() {
    setContador(contador + 1);
  }

  function adicionarValor(numero: string) {
    setPrimeiroValor(primeiroValor + numero);
  }

  function receberValor(operadora) {
      if (primeiroValor === "") return;
        setOperadora(operadora);
        setSegundoValor(primeiroValor);
        setPrimeiroValor("");
    
  }

  function calculo() {
    if (!segundoValor || !primeiroValor || !operadora) return;

    const num1 = parseFloat(segundoValor);
    const num2 = parseFloat(primeiroValor);
    let resultado = 0;

    switch (operadora) {
      case "+":
        resultado = num1 + num2;
        break;
      case "-":
        resultado = num1 - num2;
        break;
      case "*":
        resultado = num1 * num2;
        break;
      case "/":
        resultado = num1 / num2;
        break;

    }

    setPrimeiroValor(resultado);
    setOperadora(null);

  }

  return (
    <>
      <SafeAreaView>
        <Text>Contador: {contador}</Text>

        <TouchableOpacity style={styles.botaoAdicionar} onPress={somarUm}>
          <Text>Adicionar +1</Text>
        </TouchableOpacity>
      </SafeAreaView>

      <SafeAreaView style={styles.bordaCalculadora}>
        <SafeAreaView style={styles.grupoCalculadora}>

          <SafeAreaView style={styles.telaCalculo}>
            <Text style={styles.linhaCalculo} >
              {segundoValor} {operadora}
            </Text>
            <Text style={styles.linhaCalculo}>
              {primeiroValor || 0} 
            </Text>
          </SafeAreaView>

          <SafeAreaView>

            <SafeAreaView style={styles.linhaTeclas}>
              <TouchableOpacity onPress={() => adicionarValor("7")}><Text style={styles.linhaTeclas}>7</Text></TouchableOpacity>
              <TouchableOpacity onPress={() => adicionarValor("8")}><Text style={styles.linhaTeclas}>8</Text></TouchableOpacity>
              <TouchableOpacity onPress={() => adicionarValor("9")}><Text style={styles.linhaTeclas}>9</Text></TouchableOpacity>
              <TouchableOpacity onPress={() => receberValor("+")}><Text style={styles.linhaTeclas}>+</Text></TouchableOpacity>
            </SafeAreaView>

            <SafeAreaView style={styles.linhaTeclas}>
              <TouchableOpacity onPress={() => adicionarValor("4")}><Text style={styles.linhaTeclas}>4</Text></TouchableOpacity>
              <TouchableOpacity onPress={() => adicionarValor("5")}><Text style={styles.linhaTeclas}>5</Text></TouchableOpacity>
              <TouchableOpacity onPress={() => adicionarValor("6")}><Text style={styles.linhaTeclas}>6</Text></TouchableOpacity>
              <TouchableOpacity onPress={() => receberValor("-")}><Text style={styles.linhaTeclas}>-</Text></TouchableOpacity>
            </SafeAreaView>

            <SafeAreaView style={styles.linhaTeclas}>
              <TouchableOpacity onPress={() => adicionarValor("1")}><Text style={styles.linhaTeclas}>1</Text></TouchableOpacity>
              <TouchableOpacity onPress={() => adicionarValor("2")}><Text style={styles.linhaTeclas}>2</Text></TouchableOpacity>
              <TouchableOpacity onPress={() => adicionarValor("3")}><Text style={styles.linhaTeclas}>3</Text></TouchableOpacity>
              <TouchableOpacity onPress={() => receberValor("*")}><Text style={styles.linhaTeclas}>*</Text></TouchableOpacity>
            </SafeAreaView>

            <SafeAreaView style={styles.linhaTeclas}>
              <TouchableOpacity ><Text style={styles.linhaTeclas}>C</Text></TouchableOpacity>
              <TouchableOpacity onPress={() => adicionarValor("0")}><Text style={styles.linhaTeclas}>0</Text></TouchableOpacity>
              <TouchableOpacity onPress={calculo}><Text style={styles.linhaTeclas}>=</Text></TouchableOpacity>
              <TouchableOpacity onPress={() => receberValor("/")}><Text style={styles.linhaTeclas}>/</Text></TouchableOpacity>
            </SafeAreaView>

          </SafeAreaView>

        </SafeAreaView>
      </SafeAreaView>
    </>
  );
}

const styles = StyleSheet.create({
  botaoAdicionar: {
    backgroundColor: 'red',
    borderRadius: 10,
    borderWidth: 5,
    padding: 10,
    margin: 10
  },

  bordaCalculadora: {
    backgroundColor: 'grey',
    borderRadius: 10,
    borderWidth: 9,
    margin: 30
  },

  grupoCalculadora: {
    margin: 10
  },

  telaCalculo: {
    backgroundColor: 'green',
    borderRadius: 10,
    borderWidth: 5,
    margin: 5,
    padding: 10
  },

  linhaCalculo: {
    fontSize: 28,
    textAlign: 'right'
  },

  linhaTeclas: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    margin: 5,
    fontSize: 28,
    fontWeight: 'bold',
    fontFamily: 'comic-sans',
    textAlign: 'center'
  
  }
});

