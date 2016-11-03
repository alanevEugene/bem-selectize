block('selectize')(
    js()(true),
    content()(function () {
        let bemjson = [
            {
                elem: 'tags'
            },
            {
                elem: 'field',
                tag: 'input'
            }
        ];
        const tags = this.ctx.tags;
        if (tags && tags.length && tags.length > 0) {
            bemjson[0].content = tags.map(tag => {
                return {
                    elem: 'tag',
                    content: tag
                }
            })
            bemjson[bemjson.length] = {
                elem: 'suggetions',
                content: tags.map(tag => {
                    return {
                        elem: 'suggetion',
                        content: tag
                    }
                })
            }
        }
        return bemjson;
    }),
    elem('tags')(
        tag()('ul')
    ),
    elem('tag')(
        tag()('li')
    ),
    elem('suggetions')(
        tag()('ul'),
        wrap()(function () {
            return {
                elem: 'dropdown',
                content: [
                    {
                        elem: 'message'
                    },
                    {
                        elem: 'list',
                        content: this.ctx
                    }
                ]
            }
        })
    ),
    elem('suggetion')(
        tag()('li')
    )
)
