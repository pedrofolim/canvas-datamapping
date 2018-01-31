'use strict';

export const sourceData = {
      "name": "NotificarEventoOrdemCompraRequest",
      "path": "NotificarEventoOrdemCompraRequest",
      "children": [
        {
            "name": "evento",
            "path": "NotificarEventoOrdemCompraRequest.evento",
            "children": [
                {
                    "name": "sistema-originador",
                    "path": "NotificarEventoOrdemCompraRequest.evento.sistema-originador",
                    "children": [
                    "sistema-id",
                    "endereco"
                    ]
                },
              {
                  "name": "classificacao",
                  "path": "NotificarEventoOrdemCompraRequest.evento.classificacao",
                  "children": [
                    "categoria-flat"
                  ]
              },
              {
                  "name": "contexto",
                  "path": "NotificarEventoOrdemCompraRequest.evento.contexto",
                  "children": [
                    {
                        "name": "contexto-negociacao",
                        "path": "NotificarEventoOrdemCompraRequest.evento.contexto.contexto-negociacao",
                        "children": [
                          {
                              "name": "ordem-compra",
                              "path": "NotificarEventoOrdemCompraRequest.evento.contexto.contexto-negociacao.ordem-compra",
                              "children": [
                                "ordem-compra-id",
                                {
                                    "name": "situacao",
                                    "path": "NotificarEventoOrdemCompraRequest.evento.contexto.contexto-negociacao.ordem-compra.situacao",
                                    "children": [
                                      "situacao-id"
                                    ]
                                },
                                {
                                    "name": "operacao",
                                    "path": "NotificarEventoOrdemCompraRequest.evento.contexto.contexto-negociacao.ordem-compra.operacao",
                                    "children": [
                                      {
                                        "categoria": {
                                          "name": "categoria",
                                          "path": "NotificarEventoOrdemCompraRequest.evento.contexto.contexto-negociacao.ordem-compra.operacao.categoria",
                                        }
                                      }
                                    ]
                                },
                                {
                                    "name": "programa-venda",
                                    "path": "NotificarEventoOrdemCompraRequest.evento.contexto.contexto-negociacao.ordem-compra.programa-venda",
                                    "children": [
                                      "programa-venda-id"
                                    ]
                                }
                              ]
                          }
                        ]
                    }
                  ]
                }
            ]
        },
        {
            "name": "meta-informacao",
            "path": "NotificarEventoOrdemCompraRequest.meta-informacao"
        }
      ]
    }

export const testeData = {
    name: 'Cliente',
    path: 'cliente',
    description: 'blabla',
    type: 'object',
    toggled: true,
    children: [
        {
            name: 'nome',
            path: 'cliente.nome',
            description: 'blabla',
            type: 'string',
        },
        {
            name: 'documento',
            path: 'cliente.documento',
            description: 'blabla',
            type: 'object',
            children: [
                {   name: 'cpf',
                    path: 'cliente.documento.cpf',
                    description: 'blabla',
                    type: 'string' 
                },
                {   name: 'rg',
                    path: 'cliente.documento.rg',
                    description: 'blabla',
                    type: 'string',
                 }
            ]
        },
        {
            name: 'enderecos',
            path: 'cliente.enderecos',
            description: 'blabla',
            type: 'array',
            children: [
                {
                    name: 'endereco',
                    path: 'cliente.enderecos.endereco',
                    description: 'blabla',
                    type: 'object',
                    children: [
                        { 
                            name: 'rua',
                            path: 'cliente.enderecos.endereco.rua',
                            description: 'blabla',
                            type: 'string'
                        },
                        { 
                            name: 'cidade',
                            path: 'cliente.enderecos.endereco.cidade',
                            description: 'blabla',
                            type: 'string'
                        }
                    ]
                }
            ]
        }
    ]
};

export const targetData = {
    name: 'Pessoa',
    path: 'pessoa',
    description: 'blabla',
    type: 'object',
    toggled: true,
    children: [
        {
            name: 'nome',
            path: 'pessoa.nome',
            description: 'blabla',
            type: 'string'
        },
        {
            name: 'rg',
            path: 'pessoa.rg',
            description: 'blabla',
            type: 'string'
        },
        {
            name: 'endereco',
            path: 'pessoa.endereco',
            description: 'blabla',
            type: 'object',
            children: [
                {
                    name: 'rua',
                    path: 'pessoa.endereco.rua',
                    description: 'blabla',
                    type: 'string'
                },
                {
                    name: 'cidade',
                    path: 'pessoa.endereco.cidade',
                    description: 'blabla',
                    type: 'string'
                }
            ]
        }
    ]
};