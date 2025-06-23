## Plano de Testes de Software




Nesta etapa, apresentaremos os cenários de teste elaborados com base em situações reais de uso, refletindo a experiência cotidiana do usuário final. O objetivo é assegurar que todas as funcionalidades implementadas estejam em conformidade com os requisitos definidos previamente.

Cada caso de teste será enumerado sequencialmente, facilitando a rastreabilidade e a análise. Além disso, será explicitada a relação direta entre cada teste e os requisitos associados, conforme especificado na Seção 2 – Especificação do Projeto.

Essa abordagem garante não apenas a validação técnica das funcionalidades, mas também a aderência às expectativas funcionais do sistema, promovendo maior confiabilidade no produto final.






 
| **Caso de Teste** 	| **CT01 – Cadastrar perfil** 	|
|:---:	|:---:	|
|	**Requisito Associado** 	| RF-001 - O sistema permite que os usuários se cadastrem na plataforma. |
| **Objetivo do Teste** 	| Verificar se o usuário consegue se cadastrar na aplicação. |
| **Passos** 	| - Acessar o navegador <br> - Informar o endereço do site https://www.aquiiremosadicionaraurlquandoforfeita.com.br<br> - Clicar em "Registrar-se" <br> - Preencher os campos obrigatórios (e-mail, nome, sobrenome, celular, CPF, senha, confirmação de senha) <br> - Aceitar os termos de uso <br> - Clicar em "Registrar" |
| **Critério de Êxito** | - O cadastro foi realizado com sucesso. |
| **Responsável** | `Jefferson Luiz M.` |




| **Caso de Teste** 	| **CT02 – Efetuar login**	|
|:---:	|:---:	|
| **Requisito Associado** | RF-002	- O sistema deve permitir que os usuários façam login na plataforma com e-mail e senha. |
| **Objetivo do Teste** 	| Verificar se o usuário consegue realizar login. |
| **Passos** 	| - Acessar o navegador <br> - Informar o endereço do site tps://www.aquiiremosadicionaraurlquandoforfeita.com.br<br> - Clicar no botão "Entrar" <br> - Preencher o campo de e-mail <br> - Preencher o campo da senha <br> - Clicar em "Login" |
| **Critério de Êxito** | - O login foi realizado com sucesso. |
| **Responsável** | `Jefferson Luiz M.` |



| **Caso de Teste** 	| **CT03 – Criar treinos**|
|:---:	|:---:	|
| **Requisito Associado** | RF-003	- O sistema deve permitir que os usuários criem treinos.|
| **Objetivo do Teste** 	| Acessar o navegador <br> - Informar o endereço do site tps://www.aquiiremosadicionaraurlquandoforfeita.com.br<br> - Clicar no botão "Entrar" <br> - Preencher o campo de e-mail <br> - Preencher o campo da senha <br> - Clicar em "Login" . O usuário deve clicar em "Explorar" - O usuário deve clicar em "Criar treinos" - O usuário deve preencher os campos obrigatórios (Título do treino, exercício, sobre). |
| **Critério de Êxito** | - O treino foi criado com sucesso. |
| **Responsável** | `Jefferson Luiz M.` |



| **Caso de Teste** 	| **CT04 – Compartilhar treinos**|
|:---:	|:---:	|
| **Requisito Associado** | RF-003	- O sistema deve permitir que os usuários compartilhem treinos.|
| **Objetivo do Teste** 	| Acessar o navegador <br> - Informar o endereço do site tps://www.aquiiremosadicionaraurlquandoforfeita.com.br<br> - Clicar no botão "Entrar" <br> - Preencher o campo de e-mail <br> - Preencher o campo da senha <br> - Clicar em "Login" . O usuário deve clicar em "Meus treinos" -  O usuário deve clicar em "Compartilhar" - O usuário deve escolher o usuário para ser compartilhado e selecionar - O usuário deve clicar em "Enviar".|
|**Critério de Êxito** | - O compartilhamento foi feito com sucesso.|
| **Responsável** | `Jefferson Luiz M.` |



| **Caso de Teste** 	| **CT05 – Avaliar treinos**|
|:---:	|:---:	|
| **Requisito Associado**| RF-004	- O sistema deve permitir que os usuários avaliem outros treinos.|
| **Objetivo do Teste**	| Acessar o navegador <br> - Informar o endereço do site tps://www.aquiiremosadicionaraurlquandoforfeita.com.br<br> - Clicar no botão "Entrar" <br> - Preencher o campo de e-mail <br> - Preencher o campo da senha <br> - Clicar em "Login" . O usuário deve clicar em "Explorar"  - O usuário deve clicar em um treino - O usuário deve clicar na quantidade de estrelas para avaliar o treino.|
| **Critério de Êxito** | - A avaliação foi feita com sucesso.|
| **Responsável** | `Jefferson Luiz M.` |



| **Caso de Teste** | **CT06 – Comentar  treinos**|
|:---:	|:---:	|
| **Requisito Associado**| RF-005	- O sistema deve permitir que os usuários comentem outros treinos.|
| **Objetivo do Teste** 	| Acessar o navegador <br> - Informar o endereço do site tps://www.aquiiremosadicionaraurlquandoforfeita.com.br<br> - Clicar no botão "Entrar" <br> - Preencher o campo de e-mail <br> - Preencher o campo da senha <br> - Clicar em "Login" . O usuário deve clicar em "Explorar"  - O usuário deve clicar em um treino - O usuário deve clicar na caixa de comentário - O usuário deve escrever o comentário na caixa - O usuário deve clicar em enviar.|
| **Critério de Êxito** | - O comentário foi feito com sucesso.|
| **Responsável** | `Jefferson Luiz M.` |






| **Caso de Teste** | **CT07 - Login com senha inválida e email correto** |
|:--: |:--: |
| ** Requisitos associados ** | RF - |
| **Objetivo do Teste** |  Impedir acesso não autorizado |
| ** Critério de Êxito** |  Mensagem informando "Usuário e/ou senhas inválidas"  |
| ** Responsável ** | `Gabriel Rodrigues `  |

| **Caso de Teste** | **CT08 - Login com email inválido e senha correta** |
|:--: |:--: |
| ** Requisitos associados ** | RF - |
| **Objetivo do Teste** | Impedir acesso não autorizado  |
| ** Critério de Êxito** | Mensagem informando "Usuário e/ou senhas inválidas"  |
| ** Responsável ** | `Gabriel Rodrigues `  |

| **Caso de Teste** | **CT09 - Login e senha vazios** |
|:--: |:--: |
| ** Requisitos associados ** | RF -  |
| **Objetivo do Teste** | Impedir acesso não autorizado  |
| ** Critério de Êxito** |   Mensagem informando "Usuário e/ou senhas inválidas"  |
| ** Responsável ** | `Gabriel Rodrigues `  ** |

| **Caso de Teste** | **CT10 - Login e senha válidos**|
|:--: |:--: |
| ** Requisitos associados ** |** RF-010 - O sistema deve permitir login tradicional (e-mail e senha) e autenticação por terceiros (Google, Facebook).**|
| **Objetivo do Teste** |  Permitir acesso autorizado |
| ** Critério de Êxito** | Acesso do usuário ao sistema informando seu nome no topo da tela  |
| ** Responsável ** | `Gabriel Rodrigues `  |

| **Caso de Teste** | **CT11 - Logout**|
|:--: |:--: |
| ** Requisitos associados ** | RF - |
| **Objetivo do Teste** |  Permitir que usuário saia de sua conta |
| ** Critério de Êxito** | Usuário deslogado e tela de login aparece  |
| ** Responsável ** | `Gabriel Rodrigues `  |

| **Caso de Teste** | **CT12 - Cadastro de usuários**|
|:--: |:--: |
| ** Requisitos associados ** | RF - O sistema permite que os usuários se cadastrem na plataforma.|
| **Objetivo do Teste** |  Permitir que novos usuários realizem cadastro |
| ** Critério de Êxito** | Usuário é logado automaticamente no sistema  |
| ** Responsável ** | `Gabriel Rodrigues `  |

| **Caso de Teste** | **CT13 - Acesso ao banco de dados de usuários com senha válida**|
|:--: |:--: |
| ** Requisitos associados ** | RF - |
| **Objetivo do Teste** |  Permitir acesso autorizado dos administradores ao banco de dados |
| ** Critério de Êxito** | Acesso ao banco de dados do sistema  |
| ** Responsável ** | `Gabriel Rodrigues `  |

| **Caso de Teste** | **CT14 - Acesso ao banco de dados com senha inválida**|
|:--: |:--: |
| ** Requisitos associados ** | RF - |
| **Objetivo do Teste** |  Impedir acesso não autorizado ao banco de dados |
| ** Critério de Êxito** | Solicitação de senha e mensagem de erro  |
| ** Responsável ** | `Gabriel Rodrigues `  |



















