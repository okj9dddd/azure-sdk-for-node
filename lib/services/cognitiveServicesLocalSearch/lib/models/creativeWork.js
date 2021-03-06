/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for
 * license information.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

'use strict';

const models = require('./index');

/**
 * The most generic kind of creative work, including books, movies,
 * photographs, software programs, etc.
 *
 * @extends models['Thing']
 */
class CreativeWork extends models['Thing'] {
  /**
   * Create a CreativeWork.
   * @property {string} [thumbnailUrl] The URL to a thumbnail of the item.
   * @property {array} [about] For internal use only.
   * @property {array} [mentions] For internal use only.
   * @property {array} [provider] The source of the creative work.
   * @property {object} [creator]
   * @property {string} [creator.name] The name of the thing represented by
   * this object.
   * @property {string} [creator.url] The URL to get more information about the
   * thing represented by this object.
   * @property {object} [creator.entityPresentationInfo] Additional information
   * about the entity such as hints that you can use to determine the entity's
   * type. To determine the entity's type, use the entityScenario and
   * entityTypeHint fields.
   * @property {string} [creator.entityPresentationInfo.entityScenario] The
   * supported scenario. Possible values include: 'DominantEntity',
   * 'DisambiguationItem', 'ListItem'
   * @property {array} [creator.entityPresentationInfo.entityTypeHints] A list
   * of hints that indicate the entity's type. The list could contain a single
   * hint such as Movie or a list of hints such as Place, LocalBusiness,
   * Restaurant. Each successive hint in the array narrows the entity's type.
   * @property {string} [creator.entityPresentationInfo.entityTypeDisplayHint]
   * A display version of the entity hint. For example, if entityTypeHints is
   * Artist, this field may be set to American Singer.
   * @property {string} [creator.entityPresentationInfo.query]
   * @property {array} [creator.entityPresentationInfo.entitySubTypeHints]
   * @property {string} [creator.entityPresentationInfo._type] Polymorphic
   * Discriminator
   * @property {string} [text] Text content of this creative work
   * @property {string} [discussionUrl]
   * @property {number} [commentCount]
   * @property {object} [mainEntity]
   * @property {string} [mainEntity.name] The name of the thing represented by
   * this object.
   * @property {string} [mainEntity.url] The URL to get more information about
   * the thing represented by this object.
   * @property {object} [mainEntity.entityPresentationInfo] Additional
   * information about the entity such as hints that you can use to determine
   * the entity's type. To determine the entity's type, use the entityScenario
   * and entityTypeHint fields.
   * @property {string} [mainEntity.entityPresentationInfo.entityScenario] The
   * supported scenario. Possible values include: 'DominantEntity',
   * 'DisambiguationItem', 'ListItem'
   * @property {array} [mainEntity.entityPresentationInfo.entityTypeHints] A
   * list of hints that indicate the entity's type. The list could contain a
   * single hint such as Movie or a list of hints such as Place, LocalBusiness,
   * Restaurant. Each successive hint in the array narrows the entity's type.
   * @property {string}
   * [mainEntity.entityPresentationInfo.entityTypeDisplayHint] A display
   * version of the entity hint. For example, if entityTypeHints is Artist,
   * this field may be set to American Singer.
   * @property {string} [mainEntity.entityPresentationInfo.query]
   * @property {array} [mainEntity.entityPresentationInfo.entitySubTypeHints]
   * @property {string} [mainEntity.entityPresentationInfo._type] Polymorphic
   * Discriminator
   * @property {string} [headLine]
   * @property {object} [copyrightHolder]
   * @property {string} [copyrightHolder.name] The name of the thing
   * represented by this object.
   * @property {string} [copyrightHolder.url] The URL to get more information
   * about the thing represented by this object.
   * @property {object} [copyrightHolder.entityPresentationInfo] Additional
   * information about the entity such as hints that you can use to determine
   * the entity's type. To determine the entity's type, use the entityScenario
   * and entityTypeHint fields.
   * @property {string} [copyrightHolder.entityPresentationInfo.entityScenario]
   * The supported scenario. Possible values include: 'DominantEntity',
   * 'DisambiguationItem', 'ListItem'
   * @property {array} [copyrightHolder.entityPresentationInfo.entityTypeHints]
   * A list of hints that indicate the entity's type. The list could contain a
   * single hint such as Movie or a list of hints such as Place, LocalBusiness,
   * Restaurant. Each successive hint in the array narrows the entity's type.
   * @property {string}
   * [copyrightHolder.entityPresentationInfo.entityTypeDisplayHint] A display
   * version of the entity hint. For example, if entityTypeHints is Artist,
   * this field may be set to American Singer.
   * @property {string} [copyrightHolder.entityPresentationInfo.query]
   * @property {array}
   * [copyrightHolder.entityPresentationInfo.entitySubTypeHints]
   * @property {string} [copyrightHolder.entityPresentationInfo._type]
   * Polymorphic Discriminator
   * @property {number} [copyrightYear]
   * @property {string} [disclaimer]
   * @property {boolean} [isAccessibleForFree]
   * @property {array} [genre]
   * @property {boolean} [isFamilyFriendly]
   */
  constructor() {
    super();
  }

  /**
   * Defines the metadata of CreativeWork
   *
   * @returns {object} metadata of CreativeWork
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'CreativeWork',
      type: {
        name: 'Composite',
        polymorphicDiscriminator: {
          serializedName: '_type',
          clientName: '_type'
        },
        uberParent: 'ResponseBase',
        className: 'CreativeWork',
        modelProperties: {
          _type: {
            required: true,
            serializedName: '_type',
            isPolymorphicDiscriminator: true,
            type: {
              name: 'String'
            }
          },
          id: {
            required: false,
            readOnly: true,
            serializedName: 'id',
            type: {
              name: 'String'
            }
          },
          readLink: {
            required: false,
            readOnly: true,
            serializedName: 'readLink',
            type: {
              name: 'String'
            }
          },
          webSearchUrl: {
            required: false,
            readOnly: true,
            serializedName: 'webSearchUrl',
            type: {
              name: 'String'
            }
          },
          potentialAction: {
            required: false,
            readOnly: true,
            serializedName: 'potentialAction',
            type: {
              name: 'Sequence',
              element: {
                  required: false,
                  serializedName: 'ActionElementType',
                  type: {
                    name: 'Composite',
                    polymorphicDiscriminator: {
                      serializedName: '_type',
                      clientName: '_type'
                    },
                    uberParent: 'ResponseBase',
                    className: 'Action'
                  }
              }
            }
          },
          immediateAction: {
            required: false,
            readOnly: true,
            serializedName: 'immediateAction',
            type: {
              name: 'Sequence',
              element: {
                  required: false,
                  serializedName: 'ActionElementType',
                  type: {
                    name: 'Composite',
                    polymorphicDiscriminator: {
                      serializedName: '_type',
                      clientName: '_type'
                    },
                    uberParent: 'ResponseBase',
                    className: 'Action'
                  }
              }
            }
          },
          preferredClickthroughUrl: {
            required: false,
            readOnly: true,
            serializedName: 'preferredClickthroughUrl',
            type: {
              name: 'String'
            }
          },
          adaptiveCard: {
            required: false,
            readOnly: true,
            serializedName: 'adaptiveCard',
            type: {
              name: 'String'
            }
          },
          name: {
            required: false,
            readOnly: true,
            serializedName: 'name',
            type: {
              name: 'String'
            }
          },
          url: {
            required: false,
            readOnly: true,
            serializedName: 'url',
            type: {
              name: 'String'
            }
          },
          entityPresentationInfo: {
            required: false,
            readOnly: true,
            serializedName: 'entityPresentationInfo',
            type: {
              name: 'Composite',
              polymorphicDiscriminator: {
                serializedName: '_type',
                clientName: '_type'
              },
              uberParent: 'EntitiesEntityPresentationInfo',
              className: 'EntitiesEntityPresentationInfo'
            }
          },
          thumbnailUrl: {
            required: false,
            readOnly: true,
            serializedName: 'thumbnailUrl',
            type: {
              name: 'String'
            }
          },
          about: {
            required: false,
            readOnly: true,
            serializedName: 'about',
            type: {
              name: 'Sequence',
              element: {
                  required: false,
                  serializedName: 'ThingElementType',
                  type: {
                    name: 'Composite',
                    polymorphicDiscriminator: {
                      serializedName: '_type',
                      clientName: '_type'
                    },
                    uberParent: 'ResponseBase',
                    className: 'Thing'
                  }
              }
            }
          },
          mentions: {
            required: false,
            readOnly: true,
            serializedName: 'mentions',
            type: {
              name: 'Sequence',
              element: {
                  required: false,
                  serializedName: 'ThingElementType',
                  type: {
                    name: 'Composite',
                    polymorphicDiscriminator: {
                      serializedName: '_type',
                      clientName: '_type'
                    },
                    uberParent: 'ResponseBase',
                    className: 'Thing'
                  }
              }
            }
          },
          provider: {
            required: false,
            readOnly: true,
            serializedName: 'provider',
            type: {
              name: 'Sequence',
              element: {
                  required: false,
                  serializedName: 'ThingElementType',
                  type: {
                    name: 'Composite',
                    polymorphicDiscriminator: {
                      serializedName: '_type',
                      clientName: '_type'
                    },
                    uberParent: 'ResponseBase',
                    className: 'Thing'
                  }
              }
            }
          },
          creator: {
            required: false,
            readOnly: true,
            serializedName: 'creator',
            type: {
              name: 'Composite',
              polymorphicDiscriminator: {
                serializedName: '_type',
                clientName: '_type'
              },
              uberParent: 'ResponseBase',
              className: 'Thing'
            }
          },
          text: {
            required: false,
            readOnly: true,
            serializedName: 'text',
            type: {
              name: 'String'
            }
          },
          discussionUrl: {
            required: false,
            readOnly: true,
            serializedName: 'discussionUrl',
            type: {
              name: 'String'
            }
          },
          commentCount: {
            required: false,
            readOnly: true,
            serializedName: 'commentCount',
            type: {
              name: 'Number'
            }
          },
          mainEntity: {
            required: false,
            readOnly: true,
            serializedName: 'mainEntity',
            type: {
              name: 'Composite',
              polymorphicDiscriminator: {
                serializedName: '_type',
                clientName: '_type'
              },
              uberParent: 'ResponseBase',
              className: 'Thing'
            }
          },
          headLine: {
            required: false,
            readOnly: true,
            serializedName: 'headLine',
            type: {
              name: 'String'
            }
          },
          copyrightHolder: {
            required: false,
            readOnly: true,
            serializedName: 'copyrightHolder',
            type: {
              name: 'Composite',
              polymorphicDiscriminator: {
                serializedName: '_type',
                clientName: '_type'
              },
              uberParent: 'ResponseBase',
              className: 'Thing'
            }
          },
          copyrightYear: {
            required: false,
            readOnly: true,
            serializedName: 'copyrightYear',
            type: {
              name: 'Number'
            }
          },
          disclaimer: {
            required: false,
            readOnly: true,
            serializedName: 'disclaimer',
            type: {
              name: 'String'
            }
          },
          isAccessibleForFree: {
            required: false,
            readOnly: true,
            serializedName: 'isAccessibleForFree',
            type: {
              name: 'Boolean'
            }
          },
          genre: {
            required: false,
            readOnly: true,
            serializedName: 'genre',
            type: {
              name: 'Sequence',
              element: {
                  required: false,
                  serializedName: 'StringElementType',
                  type: {
                    name: 'String'
                  }
              }
            }
          },
          isFamilyFriendly: {
            required: false,
            readOnly: true,
            serializedName: 'isFamilyFriendly',
            type: {
              name: 'Boolean'
            }
          }
        }
      }
    };
  }
}

module.exports = CreativeWork;
