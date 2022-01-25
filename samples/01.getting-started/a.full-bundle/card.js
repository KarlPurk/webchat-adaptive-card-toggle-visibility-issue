function getCard() {
  return {
    type: 'AdaptiveCard',
    body: [
      {
        type: 'Container',
        style: 'emphasis',
        items: [
          {
            type: 'ColumnSet',
            columns: [
              {
                type: 'Column',
                items: [
                  {
                    type: 'TextBlock',
                    size: 'Large',
                    weight: 'Bolder',
                    text: '**EXPENSE APPROVAL**',
                    wrap: true,
                    style: 'heading'
                  }
                ],
                width: 'stretch'
              },
              {
                type: 'Column',
                items: [
                  {
                    type: 'Image',
                    url: 'https://adaptivecards.io/content/pending.png',
                    height: '30px',
                    altText: 'Pending'
                  }
                ],
                width: 'auto'
              }
            ]
          }
        ],
        bleed: true
      },
      {
        type: 'Container',
        items: [
          {
            type: 'ColumnSet',
            columns: [
              {
                type: 'Column',
                items: [
                  {
                    type: 'TextBlock',
                    size: 'ExtraLarge',
                    text: 'Trip to UAE',
                    wrap: true,
                    style: 'heading'
                  }
                ],
                width: 'stretch'
              },
              {
                type: 'Column',
                items: [
                  {
                    type: 'ActionSet',
                    actions: [
                      {
                        type: 'Action.OpenUrl',
                        title: 'EXPORT AS PDF',
                        url: 'https://adaptivecards.io'
                      }
                    ]
                  }
                ],
                width: 'auto'
              }
            ]
          },
          {
            type: 'TextBlock',
            spacing: 'Small',
            size: 'Small',
            weight: 'Bolder',
            text: '[ER-13052](https://adaptivecards.io)',
            wrap: true
          },
          {
            type: 'FactSet',
            spacing: 'Large',
            facts: [
              {
                title: 'Submitted By',
                value: '**Matt Hidinger**  matt@contoso.com'
              },
              {
                title: 'Duration',
                value: '2019-06-19 - 2019-06-21'
              },
              {
                title: 'Submitted On',
                value: '2019-04-14'
              },
              {
                title: 'Reimbursable Amount',
                value: '$ 400.00'
              },
              {
                title: 'Awaiting approval from',
                value: '**Thomas**  thomas@contoso.com'
              },
              {
                title: 'Submitted to',
                value: '**David**  david@contoso.com'
              }
            ]
          }
        ]
      },
      {
        type: 'Container',
        spacing: 'Large',
        style: 'emphasis',
        items: [
          {
            type: 'ColumnSet',
            columns: [
              {
                type: 'Column',
                items: [
                  {
                    type: 'TextBlock',
                    weight: 'Bolder',
                    text: 'DATE',
                    wrap: true
                  }
                ],
                width: 'auto'
              },
              {
                type: 'Column',
                spacing: 'Large',
                items: [
                  {
                    type: 'TextBlock',
                    weight: 'Bolder',
                    text: 'CATEGORY',
                    wrap: true
                  }
                ],
                width: 'stretch'
              },
              {
                type: 'Column',
                items: [
                  {
                    type: 'TextBlock',
                    weight: 'Bolder',
                    text: 'AMOUNT',
                    wrap: true
                  }
                ],
                width: 'auto'
              }
            ]
          }
        ],
        bleed: true
      },
      {
        type: 'ColumnSet',
        columns: [
          {
            type: 'Column',
            items: [
              {
                type: 'TextBlock',
                text: '06-19',
                wrap: true
              }
            ],
            width: 'auto'
          },
          {
            type: 'Column',
            spacing: 'Medium',
            items: [
              {
                type: 'TextBlock',
                text: 'Air Travel Expense',
                wrap: true
              }
            ],
            width: 'stretch'
          },
          {
            type: 'Column',
            items: [
              {
                type: 'TextBlock',
                text: '$300.00',
                wrap: true
              }
            ],
            width: 'auto'
          },
          {
            type: 'Column',
            spacing: 'Small',
            selectAction: {
              type: 'Action.ToggleVisibility',
              targetElements: ['cardContent1', 'chevronDown1', 'chevronUp1']
            },
            verticalContentAlignment: 'Center',
            items: [
              {
                type: 'Image',
                id: 'chevronDown1',
                url: 'https://adaptivecards.io/content/down.png',
                width: '20px',
                altText: 'Air Travel Expense $300 collapsed'
              },
              {
                type: 'Image',
                id: 'chevronUp1',
                url: 'https://adaptivecards.io/content/up.png',
                width: '20px',
                altText: 'Air Travel Expense $300 expanded',
                isVisible: false
              }
            ],
            width: 'auto'
          }
        ]
      },
      {
        type: 'Container',
        id: 'cardContent1',
        isVisible: false,
        items: [
          {
            type: 'Container',
            items: [
              {
                type: 'TextBlock',
                text: '* Leg 1 on Tue, Jun 19th, 2019 at 6:00 AM.',
                isSubtle: true,
                wrap: true
              },
              {
                type: 'TextBlock',
                text: '* Leg 2 on Tue, Jun 19th, 2019 at 7:15 PM.',
                isSubtle: true,
                wrap: true
              },
              {
                type: 'Container',
                items: [
                  {
                    type: 'Input.Text',
                    id: 'comment1',
                    placeholder: 'Add your comment here.'
                  }
                ]
              }
            ]
          },
          {
            type: 'Container',
            items: [
              {
                type: 'ColumnSet',
                columns: [
                  {
                    type: 'Column',
                    items: [
                      {
                        type: 'ActionSet',
                        actions: [
                          {
                            type: 'Action.Submit',
                            title: 'Send',
                            data: {
                              id: '_qkQW8dJlUeLVi7ZMEzYVw',
                              action: 'comment',
                              lineItem: 1
                            }
                          }
                        ]
                      }
                    ],
                    width: 'auto'
                  }
                ]
              }
            ]
          }
        ]
      },
      {
        type: 'ColumnSet',
        columns: [
          {
            type: 'Column',
            items: [
              {
                type: 'TextBlock',
                horizontalAlignment: 'Center',
                text: '06-19',
                wrap: true
              }
            ],
            width: 'auto'
          },
          {
            type: 'Column',
            spacing: 'Medium',
            items: [
              {
                type: 'TextBlock',
                text: 'Auto Mobile Expense',
                wrap: true
              }
            ],
            width: 'stretch'
          },
          {
            type: 'Column',
            items: [
              {
                type: 'TextBlock',
                text: '$100.00',
                wrap: true
              }
            ],
            width: 'auto'
          },
          {
            type: 'Column',
            spacing: 'Small',
            selectAction: {
              type: 'Action.ToggleVisibility',
              targetElements: ['cardContent2', 'chevronDown2', 'chevronUp2']
            },
            verticalContentAlignment: 'Center',
            items: [
              {
                type: 'Image',
                id: 'chevronDown2',
                url: 'https://adaptivecards.io/content/down.png',
                width: '20px',
                altText: 'Auto Mobile Expense $100 collapsed'
              },
              {
                type: 'Image',
                id: 'chevronUp2',
                url: 'https://adaptivecards.io/content/up.png',
                width: '20px',
                altText: 'Auto Mobile Expense $100 expanded',
                isVisible: false
              }
            ],
            width: 'auto'
          }
        ]
      },
      {
        type: 'Container',
        id: 'cardContent2',
        isVisible: false,
        items: [
          {
            type: 'Container',
            items: [
              {
                type: 'TextBlock',
                text: '* Contoso Car Rentrals, Tues 6/19 at 7:00 AM',
                isSubtle: true,
                wrap: true
              },
              {
                type: 'Container',
                items: [
                  {
                    type: 'Input.Text',
                    id: 'comment2',
                    placeholder: 'Add your comment here.'
                  }
                ]
              }
            ]
          },
          {
            type: 'Container',
            items: [
              {
                type: 'ColumnSet',
                columns: [
                  {
                    type: 'Column',
                    items: [
                      {
                        type: 'ActionSet',
                        actions: [
                          {
                            type: 'Action.Submit',
                            title: 'Send',
                            data: {
                              id: '_qkQW8dJlUeLVi7ZMEzYVw',
                              action: 'comment',
                              lineItem: 2
                            }
                          }
                        ]
                      }
                    ],
                    width: 'auto'
                  }
                ]
              }
            ]
          }
        ]
      },
      {
        type: 'ColumnSet',
        columns: [
          {
            type: 'Column',
            items: [
              {
                type: 'TextBlock',
                horizontalAlignment: 'Center',
                text: '06-21',
                wrap: true
              }
            ],
            width: 'auto'
          },
          {
            type: 'Column',
            spacing: 'Medium',
            items: [
              {
                type: 'TextBlock',
                text: 'Excess Baggage Cost',
                wrap: true
              }
            ],
            width: 'stretch'
          },
          {
            type: 'Column',
            items: [
              {
                type: 'TextBlock',
                text: '$50.38',
                wrap: true
              }
            ],
            width: 'auto'
          },
          {
            type: 'Column',
            spacing: 'Small',
            selectAction: {
              type: 'Action.ToggleVisibility',
              targetElements: ['cardContent3', 'chevronDown3', 'chevronUp3']
            },
            verticalContentAlignment: 'Center',
            items: [
              {
                type: 'Image',
                id: 'chevronDown3',
                url: 'https://adaptivecards.io/content/down.png',
                width: '20px',
                altText: 'Excess Baggage Cost $50.38 collapsed'
              },
              {
                type: 'Image',
                id: 'chevronUp3',
                url: 'https://adaptivecards.io/content/up.png',
                width: '20px',
                altText: 'Excess Baggage Cost $50.38 expanded',
                isVisible: false
              }
            ],
            width: 'auto'
          }
        ]
      },
      {
        type: 'Container',
        id: 'cardContent3',
        isVisible: false,
        items: [
          {
            type: 'Container',
            items: [
              {
                type: 'Input.Text',
                id: 'comment3',
                placeholder: 'Add your comment here.'
              }
            ]
          },
          {
            type: 'Container',
            items: [
              {
                type: 'ColumnSet',
                columns: [
                  {
                    type: 'Column',
                    items: [
                      {
                        type: 'ActionSet',
                        actions: [
                          {
                            type: 'Action.Submit',
                            title: 'Send',
                            data: {
                              id: '_qkQW8dJlUeLVi7ZMEzYVw',
                              action: 'comment',
                              lineItem: 3
                            }
                          }
                        ]
                      }
                    ],
                    width: 'auto'
                  }
                ]
              }
            ]
          }
        ]
      },
      {
        type: 'ColumnSet',
        spacing: 'Large',
        separator: true,
        columns: [
          {
            type: 'Column',
            items: [
              {
                type: 'TextBlock',
                horizontalAlignment: 'Right',
                text: 'Total Expense Amount \t',
                wrap: true
              },
              {
                type: 'TextBlock',
                horizontalAlignment: 'Right',
                text: 'Non-reimbursable Amount',
                wrap: true
              },
              {
                type: 'TextBlock',
                horizontalAlignment: 'Right',
                text: 'Advance Amount',
                wrap: true
              }
            ],
            width: 'stretch'
          },
          {
            type: 'Column',
            items: [
              {
                type: 'TextBlock',
                text: '$450.38',
                wrap: true
              },
              {
                type: 'TextBlock',
                text: '(-) 50.38 \t',
                wrap: true
              },
              {
                type: 'TextBlock',
                text: '(-) 0.00 \t',
                wrap: true
              }
            ],
            width: 'auto'
          },
          {
            type: 'Column',
            width: 'auto'
          }
        ]
      },
      {
        type: 'Container',
        style: 'emphasis',
        items: [
          {
            type: 'ColumnSet',
            columns: [
              {
                type: 'Column',
                items: [
                  {
                    type: 'TextBlock',
                    horizontalAlignment: 'Right',
                    text: 'Amount to be Reimbursed',
                    wrap: true
                  }
                ],
                width: 'stretch'
              },
              {
                type: 'Column',
                items: [
                  {
                    type: 'TextBlock',
                    weight: 'Bolder',
                    text: '$ 400.00',
                    wrap: true
                  }
                ],
                width: 'auto'
              },
              {
                type: 'Column',
                width: 'auto'
              }
            ]
          }
        ],
        bleed: true
      },
      {
        type: 'ColumnSet',
        columns: [
          {
            type: 'Column',
            selectAction: {
              type: 'Action.ToggleVisibility',
              targetElements: ['cardContent4', 'showHistory', 'hideHistory']
            },
            verticalContentAlignment: 'Center',
            items: [
              {
                type: 'TextBlock',
                id: 'showHistory',
                horizontalAlignment: 'Right',
                color: 'Accent',
                text: 'Show history',
                wrap: true
              },
              {
                type: 'TextBlock',
                id: 'hideHistory',
                horizontalAlignment: 'Right',
                color: 'Accent',
                text: 'Hide history',
                wrap: true,
                isVisible: false
              }
            ],
            width: 1
          }
        ]
      },
      {
        type: 'Container',
        id: 'cardContent4',
        isVisible: false,
        items: [
          {
            type: 'Container',
            items: [
              {
                type: 'TextBlock',
                text: '* Expense submitted by **Matt Hidinger** on Mon, Jul 15, 2019',
                isSubtle: true,
                wrap: true
              },
              {
                type: 'TextBlock',
                text: '* Expense approved by **Thomas** on Mon, Jul 15, 2019',
                isSubtle: true,
                wrap: true
              }
            ]
          }
        ]
      },
      {
        type: 'Container',
        items: [
          {
            type: 'ActionSet',
            actions: [
              {
                type: 'Action.Submit',
                title: 'Approve',
                style: 'positive',
                data: {
                  id: '_qkQW8dJlUeLVi7ZMEzYVw',
                  action: 'approve'
                }
              },
              {
                type: 'Action.ShowCard',
                title: 'Reject',
                style: 'destructive',
                card: {
                  type: 'AdaptiveCard',
                  body: [
                    {
                      type: 'Input.Text',
                      id: 'RejectCommentID',
                      placeholder: 'Please specify an appropriate reason for rejection.',
                      isMultiline: true
                    }
                  ],
                  actions: [
                    {
                      type: 'Action.Submit',
                      title: 'Send',
                      data: {
                        id: '_qkQW8dJlUeLVi7ZMEzYVw',
                        action: 'reject'
                      }
                    }
                  ]
                }
              }
            ]
          }
        ]
      }
    ],
    $schema: 'http://adaptivecards.io/schemas/adaptive-card.json',
    version: '1.2',
    fallbackText: 'This card requires Adaptive Cards v1.2 support to be rendered properly.'
  };
}
