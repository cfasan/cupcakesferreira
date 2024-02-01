$(document).ready(function(){

    var digitos =  {
        onChange: function(tel){
           var masks = ['(00) 0000-0000  0', '(00) 00000-0000'];
           var mask = (tel.length>14) ? masks[1] : masks[0];
         
           $('#telefone').mask(mask, digitos);  
       }
    };

    $('#telefone').mask('(00) 0000-0000  0', digitos);

    $('form').validate({
        rules: {
            nome: {required: true},
            email: {required: true, email: true},
            telefone: {minlength: 14},
            mensagem: {required: true}
        },
        messages: {
            nome: 'Por favor, digite seu nome',
            email: 'Por favor, digite seu e-mail',
            telefone: 'Por favor, insira um número válido',
            mensagem: 'Por favor, digite sua mensagem'
        }
    });
});