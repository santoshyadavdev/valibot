import type { PropertyProps } from '~/components';

export const properties: Record<string, PropertyProps> = {
<<<<<<< HEAD
  TSchema: {
=======
  TKey: {
>>>>>>> 7ff23862 (docs: document async apis)
    modifier: 'extends',
    type: {
      type: 'union',
      options: [
        {
          type: 'custom',
          name: 'BaseSchema',
          href: '../BaseSchema/',
          generics: [
            'unknown',
            'unknown',
            {
              type: 'custom',
              name: 'BaseIssue',
              href: '../BaseIssue/',
              generics: ['unknown'],
            },
          ],
        },
        {
          type: 'custom',
          name: 'BaseSchemaAsync',
          href: '../BaseSchemaAsync/',
          generics: [
            'unknown',
            'unknown',
            {
              type: 'custom',
              name: 'BaseIssue',
              href: '../BaseIssue/',
              generics: ['unknown'],
            },
          ],
        },
      ],
    },
  },
<<<<<<< HEAD
  TItems: {
    modifier: 'extends',
    type: {
      type: 'array',
      item: {
        type: 'union',
        options: [
          {
            type: 'custom',
            name: 'PipeItem',
            href: '../PipeItem/',
            generics: [
              'any',
              'unknown',
              {
                type: 'custom',
                name: 'BaseIssue',
                href: '../BaseIssue/',
                generics: ['unknown'],
              },
            ],
          },
          {
            type: 'custom',
            name: 'PipeItemAsync',
            href: '../PipeItemAsync/',
            generics: [
              'any',
              'unknown',
              {
                type: 'custom',
                name: 'BaseIssue',
                href: '../BaseIssue/',
                generics: ['unknown'],
              },
            ],
          },
        ],
      },
    },
  },
  schema: {
    type: {
      type: 'custom',
      name: 'TSchema',
    },
  },
  items: {
    type: {
      type: 'custom',
      name: 'TItems',
    },
  },
  Schema: {
    type: {
      type: 'custom',
      name: 'SchemaWithPipeAsync',
      href: '../SchemaWithPipeAsync/',
      generics: [
        {
          type: 'tuple',
          items: [
            {
              type: 'custom',
              name: 'TSchema',
            },
            {
              type: 'custom',
              spread: true,
              name: 'TItems',
=======
  TValue: {
    modifier: 'extends',
    type: {
      type: 'union',
      options: [
        {
          type: 'custom',
          name: 'BaseSchema',
          href: '../BaseSchema/',
          generics: [
            'unknown',
            'unknown',
            {
              type: 'custom',
              name: 'BaseIssue',
              href: '../BaseIssue/',
              generics: ['unknown'],
            },
          ],
        },
        {
          type: 'custom',
          name: 'BaseSchemaAsync',
          href: '../BaseSchemaAsync/',
          generics: [
            'unknown',
            'unknown',
            {
              type: 'custom',
              name: 'BaseIssue',
              href: '../BaseIssue/',
              generics: ['unknown'],
>>>>>>> 7ff23862 (docs: document async apis)
            },
          ],
        },
      ],
    },
  },
<<<<<<< HEAD
=======
  TDefault: {
    modifier: 'extends',
    type: {
      type: 'custom',
      name: 'Default',
      href: '../Default/',
      generics: [
        {
          type: 'custom',
          name: 'TWrapped',
        },
        'undefined',
      ],
    },
  },
  key: {
    type: {
      type: 'custom',
      name: 'TKey',
    },
  },
  value: {
    type: {
      type: 'custom',
      name: 'TValue',
    },
  },
  message: {
    type: {
      type: 'custom',
      name: 'TMessage',
    },
  },
  Schema: {
    type: {
      type: 'custom',
      name: 'nullableAsync',
      href: '../nullableAsync/',
      generics: [
        {
          type: 'custom',
          name: 'TWrapped',
        },
        {
          type: 'custom',
          name: 'TDefault',
        },
      ],
    },
  },
>>>>>>> 7ff23862 (docs: document async apis)
};
