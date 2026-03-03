import { useState } from "react";
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
    setSegundoValor("");
    setOperadora(null);

  }
  
  //RaizQuadrada
  function raizQuadrada() {
  if (primeiroValor === "") return;

  const numero = parseFloat(primeiroValor);

  if (numero < 0) {
    setPrimeiroValor("Erro");
    return;
  }

  const resultado = Math.sqrt(numero);

  setPrimeiroValor(resultado.toString());
  }

  //aoQuadrado
  function aoQuadrado() {
  if (primeiroValor === "") return;

  const numero = parseFloat(primeiroValor);

  const resultado = numero * numero; 

  setPrimeiroValor(resultado.toString());
  }

  //inverterSinal
  function inverterSinal() {
  if (primeiroValor === "") return;

  if (primeiroValor.startsWith("-")) {
    setPrimeiroValor(primeiroValor.substring(1));
  } else {
    setPrimeiroValor("-" + primeiroValor);
  }
}

  function limpar(){
    setPrimeiroValor("");
    setSegundoValor("");
    setOperadora(null);

  }


  return (
    <>


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
              <TouchableOpacity onPress={raizQuadrada}><Text style={styles.teclasOperador}>√</Text></TouchableOpacity>
              <TouchableOpacity onPress={aoQuadrado}><Text style={styles.teclasOperador}>x²</Text></TouchableOpacity>
              <TouchableOpacity onPress={limpar}><Text style={styles.teclasOperador}>C</Text></TouchableOpacity>
              <TouchableOpacity onPress={() => receberValor("/")}><Text style={styles.teclasOperador}>/</Text></TouchableOpacity>
            </SafeAreaView>

            <SafeAreaView style={styles.linhaTeclas}>
              <TouchableOpacity onPress={() => adicionarValor("7")}><Text style={styles.teclas}>7</Text></TouchableOpacity>
              <TouchableOpacity onPress={() => adicionarValor("8")}><Text style={styles.teclas}>8</Text></TouchableOpacity>
              <TouchableOpacity onPress={() => adicionarValor("9")}><Text style={styles.teclas}>9</Text></TouchableOpacity>
              <TouchableOpacity onPress={() => receberValor("*")}><Text style={styles.teclasOperador}>*</Text></TouchableOpacity>
            </SafeAreaView>

            <SafeAreaView style={styles.linhaTeclas}>
              <TouchableOpacity onPress={() => adicionarValor("4")}><Text style={styles.teclas}>4</Text></TouchableOpacity>
              <TouchableOpacity onPress={() => adicionarValor("5")}><Text style={styles.teclas}>5</Text></TouchableOpacity>
              <TouchableOpacity onPress={() => adicionarValor("6")}><Text style={styles.teclas}>6</Text></TouchableOpacity>
              <TouchableOpacity onPress={() => receberValor("-")}><Text style={styles.teclasOperador}>-</Text></TouchableOpacity>
            </SafeAreaView>

            <SafeAreaView style={styles.linhaTeclas}>
              <TouchableOpacity onPress={() => adicionarValor("1")}><Text style={styles.teclas}>1</Text></TouchableOpacity>
              <TouchableOpacity onPress={() => adicionarValor("2")}><Text style={styles.teclas}>2</Text></TouchableOpacity>
              <TouchableOpacity onPress={() => adicionarValor("3")}><Text style={styles.teclas}>3</Text></TouchableOpacity>
              <TouchableOpacity onPress={() => receberValor("+")}><Text style={styles.teclasOperador}>+</Text></TouchableOpacity>
              
            </SafeAreaView>

            <SafeAreaView style={styles.linhaTeclas}>
              <TouchableOpacity onPress={inverterSinal}><Text style={styles.teclas}>+/-</Text></TouchableOpacity>
              <TouchableOpacity onPress={() => adicionarValor("0")}><Text style={styles.teclas}>0</Text></TouchableOpacity>
              <TouchableOpacity onPress={() => adicionarValor(".")}><Text style={styles.teclas}>,</Text></TouchableOpacity>
              <TouchableOpacity onPress={calculo}><Text style={styles.teclasResultado}>=</Text></TouchableOpacity>
            </SafeAreaView>

          </SafeAreaView>


        </SafeAreaView>
      </SafeAreaView>


    </>
  );
}

const styles = StyleSheet.create({
    bordaCalculadora: {
    flex: 1,
    backgroundColor: "#1f2430",
    justifyContent: "center",
    alignItems: "center",
  },

  grupoCalculadora: {
    width: 360,
    backgroundColor: "#2a2f3f",
    borderRadius: 20,
    padding: 15,
  },

  telaCalculo: {
    backgroundColor: "#1f2430",
    borderRadius: 15,
    paddingVertical: 25,
    paddingHorizontal: 15,
    marginBottom: 15,
  },

  linhaCalculo: {
    color: "#ffffff",
    fontSize: 40,
    textAlign: "right",
  },

  linhaTeclas: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 10,
  },

  teclas: {
    width: 70, 
    height: 60,
    textAlign: "center",
    textAlignVertical: "center",
    fontSize: 24,
    borderRadius: 12,
    backgroundColor: "#3a3f55",
    color: "#ffffff",
    fontWeight: "500",
  },

  teclasOperador: {
    width: 70, 
    height: 60,
    textAlign: "center",
    textAlignVertical: "center",
    fontSize: 24,
    borderRadius: 12,
    backgroundColor: "#4a4a60",
    color: "#ffffff",
    fontWeight: "500",
  },

  teclasResultado: {
    width: 70, 
    height: 60,
    textAlign: "center",
    textAlignVertical: "center",
    fontSize: 24,
    borderRadius: 12,
    backgroundColor: "#0078D7",
    color: "#ffffff",
    fontWeight: "500",
  }
});