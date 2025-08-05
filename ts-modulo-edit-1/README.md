# typescript-modulo-EDIT
Typescript initiation

## Roteiro de Aula (Português de Portugal)

### Dia 1: Tipos Básicos + Exercícios de Reforço

**Roteiro:**
- Diferença entre JavaScript e TypeScript.
- Tipos primitivos: number, string, boolean.
- Declarar variáveis com tipos explícitos.
- Arrays e tuplos.
- Exercícios de reforço para consolidar conhecimentos.

**Conceitos Teóricos:**

**TypeScript vs JavaScript:**
TypeScript é um superset do JavaScript que adiciona tipagem estática. Enquanto o JavaScript é dinamicamente tipado (os tipos são verificados em runtime), o TypeScript verifica os tipos durante a compilação, ajudando a prevenir erros antes da execução.

**Tipos Primitivos:**
- `number`: Para números inteiros e decimais
- `string`: Para texto
- `boolean`: Para valores verdadeiro/falso
- `null` e `undefined`: Para valores nulos ou indefinidos

**Arrays e Tuplos:**
- Arrays: `number[]` ou `Array<number>` para listas do mesmo tipo
- Tuplos: `[string, number]` para arrays com tipos específicos em cada posição

**Exercícios Básicos:**
1. Declare uma variável 'age' do tipo number e atribua-lhe o valor 25.
2. Crie uma variável string 'studentName' e atribua-lhe o seu nome.
3. Crie uma variável booleana 'isActive' e defina-a como true.
4. Crie um array de números chamado 'scores'.
5. Crie um tuplo para um produto: [string, number].

**Exercícios de Reforço (Aprendizagem):**
26. Reescreva um dos exercícios anteriores usando um tipo diferente (por exemplo, troque number por string).
27. Crie uma função que recebe um array de strings e retorna o tamanho do maior elemento.
28. Crie um objeto com propriedades opcionais e aceda a elas de forma segura.
29. Escreva uma função que recebe um parâmetro do tipo união (string | number) e retorna uma string formatada.
30. Crie uma interface para um produto e adicione um método para calcular o preço com desconto.
31. Use um enum para representar diferentes estados de um pedido (ex: Pendente, Pago, Enviado).
32. Crie um array de objetos tipados e filtre os elementos com base numa propriedade.
33. Escreva uma função genérica que recebe dois argumentos e retorna um array com ambos.
34. Crie um componente React que recebe uma lista de utilizadores e renderiza os nomes.
35. Use Partial para criar um objeto de configuração onde todas as propriedades são opcionais.
36. Escreva uma função que recebe um objeto e uma chave (keyof) e retorna o valor correspondente.
37. Crie um tipo que combine duas interfaces usando interseção (&) e use-o numa função.
38. Implemente um hook React personalizado que retorna um valor booleano e uma função para alterná-lo.
39. Crie um componente React que utiliza um enum para renderizar diferentes mensagens consoante o estado.
40. Crie uma função TypeScript 2025 usando arrow function syntax que aceita um tipo 'unknown' e verifica seguramente se é uma string antes de a usar.

### Dia 2: Funções & Objetos

**Roteiro:**
- Revisão rápida dos conceitos do dia anterior.
- Introdução à tipagem de funções: parâmetros e retorno.
- Explicar parâmetros opcionais e valores por defeito.
- Apresentar tipos de objetos e como tipar métodos.

**Conceitos Teóricos:**

**Tipagem de Funções:**
As funções em TypeScript podem ter tipos explícitos para parâmetros e valores de retorno. Isto ajuda a garantir que a função recebe e retorna os tipos corretos.

**Parâmetros Opcionais:**
Usando `?` após o nome do parâmetro, tornamos um parâmetro opcional. Parâmetros opcionais devem vir depois dos obrigatórios.

**Valores por Defeito:**
Podemos definir valores padrão para parâmetros, que também tornam o parâmetro opcional.

**Tipos de Objetos:**
Podemos definir a estrutura de objetos usando interfaces ou tipos inline, especificando as propriedades e seus tipos.

**Exercícios:**
6. Escreva uma função que soma dois números.
7. Crie um tipo de objeto para um utilizador com nome e idade.
8. Escreva uma função com um parâmetro opcional.
9. Escreva uma função com um parâmetro por defeito.
10. Crie um objeto com um método que soma dois números.
11. Crie uma função que recebe um array de números e retorna a média.
12. Escreva uma função que aceita um número variável de argumentos usando rest parameters.
13. Crie um tipo para um produto com nome, preço e categoria opcional.
14. Escreva uma função que retorna uma função (higher-order function).
15. Crie um objeto com métodos que calculam área e perímetro de um retângulo.
16. Escreva uma função que aceita um callback como parâmetro.
17. Crie um tipo para um carro com propriedades readonly.
18. Escreva uma função que aceita um objeto e retorna uma nova versão modificada.
19. Crie uma função que aceita parâmetros de diferentes tipos usando union types.
20. Escreva uma função que retorna um objeto com métodos encadeáveis.
21. Crie um tipo para um formulário com validação de campos obrigatórios.
22. Escreva uma função que aceita um array e uma função de transformação.
23. Crie um objeto que implementa um padrão singleton.
24. Escreva uma função que aceita parâmetros nomeados usando um objeto.
25. Crie um tipo para um evento com timestamp e dados genéricos.
26. Escreva uma função que aceita um número e retorna uma função que multiplica por esse número.
27. Crie um tipo para um utilizador com métodos para atualizar informações.
28. Escreva uma função que aceita uma condição e retorna uma função que filtra arrays.
29. Crie um objeto com métodos que implementam um sistema de notificações.
30. Escreva uma função que aceita um objeto e uma lista de chaves para extrair.
31. Crie um tipo para um pedido com status e métodos para atualizar o status.
32. Escreva uma função que aceita um array e retorna o elemento com a maior propriedade.
33. Crie um objeto com métodos que implementam um sistema de cache.
34. Escreva uma função que aceita uma função e retorna uma versão memoizada.
35. Crie um tipo para um jogo com estado e métodos para manipular o estado.
36. Escreva uma função que aceita um objeto e retorna uma versão com propriedades opcionais.
37. Crie um objeto com métodos que implementam um sistema de eventos.
38. Escreva uma função que aceita um array e uma função de comparação para ordenar.
39. Crie um tipo para um sistema de permissões com métodos para verificar acesso.
40. Escreva uma função que aceita um objeto e retorna uma versão com propriedades readonly.
41. Crie um objeto com métodos que implementam um sistema de logs.
42. Escreva uma função que aceita uma função e retorna uma versão com debounce.
43. Crie um tipo para um sistema de configuração com valores por defeito.
44. Escreva uma função que aceita um objeto e uma função de transformação para cada propriedade.
45. Crie um objeto com métodos que implementam um sistema de validação.
46. Escreva uma função que aceita um array e retorna um objeto agrupado por uma propriedade.
47. Crie um tipo para um sistema de autenticação com métodos de login/logout.
48. Escreva uma função que aceita uma função e retorna uma versão com throttle.
49. Crie um objeto com métodos que implementam um sistema de histórico.
50. Escreva uma função que aceita um objeto e retorna uma versão com propriedades calculadas.
51. Crie um tipo para um sistema de paginação com métodos para navegar.
52. Escreva uma função que aceita um array e retorna elementos únicos.
53. Crie um objeto com métodos que implementam um sistema de observadores.
54. Escreva uma função que aceita uma função e retorna uma versão com retry logic.
55. Crie um tipo para um sistema de filas com métodos para adicionar/remover itens.

### Dia 3: Interfaces, Enums, Tipos União & Interseção

**Roteiro:**
- Introdução às interfaces e à sua utilidade na tipagem de objetos.
- Explicar enums e quando os usar.
- Apresentar tipos união e interseção.

**Conceitos Teóricos:**

**Interfaces:**
Interfaces definem contratos para objetos, especificando quais propriedades e métodos devem existir. São fundamentais para criar código reutilizável e manter consistência.

**Enums:**
Enums permitem definir um conjunto de constantes nomeadas. São úteis para representar estados, opções ou valores fixos de forma legível.

**Tipos União:**
Usando `|`, podemos criar tipos que podem ser um de vários tipos diferentes. Útil para funções que aceitam diferentes tipos de entrada.

**Tipos Interseção:**
Usando `&`, combinamos múltiplos tipos num só, criando um tipo que tem todas as propriedades dos tipos combinados.

**Exercícios:**
56. Crie uma interface para um carro com marca e ano.
57. Crie um enum para cores.
58. Use um tipo união para uma variável que pode ser string ou number.
59. Use um tipo interseção para uma pessoa que é estudante e trabalhador.
60. Escreva uma função que aceita um parâmetro string ou number e retorna o seu comprimento (se string) ou valor (se number).
61. Crie uma interface para um produto com propriedades opcionais.
62. Crie um enum para status de pedidos (Pendente, Aprovado, Rejeitado, Enviado).
63. Use um tipo união para representar diferentes tipos de utilizadores.
64. Use interseção para criar um tipo que combina utilizador e permissões.
65. Escreva uma função que aceita um array de strings ou numbers e retorna a soma.
66. Crie uma interface para um formulário com validação.
67. Crie um enum para tipos de conteúdo (Artigo, Vídeo, Imagem, Áudio).
68. Use um tipo união para representar diferentes tipos de eventos.
69. Use interseção para criar um tipo que combina configurações e opções.
70. Escreva uma função que aceita um objeto e uma chave, retornando o valor se existir.
71. Crie uma interface para um sistema de notificações.
72. Crie um enum para níveis de prioridade (Baixa, Média, Alta, Crítica).
73. Use um tipo união para representar diferentes tipos de dados.
74. Use interseção para criar um tipo que combina autenticação e autorização.
75. Escreva uma função que aceita um parâmetro que pode ser um array ou um valor único.
76. Crie uma interface para um sistema de logs.
77. Crie um enum para tipos de operação (Criar, Ler, Atualizar, Eliminar).
78. Use um tipo união para representar diferentes tipos de resposta.
79. Use interseção para criar um tipo que combina dados e metadados.
80. Escreva uma função que aceita um parâmetro que pode ser uma string ou um objeto.
81. Crie uma interface para um sistema de cache.
82. Crie um enum para estados de conexão (Desconectado, Conectando, Conectado, Erro).
83. Use um tipo união para representar diferentes tipos de configuração.
84. Use interseção para criar um tipo que combina perfil e preferências.
85. Escreva uma função que aceita um parâmetro que pode ser um número ou um array de números.
86. Crie uma interface para um sistema de paginação.
87. Crie um enum para tipos de filtro (Texto, Número, Data, Booleano).
88. Use um tipo união para representar diferentes tipos de erro.
89. Use interseção para criar um tipo que combina dados e validação.
90. Escreva uma função que aceita um parâmetro que pode ser uma função ou um valor.
91. Crie uma interface para um sistema de eventos.
92. Crie um enum para níveis de acesso (Público, Privado, Protegido, Administrador).
93. Use um tipo união para representar diferentes tipos de conteúdo.
94. Use interseção para criar um tipo que combina configurações e restrições.
95. Escreva uma função que aceita um parâmetro que pode ser um objeto ou um array de objetos.
96. Crie uma interface para um sistema de validação.
97. Crie um enum para tipos de validação (Obrigatório, Email, Telefone, CPF).
98. Use um tipo união para representar diferentes tipos de resultado.
99. Use interseção para criar um tipo que combina dados e transformações.
100. Escreva uma função que aceita um parâmetro que pode ser uma string, número ou booleano.
101. Crie uma interface para um sistema de autenticação.
102. Crie um enum para tipos de autenticação (Local, OAuth, JWT, SSO).
103. Use um tipo união para representar diferentes tipos de sessão.
104. Use interseção para criar um tipo que combina utilizador e sessão.
105. Escreva uma função que aceita um parâmetro que pode ser um array ou um objeto.

### Dia 4: Genéricos, Type Assertions, Tipos Avançados & TypeScript in React

**Roteiro:**
- Explicar o conceito de genéricos e a sua importância para componentes reutilizáveis.
- Introduzir type assertions e quando são necessários.
- Apresentar tipos utilitários como Readonly, Partial e Record.
- Introdução à integração do TypeScript com React.
- Como tipar props e state em componentes funcionais.
- Introduzir tipos utilitários: Pick e Omit.
- Discutir padrões comuns em aplicações React com TypeScript.

**Conceitos Teóricos:**

**Genéricos:**
Genéricos permitem criar código reutilizável que funciona com diferentes tipos. Usando `<T>`, criamos funções e classes que mantêm a tipagem correta independentemente do tipo usado.

**Type Assertions:**
Permitem dizer ao TypeScript que sabemos mais sobre um tipo do que ele consegue inferir. Usamos `as` ou `<>` para fazer assertions, mas devem ser usadas com cuidado.

**Tipos Utilitários:**
- `Readonly<T>`: Torna todas as propriedades readonly
- `Partial<T>`: Torna todas as propriedades opcionais
- `Record<K, V>`: Cria um tipo com chaves K e valores V
- `Pick<T, K>`: Seleciona propriedades específicas de um tipo
- `Omit<T, K>`: Exclui propriedades específicas de um tipo

**TypeScript em React:**
- Props são tipadas usando interfaces
- State é tipado usando useState<T>
- Event handlers têm tipos específicos
- Componentes podem ser genéricos

**Exercícios:**
106. Crie uma função genérica que retorna o primeiro elemento de um array.
107. Use type assertion para tratar uma variável como outro tipo.
108. Crie um objeto Readonly.
109. Use Partial para tornar todas as propriedades de um tipo opcionais.
110. Use Record para criar um tipo com chaves string e valores number.
111. Create a React functional component that accepts props with a typed interface.
112. Use the useState hook with a typed state variable.
113. Create a component that receives a callback function as a prop and types it.
114. Use the Pick utility type to select specific properties from a type.
115. Use the Omit utility type to exclude a property from a type.
116. Crie uma função genérica que aceita dois arrays e retorna um array combinado.
117. Use type assertion para aceder a propriedades de um objeto unknown.
118. Crie um tipo que torna algumas propriedades readonly e outras opcionais.
119. Use Partial e Pick juntos para criar um tipo de atualização.
120. Use Record para criar um tipo de configuração com valores booleanos.
121. Crie um componente React genérico que renderiza uma lista de itens.
122. Use useState com um tipo complexo (objeto ou array).
123. Crie um componente que aceita children tipados.
124. Use Pick para criar um tipo que seleciona apenas propriedades de leitura.
125. Use Omit para criar um tipo que exclui propriedades sensíveis.
126. Crie uma função genérica que aceita um objeto e uma chave, retornando o valor.
127. Use type assertion para converter um tipo união para um tipo específico.
128. Crie um tipo que combina Readonly e Partial para diferentes propriedades.
129. Use Record para criar um tipo de mapeamento de IDs para objetos.
130. Use Pick e Omit juntos para criar tipos derivados.
131. Crie um componente React que aceita props condicionais.
132. Use useState com um tipo que pode ser null ou um objeto.
133. Crie um componente que aceita um render prop tipado.
134. Use Pick para criar um tipo de preview de um objeto complexo.
135. Use Omit para criar um tipo de dados públicos (excluindo dados privados).
136. Crie uma função genérica que aceita um array e uma função de transformação.
137. Use type assertion para aceder a propriedades de um objeto any.
138. Crie um tipo que torna propriedades específicas readonly.
139. Use Partial para criar um tipo de configuração com valores por defeito.
140. Use Record para criar um tipo de cache com timestamps.
141. Crie um componente React que aceita props com validação.
142. Use useState com um tipo que pode ser um array vazio ou preenchido.
143. Crie um componente que aceita um slot tipado.
144. Use Pick para criar um tipo de resumo de um objeto complexo.
145. Use Omit para criar um tipo de dados de entrada (excluindo dados calculados).
146. Crie uma função genérica que aceita um objeto e retorna uma versão modificada.
147. Use type assertion para converter um tipo primitivo para outro.
148. Crie um tipo que combina diferentes tipos utilitários.
149. Use Partial para criar um tipo de configuração opcional.
150. Use Record para criar um tipo de índice de objetos.
151. Crie um componente React que aceita props com valores por defeito.
152. Use useState com um tipo que pode ser undefined ou um valor.
153. Crie um componente que aceita um contexto tipado.
154. Use Pick para criar um tipo de dados essenciais.
155. Use Omit para criar um tipo de dados de saída (excluindo dados de entrada).

### 💡 Good to Know - Recursos para Reforço

**Recursos Recomendados:**

**📚 Documentação Oficial:**
- **TypeScript Handbook**: Guia oficial completo do TypeScript
- **TypeScript Playground**: Experimente TypeScript online

**🎓 Cursos e Tutoriais:**
- **TypeScript Tutorial for Beginners**: Curso completo no YouTube
- **TypeScript Crash Course**: Curso rápido de 2 horas

**💡 Artigos e Blog Posts:**
- **TypeScript Best Practices**: Melhores práticas para TypeScript
- **TypeScript Utility Types**: Guia completo dos tipos utilitários

**🔧 Ferramentas e Extensões:**
- **ESLint TypeScript**: Linter para TypeScript
- **Prettier TypeScript**: Formatador de código

**🤝 Comunidade e Fóruns:**
- **TypeScript Discord**: Comunidade oficial no Discord
- **Stack Overflow TypeScript**: Perguntas e respostas

**📖 Livros Recomendados:**
- **Programming TypeScript**: Livro completo por Boris Cherny
- **TypeScript in 50 Lessons**: 50 lições práticas

**🎯 Dicas para Praticar:**
- Experimente converter projetos JavaScript existentes para TypeScript
- Participe em projetos open source que usam TypeScript
- Crie pequenos projetos pessoais aplicando os conceitos aprendidos
- Junte-se a comunidades online para trocar experiências
- Mantenha-se atualizado com as novas funcionalidades do TypeScript

---

### Notas Importantes:
- **Exercícios 26-40** são exercícios de reforço que consolidam os conhecimentos adquiridos nos dias anteriores.
- Todos os exercícios estão implementados como componentes React funcionais.
- Cada exercício inclui uma descrição, solução e demonstração prática.
- Os exercícios de reforço (26-40) são exibidos no Dia 1 da aplicação para facilitar o acesso.
- Pratique, experimente variações e tente explicar cada solução em voz alta ou a um colega.
- Use a aba "Good to Know" para aceder a recursos adicionais de aprendizagem. 
