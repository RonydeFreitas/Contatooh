var contatos = [
    {_id: 1, nome: 'Luiz Davi', email: 'ld@mail.com'},
    {_id: 2, nome: 'Luiz Antonio', email: 'la@mail.com'},
    {_id: 3, nome: 'Rony de Freitas', email: 'rf@mail.com'},
];

var ID_CONTACT_INC = 3;

module.exports = () => {
    var controller = {};
    controller.listaContatos = (req, res) => {
        res.json(contatos)
    }
    controller.obtemContato = (req, res) => {
        var idContato = req.params.id;
        var contato = contatos.filter((contato) => {
            return contato._id == idContato;
        })[0];
        contato ? res.json(contato) : 
        res.status(404).send('Contato não encontrado');
    }

    controller.removeContato = (req, res) => {
        var idContato = req.params.id;
        contatos = contatos.filter(contato => {
            return contato._id != idContato;
        })
        res.status(204).end();
        console.log("API: REMOVE CONTATO", idContato);
    }

    controller.salvaContato = (req, res) => {
        var contato = req.body;
        contato = contato._id ? atualiza(contato) : adiciona(contato);
        res.json(contato);
    }

    function adiciona(contatoNovo) {
        contatoNovo._id = ++ID_CONTACT_INC;
        contatos.push(contatoNovo);
        return contatoNovo;
    }

    function atualiza(contatoAlterar) {
        contatos = contatos.map(contato => {
            if(contato._id === contatoAlterar._id) {
                contato = contatoAlterar;
            }
            return contato;
        })
        return contatoAlterar;
    }
    return controller;
}