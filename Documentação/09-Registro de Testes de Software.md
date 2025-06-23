
# Registro de Testes de Software

<span style="color:red">Pré-requisitos: <a href="3-Projeto de Interface.md"> Projeto de Interface</a></span>, <a href="8-Plano de Testes de Software.md"> Plano de Testes de Software</a>

Para cada caso de teste definido no Plano de Testes de Software, realize o registro das evidências dos testes feitos na aplicação pela equipe, que comprovem que o critério de êxito foi alcançado (ou não!!!). Para isso, utilize uma ferramenta de captura de tela que mostre cada um dos casos de teste definidos (obs.: cada caso de teste deverá possuir um vídeo do tipo _screencast_ para caracterizar uma evidência do referido caso).

| **Caso de Teste** 	| **CT001 – Login com senha inválida** 	|
|:-------------------:|:-----------------------------:|
|  **Pré-condições**| Estar na tela de Login|
|  **Procedimento (passo a passo)** | - Inserir login válido <br> - Inserir senha inválida <br> - Clicar em “Acessar” |
|  **Dados de Entrada**| Login: mozart@email.com <br> Senha: 1234|
|  **Resultado Esperado (RE)**| Mensagem de erro: “Login e/ou senha inválidos”  |
|  **Resultado Obtido (RO)**|Mensagem de erro: “Login e/ou senha inválidos”|
|  **Avaliação (pegou/não pegou erro)**|Re = Ro|
|  **Evidência (print screen)**|![01](../src/ScreenShots/01.png) |

|	Requisito Associado 	| RF-00X - A aplicação deve apresentar, na página principal, a funcionalidade de cadastro de usuários para que esses consigam criar e gerenciar seu perfil. |
|Registro de evidência |

| **Caso de Teste** 	| **CT002 – Login com login inválido** 	|
|:-------------------:|:-----------------------------:|
|  **Pré-condições**| Estar na tela de Login|
|  **Procedimento (passo a passo)** | - Inserir login inválido <br> - Inserir senha válida <br> - Clicar em “Acessar” |
|  **Dados de Entrada**| Login: mozarte@email.com <br> Senha: 123|
|  **Resultado Esperado (RE)**| Mensagem de erro: “Login e/ou senha inválidos”  |
|  **Resultado Obtido (RO)**|Mensagem de erro: “Login e/ou senha inválidos”|
|  **Avaliação (pegou/não pegou erro)**|Re = Ro|
|  **Evidência (print screen)**|![01](../src/ScreenShots/02.png) |

|	Requisito Associado 	| RF-00X - A aplicação deve apresentar, na página principal, a funcionalidade de cadastro de usuários para que esses consigam criar e gerenciar seu perfil. |
|Registro de evidência | 

| **Caso de Teste** 	| **CT003 – Login e senha vazios** 	|
|:-------------------:|:-----------------------------:|
|  **Pré-condições**| Estar na tela de Login|
|  **Procedimento (passo a passo)** | - Login vazio <br>- Senha vazia <br>- Clicar em “Acessar” |
|  **Dados de Entrada**| Login:  <br> Senha: |
|  **Resultado Esperado (RE)**| Mensagem de erro: “Login e/ou senha inválidos”  |
|  **Resultado Obtido (RO)**|Mensagem de erro: “Login e/ou senha inválidos”|
|  **Avaliação (pegou/não pegou erro)**|Re = Ro|
|  **Evidência (print screen)**|![01](../src/ScreenShots/03.png) |

|	Requisito Associado 	| RF-00X - A aplicação deve apresentar, na página principal, a funcionalidade de cadastro de usuários para que esses consigam criar e gerenciar seu perfil. |
|Registro de evidência |

| **Caso de Teste** 	| **CT004 – Login válido** 	|
|:-------------------:|:-----------------------------:|
|  **Pré-condições**| Estar na tela de Login|
|  **Procedimento (passo a passo)** | - Inserir login válido <br> - Inserir senha válida <br> - Clicar em “Acessar” |
|  **Dados de Entrada**| Login: mozart@email.com <br> Senha: 123|
|  **Resultado Esperado (RE)**| Acesso à tela posterior ao login com confirmação de acesso do usuário  |
|  **Resultado Obtido (RO)**|Acesso à tela posterior ao login com confirmação de acesso do usuário|
|  **Avaliação (pegou/não pegou erro)**|Re = Ro|
|  **Evidência (print screen)**|![01](../src/ScreenShots/04.png) |

|	Requisito Associado 	| RF-00X - A aplicação deve apresentar, na página principal, a funcionalidade de cadastro de usuários para que esses consigam criar e gerenciar seu perfil. |
|Registro de evidência | 

| **Caso de Teste** 	| **CT005 – Logout** 	|
|:-------------------:|:-----------------------------:|
|  **Pré-condições**| Estar na tela de Login|
|  **Procedimento (passo a passo)** | Clicar no link de Sair, próximo à confirmação de acesso do usuário |
|  **Dados de Entrada**| |
|  **Resultado Esperado (RE)**| Retornar à tela inicial / index  |
|  **Resultado Obtido (RO)**|Retornar à tela inicial / index|
|  **Avaliação (pegou/não pegou erro)**|Re = Ro|
|  **Evidência (print screen)**|![01](../src/ScreenShots/05.png) |

|	Requisito Associado 	| RF-00X - A aplicação deve apresentar, na página principal, a funcionalidade de cadastro de usuários para que esses consigam criar e gerenciar seu perfil. |
|Registro de evidência |

| **Caso de Teste** 	| **CT006 – Cadastro de usuário** 	|
|:-------------------:|:-----------------------------:|
|  **Pré-condições**| Estar na tela de Login|
|  **Procedimento (passo a passo)** | Na tela de Index <br> clicar em login <br> - clicar em “Fazer cadastro” |
|  **Dados de Entrada**| Nome, Nome de usuário<br> Email<br> Telefone<br> Gênero<br> Estado<br> Cidade<br> Nascimento<br> Senha<br> Confirmar Senha |
|  **Resultado Esperado (RE)**| Acesso à tela posterior ao login com confirmação de acesso do usuário  |
|  **Resultado Obtido (RO)**|Acesso à tela posterior ao login com confirmação de acesso do usuário|
|  **Avaliação (pegou/não pegou erro)**|Re = Ro|
|  **Evidência (print screen)**|![01](../src/ScreenShots/10.png) <br> ![01](../src/ScreenShots/11.png) |

|	Requisito Associado 	| RF-00X - A aplicação deve apresentar, na página principal, a funcionalidade de cadastro de usuários para que esses consigam criar e gerenciar seu perfil. |
|Registro de evidência | 

| **Caso de Teste** 	| **CT007 – Acesso ao banco de dados de usuários  com senha válida** 	|
|:-------------------:|:-----------------------------:|
|  **Pré-condições**| |
|  **Procedimento (passo a passo)** |Digitar na barra de URL: https://localhost:44328/Usuarios/Index  |
|  **Dados de Entrada**|Senha: 12345 |
|  **Resultado Esperado (RE)**| Acesso ao banco de dados  |
|  **Resultado Obtido (RO)**|Acesso ao banco de dados|
|  **Avaliação (pegou/não pegou erro)**|Re = Ro|
|  **Evidência (print screen)**|![01](../src/ScreenShots/06.png) |

|	Requisito Associado 	| RF-00X - A aplicação deve apresentar, na página principal, a funcionalidade de cadastro de usuários para que esses consigam criar e gerenciar seu perfil. |
|Registro de evidência |

| **Caso de Teste** 	| **CT008 – Acesso ao banco de dados de usuários  com senha inválida** 	|
|:-------------------:|:-----------------------------:|
|  **Pré-condições**| |
|  **Procedimento (passo a passo)** |Digitar na barra de URL: https://localhost:44328/Usuarios/Index |
|  **Dados de Entrada**|Senha: 123 |
|  **Resultado Esperado (RE)**| Mensagem de erro: “Senha inválida”  |
|  **Resultado Obtido (RO)**|Mensagem de erro: “Senha inválida”|
|  **Avaliação (pegou/não pegou erro)**|Re = Ro|
|  **Evidência (print screen)**|![01](../src/ScreenShots/07.png) |

|	Requisito Associado 	| RF-00X - A aplicação deve apresentar, na página principal, a funcionalidade de cadastro de usuários para que esses consigam criar e gerenciar seu perfil. |
|Registro de evidência | 

| **Caso de Teste** 	| **CT008 – Acesso ao banco de dados de usuários  com senha vazia** 	|
|:-------------------:|:-----------------------------:|
|  **Pré-condições**| |
|  **Procedimento (passo a passo)** |Digitar na barra de URL: https://localhost:44328/Usuarios/Index |
|  **Dados de Entrada**|  |
|  **Resultado Esperado (RE)**| Mensagem de erro: “Senha inválida”  |
|  **Resultado Obtido (RO)**|Mensagem de erro: “Senha inválida”|
|  **Avaliação (pegou/não pegou erro)**|Re = Ro|
|  **Evidência (print screen)**|![01](../src/ScreenShots/08.png) |

|	Requisito Associado 	| RF-00X - A aplicação deve apresentar, na página principal, a funcionalidade de cadastro de usuários para que esses consigam criar e gerenciar seu perfil. |
|Registro de evidência | 

## Relatório de testes de software

Apresente e discuta detalhadamente os resultados obtidos nos testes realizados, destacando tanto os pontos fortes quanto as fragilidades identificadas na solução. Explique como os aspectos positivos contribuem para o desempenho e a usabilidade do sistema, e como os pontos fracos impactam sua eficácia.

Descreva as principais falhas detectadas durante os testes, fornecendo exemplos concretos e evidências que sustentem essas observações. Explicite os impactos dessas falhas na experiência do usuário, na funcionalidade do sistema e nos objetivos do projeto.

Com base nessas análises, detalhe as estratégias que o grupo pretende adotar para corrigir as deficiências e aprimorar a solução nas próximas iterações. Inclua ações específicas, como ajustes no código, modificações na interface, otimizações de desempenho ou melhorias na acessibilidade e usabilidade.

Por fim, apresente e/ou proponha as melhorias a partir dos testes realizados, destacando os ganhos obtidos e como essas alterações contribuem para a evolução do projeto.

> **Links Úteis**:
> - [Ferramentas de Test para Java Script](https://geekflare.com/javascript-unit-testing/)
