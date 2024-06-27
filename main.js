$(document).ready(function() {
    $('#task-form').submit(function(event) {
        event.preventDefault(); // Impede o comportamento padrão do formulário

        // Pega o valor do input
        let task = $('#task-input').val();

        if (task) {
            // Adiciona um novo item à lista
            $('#task-list').append('<li>' + task + '</li>');

            // Limpa o input
            $('#task-input').val('');
        }
    });

    // Adiciona o evento de click nos itens da lista
    $('#task-list').on('click', 'li', function() {
        $(this).toggleClass('completed');
    });
});
