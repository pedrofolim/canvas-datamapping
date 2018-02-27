'use strict';

export const sourceData = {
    "name": "NotificarEventoOrdemCompraRequest",
    "description": null,
    "type": "NotificarEventoOrdemCompraRequest",
    "path": "NotificarEventoOrdemCompraRequest",
    "children": [
      {
        "name": "evento",
        "description": null,
        "type": "NotificarEventoOrdemComprav1_EventoNegocioType",
        "path": "NotificarEventoOrdemCompraRequest.evento",
        "children": [
          {
            "name": "evento-id",
            "description": null,
            "type": "string",
            "path": "NotificarEventoOrdemCompraRequest.evento.evento-id",
            "children": []
          },
          {
            "name": "evento-origem-id",
            "description": null,
            "type": "string",
            "path": "NotificarEventoOrdemCompraRequest.evento.evento-origem-id",
            "children": []
          },
          {
            "name": "descricao",
            "description": null,
            "type": "string",
            "path": "NotificarEventoOrdemCompraRequest.evento.descricao",
            "children": []
          },
          {
            "name": "data-criacao",
            "description": null,
            "type": "dateTime",
            "path": "NotificarEventoOrdemCompraRequest.evento.data-criacao",
            "children": []
          },
          {
            "name": "data-expiracao",
            "description": null,
            "type": "dateTime",
            "path": "NotificarEventoOrdemCompraRequest.evento.data-expiracao",
            "children": []
          },
          {
            "name": "sistema-originador",
            "description": null,
            "type": "NotificarEventoOrdemComprav1_SistemaType",
            "path": "NotificarEventoOrdemCompraRequest.evento.sistema-originador",
            "children": [
              {
                "name": "sistema-id",
                "description": null,
                "type": "string",
                "path": "NotificarEventoOrdemCompraRequest.evento.sistema-originador.sistema-id",
                "children": []
              },
              {
                "name": "endereco",
                "description": null,
                "type": "string",
                "path": "NotificarEventoOrdemCompraRequest.evento.sistema-originador.endereco",
                "children": []
              }
            ]
          },
          {
            "name": "classificacao",
            "description": null,
            "type": "NotificarEventoOrdemComprav1_CategoriaEventoNegocioType",
            "path": "NotificarEventoOrdemCompraRequest.evento.classificacao",
            "children": [
              {
                "name": "categoria-flat",
                "description": null,
                "type": "string",
                "path": "NotificarEventoOrdemCompraRequest.evento.classificacao.categoria-flat",
                "children": []
              }
            ]
          },
          {
            "name": "contexto",
            "description": null,
            "type": "NotificarEventoOrdemComprav1_ContextoEventoNegocioType",
            "path": "NotificarEventoOrdemCompraRequest.evento.contexto",
            "children": [
              {
                "name": "contexto-negociacao",
                "description": null,
                "type": "NotificarEventoOrdemComprav1_ContextoEventoNegociacaoType",
                "path": "NotificarEventoOrdemCompraRequest.evento.contexto.contexto-negociacao",
                "children": [
                  {
                    "name": "ordem-compra",
                    "description": null,
                    "type": "NotificarEventoOrdemComprav1_OrdemCompraType",
                    "path": "NotificarEventoOrdemCompraRequest.evento.contexto.contexto-negociacao.ordem-compra",
                    "children": [
                      {
                        "name": "ordem-compra-id",
                        "description": null,
                        "type": "string",
                        "path": "NotificarEventoOrdemCompraRequest.evento.contexto.contexto-negociacao.ordem-compra.ordem-compra-id",
                        "children": []
                      },
                      {
                        "name": "situacao",
                        "description": null,
                        "type": "NotificarEventoOrdemComprav1_SituacaoType",
                        "path": "NotificarEventoOrdemCompraRequest.evento.contexto.contexto-negociacao.ordem-compra.situacao",
                        "children": [
                          {
                            "name": "situacao-id",
                            "description": null,
                            "type": "string",
                            "path": "NotificarEventoOrdemCompraRequest.evento.contexto.contexto-negociacao.ordem-compra.situacao.situacao-id",
                            "children": []
                          }
                        ]
                      },
                      {
                        "name": "operacao",
                        "description": null,
                        "type": "NotificarEventoOrdemComprav1_OperacaoType",
                        "path": "NotificarEventoOrdemCompraRequest.evento.contexto.contexto-negociacao.ordem-compra.operacao",
                        "children": [
                          {
                            "name": "categoria",
                            "description": null,
                            "type": "NotificarEventoOrdemComprav1_CategoriaType",
                            "path": "NotificarEventoOrdemCompraRequest.evento.contexto.contexto-negociacao.ordem-compra.operacao.categoria",
                            "children": [
                              {
                                "name": "categoria-id",
                                "description": null,
                                "type": "string",
                                "path": "NotificarEventoOrdemCompraRequest.evento.contexto.contexto-negociacao.ordem-compra.operacao.categoria.categoria-id",
                                "children": []
                              },
                              {
                                "name": "subcategorias",
                                "description": null,
                                "type": "NotificarEventoOrdemComprav1_ArrayOfCategoriaType",
                                "path": "NotificarEventoOrdemCompraRequest.evento.contexto.contexto-negociacao.ordem-compra.operacao.categoria.subcategorias",
                                "children": [
                                  {
                                    "name": "categoria",
                                    "description": null,
                                    "type": "NotificarEventoOrdemComprav1_CategoriaType",
                                    "path": "NotificarEventoOrdemCompraRequest.evento.contexto.contexto-negociacao.ordem-compra.operacao.categoria.subcategorias.categoria",
                                    "children": [
                                      {
                                        "name": "categoria-id",
                                        "description": null,
                                        "type": "string",
                                        "path": "NotificarEventoOrdemCompraRequest.evento.contexto.contexto-negociacao.ordem-compra.operacao.categoria.subcategorias.categoria.categoria-id",
                                        "children": []
                                      },
                                      {
                                        "name": "subcategorias",
                                        "description": null,
                                        "type": "NotificarEventoOrdemComprav1_ArrayOfCategoriaType",
                                        "path": "NotificarEventoOrdemCompraRequest.evento.contexto.contexto-negociacao.ordem-compra.operacao.categoria.subcategorias.categoria.subcategorias",
                                        "children": [
                                          {
                                            "name": "categoria",
                                            "description": null,
                                            "type": "NotificarEventoOrdemComprav1_CategoriaType",
                                            "path": "NotificarEventoOrdemCompraRequest.evento.contexto.contexto-negociacao.ordem-compra.operacao.categoria.subcategorias.categoria.subcategorias.categoria",
                                            "children": []
                                          }
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
                        "name": "programa-venda",
                        "description": null,
                        "type": "NotificarEventoOrdemComprav1_ProgramaVendaType",
                        "path": "NotificarEventoOrdemCompraRequest.evento.contexto.contexto-negociacao.ordem-compra.programa-venda",
                        "children": [
                          {
                            "name": "programa-venda-id",
                            "description": null,
                            "type": "string",
                            "path": "NotificarEventoOrdemCompraRequest.evento.contexto.contexto-negociacao.ordem-compra.programa-venda.programa-venda-id",
                            "children": []
                          }
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
        "description": null,
        "type": "NotificarEventoOrdemComprav1_MetaInfType",
        "path": "NotificarEventoOrdemCompraRequest.meta-informacao",
        "children": [
          {
            "name": "codigo-aplicacao-origem",
            "description": null,
            "type": "string",
            "path": "NotificarEventoOrdemCompraRequest.meta-informacao.codigo-aplicacao-origem",
            "children": []
          },
          {
            "name": "codigo-operacao-origem",
            "description": null,
            "type": "string",
            "path": "NotificarEventoOrdemCompraRequest.meta-informacao.codigo-operacao-origem",
            "children": []
          },
          {
            "name": "correlacao-id-origem",
            "description": null,
            "type": "string",
            "path": "NotificarEventoOrdemCompraRequest.meta-informacao.correlacao-id-origem",
            "children": []
          },
          {
            "name": "endereco-aplicacao-origem",
            "description": null,
            "type": "string",
            "path": "NotificarEventoOrdemCompraRequest.meta-informacao.endereco-aplicacao-origem",
            "children": []
          },
          {
            "name": "usuario-id-origem",
            "description": null,
            "type": "string",
            "path": "NotificarEventoOrdemCompraRequest.meta-informacao.usuario-id-origem",
            "children": []
          },
          {
            "name": "data-hora-origem",
            "description": null,
            "type": "dateTime",
            "path": "NotificarEventoOrdemCompraRequest.meta-informacao.data-hora-origem",
            "children": []
          },
          {
            "name": "canal-id-origem",
            "description": null,
            "type": "canal-id-origem",
            "path": "NotificarEventoOrdemCompraRequest.meta-informacao.canal-id-origem",
            "children": []
          }
        ]
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