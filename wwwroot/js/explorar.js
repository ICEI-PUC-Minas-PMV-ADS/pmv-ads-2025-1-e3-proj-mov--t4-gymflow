// Executa o código apenas quando o HTML estiver carregado
document.addEventListener('DOMContentLoaded', function() {

    // Função para ABRIR um modal
    window.abrirModal = function(modalId) {
        const modal = document.getElementById(modalId);
        if (modal) {
            modal.style.display = 'flex';
        }
    }

    // Função para FECHAR um modal
    window.fecharModal = function(modalId) {
        const modal = document.getElementById(modalId);
        if (modal) {
            modal.style.display = 'none';
        }
    }

    // --- OUVINTES DE EVENTOS (NENHUMA MUDANÇA AQUI) ---
    // Fechar ao clicar no fundo
    window.addEventListener('click', function(event) {
        if (event.target.classList.contains('modal')) {
            fecharModal(event.target.id);
        }
    });

    // Fechar ao pressionar a tecla "Escape"
    document.addEventListener('keydown', function(event) {
        if (event.key === 'Escape') {
            const modalAberto = document.querySelector('.modal[style*="flex"]');
            if (modalAberto) {
                fecharModal(modalAberto.id);
            }
        }
    });

    // --- LÓGICA CORRIGIDA DOS FORMULÁRIOS ---

    // Lógica para o formulário de LOGIN
    const formLogin = document.querySelector('#modal-entrar .form');
    if (formLogin) {
        formLogin.addEventListener('submit', function(event) {
            // Previne que a página recarregue ao enviar
            event.preventDefault(); 
            
            // Aqui você adicionaria a lógica real de login
            // Para demonstração, vamos apenas mostrar um alerta e fechar o modal
            alert('Login realizado com sucesso! (Demonstração)');
            fecharModal('modal-entrar');
        });
    }

    // Lógica para o formulário de INSCRIÇÃO
    const formInscricao = document.querySelector('#modal-inscrever .form');
    if (formInscricao) {
        formInscricao.addEventListener('submit', function(event) {
            // Previne que a página recarregue ao enviar
            event.preventDefault(); 
            
            const senha = formInscricao.querySelector('#password');
            const confirmaSenha = formInscricao.querySelector('#confirm-password');

            // Verifica se as senhas coincidem
            if (senha.value !== confirmaSenha.value) {
                alert('As senhas não coincidem. Por favor, tente novamente.');
                senha.value = '';
                confirmaSenha.value = '';
                senha.focus(); // Coloca o cursor no campo de senha
            } else {
                // Se as senhas coincidirem, mostra sucesso
                alert('Cadastro realizado com sucesso! (Demonstração)');
                fecharModal('modal-inscrever');
            }
        });
    }
});