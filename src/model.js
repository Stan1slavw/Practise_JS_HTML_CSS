import image from './assets/image.png'

export const model = [
    {
        type: 'title', value: 'Конструктор сайтов на чистом JavaScript', options: {
            tag: 'h2',
            styles: `background: linear-gradient(to right, #ff0099, #493240); color: fff;`
        }
    },
    {type: 'text', value: 'here we go with some text'},
    {
        type: 'columns', value: [
            '1111111111',
            '2222222222',
            '3333333333',
            '5555555555'
        ]
    },
    {type: 'image', value: image}
]