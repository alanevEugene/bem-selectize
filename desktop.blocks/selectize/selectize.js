const blockName = 'selectize';

modules.define(blockName, ['BEMHTML', 'i-bem__dom'], function(provide, BEMHTML, BEMDOM) {
    provide(
        BEMDOM.decl(
            this.name,
            {
                _addTag: function (target) {
                    let unic = true;
                    const value = target.value.trim();

                    this.findElem('tag').each((i, { innerHTML: text }) => {
                        if (text === value) {
                            unic = false;
                        }
                    });

                    if (unic) {
                        BEMDOM.append(
                            this.elem('tags')[0],
                            `<li class="${blockName}__tag">${target.value}</li>`
                        );
                    }
                    target.value = '';
                },
                _removeTag: function () {
                    const lastTag = this.findElem('tag').last();

                    if (lastTag.length > 0) {
                        BEMDOM.destruct(
                            lastTag
                        );
                    }
                }
            },
            {
                live: function () {
                    this.liveBindTo('field', 'keyup', function ({ target, key}) {
                        if (target.value === '') {
                            if (key === 'Backspace') this._removeTag(target);
                        } else {
                            if (key === 'Enter') this._addTag(target);
                        }
                    });
                }
            }
        )
    )
})
