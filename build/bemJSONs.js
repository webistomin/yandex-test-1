const indexPage = {
  block: 'layout',
  content: {
    elem: 'container',
    elemMods: {
      size: 'm',
      align: 'center'
    },
    content: [
      {
        block: 'page-header',
        tag: 'header',
        content: {
          block: 'header',
          content: [
            {
              elem: 'logotype'
            },
            {
              block: 'onoffswitch',
              content: {
                elem: 'label',
                content: {
                  block: 'onoffswitch',
                  elem: 'slider',
                  tag: 'span'
                }
              }
            }
          ]
        }
      },
      {
        block: 'page-content',
        tag: 'main',
        content: [
          {
            block: 'section',
            mods: {
              'indent-b': 'xxl'
            },
            tag: 'section',
            content: {
              block: 'grid',
              mods: {
                'col-gap': 'full',
                'm-columns': '10'
              },
              content: [
                {
                  block: 'payment',
                  mix: [
                    {
                      block: 'form',
                      mods: {
                        border: 'all'
                      }
                    },
                    {
                      block: 'grid',
                      elem: 'fraction',
                      elemMods: {
                        'm-col': '5'
                      }
                    }
                  ],
                  content: [
                    {
                      elem: 'header',
                      mix: {
                        block: 'form',
                        elem: 'item',
                        elemMods: {
                          'space-v': 'xxl',
                          'space-h': 'xl',
                          border: 'bottom'
                        }
                      },
                      content: {
                        block: 'text',
                        mods: {
                          view: 'primary',
                          size: 'xxl'
                        },
                        content: {
                          elem: 'word',
                          elemMods: {
                            width: 'l'
                          }
                        }
                      }
                    },
                    {
                      elem: 'content',
                      mix: {
                        block: 'form',
                        elem: 'item',
                        elemMods: {
                          'space-v': 'xxxl',
                          'space-h': 'xl',
                          border: 'bottom'
                        }
                      },
                      content: [
                        {
                          block: 'form',
                          elem: 'item',
                          elemMods: {
                            'indent-b': 'xl',
                            distribute: 'between',
                            'vertical-align': 'center'
                          },
                          content: {
                            block: 'payment',
                            elem: 'control',
                            mix: {
                              block: 'form',
                              elem: 'control',
                              elemMods: {
                                width: 'default',
                                'vertical-align': 'center'
                              }
                            },
                            content: [
                              {
                                elem: 'label',
                                mix: [
                                  {
                                    block: 'form',
                                    elem: 'label',
                                    elemMods: {
                                      width: 'default'
                                    }
                                  },
                                  {
                                    block: 'text',
                                    mods: {
                                      view: 'primary',
                                      size: 'l'
                                    }
                                  }
                                ],
                                content: {
                                  block: 'text',
                                  elem: 'word',
                                  elemMods: {
                                    width: 'l'
                                  }
                                }
                              },
                              {
                                block: 'input',
                                mods: {
                                  size: 'l'
                                }
                              }
                            ]
                          }
                        },
                        {
                          block: 'form',
                          elem: 'item',
                          elemMods: {
                            distribute: 'between',
                            'vertical-align': 'center'
                          },
                          content: {
                            block: 'payment',
                            elem: 'control',
                            mix: {
                              block: 'form',
                              elem: 'control',
                              elemMods: {
                                width: 'default',
                                'vertical-align': 'center'
                              }
                            },
                            content: [
                              {
                                elem: 'label',
                                mix: [
                                  {
                                    block: 'form',
                                    elem: 'label',
                                    elemMods: {
                                      width: 'default'
                                    }
                                  },
                                  {
                                    block: 'text',
                                    mods: {
                                      view: 'primary',
                                      size: 'l'
                                    }
                                  }
                                ],
                                content: {
                                  block: 'text',
                                  elem: 'word',
                                  elemMods: {
                                    width: 'l'
                                  }
                                }
                              },
                              {
                                block: 'input',
                                mods: {
                                  size: 'l'
                                }
                              }
                            ]
                          }
                        }
                      ]
                    },
                    {
                      elem: 'footer',
                      mix: {
                        block: 'form',
                        elem: 'item',
                        elemMods: {
                          distribute: 'between',
                          border: 'bottom',
                          'vertical-align': 'center',
                          'space-v': 'l',
                          'space-h': 'xl'
                        }
                      },
                      content: [
                        {
                          block: 'payment',
                          elem: 'btn-label',
                          mix: {
                            block: 'text',
                            mods: {
                              view: 'primary',
                              size: 'l'
                            }
                          },
                          content: {
                            block: 'text',
                            elem: 'word',
                            elemMods: {
                              width: 'l'
                            }
                          }
                        },
                        {
                          block: 'payment',
                          elem: 'button',
                          mix: {
                            block: 'button',
                            mods: {
                              size: 'l'
                            }
                          }
                        }
                      ]
                    }
                  ]
                },
                {
                  block: 'warning',
                  mix: [
                    {
                      block: 'informer',
                      mods: {
                        view: 'default',
                        border: 'all'
                      }
                    },
                    {
                      block: 'theme',
                      mods: {
                        color: 'project-warning'
                      }
                    },
                    {
                      block: 'grid',
                      elem: 'fraction',
                      elemMods: {
                        'm-col': '5'
                      }
                    }
                  ],
                  content: [
                    {
                      elem: 'content',
                      mix: {
                        block: 'informer',
                        elem: 'content',
                        elemMods: {
                          distribute: 'center',
                          'space-a': 'xxl'
                        }
                      },
                      content: [
                        {
                          block: 'warning',
                          elem: 'placeholder',
                          mix: {
                            block: 'placeholder',
                            mods: {
                              view: 'primary',
                              size: 'm'
                            }
                          }
                        },
                        {
                          block: 'warning',
                          elem: 'title',
                          mix: {
                            block: 'text',
                            mods: {
                              view: 'primary',
                              size: 'xl'
                            }
                          },
                          content: [
                            {
                              block: 'text',
                              elem: 'word',
                              elemMods: {
                                width: 's'
                              }
                            },
                            {
                              block: 'text',
                              elem: 'word',
                              elemMods: {
                                width: 'l'
                              }
                            },
                            {
                              block: 'text',
                              elem: 'word',
                              elemMods: {
                                width: 'm'
                              }
                            },
                            {
                              block: 'text',
                              elem: 'word',
                              elemMods: {
                                width: 'm'
                              }
                            },
                            {
                              block: 'text',
                              elem: 'word',
                              elemMods: {
                                width: 's'
                              }
                            },
                            {
                              block: 'text',
                              elem: 'word',
                              elemMods: {
                                width: 'm'
                              }
                            },
                            {
                              block: 'text',
                              elem: 'word',
                              elemMods: {
                                width: 'l'
                              }
                            },
                            {
                              block: 'text',
                              elem: 'word',
                              elemMods: {
                                width: 's'
                              }
                            },
                            {
                              block: 'text',
                              elem: 'word',
                              elemMods: {
                                width: 'm'
                              }
                            }
                          ]
                        }
                      ]
                    },
                    {
                      elem: 'button-wrapper',
                      mix: {
                        block: 'informer',
                        elem: 'action',
                        elemMods: {
                          distribute: 'center',
                          'space-a': 'xl'
                        }
                      },
                      cls: ' ',
                      content: {
                        block: 'warning',
                        elem: 'button',
                        mix: {
                          block: 'button',
                          mods: {
                            size: 'l'
                          }
                        }
                      }
                    }
                  ]
                }
              ]
            }
          },
          {
            block: 'section',
            mods: {
              'indent-b': 'xxl'
            },
            tag: 'section',
            content: {
              block: 'grid',
              mods: {
                'col-gap': 'one-thirds',
                'm-columns': '10'
              },
              content: [
                {
                  block: 'product',
                  mix: [
                    {
                      block: 'card',
                      mods: {
                        view: 'default',
                        border: 'all'
                      }
                    },
                    {
                      block: 'grid',
                      elem: 'fraction',
                      elemMods: {
                        'm-col': '2'
                      }
                    }
                  ],
                  content: [
                    {
                      elem: 'content',
                      mix: {
                        block: 'card',
                        elem: 'content',
                        elemMods: {
                          'space-a': 'l'
                        }
                      },
                      content: {
                        block: 'product',
                        elem: 'image',
                        mix: {
                          block: 'image'
                        },
                        content: {
                          tag: 'img',
                          attrs: {
                            src: '../img/image-placeholder-inverse.svg',
                            alt: 'placeholder'
                          }
                        }
                      }
                    },
                    {
                      elem: 'footer',
                      mix: {
                        block: 'card',
                        elem: 'footer',
                        elemMods: {
                          'space-a': 'm'
                        }
                      },
                      content: [
                        {
                          block: 'product',
                          elem: 'name',
                          mix: {
                            block: 'text',
                            mods: {
                              view: 'primary',
                              size: 'm'
                            }
                          },
                          content: {
                            block: 'text',
                            elem: 'word',
                            elemMods: {
                              width: 'l'
                            }
                          }
                        },
                        {
                          block: 'product',
                          elem: 'description',
                          mix: {
                            block: 'text',
                            mods: {
                              view: 'primary',
                              size: 's'
                            }
                          },
                          content: {
                            block: 'text',
                            elem: 'word',
                            elemMods: {
                              width: 'm'
                            }
                          }
                        }
                      ]
                    }
                  ]
                },
                {
                  block: 'product',
                  mix: [
                    {
                      block: 'card',
                      mods: {
                        view: 'default',
                        border: 'all'
                      }
                    },
                    {
                      block: 'grid',
                      elem: 'fraction',
                      elemMods: {
                        'm-col': '2'
                      }
                    }
                  ],
                  content: [
                    {
                      elem: 'content',
                      mix: {
                        block: 'card',
                        elem: 'content',
                        elemMods: {
                          'space-a': 'l'
                        }
                      },
                      content: {
                        block: 'product',
                        elem: 'image',
                        mix: {
                          block: 'image'
                        },
                        content: {
                          tag: 'img',
                          attrs: {
                            src: '../img/image-placeholder-inverse.svg',
                            alt: 'placeholder'
                          }
                        }
                      }
                    },
                    {
                      elem: 'footer',
                      mix: {
                        block: 'card',
                        elem: 'footer',
                        elemMods: {
                          'space-a': 'm'
                        }
                      },
                      content: [
                        {
                          block: 'product',
                          elem: 'name',
                          mix: {
                            block: 'text',
                            mods: {
                              view: 'primary',
                              size: 'm'
                            }
                          },
                          content: {
                            block: 'text',
                            elem: 'word',
                            elemMods: {
                              width: 'l'
                            }
                          }
                        },
                        {
                          block: 'product',
                          elem: 'description',
                          mix: {
                            block: 'text',
                            mods: {
                              view: 'primary',
                              size: 's'
                            }
                          },
                          content: {
                            block: 'text',
                            elem: 'word',
                            elemMods: {
                              width: 'm'
                            }
                          }
                        }
                      ]
                    }
                  ]
                },
                {
                  block: 'product',
                  mix: [
                    {
                      block: 'card',
                      mods: {
                        view: 'default',
                        border: 'all'
                      }
                    },
                    {
                      block: 'grid',
                      elem: 'fraction',
                      elemMods: {
                        'm-col': '2'
                      }
                    }
                  ],
                  content: [
                    {
                      elem: 'content',
                      mix: {
                        block: 'card',
                        elem: 'content',
                        elemMods: {
                          'space-a': 'l'
                        }
                      },
                      content: {
                        block: 'product',
                        elem: 'image',
                        mix: {
                          block: 'image'
                        },
                        content: {
                          tag: 'img',
                          attrs: {
                            src: '../img/image-placeholder-inverse.svg',
                            alt: 'placeholder'
                          }
                        }
                      }
                    },
                    {
                      elem: 'footer',
                      mix: {
                        block: 'card',
                        elem: 'footer',
                        elemMods: {
                          'space-a': 'm'
                        }
                      },
                      content: [
                        {
                          block: 'product',
                          elem: 'name',
                          mix: {
                            block: 'text',
                            mods: {
                              view: 'primary',
                              size: 'm'
                            }
                          },
                          content: {
                            block: 'text',
                            elem: 'word',
                            elemMods: {
                              width: 'l'
                            }
                          }
                        },
                        {
                          block: 'product',
                          elem: 'description',
                          mix: {
                            block: 'text',
                            mods: {
                              view: 'primary',
                              size: 's'
                            }
                          },
                          content: {
                            block: 'text',
                            elem: 'word',
                            elemMods: {
                              width: 'm'
                            }
                          }
                        }
                      ]
                    }
                  ]
                },
                {
                  block: 'product',
                  mix: [
                    {
                      block: 'card',
                      mods: {
                        view: 'default',
                        border: 'all'
                      }
                    },
                    {
                      block: 'grid',
                      elem: 'fraction',
                      elemMods: {
                        'm-col': '2'
                      }
                    }
                  ],
                  content: [
                    {
                      elem: 'content',
                      mix: {
                        block: 'card',
                        elem: 'content',
                        elemMods: {
                          'space-a': 'l'
                        }
                      },
                      content: {
                        block: 'product',
                        elem: 'image',
                        mix: {
                          block: 'image'
                        },
                        content: {
                          tag: 'img',
                          attrs: {
                            src: '../img/image-placeholder-inverse.svg',
                            alt: 'placeholder'
                          }
                        }
                      }
                    },
                    {
                      elem: 'footer',
                      mix: {
                        block: 'card',
                        elem: 'footer',
                        elemMods: {
                          'space-a': 'm'
                        }
                      },
                      content: [
                        {
                          block: 'product',
                          elem: 'name',
                          mix: {
                            block: 'text',
                            mods: {
                              view: 'primary',
                              size: 'm'
                            }
                          },
                          content: {
                            block: 'text',
                            elem: 'word',
                            elemMods: {
                              width: 'l'
                            }
                          }
                        },
                        {
                          block: 'product',
                          elem: 'description',
                          mix: {
                            block: 'text',
                            mods: {
                              view: 'primary',
                              size: 's'
                            }
                          },
                          content: {
                            block: 'text',
                            elem: 'word',
                            elemMods: {
                              width: 'm'
                            }
                          }
                        }
                      ]
                    }
                  ]
                },
                {
                  block: 'product',
                  mix: [
                    {
                      block: 'card',
                      mods: {
                        view: 'default',
                        border: 'all'
                      }
                    },
                    {
                      block: 'grid',
                      elem: 'fraction',
                      elemMods: {
                        'm-col': '2'
                      }
                    }
                  ],
                  content: [
                    {
                      elem: 'content',
                      mix: {
                        block: 'card',
                        elem: 'content',
                        elemMods: {
                          'space-a': 'l'
                        }
                      },
                      content: {
                        block: 'product',
                        elem: 'image',
                        mix: {
                          block: 'image'
                        },
                        content: {
                          tag: 'img',
                          attrs: {
                            src: '../img/image-placeholder-inverse.svg',
                            alt: 'placeholder'
                          }
                        }
                      }
                    },
                    {
                      elem: 'footer',
                      mix: {
                        block: 'card',
                        elem: 'footer',
                        elemMods: {
                          'space-a': 'm'
                        }
                      },
                      content: [
                        {
                          block: 'product',
                          elem: 'name',
                          mix: {
                            block: 'text',
                            mods: {
                              view: 'primary',
                              size: 'm'
                            }
                          },
                          content: {
                            block: 'text',
                            elem: 'word',
                            elemMods: {
                              width: 'l'
                            }
                          }
                        },
                        {
                          block: 'product',
                          elem: 'description',
                          mix: {
                            block: 'text',
                            mods: {
                              view: 'primary',
                              size: 's'
                            }
                          },
                          content: {
                            block: 'text',
                            elem: 'word',
                            elemMods: {
                              width: 'm'
                            }
                          }
                        }
                      ]
                    }
                  ]
                }
              ]
            }
          },
          {
            block: 'section',
            tag: 'section',
            content: {
              block: 'grid',
              mods: {
                'col-gap': 'full',
                'm-columns': '12',
                'vertical-align': 'start'
              },
              content: [
                {
                  block: 'history',
                  mix: [
                    {
                      block: 'list',
                      mods: {
                        view: 'default',
                        border: 'all'
                      }
                    },
                    {
                      block: 'grid',
                      elem: 'fraction',
                      elemMods: {
                        'm-col': '8'
                      }
                    }
                  ],
                  content: [
                    {
                      elem: 'transaction',
                      mix: [
                        {
                          block: 'e-accordion'
                        },
                        {
                          block: 'list',
                          elem: 'item',
                          elemMods: {
                            direction: 'column',
                            border: 'bottom',
                            'space-a': 'l'
                          }
                        }
                      ],
                      content: [
                        {
                          block: 'history',
                          elem: 'show',
                          mix: [
                            {
                              block: 'e-accordion',
                              elem: 'short'
                            },
                            {
                              block: 'list',
                              elem: 'item',
                              elemMods: {
                                'vertical-align': 'center'
                              }
                            }
                          ],
                          content: [
                            {
                              elem: 'destination',
                              mix: {
                                block: 'icon-plus',
                                mods: {
                                  'vertical-align': 'center'
                                }
                              },
                              content: [
                                {
                                  block: 'history',
                                  elem: 'label',
                                  mix: {
                                    block: 'icon-plus',
                                    elem: 'block'
                                  },
                                  content: [
                                    {
                                      elem: 'date',
                                      mix: {
                                        block: 'text',
                                        mods: {
                                          view: 'ghost',
                                          size: 's'
                                        }
                                      },
                                      content: {
                                        block: 'text',
                                        elem: 'word',
                                        elemMods: {
                                          width: 'm'
                                        }
                                      }
                                    },
                                    {
                                      elem: 'time',
                                      cls: '',
                                      mix: {
                                        block: 'text',
                                        mods: {
                                          view: 'ghost',
                                          size: 's'
                                        }
                                      },
                                      content: {
                                        block: 'text',
                                        elem: 'word',
                                        elemMods: {
                                          width: 'm'
                                        }
                                      }
                                    }
                                  ]
                                },
                                {
                                  block: 'history',
                                  elem: 'pic',
                                  mix: {
                                    block: 'icon-plus',
                                    elem: 'icon',
                                    elemMods: {
                                      'indent-r': 's',
                                      'indent-l': 'l'
                                    }
                                  },
                                  content: {
                                    block: 'brand-logo',
                                    mods: {
                                      name: 'yota',
                                      size: 'm'
                                    }
                                  }
                                }
                              ]
                            },
                            {
                              elem: 'box',
                              mix: {
                                block: 'text',
                                mods: {
                                  view: 'primary',
                                  size: 'l'
                                }
                              },
                              content: {
                                block: 'text',
                                elem: 'word',
                                elemMods: {
                                  width: 'l'
                                }
                              }
                            },
                            {
                              elem: 'open',
                              mix: {
                                block: 'text',
                                mods: {
                                  view: 'primary',
                                  size: 'l'
                                }
                              },
                              content: {
                                block: 'text',
                                elem: 'word',
                                elemMods: {
                                  width: 'm'
                                }
                              }
                            }
                          ]
                        },
                        {
                          block: 'e-accordion',
                          elem: 'list',
                          content: [
                            {
                              block: 'history',
                              elem: 'description',
                              mix: {
                                block: 'list',
                                elem: 'item',
                                elemMods: {
                                  'indent-b': 'm'
                                }
                              },
                              content: [
                                {
                                  elem: 'text',
                                  mix: {
                                    block: 'text',
                                    mods: {
                                      view: 'primary',
                                      size: 'l'
                                    }
                                  },
                                  content: [
                                    {
                                      block: 'text',
                                      elem: 'word',
                                      elemMods: {
                                        width: 'l'
                                      }
                                    },
                                    {
                                      block: 'text',
                                      elem: 'word',
                                      elemMods: {
                                        width: 'm'
                                      }
                                    },
                                    {
                                      block: 'text',
                                      elem: 'word',
                                      elemMods: {
                                        width: 'l'
                                      }
                                    }
                                  ]
                                },
                                {
                                  elem: 'text',
                                  mix: {
                                    block: 'text',
                                    mods: {
                                      view: 'primary',
                                      size: 'l'
                                    }
                                  },
                                  content: [
                                    {
                                      block: 'text',
                                      elem: 'word',
                                      elemMods: {
                                        width: 'l'
                                      }
                                    },
                                    {
                                      block: 'text',
                                      elem: 'word',
                                      elemMods: {
                                        width: 'm'
                                      }
                                    },
                                    {
                                      block: 'text',
                                      elem: 'word',
                                      elemMods: {
                                        width: 'l'
                                      }
                                    }
                                  ]
                                }
                              ]
                            },
                            {
                              block: 'history',
                              elem: 'actions',
                              mix: {
                                block: 'list',
                                elem: 'item',
                                elemMods: {
                                  distribute: 'between'
                                }
                              },
                              content: [
                                {
                                  elem: 'actions-text',
                                  elemMods: {
                                    left: true
                                  },
                                  mix: {
                                    block: 'text',
                                    mods: {
                                      view: 'primary',
                                      size: 'l'
                                    }
                                  },
                                  content: {
                                    block: 'text',
                                    elem: 'word',
                                    elemMods: {
                                      width: 'm'
                                    }
                                  }
                                },
                                {
                                  elem: 'actions-text',
                                  elemMods: {
                                    right: true
                                  },
                                  mix: {
                                    block: 'text',
                                    mods: {
                                      view: 'primary',
                                      size: 'l'
                                    }
                                  },
                                  content: {
                                    block: 'text',
                                    elem: 'word',
                                    elemMods: {
                                      width: 'm'
                                    }
                                  }
                                }
                              ]
                            }
                          ]
                        }
                      ]
                    },
                    {
                      elem: 'transaction',
                      mix: [
                        {
                          block: 'e-accordion'
                        },
                        {
                          block: 'list',
                          elem: 'item',
                          elemMods: {
                            direction: 'column',
                            border: 'bottom',
                            'space-a': 'l'
                          }
                        }
                      ],
                      content: [
                        {
                          block: 'history',
                          elem: 'show',
                          mix: [
                            {
                              block: 'e-accordion',
                              elem: 'short'
                            },
                            {
                              block: 'list',
                              elem: 'item',
                              elemMods: {
                                'vertical-align': 'center'
                              }
                            }
                          ],
                          content: [
                            {
                              elem: 'destination',
                              mix: {
                                block: 'icon-plus',
                                mods: {
                                  'vertical-align': 'center'
                                }
                              },
                              content: [
                                {
                                  block: 'history',
                                  elem: 'label',
                                  mix: {
                                    block: 'icon-plus',
                                    elem: 'block'
                                  },
                                  content: [
                                    {
                                      elem: 'date',
                                      mix: {
                                        block: 'text',
                                        mods: {
                                          view: 'ghost',
                                          size: 's'
                                        }
                                      },
                                      content: {
                                        block: 'text',
                                        elem: 'word',
                                        elemMods: {
                                          width: 'm'
                                        }
                                      }
                                    },
                                    {
                                      elem: 'time',
                                      cls: '',
                                      mix: {
                                        block: 'text',
                                        mods: {
                                          view: 'ghost',
                                          size: 's'
                                        }
                                      },
                                      content: {
                                        block: 'text',
                                        elem: 'word',
                                        elemMods: {
                                          width: 'm'
                                        }
                                      }
                                    }
                                  ]
                                },
                                {
                                  block: 'history',
                                  elem: 'pic',
                                  mix: {
                                    block: 'icon-plus',
                                    elem: 'icon',
                                    elemMods: {
                                      'indent-r': 's',
                                      'indent-l': 'l'
                                    }
                                  },
                                  content: {
                                    block: 'brand-logo',
                                    mods: {
                                      name: 'mts',
                                      size: 'm'
                                    }
                                  }
                                }
                              ]
                            },
                            {
                              elem: 'box',
                              mix: {
                                block: 'text',
                                mods: {
                                  view: 'primary',
                                  size: 'l'
                                }
                              },
                              content: {
                                block: 'text',
                                elem: 'word',
                                elemMods: {
                                  width: 'l'
                                }
                              }
                            },
                            {
                              elem: 'open',
                              mix: {
                                block: 'text',
                                mods: {
                                  view: 'primary',
                                  size: 'l'
                                }
                              },
                              content: {
                                block: 'text',
                                elem: 'word',
                                elemMods: {
                                  width: 'm'
                                }
                              }
                            }
                          ]
                        },
                        {
                          block: 'e-accordion',
                          elem: 'list',
                          content: [
                            {
                              block: 'history',
                              elem: 'description',
                              mix: {
                                block: 'list',
                                elem: 'item',
                                elemMods: {
                                  'indent-b': 'm'
                                }
                              },
                              content: [
                                {
                                  elem: 'text',
                                  mix: {
                                    block: 'text',
                                    mods: {
                                      view: 'primary',
                                      size: 'l'
                                    }
                                  },
                                  content: [
                                    {
                                      block: 'text',
                                      elem: 'word',
                                      elemMods: {
                                        width: 'l'
                                      }
                                    },
                                    {
                                      block: 'text',
                                      elem: 'word',
                                      elemMods: {
                                        width: 'm'
                                      }
                                    },
                                    {
                                      block: 'text',
                                      elem: 'word',
                                      elemMods: {
                                        width: 'l'
                                      }
                                    }
                                  ]
                                },
                                {
                                  elem: 'text',
                                  mix: {
                                    block: 'text',
                                    mods: {
                                      view: 'primary',
                                      size: 'l'
                                    }
                                  },
                                  content: [
                                    {
                                      block: 'text',
                                      elem: 'word',
                                      elemMods: {
                                        width: 'l'
                                      }
                                    },
                                    {
                                      block: 'text',
                                      elem: 'word',
                                      elemMods: {
                                        width: 'm'
                                      }
                                    },
                                    {
                                      block: 'text',
                                      elem: 'word',
                                      elemMods: {
                                        width: 'l'
                                      }
                                    }
                                  ]
                                }
                              ]
                            },
                            {
                              block: 'history',
                              elem: 'actions',
                              mix: {
                                block: 'list',
                                elem: 'item',
                                elemMods: {
                                  distribute: 'between'
                                }
                              },
                              content: [
                                {
                                  elem: 'actions-text',
                                  elemMods: {
                                    left: true
                                  },
                                  mix: {
                                    block: 'text',
                                    mods: {
                                      view: 'primary',
                                      size: 'l'
                                    }
                                  },
                                  content: {
                                    block: 'text',
                                    elem: 'word',
                                    elemMods: {
                                      width: 'm'
                                    }
                                  }
                                },
                                {
                                  elem: 'actions-text',
                                  elemMods: {
                                    right: true
                                  },
                                  mix: {
                                    block: 'text',
                                    mods: {
                                      view: 'primary',
                                      size: 'l'
                                    }
                                  },
                                  content: {
                                    block: 'text',
                                    elem: 'word',
                                    elemMods: {
                                      width: 'm'
                                    }
                                  }
                                }
                              ]
                            }
                          ]
                        }
                      ]
                    },
                    {
                      elem: 'transaction',
                      mix: [
                        {
                          block: 'e-accordion'
                        },
                        {
                          block: 'list',
                          elem: 'item',
                          elemMods: {
                            direction: 'column',
                            border: 'bottom',
                            'space-a': 'l'
                          }
                        }
                      ],
                      content: [
                        {
                          block: 'history',
                          elem: 'show',
                          mix: [
                            {
                              block: 'e-accordion',
                              elem: 'short'
                            },
                            {
                              block: 'list',
                              elem: 'item',
                              elemMods: {
                                'vertical-align': 'center'
                              }
                            }
                          ],
                          content: [
                            {
                              elem: 'destination',
                              mix: {
                                block: 'icon-plus',
                                mods: {
                                  'vertical-align': 'center'
                                }
                              },
                              content: [
                                {
                                  block: 'history',
                                  elem: 'label',
                                  mix: {
                                    block: 'icon-plus',
                                    elem: 'block'
                                  },
                                  content: [
                                    {
                                      elem: 'date',
                                      mix: {
                                        block: 'text',
                                        mods: {
                                          view: 'ghost',
                                          size: 's'
                                        }
                                      },
                                      content: {
                                        block: 'text',
                                        elem: 'word',
                                        elemMods: {
                                          width: 'm'
                                        }
                                      }
                                    },
                                    {
                                      elem: 'time',
                                      cls: '',
                                      mix: {
                                        block: 'text',
                                        mods: {
                                          view: 'ghost',
                                          size: 's'
                                        }
                                      },
                                      content: {
                                        block: 'text',
                                        elem: 'word',
                                        elemMods: {
                                          width: 'm'
                                        }
                                      }
                                    }
                                  ]
                                },
                                {
                                  block: 'history',
                                  elem: 'pic',
                                  mix: {
                                    block: 'icon-plus',
                                    elem: 'icon',
                                    elemMods: {
                                      'indent-r': 's',
                                      'indent-l': 'l'
                                    }
                                  },
                                  content: {
                                    block: 'brand-logo',
                                    mods: {
                                      name: 'kcell',
                                      size: 'm'
                                    }
                                  }
                                }
                              ]
                            },
                            {
                              elem: 'box',
                              mix: {
                                block: 'text',
                                mods: {
                                  view: 'primary',
                                  size: 'l'
                                }
                              },
                              content: {
                                block: 'text',
                                elem: 'word',
                                elemMods: {
                                  width: 'l'
                                }
                              }
                            },
                            {
                              elem: 'open',
                              mix: {
                                block: 'text',
                                mods: {
                                  view: 'primary',
                                  size: 'l'
                                }
                              },
                              content: {
                                block: 'text',
                                elem: 'word',
                                elemMods: {
                                  width: 'm'
                                }
                              }
                            }
                          ]
                        },
                        {
                          block: 'e-accordion',
                          elem: 'list',
                          content: [
                            {
                              block: 'history',
                              elem: 'description',
                              mix: {
                                block: 'list',
                                elem: 'item',
                                elemMods: {
                                  'indent-b': 'm'
                                }
                              },
                              content: [
                                {
                                  elem: 'text',
                                  mix: {
                                    block: 'text',
                                    mods: {
                                      view: 'primary',
                                      size: 'l'
                                    }
                                  },
                                  content: [
                                    {
                                      block: 'text',
                                      elem: 'word',
                                      elemMods: {
                                        width: 'l'
                                      }
                                    },
                                    {
                                      block: 'text',
                                      elem: 'word',
                                      elemMods: {
                                        width: 'm'
                                      }
                                    },
                                    {
                                      block: 'text',
                                      elem: 'word',
                                      elemMods: {
                                        width: 'l'
                                      }
                                    }
                                  ]
                                },
                                {
                                  elem: 'text',
                                  mix: {
                                    block: 'text',
                                    mods: {
                                      view: 'primary',
                                      size: 'l'
                                    }
                                  },
                                  content: [
                                    {
                                      block: 'text',
                                      elem: 'word',
                                      elemMods: {
                                        width: 'l'
                                      }
                                    },
                                    {
                                      block: 'text',
                                      elem: 'word',
                                      elemMods: {
                                        width: 'm'
                                      }
                                    },
                                    {
                                      block: 'text',
                                      elem: 'word',
                                      elemMods: {
                                        width: 'l'
                                      }
                                    }
                                  ]
                                }
                              ]
                            },
                            {
                              block: 'history',
                              elem: 'actions',
                              mix: {
                                block: 'list',
                                elem: 'item',
                                elemMods: {
                                  distribute: 'between'
                                }
                              },
                              content: [
                                {
                                  elem: 'actions-text',
                                  elemMods: {
                                    left: true
                                  },
                                  mix: {
                                    block: 'text',
                                    mods: {
                                      view: 'primary',
                                      size: 'l'
                                    }
                                  },
                                  content: {
                                    block: 'text',
                                    elem: 'word',
                                    elemMods: {
                                      width: 'm'
                                    }
                                  }
                                },
                                {
                                  elem: 'actions-text',
                                  elemMods: {
                                    right: true
                                  },
                                  mix: {
                                    block: 'text',
                                    mods: {
                                      view: 'primary',
                                      size: 'l'
                                    }
                                  },
                                  content: {
                                    block: 'text',
                                    elem: 'word',
                                    elemMods: {
                                      width: 'm'
                                    }
                                  }
                                }
                              ]
                            }
                          ]
                        }
                      ]
                    },
                    {
                      elem: 'transaction',
                      mix: [
                        {
                          block: 'e-accordion'
                        },
                        {
                          block: 'list',
                          elem: 'item',
                          elemMods: {
                            direction: 'column',
                            border: 'bottom',
                            'space-a': 'l'
                          }
                        }
                      ],
                      content: [
                        {
                          block: 'history',
                          elem: 'show',
                          mix: [
                            {
                              block: 'e-accordion',
                              elem: 'short'
                            },
                            {
                              block: 'list',
                              elem: 'item',
                              elemMods: {
                                'vertical-align': 'center'
                              }
                            }
                          ],
                          content: [
                            {
                              elem: 'destination',
                              mix: {
                                block: 'icon-plus',
                                mods: {
                                  'vertical-align': 'center'
                                }
                              },
                              content: [
                                {
                                  block: 'history',
                                  elem: 'label',
                                  mix: {
                                    block: 'icon-plus',
                                    elem: 'block'
                                  },
                                  content: [
                                    {
                                      elem: 'date',
                                      mix: {
                                        block: 'text',
                                        mods: {
                                          view: 'ghost',
                                          size: 's'
                                        }
                                      },
                                      content: {
                                        block: 'text',
                                        elem: 'word',
                                        elemMods: {
                                          width: 'm'
                                        }
                                      }
                                    },
                                    {
                                      elem: 'time',
                                      cls: '',
                                      mix: {
                                        block: 'text',
                                        mods: {
                                          view: 'ghost',
                                          size: 's'
                                        }
                                      },
                                      content: {
                                        block: 'text',
                                        elem: 'word',
                                        elemMods: {
                                          width: 'm'
                                        }
                                      }
                                    }
                                  ]
                                },
                                {
                                  block: 'history',
                                  elem: 'pic',
                                  mix: {
                                    block: 'icon-plus',
                                    elem: 'icon',
                                    elemMods: {
                                      'indent-r': 's',
                                      'indent-l': 'l'
                                    }
                                  },
                                  content: {
                                    block: 'brand-logo',
                                    mods: {
                                      name: 'megafon',
                                      size: 'm'
                                    }
                                  }
                                }
                              ]
                            },
                            {
                              elem: 'box',
                              mix: {
                                block: 'text',
                                mods: {
                                  view: 'primary',
                                  size: 'l'
                                }
                              },
                              content: {
                                block: 'text',
                                elem: 'word',
                                elemMods: {
                                  width: 'l'
                                }
                              }
                            },
                            {
                              elem: 'open',
                              mix: {
                                block: 'text',
                                mods: {
                                  view: 'primary',
                                  size: 'l'
                                }
                              },
                              content: {
                                block: 'text',
                                elem: 'word',
                                elemMods: {
                                  width: 'm'
                                }
                              }
                            }
                          ]
                        },
                        {
                          block: 'e-accordion',
                          elem: 'list',
                          content: [
                            {
                              block: 'history',
                              elem: 'description',
                              mix: {
                                block: 'list',
                                elem: 'item',
                                elemMods: {
                                  'indent-b': 'm'
                                }
                              },
                              content: [
                                {
                                  elem: 'text',
                                  mix: {
                                    block: 'text',
                                    mods: {
                                      view: 'primary',
                                      size: 'l'
                                    }
                                  },
                                  content: [
                                    {
                                      block: 'text',
                                      elem: 'word',
                                      elemMods: {
                                        width: 'l'
                                      }
                                    },
                                    {
                                      block: 'text',
                                      elem: 'word',
                                      elemMods: {
                                        width: 'm'
                                      }
                                    },
                                    {
                                      block: 'text',
                                      elem: 'word',
                                      elemMods: {
                                        width: 'l'
                                      }
                                    }
                                  ]
                                },
                                {
                                  elem: 'text',
                                  mix: {
                                    block: 'text',
                                    mods: {
                                      view: 'primary',
                                      size: 'l'
                                    }
                                  },
                                  content: [
                                    {
                                      block: 'text',
                                      elem: 'word',
                                      elemMods: {
                                        width: 'l'
                                      }
                                    },
                                    {
                                      block: 'text',
                                      elem: 'word',
                                      elemMods: {
                                        width: 'm'
                                      }
                                    },
                                    {
                                      block: 'text',
                                      elem: 'word',
                                      elemMods: {
                                        width: 'l'
                                      }
                                    }
                                  ]
                                }
                              ]
                            },
                            {
                              block: 'history',
                              elem: 'actions',
                              mix: {
                                block: 'list',
                                elem: 'item',
                                elemMods: {
                                  distribute: 'between'
                                }
                              },
                              content: [
                                {
                                  elem: 'actions-text',
                                  elemMods: {
                                    left: true
                                  },
                                  mix: {
                                    block: 'text',
                                    mods: {
                                      view: 'primary',
                                      size: 'l'
                                    }
                                  },
                                  content: {
                                    block: 'text',
                                    elem: 'word',
                                    elemMods: {
                                      width: 'm'
                                    }
                                  }
                                },
                                {
                                  elem: 'actions-text',
                                  elemMods: {
                                    right: true
                                  },
                                  mix: {
                                    block: 'text',
                                    mods: {
                                      view: 'primary',
                                      size: 'l'
                                    }
                                  },
                                  content: {
                                    block: 'text',
                                    elem: 'word',
                                    elemMods: {
                                      width: 'm'
                                    }
                                  }
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
                  block: 'commercial',
                  mix: [
                    {
                      block: 'card',
                      mods: {
                        view: 'default'
                      }
                    },
                    {
                      block: 'theme',
                      mods: {
                        color: 'project-brand'
                      }
                    },
                    {
                      block: 'grid',
                      elem: 'fraction',
                      elemMods: {
                        'm-col': '4'
                      }
                    }
                  ],
                  content: [
                    {
                      elem: 'pic',
                      mix: {
                        block: 'card',
                        elem: 'content',
                        elemMods: {
                          'space-a': 'xxl'
                        }
                      },
                      content: {
                        block: 'image',
                        mix: {
                          block: 'commercial',
                          elem: 'figure'
                        },
                        content: {
                          block: 'commercial',
                          elem: 'img',
                          tag: 'img',
                          attrs: {
                            src: '../img/image-placeholder-inverse.svg',
                            alt: 'Инопланетное существо'
                          }
                        }
                      }
                    },
                    {
                      elem: 'info',
                      mix: {
                        block: 'card',
                        elem: 'footer',
                        elemMods: {
                          'space-a': 'xxl'
                        }
                      },
                      content: [
                        {
                          block: 'commercial',
                          elem: 'text',
                          mix: {
                            block: 'text',
                            mods: {
                              view: 'primary',
                              size: 's'
                            }
                          },
                          content: [
                            {
                              block: 'text',
                              elem: 'word',
                              elemMods: {
                                width: 'l'
                              }
                            },
                            {
                              block: 'text',
                              elem: 'word',
                              elemMods: {
                                width: 'm'
                              }
                            },
                            {
                              block: 'text',
                              elem: 'word',
                              elemMods: {
                                width: 'l'
                              }
                            },
                            {
                              block: 'text',
                              elem: 'word',
                              elemMods: {
                                width: 's'
                              }
                            },
                            {
                              block: 'text',
                              elem: 'word',
                              elemMods: {
                                width: 's'
                              }
                            },
                            {
                              block: 'text',
                              elem: 'word',
                              elemMods: {
                                width: 'm'
                              }
                            },
                            {
                              block: 'text',
                              elem: 'word',
                              elemMods: {
                                width: 'l'
                              }
                            },
                            {
                              block: 'text',
                              elem: 'word',
                              elemMods: {
                                width: 'm'
                              }
                            }
                          ]
                        },
                        {
                          block: 'commercial',
                          elem: 'navigation',
                          content: [
                            {
                              elem: 'dot'
                            },
                            {
                              elem: 'dot'
                            },
                            {
                              elem: 'dot'
                            }
                          ]
                        }
                      ]
                    }
                  ]
                }
              ]
            }
          }
        ]
      },
      {
        block: 'page-footer',
        tag: 'footer',
        content: {
          block: 'footer',
          content: {
            elem: 'content',
            content: [
              {
                block: 'footer',
                elem: 'text',
                elemMods: {
                  left: true
                },
                mix: {
                  block: 'text',
                  mods: {
                    view: 'primary',
                    size: 'l'
                  }
                },
                content: [
                  {
                    block: 'text',
                    elem: 'word',
                    elemMods: {
                      width: 'l'
                    }
                  },
                  {
                    block: 'text',
                    elem: 'word',
                    elemMods: {
                      width: 's'
                    }
                  }
                ]
              },
              {
                block: 'footer',
                elem: 'text',
                elemMods: {
                  right: true
                },
                mix: {
                  block: 'text',
                  mods: {
                    view: 'primary',
                    size: 'l'
                  }
                },
                content: {
                  block: 'text',
                  elem: 'word',
                  elemMods: {
                    width: 'l'
                  }
                }
              }
            ]
          }
        }
      }
    ]
  }
};

const productPage = {
  block: 'layout',
  content: [
    {
      block: 'page-header',
      tag: 'header',
      content: {
        block: 'layout',
        elem: 'container',
        elemMods: {
          size: 'm',
          align: 'center'
        },
        content: {
          block: 'header',
          content: [
            {
              elem: 'logotype'
            },
            {
              block: 'onoffswitch',
              content: {
                elem: 'label',
                content: {
                  block: 'onoffswitch',
                  elem: 'slider',
                  tag: 'span'
                }
              }
            }
          ]
        }
      }
    },
    {
      block: 'page-content',
      tag: 'main',
      content: [
        {
          block: 'section',
          mods: {
            'indent-b': 'xxl'
          },
          tag: 'section',
          content: {
            block: 'layout',
            elem: 'container',
            elemMods: {
              size: 'm',
              align: 'center'
            },
            content: {
              block: 'grid',
              mods: {
                'col-gap': 'full',
                'm-columns': '12'
              },
              content: [
                {
                  elem: 'fraction',
                  elemMods: {
                    'm-col': '8'
                  },
                  content: [
                    {
                      block: 'text',
                      mods: {
                        type: 'h1',
                        view: 'primary',
                        size: 'xxl'
                      },
                      content: {
                        elem: 'word',
                        elemMods: {
                          width: 'l'
                        }
                      }
                    },
                    {
                      block: 'text',
                      mods: {
                        type: 'p',
                        view: 'primary',
                        size: 'm'
                      },
                      content: [
                        {
                          elem: 'word',
                          elemMods: {
                            width: 'l'
                          }
                        },
                        {
                          elem: 'word',
                          elemMods: {
                            width: 'm'
                          }
                        },
                        {
                          elem: 'word',
                          elemMods: {
                            width: 'm'
                          }
                        },
                        {
                          elem: 'word',
                          elemMods: {
                            width: 's'
                          }
                        },
                        {
                          elem: 'word',
                          elemMods: {
                            width: 'm'
                          }
                        },
                        {
                          elem: 'word',
                          elemMods: {
                            width: 'm'
                          }
                        },
                        {
                          elem: 'word',
                          elemMods: {
                            width: 'm'
                          }
                        },
                        {
                          elem: 'word',
                          elemMods: {
                            width: 's'
                          }
                        },
                        {
                          elem: 'word',
                          elemMods: {
                            width: 'm'
                          }
                        },
                        {
                          elem: 'word',
                          elemMods: {
                            width: 'm'
                          }
                        },
                        {
                          elem: 'word',
                          elemMods: {
                            width: 'm'
                          }
                        },
                        {
                          elem: 'word',
                          elemMods: {
                            width: 'm'
                          }
                        },
                        {
                          elem: 'word',
                          elemMods: {
                            width: 's'
                          }
                        },
                        {
                          elem: 'word',
                          elemMods: {
                            width: 'm'
                          }
                        },
                        {
                          elem: 'word',
                          elemMods: {
                            width: 'l'
                          }
                        },
                        {
                          elem: 'word',
                          elemMods: {
                            width: 'l'
                          }
                        },
                        {
                          elem: 'word',
                          elemMods: {
                            width: 'l'
                          }
                        },
                        {
                          elem: 'word',
                          elemMods: {
                            width: 's'
                          }
                        },
                        {
                          elem: 'word',
                          elemMods: {
                            width: 'l'
                          }
                        },
                        {
                          elem: 'word',
                          elemMods: {
                            width: 'm'
                          }
                        },
                        {
                          elem: 'word',
                          elemMods: {
                            width: 'm'
                          }
                        },
                        {
                          elem: 'word',
                          elemMods: {
                            width: 's'
                          }
                        },
                        {
                          elem: 'word',
                          elemMods: {
                            width: 'm'
                          }
                        },
                        {
                          elem: 'word',
                          elemMods: {
                            width: 'm'
                          }
                        },
                        {
                          elem: 'word',
                          elemMods: {
                            width: 'm'
                          }
                        },
                        {
                          elem: 'word',
                          elemMods: {
                            width: 'm'
                          }
                        },
                        {
                          elem: 'word',
                          elemMods: {
                            width: 's'
                          }
                        },
                        {
                          elem: 'word',
                          elemMods: {
                            width: 'm'
                          }
                        },
                        {
                          elem: 'word',
                          elemMods: {
                            width: 'l'
                          }
                        },
                        {
                          elem: 'word',
                          elemMods: {
                            width: 'l'
                          }
                        },
                        {
                          elem: 'word',
                          elemMods: {
                            width: 'l'
                          }
                        },
                        {
                          elem: 'word',
                          elemMods: {
                            width: 's'
                          }
                        },
                        {
                          elem: 'word',
                          elemMods: {
                            width: 'l'
                          }
                        },
                        {
                          elem: 'word',
                          elemMods: {
                            width: 'm'
                          }
                        },
                        {
                          elem: 'word',
                          elemMods: {
                            width: 'm'
                          }
                        },
                        {
                          elem: 'word',
                          elemMods: {
                            width: 's'
                          }
                        },
                        {
                          elem: 'word',
                          elemMods: {
                            width: 'm'
                          }
                        },
                        {
                          elem: 'word',
                          elemMods: {
                            width: 'm'
                          }
                        },
                        {
                          elem: 'word',
                          elemMods: {
                            width: 's'
                          }
                        },
                        {
                          elem: 'word',
                          elemMods: {
                            width: 'm'
                          }
                        },
                        {
                          elem: 'word',
                          elemMods: {
                            width: 's'
                          }
                        },
                        {
                          elem: 'word',
                          elemMods: {
                            width: 'm'
                          }
                        },
                        {
                          elem: 'word',
                          elemMods: {
                            width: 'l'
                          }
                        },
                        {
                          elem: 'word',
                          elemMods: {
                            width: 'l'
                          }
                        },
                        {
                          elem: 'word',
                          elemMods: {
                            width: 'l'
                          }
                        },
                        {
                          elem: 'word',
                          elemMods: {
                            width: 's'
                          }
                        },
                        {
                          elem: 'word',
                          elemMods: {
                            width: 'l'
                          }
                        },
                        {
                          elem: 'word',
                          elemMods: {
                            width: 'm'
                          }
                        },
                        {
                          elem: 'word',
                          elemMods: {
                            width: 'm'
                          }
                        },
                        {
                          elem: 'word',
                          elemMods: {
                            width: 's'
                          }
                        },
                        {
                          elem: 'word',
                          elemMods: {
                            width: 'm'
                          }
                        },
                        {
                          elem: 'word',
                          elemMods: {
                            width: 'm'
                          }
                        },
                        {
                          elem: 'word',
                          elemMods: {
                            width: 'm'
                          }
                        },
                        {
                          elem: 'word',
                          elemMods: {
                            width: 'm'
                          }
                        },
                        {
                          elem: 'word',
                          elemMods: {
                            width: 's'
                          }
                        },
                        {
                          elem: 'word',
                          elemMods: {
                            width: 'm'
                          }
                        },
                        {
                          elem: 'word',
                          elemMods: {
                            width: 'l'
                          }
                        },
                        {
                          elem: 'word',
                          elemMods: {
                            width: 'l'
                          }
                        },
                        {
                          elem: 'word',
                          elemMods: {
                            width: 's'
                          }
                        },
                        {
                          elem: 'word',
                          elemMods: {
                            width: 's'
                          }
                        },
                        {
                          elem: 'word',
                          elemMods: {
                            width: 'l'
                          }
                        },
                        {
                          elem: 'word',
                          elemMods: {
                            width: 'm'
                          }
                        },
                        {
                          elem: 'word',
                          elemMods: {
                            width: 'm'
                          }
                        },
                        {
                          elem: 'word',
                          elemMods: {
                            width: 's'
                          }
                        },
                        {
                          elem: 'word',
                          elemMods: {
                            width: 'm'
                          }
                        },
                        {
                          elem: 'word',
                          elemMods: {
                            width: 'm'
                          }
                        },
                        {
                          elem: 'word',
                          elemMods: {
                            width: 'm'
                          }
                        },
                        {
                          elem: 'word',
                          elemMods: {
                            width: 'm'
                          }
                        },
                        {
                          elem: 'word',
                          elemMods: {
                            width: 'm'
                          }
                        },
                        {
                          elem: 'word',
                          elemMods: {
                            width: 'm'
                          }
                        },
                        {
                          elem: 'word',
                          elemMods: {
                            width: 'l'
                          }
                        },
                        {
                          elem: 'word',
                          elemMods: {
                            width: 's'
                          }
                        },
                        {
                          elem: 'word',
                          elemMods: {
                            width: 'l'
                          }
                        },
                        {
                          elem: 'word',
                          elemMods: {
                            width: 's'
                          }
                        },
                        {
                          elem: 'word',
                          elemMods: {
                            width: 'l'
                          }
                        },
                        {
                          elem: 'word',
                          elemMods: {
                            width: 'm'
                          }
                        },
                        {
                          elem: 'word',
                          elemMods: {
                            width: 'm'
                          }
                        },
                        {
                          elem: 'word',
                          elemMods: {
                            width: 's'
                          }
                        },
                        {
                          elem: 'word',
                          elemMods: {
                            width: 'm'
                          }
                        },
                        {
                          elem: 'word',
                          elemMods: {
                            width: 'm'
                          }
                        },
                        {
                          elem: 'word',
                          elemMods: {
                            width: 'l'
                          }
                        },
                        {
                          elem: 'word',
                          elemMods: {
                            width: 'm'
                          }
                        },
                        {
                          elem: 'word',
                          elemMods: {
                            width: 's'
                          }
                        },
                        {
                          elem: 'word',
                          elemMods: {
                            width: 'm'
                          }
                        },
                        {
                          elem: 'word',
                          elemMods: {
                            width: 'l'
                          }
                        },
                        {
                          elem: 'word',
                          elemMods: {
                            width: 'l'
                          }
                        },
                        {
                          elem: 'word',
                          elemMods: {
                            width: 'm'
                          }
                        },
                        {
                          elem: 'word',
                          elemMods: {
                            width: 'm'
                          }
                        },
                        {
                          elem: 'word',
                          elemMods: {
                            width: 's'
                          }
                        },
                        {
                          elem: 'word',
                          elemMods: {
                            width: 'm'
                          }
                        },
                        {
                          elem: 'word',
                          elemMods: {
                            width: 'm'
                          }
                        },
                        {
                          elem: 'word',
                          elemMods: {
                            width: 'm'
                          }
                        },
                        {
                          elem: 'word',
                          elemMods: {
                            width: 'm'
                          }
                        },
                        {
                          elem: 'word',
                          elemMods: {
                            width: 's'
                          }
                        },
                        {
                          elem: 'word',
                          elemMods: {
                            width: 'm'
                          }
                        },
                        {
                          elem: 'word',
                          elemMods: {
                            width: 'l'
                          }
                        },
                        {
                          elem: 'word',
                          elemMods: {
                            width: 'l'
                          }
                        },
                        {
                          elem: 'word',
                          elemMods: {
                            width: 'l'
                          }
                        },
                        {
                          elem: 'word',
                          elemMods: {
                            width: 's'
                          }
                        },
                        {
                          elem: 'word',
                          elemMods: {
                            width: 'l'
                          }
                        },
                        {
                          elem: 'word',
                          elemMods: {
                            width: 'm'
                          }
                        },
                        {
                          elem: 'word',
                          elemMods: {
                            width: 'm'
                          }
                        },
                        {
                          elem: 'word',
                          elemMods: {
                            width: 's'
                          }
                        },
                        {
                          elem: 'word',
                          elemMods: {
                            width: 'm'
                          }
                        },
                        {
                          elem: 'word',
                          elemMods: {
                            width: 'm'
                          }
                        },
                        {
                          elem: 'word',
                          elemMods: {
                            width: 'm'
                          }
                        },
                        {
                          elem: 'word',
                          elemMods: {
                            width: 'm'
                          }
                        },
                        {
                          elem: 'word',
                          elemMods: {
                            width: 's'
                          }
                        },
                        {
                          elem: 'word',
                          elemMods: {
                            width: 'l'
                          }
                        },
                        {
                          elem: 'word',
                          elemMods: {
                            width: 'm'
                          }
                        }
                      ]
                    },
                    {
                      block: 'text',
                      mods: {
                        type: 'h2',
                        view: 'primary',
                        size: 'xl'
                      },
                      content: {
                        elem: 'word',
                        elemMods: {
                          width: 'l'
                        }
                      }
                    },
                    {
                      block: 'text',
                      mods: {
                        type: 'p',
                        view: 'primary',
                        size: 'm'
                      },
                      content: [
                        {
                          elem: 'word',
                          elemMods: {
                            width: 'm'
                          }
                        },
                        {
                          elem: 'word',
                          elemMods: {
                            width: 'l'
                          }
                        },
                        {
                          elem: 'word',
                          elemMods: {
                            width: 'l'
                          }
                        },
                        {
                          elem: 'word',
                          elemMods: {
                            width: 'l'
                          }
                        },
                        {
                          elem: 'word',
                          elemMods: {
                            width: 's'
                          }
                        },
                        {
                          elem: 'word',
                          elemMods: {
                            width: 'l'
                          }
                        },
                        {
                          elem: 'word',
                          elemMods: {
                            width: 'm'
                          }
                        },
                        {
                          elem: 'word',
                          elemMods: {
                            width: 'm'
                          }
                        },
                        {
                          elem: 'word',
                          elemMods: {
                            width: 's'
                          }
                        },
                        {
                          elem: 'word',
                          elemMods: {
                            width: 'm'
                          }
                        },
                        {
                          elem: 'word',
                          elemMods: {
                            width: 'm'
                          }
                        },
                        {
                          elem: 'word',
                          elemMods: {
                            width: 'm'
                          }
                        },
                        {
                          elem: 'word',
                          elemMods: {
                            width: 's'
                          }
                        },
                        {
                          elem: 'word',
                          elemMods: {
                            width: 'm'
                          }
                        },
                        {
                          elem: 'word',
                          elemMods: {
                            width: 'm'
                          }
                        },
                        {
                          elem: 'word',
                          elemMods: {
                            width: 'm'
                          }
                        },
                        {
                          elem: 'word',
                          elemMods: {
                            width: 'm'
                          }
                        },
                        {
                          elem: 'word',
                          elemMods: {
                            width: 's'
                          }
                        },
                        {
                          elem: 'word',
                          elemMods: {
                            width: 'm'
                          }
                        },
                        {
                          elem: 'word',
                          elemMods: {
                            width: 'l'
                          }
                        },
                        {
                          elem: 'word',
                          elemMods: {
                            width: 'l'
                          }
                        },
                        {
                          elem: 'word',
                          elemMods: {
                            width: 'l'
                          }
                        },
                        {
                          elem: 'word',
                          elemMods: {
                            width: 's'
                          }
                        },
                        {
                          elem: 'word',
                          elemMods: {
                            width: 'l'
                          }
                        },
                        {
                          elem: 'word',
                          elemMods: {
                            width: 'm'
                          }
                        },
                        {
                          elem: 'word',
                          elemMods: {
                            width: 'm'
                          }
                        },
                        {
                          elem: 'word',
                          elemMods: {
                            width: 's'
                          }
                        },
                        {
                          elem: 'word',
                          elemMods: {
                            width: 'm'
                          }
                        },
                        {
                          elem: 'word',
                          elemMods: {
                            width: 'm'
                          }
                        },
                        {
                          elem: 'word',
                          elemMods: {
                            width: 'm'
                          }
                        },
                        {
                          elem: 'word',
                          elemMods: {
                            width: 'm'
                          }
                        },
                        {
                          elem: 'word',
                          elemMods: {
                            width: 's'
                          }
                        }
                      ]
                    }
                  ]
                },
                {
                  elem: 'fraction',
                  elemMods: {
                    'm-col': '4'
                  },
                  content: {
                    block: 'cover',
                    mix: [
                      {
                        block: 'card',
                        mods: {
                          view: 'default'
                        }
                      },
                      {
                        block: 'theme',
                        mods: {
                          color: 'project-brand'
                        }
                      }
                    ],
                    content: [
                      {
                        elem: 'info',
                        mix: {
                          block: 'card',
                          elem: 'content',
                          elemMods: {
                            'space-a': 'xxl'
                          }
                        },
                        content: {
                          block: 'cover',
                          elem: 'figure',
                          mix: {
                            block: 'image'
                          },
                          content: {
                            elem: 'img',
                            tag: 'img',
                            attrs: {
                              src: '../img/image-placeholder-inverse.svg',
                              alt: 'Инопланетное существо'
                            }
                          }
                        }
                      },
                      {
                        elem: 'preview',
                        mix: {
                          block: 'theme',
                          mods: {
                            color: 'project-brand'
                          }
                        },
                        content: [
                          {
                            block: 'cover',
                            elem: 'name',
                            mix: {
                              block: 'text',
                              mods: {
                                view: 'primary',
                                size: 'xxl'
                              }
                            },
                            content: {
                              block: 'text',
                              elem: 'word',
                              elemMods: {
                                width: 'l'
                              }
                            }
                          },
                          {
                            block: 'cover',
                            elem: 'price',
                            mix: {
                              block: 'text',
                              mods: {
                                view: 'primary',
                                size: 'xxl'
                              }
                            },
                            content: {
                              block: 'text',
                              elem: 'word',
                              elemMods: {
                                width: 'm'
                              }
                            }
                          }
                        ]
                      },
                      {
                        elem: 'footer',
                        mix: {
                          block: 'card',
                          elem: 'footer',
                          elemMods: {
                            'space-a': 'xxl'
                          }
                        },
                        content: {
                          block: 'button',
                          mods: {
                            size: 'l',
                            width: 'full'
                          }
                        }
                      }
                    ]
                  }
                }
              ]
            }
          }
        },
        {
          block: 'section',
          mods: {
            'space-v': 'xxxxl'
          },
          mix: [
            {
              block: 'theme',
              mods: {
                color: 'project-inverse'
              }
            },
            {
              block: 'product'
            }
          ],
          tag: 'section',
          content: {
            block: 'layout',
            elem: 'container',
            elemMods: {
              size: 'm',
              align: 'center'
            },
            content: [
              {
                block: 'text',
                mix: {
                  block: 'product',
                  elem: 'title'
                },
                mods: {
                  view: 'primary',
                  size: 'xl'
                },
                content: [
                  {
                    elem: 'word',
                    elemMods: {
                      width: 'l'
                    }
                  },
                  {
                    elem: 'word',
                    elemMods: {
                      width: 'l'
                    }
                  }
                ]
              },
              {
                block: 'grid',
                mods: {
                  'col-gap': 'two-thirds',
                  'm-columns': '12'
                },
                content: [
                  {
                    block: 'product',
                    mix: [
                      {
                        block: 'card',
                        mods: {
                          view: 'default',
                          border: 'all'
                        }
                      },
                      {
                        block: 'theme',
                        mods: {
                          color: 'project-inverse'
                        }
                      },
                      {
                        block: 'grid',
                        elem: 'fraction',
                        elemMods: {
                          'm-col': '3'
                        }
                      }
                    ],
                    content: [
                      {
                        elem: 'content',
                        mix: {
                          block: 'card',
                          elem: 'content',
                          elemMods: {
                            'space-a': 'l'
                          }
                        },
                        content: {
                          block: 'product',
                          elem: 'image',
                          mix: {
                            block: 'image'
                          },
                          content: {
                            tag: 'img',
                            attrs: {
                              src: '../img/image-placeholder-inverse.svg',
                              alt: 'placeholder'
                            }
                          }
                        }
                      },
                      {
                        elem: 'footer',
                        mix: {
                          block: 'card',
                          elem: 'footer',
                          elemMods: {
                            'space-a': 'm'
                          }
                        },
                        content: [
                          {
                            block: 'product',
                            elem: 'name',
                            mix: {
                              block: 'text',
                              mods: {
                                view: 'primary',
                                size: 'm'
                              }
                            },
                            content: {
                              block: 'text',
                              elem: 'word',
                              elemMods: {
                                width: 'l'
                              }
                            }
                          },
                          {
                            block: 'product',
                            elem: 'description',
                            mix: {
                              block: 'text',
                              mods: {
                                view: 'primary',
                                size: 's'
                              }
                            },
                            content: {
                              block: 'text',
                              elem: 'word',
                              elemMods: {
                                width: 'm'
                              }
                            }
                          }
                        ]
                      }
                    ]
                  },
                  {
                    block: 'product',
                    mix: [
                      {
                        block: 'card',
                        mods: {
                          view: 'default',
                          border: 'all'
                        }
                      },
                      {
                        block: 'theme',
                        mods: {
                          color: 'project-inverse'
                        }
                      },
                      {
                        block: 'grid',
                        elem: 'fraction',
                        elemMods: {
                          'm-col': '3'
                        }
                      }
                    ],
                    content: [
                      {
                        elem: 'content',
                        mix: {
                          block: 'card',
                          elem: 'content',
                          elemMods: {
                            'space-a': 'l'
                          }
                        },
                        content: {
                          block: 'product',
                          elem: 'image',
                          mix: {
                            block: 'image'
                          },
                          content: {
                            tag: 'img',
                            attrs: {
                              src: '../img/image-placeholder-inverse.svg',
                              alt: 'placeholder'
                            }
                          }
                        }
                      },
                      {
                        elem: 'footer',
                        mix: {
                          block: 'card',
                          elem: 'footer',
                          elemMods: {
                            'space-a': 'm'
                          }
                        },
                        content: [
                          {
                            block: 'product',
                            elem: 'name',
                            mix: {
                              block: 'text',
                              mods: {
                                view: 'primary',
                                size: 'm'
                              }
                            },
                            content: {
                              block: 'text',
                              elem: 'word',
                              elemMods: {
                                width: 'l'
                              }
                            }
                          },
                          {
                            block: 'product',
                            elem: 'description',
                            mix: {
                              block: 'text',
                              mods: {
                                view: 'primary',
                                size: 's'
                              }
                            },
                            content: {
                              block: 'text',
                              elem: 'word',
                              elemMods: {
                                width: 'm'
                              }
                            }
                          }
                        ]
                      }
                    ]
                  },
                  {
                    block: 'product',
                    mix: [
                      {
                        block: 'card',
                        mods: {
                          view: 'default',
                          border: 'all'
                        }
                      },
                      {
                        block: 'theme',
                        mods: {
                          color: 'project-inverse'
                        }
                      },
                      {
                        block: 'grid',
                        elem: 'fraction',
                        elemMods: {
                          'm-col': '3'
                        }
                      }
                    ],
                    content: [
                      {
                        elem: 'content',
                        mix: {
                          block: 'card',
                          elem: 'content',
                          elemMods: {
                            'space-a': 'l'
                          }
                        },
                        content: {
                          block: 'product',
                          elem: 'image',
                          mix: {
                            block: 'image'
                          },
                          content: {
                            tag: 'img',
                            attrs: {
                              src: '../img/image-placeholder-inverse.svg',
                              alt: 'placeholder'
                            }
                          }
                        }
                      },
                      {
                        elem: 'footer',
                        mix: {
                          block: 'card',
                          elem: 'footer',
                          elemMods: {
                            'space-a': 'm'
                          }
                        },
                        content: [
                          {
                            block: 'product',
                            elem: 'name',
                            mix: {
                              block: 'text',
                              mods: {
                                view: 'primary',
                                size: 'm'
                              }
                            },
                            content: {
                              block: 'text',
                              elem: 'word',
                              elemMods: {
                                width: 'l'
                              }
                            }
                          },
                          {
                            block: 'product',
                            elem: 'description',
                            mix: {
                              block: 'text',
                              mods: {
                                view: 'primary',
                                size: 's'
                              }
                            },
                            content: {
                              block: 'text',
                              elem: 'word',
                              elemMods: {
                                width: 'm'
                              }
                            }
                          }
                        ]
                      }
                    ]
                  },
                  {
                    block: 'product',
                    mix: [
                      {
                        block: 'card',
                        mods: {
                          view: 'default',
                          border: 'all'
                        }
                      },
                      {
                        block: 'theme',
                        mods: {
                          color: 'project-inverse'
                        }
                      },
                      {
                        block: 'grid',
                        elem: 'fraction',
                        elemMods: {
                          'm-col': '3'
                        }
                      }
                    ],
                    content: [
                      {
                        elem: 'content',
                        mix: {
                          block: 'card',
                          elem: 'content',
                          elemMods: {
                            'space-a': 'l'
                          }
                        },
                        content: {
                          block: 'product',
                          elem: 'image',
                          mix: {
                            block: 'image'
                          },
                          content: {
                            tag: 'img',
                            attrs: {
                              src: '../img/image-placeholder-inverse.svg',
                              alt: 'placeholder'
                            }
                          }
                        }
                      },
                      {
                        elem: 'footer',
                        mix: {
                          block: 'card',
                          elem: 'footer',
                          elemMods: {
                            'space-a': 'm'
                          }
                        },
                        content: [
                          {
                            block: 'product',
                            elem: 'name',
                            mix: {
                              block: 'text',
                              mods: {
                                view: 'primary',
                                size: 'm'
                              }
                            },
                            content: {
                              block: 'text',
                              elem: 'word',
                              elemMods: {
                                width: 'l'
                              }
                            }
                          },
                          {
                            block: 'product',
                            elem: 'description',
                            mix: {
                              block: 'text',
                              mods: {
                                view: 'primary',
                                size: 's'
                              }
                            },
                            content: {
                              block: 'text',
                              elem: 'word',
                              elemMods: {
                                width: 'm'
                              }
                            }
                          }
                        ]
                      }
                    ]
                  }
                ]
              }
            ]
          }
        }
      ]
    },
    {
      block: 'page-footer',
      tag: 'footer',
      content: {
        block: 'layout',
        elem: 'container',
        elemMods: {
          size: 'm',
          align: 'center'
        },
        content: {
          block: 'footer',
          content: {
            elem: 'content',
            content: [
              {
                block: 'footer',
                elem: 'text',
                elemMods: {
                  left: true
                },
                mix: {
                  block: 'text',
                  mods: {
                    view: 'primary',
                    size: 'l'
                  }
                },
                content: [
                  {
                    block: 'text',
                    elem: 'word',
                    elemMods: {
                      width: 'l'
                    }
                  },
                  {
                    block: 'text',
                    elem: 'word',
                    elemMods: {
                      width: 's'
                    }
                  }
                ]
              },
              {
                block: 'footer',
                elem: 'text',
                elemMods: {
                  right: true
                },
                mix: {
                  block: 'text',
                  mods: {
                    view: 'primary',
                    size: 'l'
                  }
                },
                content: {
                  block: 'text',
                  elem: 'word',
                  elemMods: {
                    width: 'l'
                  }
                }
              }
            ]
          }
        }
      }
    }
  ]
};

const collectPage = {
  block: 'layout',
  content: [
    {
      block: 'page-header',
      tag: 'header',
      content: {
        block: 'layout',
        elem: 'container',
        elemMods: {
          size: 'm',
          align: 'center'
        },
        content: {
          block: 'header',
          content: [
            {
              elem: 'logotype'
            },
            {
              block: 'onoffswitch',
              content: {
                elem: 'label',
                content: {
                  block: 'onoffswitch',
                  elem: 'slider',
                  tag: 'span'
                }
              }
            }
          ]
        }
      }
    },
    {
      block: 'page-content',
      tag: 'main',
      content: [
        {
          block: 'section',
          mods: {
            'indent-b': 'xxl',
            'space-v': 'xxxxxl'
          },
          mix: {
            block: 'theme',
            mods: {
              color: 'project-inverse'
            }
          },
          tag: 'section',
          content: {
            block: 'layout',
            elem: 'container',
            elemMods: {
              size: 'm',
              align: 'center'
            },
            content: {
              block: 'grid',
              mods: {
                'col-gap': 'two-thirds',
                'm-columns': '12'
              },
              content: [
                {
                  block: 'collect',
                  mix: [
                    {
                      block: 'card',
                      mods: {
                        view: 'default',
                        border: 'all'
                      }
                    },
                    {
                      block: 'theme',
                      mods: {
                        color: 'project-inverse'
                      }
                    },
                    {
                      block: 'grid',
                      elem: 'fraction',
                      elemMods: {
                        'm-col': '3'
                      }
                    }
                  ],
                  content: [
                    {
                      elem: 'image',
                      mix: {
                        block: 'card',
                        elem: 'content'
                      },
                      content: [
                        {
                          block: 'collect',
                          elem: 'figure',
                          mix: {
                            block: 'image'
                          },
                          content: {
                            block: 'cover',
                            elem: 'img',
                            tag: 'img',
                            attrs: {
                              src: '../img/image-placeholder-inverse.svg',
                              alt: 'Инопланетное существо'
                            }
                          }
                        },
                        {
                          block: 'collect',
                          elem: 'meter',
                          content: {
                            elem: 'progress',
                            elemMods: {
                              fill: 'two-third'
                            }
                          }
                        }
                      ]
                    },
                    {
                      elem: 'footer',
                      mix: {
                        block: 'card',
                        elem: 'footer',
                        elemMods: {
                          'space-a': 'l'
                        }
                      },
                      content: [
                        {
                          block: 'collect',
                          elem: 'title',
                          mix: {
                            block: 'text',
                            mods: {
                              size: 'l',
                              view: 'primary'
                            }
                          },
                          content: [
                            {
                              block: 'text',
                              elem: 'word',
                              elemMods: {
                                width: 'l'
                              }
                            },
                            {
                              block: 'text',
                              elem: 'word',
                              elemMods: {
                                width: 'm'
                              }
                            }
                          ]
                        },
                        {
                          block: 'collect',
                          elem: 'description',
                          mix: {
                            block: 'text',
                            mods: {
                              size: 'm',
                              view: 'secondary'
                            }
                          },
                          content: [
                            {
                              block: 'text',
                              elem: 'word',
                              elemMods: {
                                width: 's'
                              }
                            },
                            {
                              block: 'text',
                              elem: 'word',
                              elemMods: {
                                width: 'l'
                              }
                            },
                            {
                              block: 'text',
                              elem: 'word',
                              elemMods: {
                                width: 'm'
                              }
                            },
                            {
                              block: 'text',
                              elem: 'word',
                              elemMods: {
                                width: 's'
                              }
                            },
                            {
                              block: 'text',
                              elem: 'word',
                              elemMods: {
                                width: 's'
                              }
                            },
                            {
                              block: 'text',
                              elem: 'word',
                              elemMods: {
                                width: 'l'
                              }
                            },
                            {
                              block: 'text',
                              elem: 'word',
                              elemMods: {
                                width: 'm'
                              }
                            },
                            {
                              block: 'text',
                              elem: 'word',
                              elemMods: {
                                width: 'm'
                              }
                            },
                            {
                              block: 'text',
                              elem: 'word',
                              elemMods: {
                                width: 'l'
                              }
                            },
                            {
                              block: 'text',
                              elem: 'word',
                              elemMods: {
                                width: 'l'
                              }
                            },
                            {
                              block: 'text',
                              elem: 'word',
                              elemMods: {
                                width: 's'
                              }
                            }
                          ]
                        }
                      ]
                    }
                  ]
                },
                {
                  block: 'collect',
                  mix: [
                    {
                      block: 'card',
                      mods: {
                        view: 'default',
                        border: 'all'
                      }
                    },
                    {
                      block: 'theme',
                      mods: {
                        color: 'project-inverse'
                      }
                    },
                    {
                      block: 'grid',
                      elem: 'fraction',
                      elemMods: {
                        'm-col': '3'
                      }
                    }
                  ],
                  content: [
                    {
                      elem: 'image',
                      mix: {
                        block: 'card',
                        elem: 'content'
                      },
                      content: [
                        {
                          block: 'collect',
                          elem: 'figure',
                          mix: {
                            block: 'image'
                          },
                          content: {
                            block: 'cover',
                            elem: 'img',
                            tag: 'img',
                            attrs: {
                              src: '../img/image-placeholder-inverse.svg',
                              alt: 'Инопланетное существо'
                            }
                          }
                        },
                        {
                          block: 'collect',
                          elem: 'meter',
                          content: {
                            elem: 'progress',
                            elemMods: {
                              fill: 'one-third'
                            }
                          }
                        }
                      ]
                    },
                    {
                      elem: 'footer',
                      mix: {
                        block: 'card',
                        elem: 'footer',
                        elemMods: {
                          'space-a': 'l'
                        }
                      },
                      content: [
                        {
                          block: 'collect',
                          elem: 'title',
                          mix: {
                            block: 'text',
                            mods: {
                              size: 'l',
                              view: 'primary'
                            }
                          },
                          content: [
                            {
                              block: 'text',
                              elem: 'word',
                              elemMods: {
                                width: 'l'
                              }
                            },
                            {
                              block: 'text',
                              elem: 'word',
                              elemMods: {
                                width: 'm'
                              }
                            }
                          ]
                        },
                        {
                          block: 'collect',
                          elem: 'description',
                          mix: {
                            block: 'text',
                            mods: {
                              size: 'm',
                              view: 'secondary'
                            }
                          },
                          content: [
                            {
                              block: 'text',
                              elem: 'word',
                              elemMods: {
                                width: 's'
                              }
                            },
                            {
                              block: 'text',
                              elem: 'word',
                              elemMods: {
                                width: 'l'
                              }
                            },
                            {
                              block: 'text',
                              elem: 'word',
                              elemMods: {
                                width: 'm'
                              }
                            },
                            {
                              block: 'text',
                              elem: 'word',
                              elemMods: {
                                width: 's'
                              }
                            },
                            {
                              block: 'text',
                              elem: 'word',
                              elemMods: {
                                width: 's'
                              }
                            },
                            {
                              block: 'text',
                              elem: 'word',
                              elemMods: {
                                width: 'l'
                              }
                            },
                            {
                              block: 'text',
                              elem: 'word',
                              elemMods: {
                                width: 'm'
                              }
                            },
                            {
                              block: 'text',
                              elem: 'word',
                              elemMods: {
                                width: 'm'
                              }
                            },
                            {
                              block: 'text',
                              elem: 'word',
                              elemMods: {
                                width: 'l'
                              }
                            },
                            {
                              block: 'text',
                              elem: 'word',
                              elemMods: {
                                width: 'l'
                              }
                            },
                            {
                              block: 'text',
                              elem: 'word',
                              elemMods: {
                                width: 's'
                              }
                            }
                          ]
                        }
                      ]
                    }
                  ]
                },
                {
                  block: 'collect',
                  mix: [
                    {
                      block: 'card',
                      mods: {
                        view: 'default',
                        border: 'all'
                      }
                    },
                    {
                      block: 'theme',
                      mods: {
                        color: 'project-inverse'
                      }
                    },
                    {
                      block: 'grid',
                      elem: 'fraction',
                      elemMods: {
                        'm-col': '3'
                      }
                    }
                  ],
                  content: [
                    {
                      elem: 'image',
                      mix: {
                        block: 'card',
                        elem: 'content'
                      },
                      content: [
                        {
                          block: 'collect',
                          elem: 'figure',
                          mix: {
                            block: 'image'
                          },
                          content: {
                            block: 'cover',
                            elem: 'img',
                            tag: 'img',
                            attrs: {
                              src: '../img/image-placeholder-inverse.svg',
                              alt: 'Инопланетное существо'
                            }
                          }
                        },
                        {
                          block: 'collect',
                          elem: 'meter',
                          content: {
                            elem: 'progress',
                            elemMods: {
                              fill: 'half'
                            }
                          }
                        }
                      ]
                    },
                    {
                      elem: 'footer',
                      mix: {
                        block: 'card',
                        elem: 'footer',
                        elemMods: {
                          'space-a': 'l'
                        }
                      },
                      content: [
                        {
                          block: 'collect',
                          elem: 'title',
                          mix: {
                            block: 'text',
                            mods: {
                              size: 'l',
                              view: 'primary'
                            }
                          },
                          content: [
                            {
                              block: 'text',
                              elem: 'word',
                              elemMods: {
                                width: 'l'
                              }
                            },
                            {
                              block: 'text',
                              elem: 'word',
                              elemMods: {
                                width: 'm'
                              }
                            }
                          ]
                        },
                        {
                          block: 'collect',
                          elem: 'description',
                          mix: {
                            block: 'text',
                            mods: {
                              size: 'm',
                              view: 'secondary'
                            }
                          },
                          content: [
                            {
                              block: 'text',
                              elem: 'word',
                              elemMods: {
                                width: 's'
                              }
                            },
                            {
                              block: 'text',
                              elem: 'word',
                              elemMods: {
                                width: 'l'
                              }
                            },
                            {
                              block: 'text',
                              elem: 'word',
                              elemMods: {
                                width: 'm'
                              }
                            },
                            {
                              block: 'text',
                              elem: 'word',
                              elemMods: {
                                width: 's'
                              }
                            },
                            {
                              block: 'text',
                              elem: 'word',
                              elemMods: {
                                width: 's'
                              }
                            },
                            {
                              block: 'text',
                              elem: 'word',
                              elemMods: {
                                width: 'l'
                              }
                            },
                            {
                              block: 'text',
                              elem: 'word',
                              elemMods: {
                                width: 'm'
                              }
                            },
                            {
                              block: 'text',
                              elem: 'word',
                              elemMods: {
                                width: 'm'
                              }
                            },
                            {
                              block: 'text',
                              elem: 'word',
                              elemMods: {
                                width: 'l'
                              }
                            },
                            {
                              block: 'text',
                              elem: 'word',
                              elemMods: {
                                width: 'l'
                              }
                            },
                            {
                              block: 'text',
                              elem: 'word',
                              elemMods: {
                                width: 's'
                              }
                            }
                          ]
                        }
                      ]
                    }
                  ]
                },
                {
                  block: 'collect',
                  mix: [
                    {
                      block: 'card',
                      mods: {
                        view: 'default',
                        border: 'all'
                      }
                    },
                    {
                      block: 'theme',
                      mods: {
                        color: 'project-inverse'
                      }
                    },
                    {
                      block: 'grid',
                      elem: 'fraction',
                      elemMods: {
                        'm-col': '3'
                      }
                    }
                  ],
                  content: [
                    {
                      elem: 'image',
                      mix: {
                        block: 'card',
                        elem: 'content'
                      },
                      content: [
                        {
                          block: 'collect',
                          elem: 'figure',
                          mix: {
                            block: 'image'
                          },
                          content: {
                            block: 'cover',
                            elem: 'img',
                            tag: 'img',
                            attrs: {
                              src: '../img/image-placeholder-inverse.svg',
                              alt: 'Инопланетное существо'
                            }
                          }
                        },
                        {
                          block: 'collect',
                          elem: 'meter',
                          content: {
                            elem: 'progress',
                            elemMods: {
                              fill: 'two-third'
                            }
                          }
                        }
                      ]
                    },
                    {
                      elem: 'footer',
                      mix: {
                        block: 'card',
                        elem: 'footer',
                        elemMods: {
                          'space-a': 'l'
                        }
                      },
                      content: [
                        {
                          block: 'collect',
                          elem: 'title',
                          mix: {
                            block: 'text',
                            mods: {
                              size: 'l',
                              view: 'primary'
                            }
                          },
                          content: [
                            {
                              block: 'text',
                              elem: 'word',
                              elemMods: {
                                width: 'l'
                              }
                            },
                            {
                              block: 'text',
                              elem: 'word',
                              elemMods: {
                                width: 'm'
                              }
                            }
                          ]
                        },
                        {
                          block: 'collect',
                          elem: 'description',
                          mix: {
                            block: 'text',
                            mods: {
                              size: 'm',
                              view: 'secondary'
                            }
                          },
                          content: [
                            {
                              block: 'text',
                              elem: 'word',
                              elemMods: {
                                width: 's'
                              }
                            },
                            {
                              block: 'text',
                              elem: 'word',
                              elemMods: {
                                width: 'l'
                              }
                            },
                            {
                              block: 'text',
                              elem: 'word',
                              elemMods: {
                                width: 'm'
                              }
                            },
                            {
                              block: 'text',
                              elem: 'word',
                              elemMods: {
                                width: 's'
                              }
                            },
                            {
                              block: 'text',
                              elem: 'word',
                              elemMods: {
                                width: 's'
                              }
                            },
                            {
                              block: 'text',
                              elem: 'word',
                              elemMods: {
                                width: 'l'
                              }
                            },
                            {
                              block: 'text',
                              elem: 'word',
                              elemMods: {
                                width: 'm'
                              }
                            },
                            {
                              block: 'text',
                              elem: 'word',
                              elemMods: {
                                width: 'm'
                              }
                            },
                            {
                              block: 'text',
                              elem: 'word',
                              elemMods: {
                                width: 'l'
                              }
                            },
                            {
                              block: 'text',
                              elem: 'word',
                              elemMods: {
                                width: 'l'
                              }
                            },
                            {
                              block: 'text',
                              elem: 'word',
                              elemMods: {
                                width: 's'
                              }
                            }
                          ]
                        }
                      ]
                    }
                  ]
                }
              ]
            }
          }
        },
        {
          block: 'section',
          tag: 'section',
          content: {
            block: 'layout',
            elem: 'container',
            elemMods: {
              size: 'm',
              align: 'center'
            },
            content: {
              block: 'grid',
              mods: {
                'col-gap': 'full',
                'm-columns': '12'
              },
              content: [
                {
                  block: 'articles',
                  mix: [
                    {
                      block: 'list',
                      mods: {
                        view: 'default'
                      }
                    },
                    {
                      block: 'grid',
                      elem: 'fraction',
                      elemMods: {
                        'm-col': '5'
                      }
                    }
                  ],
                  content: [
                    {
                      elem: 'article',
                      mix: {
                        block: 'list',
                        elem: 'item',
                        elemMods: {
                          'indent-b': 'xl'
                        }
                      },
                      content: {
                        block: 'articles',
                        elem: 'unit',
                        mix: {
                          block: 'icon-plus',
                          mods: {
                            'vertical-align': 'center'
                          }
                        },
                        content: [
                          {
                            elem: 'pic',
                            mix: [
                              {
                                block: 'image'
                              },
                              {
                                block: 'theme',
                                mods: {
                                  color: 'project-inverse'
                                }
                              },
                              {
                                block: 'icon-plus',
                                elem: 'icon',
                                elemMods: {
                                  'indent-r': 'm'
                                }
                              }
                            ],
                            content: {
                              block: 'articles',
                              elem: 'image',
                              tag: 'img',
                              attrs: {
                                src: '../img/image-placeholder-primary.svg',
                                alt: 'Инопланетное существо'
                              }
                            }
                          },
                          {
                            elem: 'content',
                            mix: {
                              block: 'icon-plus',
                              elem: 'block'
                            },
                            content: [
                              {
                                block: 'articles',
                                elem: 'date',
                                mix: [
                                  {
                                    block: 'articles',
                                    elem: 'text'
                                  },
                                  {
                                    block: 'text',
                                    mods: {
                                      view: 'secondary',
                                      size: 'l'
                                    }
                                  }
                                ],
                                content: [
                                  {
                                    block: 'text',
                                    elem: 'word',
                                    elemMods: {
                                      width: 'm'
                                    }
                                  },
                                  {
                                    block: 'text',
                                    elem: 'word',
                                    elemMods: {
                                      width: 's'
                                    }
                                  },
                                  {
                                    block: 'text',
                                    elem: 'word',
                                    elemMods: {
                                      width: 's'
                                    }
                                  },
                                  {
                                    block: 'text',
                                    elem: 'word',
                                    elemMods: {
                                      width: 'm'
                                    }
                                  }
                                ]
                              },
                              {
                                block: 'articles',
                                elem: 'title',
                                mix: [
                                  {
                                    block: 'articles',
                                    elem: 'text'
                                  },
                                  {
                                    block: 'text',
                                    mods: {
                                      view: 'primary',
                                      size: 'l'
                                    }
                                  }
                                ],
                                content: [
                                  {
                                    block: 'text',
                                    elem: 'word',
                                    elemMods: {
                                      width: 'l'
                                    }
                                  },
                                  {
                                    block: 'text',
                                    elem: 'word',
                                    elemMods: {
                                      width: 'm'
                                    }
                                  }
                                ]
                              },
                              {
                                block: 'articles',
                                elem: 'tag',
                                mix: [
                                  {
                                    block: 'articles',
                                    elem: 'text'
                                  },
                                  {
                                    block: 'text',
                                    mods: {
                                      view: 'link',
                                      size: 'm'
                                    }
                                  }
                                ],
                                content: [
                                  {
                                    block: 'text',
                                    elem: 'word',
                                    elemMods: {
                                      width: 'm'
                                    }
                                  },
                                  {
                                    block: 'text',
                                    elem: 'word',
                                    elemMods: {
                                      width: 's'
                                    }
                                  }
                                ]
                              }
                            ]
                          }
                        ]
                      }
                    },
                    {
                      elem: 'article',
                      mix: {
                        block: 'list',
                        elem: 'item',
                        elemMods: {
                          'indent-b': 'xl'
                        }
                      },
                      content: {
                        block: 'articles',
                        elem: 'unit',
                        mix: {
                          block: 'icon-plus',
                          mods: {
                            'vertical-align': 'center'
                          }
                        },
                        content: [
                          {
                            elem: 'pic',
                            mix: [
                              {
                                block: 'image'
                              },
                              {
                                block: 'theme',
                                mods: {
                                  color: 'project-inverse'
                                }
                              },
                              {
                                block: 'icon-plus',
                                elem: 'icon',
                                elemMods: {
                                  'indent-r': 'm'
                                }
                              }
                            ],
                            content: {
                              block: 'articles',
                              elem: 'image',
                              tag: 'img',
                              attrs: {
                                src: '../img/image-placeholder-primary.svg',
                                alt: 'Инопланетное существо'
                              }
                            }
                          },
                          {
                            elem: 'content',
                            mix: {
                              block: 'icon-plus',
                              elem: 'block'
                            },
                            content: [
                              {
                                block: 'articles',
                                elem: 'date',
                                mix: [
                                  {
                                    block: 'articles',
                                    elem: 'text'
                                  },
                                  {
                                    block: 'text',
                                    mods: {
                                      view: 'secondary',
                                      size: 'l'
                                    }
                                  }
                                ],
                                content: [
                                  {
                                    block: 'text',
                                    elem: 'word',
                                    elemMods: {
                                      width: 'm'
                                    }
                                  },
                                  {
                                    block: 'text',
                                    elem: 'word',
                                    elemMods: {
                                      width: 's'
                                    }
                                  },
                                  {
                                    block: 'text',
                                    elem: 'word',
                                    elemMods: {
                                      width: 's'
                                    }
                                  },
                                  {
                                    block: 'text',
                                    elem: 'word',
                                    elemMods: {
                                      width: 'm'
                                    }
                                  }
                                ]
                              },
                              {
                                block: 'articles',
                                elem: 'title',
                                mix: [
                                  {
                                    block: 'articles',
                                    elem: 'text'
                                  },
                                  {
                                    block: 'text',
                                    mods: {
                                      view: 'primary',
                                      size: 'l'
                                    }
                                  }
                                ],
                                content: [
                                  {
                                    block: 'text',
                                    elem: 'word',
                                    elemMods: {
                                      width: 'l'
                                    }
                                  },
                                  {
                                    block: 'text',
                                    elem: 'word',
                                    elemMods: {
                                      width: 'm'
                                    }
                                  }
                                ]
                              },
                              {
                                block: 'articles',
                                elem: 'tag',
                                mix: [
                                  {
                                    block: 'articles',
                                    elem: 'text'
                                  },
                                  {
                                    block: 'text',
                                    mods: {
                                      view: 'link',
                                      size: 'm'
                                    }
                                  }
                                ],
                                content: [
                                  {
                                    block: 'text',
                                    elem: 'word',
                                    elemMods: {
                                      width: 'm'
                                    }
                                  },
                                  {
                                    block: 'text',
                                    elem: 'word',
                                    elemMods: {
                                      width: 's'
                                    }
                                  }
                                ]
                              }
                            ]
                          }
                        ]
                      }
                    },
                    {
                      elem: 'article',
                      mix: {
                        block: 'list',
                        elem: 'item',
                        elemMods: {
                          'indent-b': 'xl'
                        }
                      },
                      content: {
                        block: 'articles',
                        elem: 'unit',
                        mix: {
                          block: 'icon-plus',
                          mods: {
                            'vertical-align': 'center'
                          }
                        },
                        content: [
                          {
                            elem: 'pic',
                            mix: [
                              {
                                block: 'image'
                              },
                              {
                                block: 'theme',
                                mods: {
                                  color: 'project-inverse'
                                }
                              },
                              {
                                block: 'icon-plus',
                                elem: 'icon',
                                elemMods: {
                                  'indent-r': 'm'
                                }
                              }
                            ],
                            content: {
                              block: 'articles',
                              elem: 'image',
                              tag: 'img',
                              attrs: {
                                src: '../img/image-placeholder-primary.svg',
                                alt: 'Инопланетное существо'
                              }
                            }
                          },
                          {
                            elem: 'content',
                            mix: {
                              block: 'icon-plus',
                              elem: 'block'
                            },
                            content: [
                              {
                                block: 'articles',
                                elem: 'date',
                                mix: [
                                  {
                                    block: 'articles',
                                    elem: 'text'
                                  },
                                  {
                                    block: 'text',
                                    mods: {
                                      view: 'secondary',
                                      size: 'l'
                                    }
                                  }
                                ],
                                content: [
                                  {
                                    block: 'text',
                                    elem: 'word',
                                    elemMods: {
                                      width: 'm'
                                    }
                                  },
                                  {
                                    block: 'text',
                                    elem: 'word',
                                    elemMods: {
                                      width: 's'
                                    }
                                  },
                                  {
                                    block: 'text',
                                    elem: 'word',
                                    elemMods: {
                                      width: 's'
                                    }
                                  },
                                  {
                                    block: 'text',
                                    elem: 'word',
                                    elemMods: {
                                      width: 'm'
                                    }
                                  }
                                ]
                              },
                              {
                                block: 'articles',
                                elem: 'title',
                                mix: [
                                  {
                                    block: 'articles',
                                    elem: 'text'
                                  },
                                  {
                                    block: 'text',
                                    mods: {
                                      view: 'primary',
                                      size: 'l'
                                    }
                                  }
                                ],
                                content: [
                                  {
                                    block: 'text',
                                    elem: 'word',
                                    elemMods: {
                                      width: 'l'
                                    }
                                  },
                                  {
                                    block: 'text',
                                    elem: 'word',
                                    elemMods: {
                                      width: 'm'
                                    }
                                  }
                                ]
                              },
                              {
                                block: 'articles',
                                elem: 'tag',
                                mix: [
                                  {
                                    block: 'articles',
                                    elem: 'text'
                                  },
                                  {
                                    block: 'text',
                                    mods: {
                                      view: 'link',
                                      size: 'm'
                                    }
                                  }
                                ],
                                content: [
                                  {
                                    block: 'text',
                                    elem: 'word',
                                    elemMods: {
                                      width: 'm'
                                    }
                                  },
                                  {
                                    block: 'text',
                                    elem: 'word',
                                    elemMods: {
                                      width: 's'
                                    }
                                  }
                                ]
                              }
                            ]
                          }
                        ]
                      }
                    }
                  ]
                },
                {
                  block: 'offer',
                  mix: [
                    {
                      block: 'theme',
                      mods: {
                        color: 'megafon-brand'
                      }
                    },
                    {
                      block: 'card',
                      mods: {
                        view: 'default'
                      }
                    },
                    {
                      block: 'grid',
                      elem: 'fraction',
                      elemMods: {
                        'm-col': '3'
                      }
                    }
                  ],
                  content: [
                    {
                      elem: 'partner',
                      mix: {
                        block: 'card',
                        elem: 'content',
                        elemMods: {
                          'space-a': 'xl'
                        }
                      },
                      content: [
                        {
                          block: 'offer',
                          elem: 'brand-logo',
                          mix: {
                            block: 'brand-logo',
                            mods: {
                              name: 'megafon',
                              size: 'm'
                            }
                          }
                        },
                        {
                          block: 'offer',
                          elem: 'discount',
                          mix: [
                            {
                              block: 'offer',
                              elem: 'text'
                            },
                            {
                              block: 'text',
                              mods: {
                                view: 'ghost',
                                size: 's'
                              }
                            }
                          ],
                          content: {
                            block: 'text',
                            elem: 'word',
                            elemMods: {
                              width: 'm'
                            }
                          }
                        },
                        {
                          block: 'offer',
                          elem: 'title',
                          mix: [
                            {
                              block: 'offer',
                              elem: 'text'
                            },
                            {
                              block: 'text',
                              mods: {
                                view: 'primary',
                                size: 'xxl'
                              }
                            }
                          ],
                          content: {
                            block: 'text',
                            elem: 'word',
                            elemMods: {
                              width: 'm'
                            }
                          }
                        }
                      ]
                    },
                    {
                      elem: 'footer',
                      mix: {
                        block: 'card',
                        elem: 'footer',
                        elemMods: {
                          'space-a': 'xl'
                        }
                      },
                      content: {
                        block: 'offer',
                        elem: 'description',
                        mix: [
                          {
                            block: 'offer',
                            elem: 'text'
                          },
                          {
                            block: 'text',
                            mods: {
                              view: 'secondary',
                              size: 'm'
                            }
                          }
                        ],
                        content: [
                          {
                            block: 'text',
                            elem: 'word',
                            elemMods: {
                              width: 'l'
                            }
                          },
                          {
                            block: 'text',
                            elem: 'word',
                            elemMods: {
                              width: 's'
                            }
                          },
                          {
                            block: 'text',
                            elem: 'word',
                            elemMods: {
                              width: 'm'
                            }
                          },
                          {
                            block: 'text',
                            elem: 'word',
                            elemMods: {
                              width: 'l'
                            }
                          },
                          {
                            block: 'text',
                            elem: 'word',
                            elemMods: {
                              width: 's'
                            }
                          },
                          {
                            block: 'text',
                            elem: 'word',
                            elemMods: {
                              width: 'm'
                            }
                          },
                          {
                            block: 'text',
                            elem: 'word',
                            elemMods: {
                              width: 's'
                            }
                          },
                          {
                            block: 'text',
                            elem: 'word',
                            elemMods: {
                              width: 'l'
                            }
                          }
                        ]
                      }
                    }
                  ]
                },
                {
                  block: 'subscription',
                  mix: [
                    {
                      block: 'card',
                      mods: {
                        view: 'default'
                      }
                    },
                    {
                      block: 'theme',
                      mods: {
                        color: 'project-brand'
                      }
                    },
                    {
                      block: 'grid',
                      elem: 'fraction',
                      elemMods: {
                        'm-col': '4'
                      }
                    }
                  ],
                  content: [
                    {
                      elem: 'info',
                      mix: {
                        block: 'card',
                        elem: 'content',
                        elemMods: {
                          'space-a': 'xl'
                        }
                      },
                      content: [
                        {
                          block: 'subscription',
                          elem: 'title',
                          mix: [
                            {
                              block: 'subscription',
                              elem: 'text'
                            },
                            {
                              block: 'text',
                              mods: {
                                view: 'primary',
                                size: 'xxl'
                              }
                            }
                          ],
                          content: {
                            block: 'text',
                            elem: 'word',
                            elemMods: {
                              width: 'l'
                            }
                          }
                        },
                        {
                          block: 'subscription',
                          elem: 'subtitle',
                          mix: [
                            {
                              block: 'subscription',
                              elem: 'text'
                            },
                            {
                              block: 'text',
                              mods: {
                                view: 'primary',
                                size: 'l'
                              }
                            }
                          ],
                          content: [
                            {
                              block: 'text',
                              elem: 'word',
                              elemMods: {
                                width: 'l'
                              }
                            },
                            {
                              block: 'text',
                              elem: 'word',
                              elemMods: {
                                width: 'm'
                              }
                            },
                            {
                              block: 'text',
                              elem: 'word',
                              elemMods: {
                                width: 's'
                              }
                            }
                          ]
                        },
                        {
                          block: 'subscription',
                          elem: 'subtitle',
                          mix: [
                            {
                              block: 'subscription',
                              elem: 'text'
                            },
                            {
                              block: 'text',
                              mods: {
                                view: 'primary',
                                size: 'l'
                              }
                            }
                          ],
                          content: [
                            {
                              block: 'text',
                              elem: 'word',
                              elemMods: {
                                width: 'l'
                              }
                            },
                            {
                              block: 'text',
                              elem: 'word',
                              elemMods: {
                                width: 's'
                              }
                            },
                            {
                              block: 'text',
                              elem: 'word',
                              elemMods: {
                                width: 's'
                              }
                            }
                          ]
                        },
                        {
                          block: 'subscription',
                          elem: 'subtitle',
                          mix: [
                            {
                              block: 'subscription',
                              elem: 'text'
                            },
                            {
                              block: 'text',
                              mods: {
                                view: 'primary',
                                size: 'l'
                              }
                            }
                          ],
                          content: [
                            {
                              block: 'text',
                              elem: 'word',
                              elemMods: {
                                width: 'm'
                              }
                            },
                            {
                              block: 'text',
                              elem: 'word',
                              elemMods: {
                                width: 's'
                              }
                            },
                            {
                              block: 'text',
                              elem: 'word',
                              elemMods: {
                                width: 's'
                              }
                            }
                          ]
                        },
                        {
                          block: 'subscription',
                          elem: 'subtitle',
                          mix: [
                            {
                              block: 'subscription',
                              elem: 'text'
                            },
                            {
                              block: 'text',
                              mods: {
                                view: 'primary',
                                size: 'l'
                              }
                            }
                          ],
                          content: [
                            {
                              block: 'text',
                              elem: 'word',
                              elemMods: {
                                width: 'l'
                              }
                            },
                            {
                              block: 'text',
                              elem: 'word',
                              elemMods: {
                                width: 's'
                              }
                            },
                            {
                              block: 'text',
                              elem: 'word',
                              elemMods: {
                                width: 's'
                              }
                            }
                          ]
                        },
                        {
                          block: 'subscription',
                          elem: 'subtitle',
                          mix: [
                            {
                              block: 'subscription',
                              elem: 'text'
                            },
                            {
                              block: 'text',
                              mods: {
                                view: 'primary',
                                size: 'l'
                              }
                            }
                          ],
                          content: [
                            {
                              block: 'text',
                              elem: 'word',
                              elemMods: {
                                width: 'm'
                              }
                            },
                            {
                              block: 'text',
                              elem: 'word',
                              elemMods: {
                                width: 's'
                              }
                            },
                            {
                              block: 'text',
                              elem: 'word',
                              elemMods: {
                                width: 's'
                              }
                            }
                          ]
                        }
                      ]
                    },
                    {
                      elem: 'footer',
                      mix: [
                        {
                          block: 'list'
                        },
                        {
                          block: 'card',
                          elem: 'footer',
                          elemMods: {
                            'space-a': 'xl'
                          }
                        }
                      ],
                      content: {
                        block: 'subscription',
                        elem: 'control',
                        mix: {
                          block: 'list',
                          elem: 'item'
                        },
                        content: [
                          {
                            block: 'input',
                            mix: {
                              block: 'subscription',
                              elem: 'input'
                            },
                            mods: {
                              size: 'l'
                            }
                          },
                          {
                            block: 'button',
                            mix: {
                              block: 'subscription',
                              elem: 'button'
                            },
                            mods: {
                              size: 'l',
                              width: 'full'
                            }
                          }
                        ]
                      }
                    }
                  ]
                }
              ]
            }
          }
        }
      ]
    },
    {
      block: 'page-footer',
      tag: 'footer',
      content: {
        block: 'layout',
        elem: 'container',
        elemMods: {
          size: 'm',
          align: 'center'
        },
        content: {
          block: 'footer',
          content: {
            elem: 'content',
            content: [
              {
                block: 'footer',
                elem: 'text',
                elemMods: {
                  left: true
                },
                mix: {
                  block: 'text',
                  mods: {
                    view: 'primary',
                    size: 'l'
                  }
                },
                content: [
                  {
                    block: 'text',
                    elem: 'word',
                    elemMods: {
                      width: 'l'
                    }
                  },
                  {
                    block: 'text',
                    elem: 'word',
                    elemMods: {
                      width: 's'
                    }
                  }
                ]
              },
              {
                block: 'footer',
                elem: 'text',
                elemMods: {
                  right: true
                },
                mix: {
                  block: 'text',
                  mods: {
                    view: 'primary',
                    size: 'l'
                  }
                },
                content: {
                  block: 'text',
                  elem: 'word',
                  elemMods: {
                    width: 'l'
                  }
                }
              }
            ]
          }
        }
      }
    }
  ]
};

const contentPage = {
  block: 'layout',
  content: [
    {
      block: 'page-header',
      tag: 'header',
      content: {
        block: 'layout',
        elem: 'container',
        elemMods: {
          size: 'm',
          align: 'center'
        },
        content: {
          block: 'header',
          content: [
            {
              elem: 'logotype'
            },
            {
              block: 'onoffswitch',
              content: {
                elem: 'label',
                content: {
                  block: 'onoffswitch',
                  elem: 'slider',
                  tag: 'span'
                }
              }
            }
          ]
        }
      }
    },
    {
      block: 'page-content',
      tag: 'main',
      content: [
        {
          block: 'section',
          mods: {
            'space-v': 's'
          },
          tag: 'section',
          content: {
            block: 'layout',
            elem: 'container',
            elemMods: {
              size: 's',
              align: 'center'
            },
            content: [
              {
                block: 'text',
                mods: {
                  type: 'h1',
                  view: 'primary',
                  size: 'xxl'
                },
                content: [
                  {
                    elem: 'word',
                    elemMods: {
                      width: 'l'
                    }
                  },
                  {
                    elem: 'word',
                    elemMods: {
                      width: 'l'
                    }
                  }
                ]
              },
              {
                block: 'text',
                mods: {
                  type: 'p',
                  view: 'primary',
                  size: 'l'
                },
                content: [
                  {
                    elem: 'word',
                    elemMods: {
                      width: 'l'
                    }
                  },
                  {
                    elem: 'word',
                    elemMods: {
                      width: 's'
                    }
                  },
                  {
                    elem: 'word',
                    elemMods: {
                      width: 'l'
                    }
                  },
                  {
                    elem: 'word',
                    elemMods: {
                      width: 'm'
                    }
                  },
                  {
                    elem: 'word',
                    elemMods: {
                      width: 'l'
                    }
                  },
                  {
                    elem: 'word',
                    elemMods: {
                      width: 'l'
                    }
                  },
                  {
                    elem: 'word',
                    elemMods: {
                      width: 's'
                    }
                  },
                  {
                    elem: 'word',
                    elemMods: {
                      width: 'l'
                    }
                  },
                  {
                    elem: 'word',
                    elemMods: {
                      width: 's'
                    }
                  },
                  {
                    elem: 'word',
                    elemMods: {
                      width: 'm'
                    }
                  },
                  {
                    elem: 'word',
                    elemMods: {
                      width: 'l'
                    }
                  },
                  {
                    elem: 'word',
                    elemMods: {
                      width: 'l'
                    }
                  },
                  {
                    elem: 'word',
                    elemMods: {
                      width: 's'
                    }
                  },
                  {
                    elem: 'word',
                    elemMods: {
                      width: 'l'
                    }
                  },
                  {
                    elem: 'word',
                    elemMods: {
                      width: 'l'
                    }
                  },
                  {
                    elem: 'word',
                    elemMods: {
                      width: 'm'
                    }
                  },
                  {
                    elem: 'word',
                    elemMods: {
                      width: 'l'
                    }
                  },
                  {
                    elem: 'word',
                    elemMods: {
                      width: 'l'
                    }
                  },
                  {
                    elem: 'word',
                    elemMods: {
                      width: 'l'
                    }
                  },
                  {
                    elem: 'word',
                    elemMods: {
                      width: 'l'
                    }
                  },
                  {
                    elem: 'word',
                    elemMods: {
                      width: 'l'
                    }
                  },
                  {
                    elem: 'word',
                    elemMods: {
                      width: 'm'
                    }
                  },
                  {
                    elem: 'word',
                    elemMods: {
                      width: 'm'
                    }
                  },
                  {
                    elem: 'word',
                    elemMods: {
                      width: 'l'
                    }
                  },
                  {
                    elem: 'word',
                    elemMods: {
                      width: 'l'
                    }
                  },
                  {
                    elem: 'word',
                    elemMods: {
                      width: 'l'
                    }
                  },
                  {
                    elem: 'word',
                    elemMods: {
                      width: 'l'
                    }
                  },
                  {
                    elem: 'word',
                    elemMods: {
                      width: 'l'
                    }
                  },
                  {
                    elem: 'word',
                    elemMods: {
                      width: 'l'
                    }
                  },
                  {
                    elem: 'word',
                    elemMods: {
                      width: 's'
                    }
                  },
                  {
                    elem: 'word',
                    elemMods: {
                      width: 'm'
                    }
                  },
                  {
                    elem: 'word',
                    elemMods: {
                      width: 'l'
                    }
                  },
                  {
                    elem: 'word',
                    elemMods: {
                      width: 's'
                    }
                  },
                  {
                    elem: 'word',
                    elemMods: {
                      width: 'l'
                    }
                  }
                ]
              },
              {
                block: 'text',
                mods: {
                  type: 'p',
                  view: 'primary',
                  size: 'l'
                },
                content: [
                  {
                    elem: 'word',
                    elemMods: {
                      width: 'l'
                    }
                  },
                  {
                    elem: 'word',
                    elemMods: {
                      width: 's'
                    }
                  },
                  {
                    elem: 'word',
                    elemMods: {
                      width: 'l'
                    }
                  },
                  {
                    elem: 'word',
                    elemMods: {
                      width: 'm'
                    }
                  },
                  {
                    elem: 'word',
                    elemMods: {
                      width: 'l'
                    }
                  },
                  {
                    elem: 'word',
                    elemMods: {
                      width: 'l'
                    }
                  },
                  {
                    elem: 'word',
                    elemMods: {
                      width: 's'
                    }
                  },
                  {
                    elem: 'word',
                    elemMods: {
                      width: 'l'
                    }
                  },
                  {
                    elem: 'word',
                    elemMods: {
                      width: 's'
                    }
                  },
                  {
                    elem: 'word',
                    elemMods: {
                      width: 'm'
                    }
                  },
                  {
                    elem: 'word',
                    elemMods: {
                      width: 'l'
                    }
                  },
                  {
                    elem: 'word',
                    elemMods: {
                      width: 'l'
                    }
                  },
                  {
                    elem: 'word',
                    elemMods: {
                      width: 's'
                    }
                  },
                  {
                    elem: 'word',
                    elemMods: {
                      width: 'l'
                    }
                  },
                  {
                    elem: 'word',
                    elemMods: {
                      width: 'l'
                    }
                  },
                  {
                    elem: 'word',
                    elemMods: {
                      width: 'm'
                    }
                  },
                  {
                    elem: 'word',
                    elemMods: {
                      width: 'l'
                    }
                  },
                  {
                    elem: 'word',
                    elemMods: {
                      width: 'l'
                    }
                  },
                  {
                    elem: 'word',
                    elemMods: {
                      width: 'l'
                    }
                  },
                  {
                    elem: 'word',
                    elemMods: {
                      width: 'l'
                    }
                  },
                  {
                    elem: 'word',
                    elemMods: {
                      width: 'l'
                    }
                  },
                  {
                    elem: 'word',
                    elemMods: {
                      width: 'm'
                    }
                  },
                  {
                    elem: 'word',
                    elemMods: {
                      width: 'm'
                    }
                  },
                  {
                    elem: 'word',
                    elemMods: {
                      width: 'l'
                    }
                  },
                  {
                    elem: 'word',
                    elemMods: {
                      width: 'l'
                    }
                  },
                  {
                    elem: 'word',
                    elemMods: {
                      width: 'l'
                    }
                  },
                  {
                    elem: 'word',
                    elemMods: {
                      width: 'l'
                    }
                  },
                  {
                    elem: 'word',
                    elemMods: {
                      width: 'l'
                    }
                  },
                  {
                    elem: 'word',
                    elemMods: {
                      width: 'l'
                    }
                  },
                  {
                    elem: 'word',
                    elemMods: {
                      width: 's'
                    }
                  },
                  {
                    elem: 'word',
                    elemMods: {
                      width: 'm'
                    }
                  },
                  {
                    elem: 'word',
                    elemMods: {
                      width: 'l'
                    }
                  },
                  {
                    elem: 'word',
                    elemMods: {
                      width: 's'
                    }
                  },
                  {
                    elem: 'word',
                    elemMods: {
                      width: 'l'
                    }
                  }
                ]
              }
            ]
          }
        },
        {
          block: 'section',
          cls: '',
          tag: 'section',
          content: {
            block: 'layout',
            elem: 'container',
            elemMods: {
              size: 'm',
              align: 'center'
            },
            content: {
              block: 'grid',
              mods: {
                'col-gap': 'full',
                'm-columns': '10'
              },
              content: [
                {
                  block: 'event',
                  mix: [
                    {
                      block: 'card',
                      mods: {
                        view: 'default'
                      }
                    },
                    {
                      block: 'theme',
                      mods: {
                        color: 'project-inverse'
                      }
                    },
                    {
                      block: 'grid',
                      elem: 'fraction',
                      elemMods: {
                        'm-col': '5'
                      }
                    }
                  ],
                  content: [
                    {
                      elem: 'content',
                      mix: {
                        block: 'card',
                        elem: 'content',
                        elemMods: {
                          'vertical-align': 'center',
                          distribute: 'center',
                          'space-a': 'xxl'
                        }
                      },
                      content: [
                        {
                          block: 'event',
                          elem: 'heading',
                          content: [
                            {
                              elem: 'avatar',
                              mix: {
                                block: 'avatar',
                                mods: {
                                  size: 'm'
                                }
                              }
                            },
                            {
                              block: 'brand-logo',
                              mods: {
                                name: 'mts',
                                size: 'm'
                              }
                            }
                          ]
                        },
                        {
                          block: 'event',
                          elem: 'title',
                          mix: [
                            {
                              block: 'event',
                              elem: 'text'
                            },
                            {
                              block: 'text',
                              mods: {
                                view: 'primary',
                                size: 'xxl',
                                align: 'center'
                              }
                            }
                          ],
                          content: {
                            block: 'text',
                            elem: 'word',
                            elemMods: {
                              width: 'l'
                            }
                          }
                        },
                        {
                          block: 'event',
                          elem: 'description',
                          mix: [
                            {
                              block: 'event',
                              elem: 'text'
                            },
                            {
                              block: 'text',
                              mods: {
                                view: 'primary',
                                size: 'l',
                                align: 'center'
                              }
                            }
                          ],
                          content: [
                            {
                              block: 'text',
                              elem: 'word',
                              elemMods: {
                                width: 'l'
                              }
                            },
                            {
                              block: 'text',
                              elem: 'word',
                              elemMods: {
                                width: 'l'
                              }
                            },
                            {
                              block: 'text',
                              elem: 'word',
                              elemMods: {
                                width: 'l'
                              }
                            },
                            {
                              block: 'text',
                              elem: 'word',
                              elemMods: {
                                width: 'l'
                              }
                            },
                            {
                              block: 'text',
                              elem: 'word',
                              elemMods: {
                                width: 'l'
                              }
                            },
                            {
                              block: 'text',
                              elem: 'word',
                              elemMods: {
                                width: 'l'
                              }
                            },
                            {
                              block: 'text',
                              elem: 'word',
                              elemMods: {
                                width: 'l'
                              }
                            },
                            {
                              block: 'text',
                              elem: 'word',
                              elemMods: {
                                width: 'l'
                              }
                            }
                          ]
                        }
                      ]
                    },
                    {
                      elem: 'footer',
                      mix: {
                        block: 'card',
                        elem: 'footer',
                        elemMods: {
                          'vertical-align': 'center',
                          distribute: 'center',
                          'space-a': 'xxl'
                        }
                      },
                      content: {
                        block: 'event',
                        elem: 'link',
                        mix: [
                          {
                            block: 'event',
                            elem: 'text'
                          },
                          {
                            block: 'text',
                            mods: {
                              view: 'link',
                              size: 'xl',
                              align: 'center'
                            }
                          }
                        ],
                        content: [
                          {
                            block: 'text',
                            elem: 'word',
                            elemMods: {
                              width: 's'
                            }
                          },
                          {
                            block: 'text',
                            elem: 'word',
                            elemMods: {
                              width: 's'
                            }
                          }
                        ]
                      }
                    }
                  ]
                },
                {
                  block: 'event',
                  mix: [
                    {
                      block: 'card',
                      mods: {
                        view: 'default'
                      }
                    },
                    {
                      block: 'theme',
                      mods: {
                        color: 'project-inverse'
                      }
                    },
                    {
                      block: 'grid',
                      elem: 'fraction',
                      elemMods: {
                        'm-col': '5'
                      }
                    }
                  ],
                  content: [
                    {
                      elem: 'content',
                      mix: {
                        block: 'card',
                        elem: 'content',
                        elemMods: {
                          'vertical-align': 'center',
                          distribute: 'center',
                          'space-a': 'xxl'
                        }
                      },
                      content: [
                        {
                          block: 'event',
                          elem: 'heading',
                          content: [
                            {
                              elem: 'avatar',
                              mix: {
                                block: 'avatar',
                                mods: {
                                  size: 'm'
                                }
                              }
                            },
                            {
                              block: 'brand-logo',
                              mods: {
                                name: 'yota',
                                size: 'm'
                              }
                            }
                          ]
                        },
                        {
                          block: 'event',
                          elem: 'title',
                          mix: [
                            {
                              block: 'event',
                              elem: 'text'
                            },
                            {
                              block: 'text',
                              mods: {
                                view: 'primary',
                                size: 'xxl',
                                align: 'center'
                              }
                            }
                          ],
                          content: {
                            block: 'text',
                            elem: 'word',
                            elemMods: {
                              width: 'l'
                            }
                          }
                        },
                        {
                          block: 'event',
                          elem: 'description',
                          mix: [
                            {
                              block: 'event',
                              elem: 'text'
                            },
                            {
                              block: 'text',
                              mods: {
                                view: 'primary',
                                size: 'l',
                                align: 'center'
                              }
                            }
                          ],
                          content: [
                            {
                              block: 'text',
                              elem: 'word',
                              elemMods: {
                                width: 'l'
                              }
                            },
                            {
                              block: 'text',
                              elem: 'word',
                              elemMods: {
                                width: 'l'
                              }
                            },
                            {
                              block: 'text',
                              elem: 'word',
                              elemMods: {
                                width: 'l'
                              }
                            },
                            {
                              block: 'text',
                              elem: 'word',
                              elemMods: {
                                width: 'l'
                              }
                            },
                            {
                              block: 'text',
                              elem: 'word',
                              elemMods: {
                                width: 'l'
                              }
                            },
                            {
                              block: 'text',
                              elem: 'word',
                              elemMods: {
                                width: 'l'
                              }
                            },
                            {
                              block: 'text',
                              elem: 'word',
                              elemMods: {
                                width: 'l'
                              }
                            },
                            {
                              block: 'text',
                              elem: 'word',
                              elemMods: {
                                width: 'l'
                              }
                            }
                          ]
                        }
                      ]
                    },
                    {
                      elem: 'footer',
                      mix: {
                        block: 'card',
                        elem: 'footer',
                        elemMods: {
                          'vertical-align': 'center',
                          distribute: 'center',
                          'space-a': 'xxl'
                        }
                      },
                      content: {
                        block: 'event',
                        elem: 'link',
                        mix: [
                          {
                            block: 'event',
                            elem: 'text'
                          },
                          {
                            block: 'text',
                            mods: {
                              view: 'link',
                              size: 'xl',
                              align: 'center'
                            }
                          }
                        ],
                        content: [
                          {
                            block: 'text',
                            elem: 'word',
                            elemMods: {
                              width: 's'
                            }
                          },
                          {
                            block: 'text',
                            elem: 'word',
                            elemMods: {
                              width: 's'
                            }
                          }
                        ]
                      }
                    }
                  ]
                }
              ]
            }
          }
        },
        {
          block: 'section',
          mods: {
            'space-v': 's'
          },
          tag: 'section',
          content: {
            block: 'layout',
            elem: 'container',
            elemMods: {
              size: 's',
              align: 'center'
            },
            content: [
              {
                block: 'text',
                mods: {
                  type: 'h2',
                  view: 'primary',
                  size: 'xxl'
                },
                content: [
                  {
                    elem: 'word',
                    elemMods: {
                      width: 'm'
                    }
                  },
                  {
                    elem: 'word',
                    elemMods: {
                      width: 'm'
                    }
                  }
                ]
              },
              {
                block: 'text',
                mods: {
                  type: 'p',
                  view: 'primary',
                  size: 'l'
                },
                content: [
                  {
                    elem: 'word',
                    elemMods: {
                      width: 'l'
                    }
                  },
                  {
                    elem: 'word',
                    elemMods: {
                      width: 's'
                    }
                  },
                  {
                    elem: 'word',
                    elemMods: {
                      width: 's'
                    }
                  },
                  {
                    elem: 'word',
                    elemMods: {
                      width: 'm'
                    }
                  },
                  {
                    elem: 'word',
                    elemMods: {
                      width: 'l'
                    }
                  },
                  {
                    elem: 'word',
                    elemMods: {
                      width: 'l'
                    }
                  },
                  {
                    elem: 'word',
                    elemMods: {
                      width: 'l'
                    }
                  },
                  {
                    elem: 'word',
                    elemMods: {
                      width: 'l'
                    }
                  },
                  {
                    elem: 'word',
                    elemMods: {
                      width: 'l'
                    }
                  },
                  {
                    elem: 'word',
                    elemMods: {
                      width: 'l'
                    }
                  },
                  {
                    elem: 'word',
                    elemMods: {
                      width: 'l'
                    }
                  },
                  {
                    elem: 'word',
                    elemMods: {
                      width: 'l'
                    }
                  },
                  {
                    elem: 'word',
                    elemMods: {
                      width: 'l'
                    }
                  },
                  {
                    elem: 'word',
                    elemMods: {
                      width: 'l'
                    }
                  },
                  {
                    elem: 'word',
                    elemMods: {
                      width: 'l'
                    }
                  },
                  {
                    elem: 'word',
                    elemMods: {
                      width: 'l'
                    }
                  },
                  {
                    elem: 'word',
                    elemMods: {
                      width: 'l'
                    }
                  },
                  {
                    elem: 'word',
                    elemMods: {
                      width: 'l'
                    }
                  },
                  {
                    elem: 'word',
                    elemMods: {
                      width: 'l'
                    }
                  },
                  {
                    elem: 'word',
                    elemMods: {
                      width: 'l'
                    }
                  },
                  {
                    elem: 'word',
                    elemMods: {
                      width: 'l'
                    }
                  },
                  {
                    elem: 'word',
                    elemMods: {
                      width: 'l'
                    }
                  },
                  {
                    elem: 'word',
                    elemMods: {
                      width: 's'
                    }
                  },
                  {
                    elem: 'word',
                    elemMods: {
                      width: 'l'
                    }
                  },
                  {
                    elem: 'word',
                    elemMods: {
                      width: 'm'
                    }
                  },
                  {
                    elem: 'word',
                    elemMods: {
                      width: 'm'
                    }
                  },
                  {
                    elem: 'word',
                    elemMods: {
                      width: 's'
                    }
                  },
                  {
                    elem: 'word',
                    elemMods: {
                      width: 'm'
                    }
                  },
                  {
                    elem: 'word',
                    elemMods: {
                      width: 'm'
                    }
                  },
                  {
                    elem: 'word',
                    elemMods: {
                      width: 's'
                    }
                  },
                  {
                    elem: 'word',
                    elemMods: {
                      width: 'm'
                    }
                  },
                  {
                    elem: 'word',
                    elemMods: {
                      width: 's'
                    }
                  },
                  {
                    elem: 'word',
                    elemMods: {
                      width: 'm'
                    }
                  },
                  {
                    elem: 'word',
                    elemMods: {
                      width: 'l'
                    }
                  },
                  {
                    elem: 'word',
                    elemMods: {
                      width: 'l'
                    }
                  },
                  {
                    elem: 'word',
                    elemMods: {
                      width: 'l'
                    }
                  },
                  {
                    elem: 'word',
                    elemMods: {
                      width: 's'
                    }
                  },
                  {
                    elem: 'word',
                    elemMods: {
                      width: 'l'
                    }
                  },
                  {
                    elem: 'word',
                    elemMods: {
                      width: 'm'
                    }
                  },
                  {
                    elem: 'word',
                    elemMods: {
                      width: 'm'
                    }
                  },
                  {
                    elem: 'word',
                    elemMods: {
                      width: 's'
                    }
                  },
                  {
                    elem: 'word',
                    elemMods: {
                      width: 'm'
                    }
                  },
                  {
                    elem: 'word',
                    elemMods: {
                      width: 'm'
                    }
                  },
                  {
                    elem: 'word',
                    elemMods: {
                      width: 'm'
                    }
                  },
                  {
                    elem: 'word',
                    elemMods: {
                      width: 'm'
                    }
                  },
                  {
                    elem: 'word',
                    elemMods: {
                      width: 's'
                    }
                  },
                  {
                    elem: 'word',
                    elemMods: {
                      width: 'm'
                    }
                  },
                  {
                    elem: 'word',
                    elemMods: {
                      width: 'l'
                    }
                  },
                  {
                    elem: 'word',
                    elemMods: {
                      width: 'l'
                    }
                  },
                  {
                    elem: 'word',
                    elemMods: {
                      width: 's'
                    }
                  },
                  {
                    elem: 'word',
                    elemMods: {
                      width: 's'
                    }
                  },
                  {
                    elem: 'word',
                    elemMods: {
                      width: 'l'
                    }
                  },
                  {
                    elem: 'word',
                    elemMods: {
                      width: 'm'
                    }
                  },
                  {
                    elem: 'word',
                    elemMods: {
                      width: 'm'
                    }
                  },
                  {
                    elem: 'word',
                    elemMods: {
                      width: 's'
                    }
                  },
                  {
                    elem: 'word',
                    elemMods: {
                      width: 'm'
                    }
                  },
                  {
                    elem: 'word',
                    elemMods: {
                      width: 'm'
                    }
                  },
                  {
                    elem: 'word',
                    elemMods: {
                      width: 'm'
                    }
                  },
                  {
                    elem: 'word',
                    elemMods: {
                      width: 'm'
                    }
                  }
                ]
              },
              {
                block: 'text',
                mods: {
                  type: 'h3',
                  view: 'primary',
                  size: 'xxl'
                },
                content: [
                  {
                    elem: 'word',
                    elemMods: {
                      width: 'm'
                    }
                  },
                  {
                    elem: 'word',
                    elemMods: {
                      width: 'l'
                    }
                  }
                ]
              },
              {
                block: 'text',
                mods: {
                  type: 'p',
                  view: 'primary',
                  size: 'l'
                },
                content: [
                  {
                    elem: 'word',
                    elemMods: {
                      width: 'l'
                    }
                  },
                  {
                    elem: 'word',
                    elemMods: {
                      width: 's'
                    }
                  },
                  {
                    elem: 'word',
                    elemMods: {
                      width: 's'
                    }
                  },
                  {
                    elem: 'word',
                    elemMods: {
                      width: 'm'
                    }
                  },
                  {
                    elem: 'word',
                    elemMods: {
                      width: 'l'
                    }
                  },
                  {
                    elem: 'word',
                    elemMods: {
                      width: 'l'
                    }
                  },
                  {
                    elem: 'word',
                    elemMods: {
                      width: 'l'
                    }
                  },
                  {
                    elem: 'word',
                    elemMods: {
                      width: 'l'
                    }
                  },
                  {
                    elem: 'word',
                    elemMods: {
                      width: 'l'
                    }
                  },
                  {
                    elem: 'word',
                    elemMods: {
                      width: 'l'
                    }
                  },
                  {
                    elem: 'word',
                    elemMods: {
                      width: 'l'
                    }
                  },
                  {
                    elem: 'word',
                    elemMods: {
                      width: 'l'
                    }
                  },
                  {
                    elem: 'word',
                    elemMods: {
                      width: 'l'
                    }
                  },
                  {
                    elem: 'word',
                    elemMods: {
                      width: 'l'
                    }
                  },
                  {
                    elem: 'word',
                    elemMods: {
                      width: 'l'
                    }
                  },
                  {
                    elem: 'word',
                    elemMods: {
                      width: 'l'
                    }
                  },
                  {
                    elem: 'word',
                    elemMods: {
                      width: 'l'
                    }
                  },
                  {
                    elem: 'word',
                    elemMods: {
                      width: 'l'
                    }
                  },
                  {
                    elem: 'word',
                    elemMods: {
                      width: 'm'
                    }
                  },
                  {
                    elem: 'word',
                    elemMods: {
                      width: 'l'
                    }
                  },
                  {
                    elem: 'word',
                    elemMods: {
                      width: 'l'
                    }
                  },
                  {
                    elem: 'word',
                    elemMods: {
                      width: 's'
                    }
                  },
                  {
                    elem: 'word',
                    elemMods: {
                      width: 's'
                    }
                  },
                  {
                    elem: 'word',
                    elemMods: {
                      width: 's'
                    }
                  },
                  {
                    elem: 'word',
                    elemMods: {
                      width: 'm'
                    }
                  },
                  {
                    elem: 'word',
                    elemMods: {
                      width: 'm'
                    }
                  },
                  {
                    elem: 'word',
                    elemMods: {
                      width: 's'
                    }
                  },
                  {
                    elem: 'word',
                    elemMods: {
                      width: 'm'
                    }
                  },
                  {
                    elem: 'word',
                    elemMods: {
                      width: 'm'
                    }
                  },
                  {
                    elem: 'word',
                    elemMods: {
                      width: 's'
                    }
                  },
                  {
                    elem: 'word',
                    elemMods: {
                      width: 'm'
                    }
                  },
                  {
                    elem: 'word',
                    elemMods: {
                      width: 's'
                    }
                  },
                  {
                    elem: 'word',
                    elemMods: {
                      width: 'l'
                    }
                  },
                  {
                    elem: 'word',
                    elemMods: {
                      width: 'l'
                    }
                  },
                  {
                    elem: 'word',
                    elemMods: {
                      width: 'l'
                    }
                  },
                  {
                    elem: 'word',
                    elemMods: {
                      width: 'l'
                    }
                  },
                  {
                    elem: 'word',
                    elemMods: {
                      width: 's'
                    }
                  },
                  {
                    elem: 'word',
                    elemMods: {
                      width: 'l'
                    }
                  },
                  {
                    elem: 'word',
                    elemMods: {
                      width: 'm'
                    }
                  },
                  {
                    elem: 'word',
                    elemMods: {
                      width: 'm'
                    }
                  },
                  {
                    elem: 'word',
                    elemMods: {
                      width: 's'
                    }
                  },
                  {
                    elem: 'word',
                    elemMods: {
                      width: 'm'
                    }
                  },
                  {
                    elem: 'word',
                    elemMods: {
                      width: 'm'
                    }
                  },
                  {
                    elem: 'word',
                    elemMods: {
                      width: 'm'
                    }
                  },
                  {
                    elem: 'word',
                    elemMods: {
                      width: 'm'
                    }
                  },
                  {
                    elem: 'word',
                    elemMods: {
                      width: 'm'
                    }
                  },
                  {
                    elem: 'word',
                    elemMods: {
                      width: 'm'
                    }
                  },
                  {
                    elem: 'word',
                    elemMods: {
                      width: 'l'
                    }
                  },
                  {
                    elem: 'word',
                    elemMods: {
                      width: 'l'
                    }
                  },
                  {
                    elem: 'word',
                    elemMods: {
                      width: 's'
                    }
                  },
                  {
                    elem: 'word',
                    elemMods: {
                      width: 's'
                    }
                  },
                  {
                    elem: 'word',
                    elemMods: {
                      width: 'l'
                    }
                  },
                  {
                    elem: 'word',
                    elemMods: {
                      width: 'm'
                    }
                  },
                  {
                    elem: 'word',
                    elemMods: {
                      width: 'm'
                    }
                  },
                  {
                    elem: 'word',
                    elemMods: {
                      width: 's'
                    }
                  },
                  {
                    elem: 'word',
                    elemMods: {
                      width: 'm'
                    }
                  },
                  {
                    elem: 'word',
                    elemMods: {
                      width: 'l'
                    }
                  },
                  {
                    elem: 'word',
                    elemMods: {
                      width: 'm'
                    }
                  },
                  {
                    elem: 'word',
                    elemMods: {
                      width: 'm'
                    }
                  }
                ]
              }
            ]
          }
        }
      ]
    },
    {
      block: 'page-footer',
      tag: 'footer',
      content: {
        block: 'layout',
        elem: 'container',
        elemMods: {
          size: 'm',
          align: 'center'
        },
        content: {
          block: 'footer',
          content: {
            elem: 'content',
            content: [
              {
                block: 'footer',
                elem: 'text',
                elemMods: {
                  left: true
                },
                mix: {
                  block: 'text',
                  mods: {
                    view: 'primary',
                    size: 'l'
                  }
                },
                content: [
                  {
                    block: 'text',
                    elem: 'word',
                    elemMods: {
                      width: 'l'
                    }
                  },
                  {
                    block: 'text',
                    elem: 'word',
                    elemMods: {
                      width: 's'
                    }
                  }
                ]
              },
              {
                block: 'footer',
                elem: 'text',
                elemMods: {
                  right: true
                },
                mix: {
                  block: 'text',
                  mods: {
                    view: 'primary',
                    size: 'l'
                  }
                },
                content: {
                  block: 'text',
                  elem: 'word',
                  elemMods: {
                    width: 'l'
                  }
                }
              }
            ]
          }
        }
      }
    }
  ]
};

export {indexPage, productPage, collectPage, contentPage}
