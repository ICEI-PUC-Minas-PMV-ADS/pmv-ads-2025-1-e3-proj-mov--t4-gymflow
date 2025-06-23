# Especificações do Projeto

<!--
<span style="color:red">Pré-requisitos: <a href="1-Documentação de Contexto.md"> Documentação de Contexto</a></span>

Definição do problema e ideia de solução a partir da perspectiva do usuário. É composta pela definição do  diagrama de personas, histórias de usuários, requisitos funcionais e não funcionais além das restrições do projeto.

Apresente uma visão geral do que será abordado nesta parte do documento, enumerando as técnicas e/ou ferramentas utilizadas para realizar a especificações do projeto
-->

## Personas

| **Nome**           | **Idade** | **Profissão**              | **Frustrações**                                                                 | **Expectativas**                                                                |
|--------------------|-----------|----------------------------|---------------------------------------------------------------------------------|---------------------------------------------------------------------------------|
| **João Souza**     | 35        | Analista de TI             | Falta de tempo para frequentar a academia; dificuldade em encontrar treinos personalizados e eficientes. | Encontrar treinos personalizados e adaptáveis ao seu nível de aptidão física. |
| **Mariana Ferreira**| 28        | Designer de interiores     | Falta de motivação para treinar sozinha; dificuldade em organizar sua rotina de treinos. | Plataforma que ofereça rotinas rápidas e eficazes que não necessitem de equipamentos. |
| **Lucas Almeida**  | 42        | Dono de empresa de manutenção | Falta de tempo para ir à academia; preocupações com a eficácia de treinos rápidos em casa. | Treinos rápidos, personalizados para suas limitações físicas e acompanhamento de progresso. |
| **Pedro Santos**   | 50        | Jardineiro                 | Dificuldade em manter a motivação para treinar sem acompanhamento; falta de tempo devido ao trabalho físico diário. | Treinos simples, adaptáveis, com foco em saúde e bem-estar. |
| **Carla Menezes**  | 33        | Massoterapeuta             | Sentimento de desorganização na rotina de treinos; falta de tempo devido à agenda apertada. | Treinos curtos e eficazes, com foco em fortalecimento e resistência. |
<!--
Lembre-se que você deve ser enumerar e descrever precisamente e personalizada todos os clientes ideais que sua solução almeja.
-->

## Histórias de Usuários

| **Persona**           | **Como**                                    | **Quero**                                                 | **Para Que**                                               |
|-----------------------|---------------------------------------------|-----------------------------------------------------------|------------------------------------------------------------|
| **João Souza**| 35| Analista de TI|  Frustrado pela falta de tempo e dificuldade em encontrar treinos eficientes, ele quer um plano personalizado que se adapte à sua agenda.| 
| **João Souza**| 35        | Analista de TI|  João quer um plano de exercícios.  Sua prioridade é melhorar a disposição e a saúde, com orientações claras para otimizar o pouco tempo disponível.  |
| **Mariana Ferreira**| 28| Designer de interiores| Mariana procura uma plataforma que ofereça treinos sem necessidade de equipamentos, para encaixar facilmente no seu dia a dia. |
| **Mariana Ferreira**| 28| Designer de interiores| Mariana quer acompanhar treinos de outras pessoas e seus progressos e receber feedbacks de outros usuários para motivá-la a continuar treinando|
| **Lucas Almeida**| 42| Dono de empresa de manutenção | Lucas busca um plano de exercícios personalizado, com treinos curtos, eficazes e um acompanhamento claro de progresso para melhorar a saúde sem comprometer sua agenda. |
| **Lucas Almeida**| 42| Dono de empresa de manutenção | Lucas procura um plano de treino rápido para poder ser realizado em qualquer lugar, sem depender de academia. |
| **Pedro Santos**| 50| Jardineiro | Apesar de ativo, sente dores constantes e sabe que precisa de exercícios específicos para melhorar sua saúde. No entanto, a falta de motivação para treinar sem acompanhamento e o cansaço após o trabalho são grandes desafios. |
| **Pedro Santos**| 50| Jardineiro | Pedro quer um plano de exercícios prático, com foco em alongamentos e fortalecimento, para melhorar a saúde sem comprometer suas longas jornadas de trabalho. |
| **Carla Menezes**| 33| Massoterapeuta| Seu objetivo é encontrar treinos curtos, eficazes e bem estruturados, que se encaixem facilmente em seus horários sem comprometer sua produtividade. |
| **Carla Menezes**| 33| Massoterapeuta| Carla busca treinos personalizados para fazer na academia de seu prédio |


<!--
Apresente aqui as histórias de usuário que são relevantes para o projeto de sua solução. As Histórias de Usuário consistem em uma ferramenta poderosa para a compreensão e elicitação dos requisitos funcionais e não funcionais da sua aplicação. Se possível, agrupe as histórias de usuário por contexto, para facilitar consultas recorrentes à essa parte do documento.
-->
## Requisitos
<!--
As tabelas que se seguem apresentam os requisitos funcionais e não funcionais que detalham o escopo do projeto.
-->
### Requisitos Funcionais

|ID    | Descrição do Requisito  | Prioridade |
|------|-----------------------------------------|----|
|**RF-001**| <div align=center>O sistema permite que os usuários se cadastrem na plataforma.</div> | ALTA | 
|**RF-002**| <div align=center>O sistema deve permitir que os usuários façam login na plataforma com e-mail e senha.</div>  | ALTA |
|**RF-003**| <div align=center>O sistema deve permitir que os usuários consigam criar e compartilhar seus treinos, descrevendo exercícios, séries, repetições e objetivos.</div>  | ALTA |
|**RF-004**| <div align=center>O sistema deve permitir que os usuários avaliem os treinos de outras pessoas por meio de um sistema de notas ou estrelas.</div>  | MÉDIA |
|**RF-005**| <div align=center>O sistema deve permitir que os usuários comentem nos treinos compartilhados para dar opiniões e sugestões.</div> | MÉDIA |
|**RF-006**| <div align=center>O sistema deve permitir buscar treinos por categorias, como objetivo (hipertrofia, emagrecimento),</br>tempo de treino e equipamentos disponíveis.</div> | ALTA |
|**RF-007**| <div align=center>O sistema deve permitir que cada usuário tenha um perfil onde possa visualizar seus treinospublicados, avaliações recebidas e progresso.</div> | ALTA |
|**RF-008**| <div align=center>O sistema deve permitir que o usuário acesse seu histórico de treinos.</div> | ALTA |
|**RF-009**| <div align=center>O sistema deve sugerir treinos baseados no histórico e preferências do usuário.</div> | ALTA |
|**RF-010**| <div align=center>O sistema deve permitir que os usuários sigam perfis de outros praticantes para acompanhar</br>seus treinos e interações.</div> | MÉDIA |
|**RF-011**| <div align=center>O sistema deve permitir login tradicional (e-mail e senha) e autenticação</br>por terceiros (Google, Facebook).</div> | MÉDIA |
|**RF-012**| <div align=center>O sistema deve permitir que os usuários sejam notificados sobre novos comentários, avaliações recebidas</br>ou quando forem mencionados em publicações.</div> | MÉDIA |

### Requisitos Não Funcionais  

| ID       | Descrição do Requisito  | Prioridade |
|----------|-------------------------|------------|
| **RNF-001** | O sistema deve ser totalmente responsivo e otimizado para dispositivos móveis e desktops, garantindo um tempo de carregamento inferior a **3 segundos** em redes estáveis. | ALTA |
| **RNF-002** | O tempo de autenticação do usuário (login) deve ser inferior a **3 segundos**, proporcionando uma experiência fluida. | ALTA |
| **RNF-003** | O carregamento de páginas, conteúdos e treinos deve ser realizado em **menos de 3 segundos**, sem travamentos perceptíveis. | ALTA |
| **RNF-004** | Os dados dos usuários devem ser armazenados de forma criptografada (**ex: AES-256**) e o sistema deve seguir as diretrizes da **LGPD** para controle e consentimento de dados. | ALTA |
| **RNF-005** | O sistema deve fornecer **feedback visual imediato**, garantindo que todas as interações tenham resposta em até **2 segundos** após a ação do usuário. | ALTA |
| **RNF-006** | O sistema precisa garantir **99,9% de disponibilidade**, funcionando **24/7**, com o mínimo possível de interrupções e downtime. | ALTA |
| **RNF-007** | Os dados pessoais dos usuários devem ser armazenados de forma segura e criptografada, em conformidade com a **LGPD**, para evitar acessos não autorizados. | ALTA |
| **RNF-008** | A plataforma deve ser compatível com os principais navegadores (**Chrome, Firefox, Edge, Safari**) e suas versões mais recentes. | MÉDIA |
| **RNF-009** | O sistema deve permitir que os usuários encontrem treinos rapidamente utilizando filtros e opções de busca, com tempo de resposta inferior a **3 segundos**. | ALTA |
| **RNF-010** | O código-fonte deve seguir boas práticas de desenvolvimento, sendo **modular, bem documentado e de fácil manutenção**, permitindo futuras atualizações sem impactar o funcionamento do sistema. | ALTA |
| **RNF-011** | A arquitetura do sistema precisa ser **modular**, possibilitando a adição de novos recursos sem comprometer a estabilidade. O tempo de integração de novos componentes não deve ultrapassar **5 segundos**. | ALTA |
| **RNF-012** | O sistema deve ser capaz de processar até **500 requisições simultâneas**, garantindo um tempo de resposta inferior a **3 segundos** para cada requisição. | ALTA |



<!--
Com base nas Histórias de Usuário, enumere os requisitos da sua solução. Classifique esses requisitos em dois grupos:

- [Requisitos Funcionais
 (RF)](https://pt.wikipedia.org/wiki/Requisito_funcional):
 correspondem a uma funcionalidade que deve estar presente na
  plataforma (ex: cadastro de usuário).
- [Requisitos Não Funcionais
  (RNF)](https://pt.wikipedia.org/wiki/Requisito_n%C3%A3o_funcional):
  correspondem a uma característica técnica, seja de usabilidade,
  desempenho, confiabilidade, segurança ou outro (ex: suporte a
  dispositivos iOS e Android).
Lembre-se que cada requisito deve corresponder à uma e somente uma
característica alvo da sua solução. Além disso, certifique-se de que
todos os aspectos capturados nas Histórias de Usuário foram cobertos.
-->

## Restrições

O projeto está restrito pelos itens apresentados na tabela a seguir.

|ID| Restrição                                             |
|--|-------------------------------------------------------|
|**R-01**| Os usuários precisam ter mais de 18 anos para utilizar a plataforma. |
|**R-02**| É necessário se cadastrar para utilizar a plataforma. |
|**R-03**| O usuário precisa fornecer o seu CPF para poder concluir o cadastro. |
|**R-04**| Não é possível utilizar palavras de baixo calão na plataforma. |
|**R-05**| É necessário verificar o e-mail para concluir o cadastro. |
|**R-06**| Não é possível registrar um treino com apenas um exercício.  |


Enumere as restrições à sua solução. Lembre-se de que as restrições geralmente limitam a solução candidata.

<!--
> **Links Úteis**:
> - [O que são Requisitos Funcionais e Requisitos Não Funcionais?](https://codificar.com.br/requisitos-funcionais-nao-funcionais/)
> - [O que são requisitos funcionais e requisitos não funcionais?](https://analisederequisitos.com.br/requisitos-funcionais-e-requisitos-nao-funcionais-o-que-sao/)
-->
## Diagrama de Casos de Uso

<br>
<br>

![Diagrama sem nome drawio](https://github.com/user-attachments/assets/a00890d8-be83-4d06-b4e1-f4bdc731a438)


<!--
> **Links Úteis**:
> - [Criando Casos de Uso](https://www.ibm.com/docs/pt-br/elm/6.0?topic=requirements-creating-use-cases)
> - [Como Criar Diagrama de Caso de Uso: Tutorial Passo a Passo](https://gitmind.com/pt/fazer-diagrama-de-caso-uso.html/)
> - [Lucidchart](https://www.lucidchart.com/)
> - [Astah](https://astah.net/)
> - [Diagrams](https://app.diagrams.net/)
-->
