# Welcome to your Expo app 👋

This is an [Expo](https://expo.dev) project created with [`create-expo-app`](https://www.npmjs.com/package/create-expo-app).

## Get started

1. Install dependencies

   ```bash
   npm install
   ```

2. Start the app

   ```bash
   npx expo start
   ```

```bash
npm run reset-project
```




# Calculadora

A ideia inspirada foi na calculadora básica da Microsoft. Que possui diversos métodos de cálculos, mas foquei na criação do básico da calculadora com soma, subtração, multiplicação e divisão

<img width="316" height="528" alt="Captura de tela 2026-02-26 221108" src="https://github.com/user-attachments/assets/46c98088-1608-4f2b-a0e4-2177a818bc4e" />


-Criar as operações lógicas
-Crias as teclas para acionar o cálculo e limpar a tela da calculadora



Primeiro passo foi criar várias "SafeAreaView" para separar cada parte e linha da calculadora para que deixasse ela mais visivel possível e ter uma ideia de cada passo devo seguir para completar a calculadora.

<img width="1918" height="990" alt="Captura de tela 2026-02-26 211626" src="https://github.com/user-attachments/assets/a28fac28-1d12-4d73-938f-8802b568ebbc" />

Após a montagem do "rosto" da calculadora, primeiro foi declarado as variáveis que iriam receber o primeiro valor. 

Em seguida utilizar o método de grafo para fazer a "operadora" forçar a variável "primeiroValor" ser atribuiado a variável "segundoValor" para abrir espaço na primeira variável para contiuar a adicionar os números.

Após tentar forçar os calculos sem ter uma ideia do que estava ocorrendo em minha tela, decidi retornar ao tela do meu cálculo para fazer as variáveis aparecerem na tela para ter ideia de que os valores estavam sendo atribuidos

<img width="1919" height="985" alt="Captura de tela 2026-02-26 221523" src="https://github.com/user-attachments/assets/3924b8fc-2975-4e47-9323-54f739aa35af" />


<<<<<<< HEAD
Após fazer os operadores funcionar na calculadora, decidi que era hora de estilizar a calculadora e deixa-la com uma cara melhor.

Não houve muito problemas envolvendo estilizar a calculadora, o que causou um pouco de incomodo foi referente as bordas da calculadora. Pois, eu tinha que permitir uma borda que funcionasse tanto em web tanto em um dispotivo móvel e comando que utlizei no styles foi o "width" que permitiu centralizar a calculadora tanto em modelo web quanto dispositivos mível.




A próxima parte foi adicionar mais algumas funções da operadora, como o inverter sinal, raiz quadrada e x²

INVERTER SINAL: utilizei somente a validação se o valor era vazio, caso não fosse, ele ia retornar a função que iria inverter o valor do número

RAIZ QUADRADA: eu utlizei a biblioteca Math, que era mais fácil

x²: foi utilizando uma constante para copiar o valor digitado na calculadora e depois fazer o mesmo multiplicar os valores copiados para dar o resultado e passar para o primeiroValor da calculadora
=======
>>>>>>> cc070d6d5434fac533686299df4881e5b5346a3c
