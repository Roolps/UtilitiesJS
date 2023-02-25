const structure = Object.freeze([
    {
        "tag": "div",
        "attributes": {
            "class": "block column-flex"
        },
        "children": [
            {
                "tag": "label",
                "attributes": {},
                "children": [
                    "USERNAME",
                    {
                        "tag": "input",
                        "attributes": {
                            "type": "text",
                            "name": "username",
                            "placeholder": "",
                            "value": "none"
                        },
                        "children": []
                    }
                ]
            },
            {
                "tag": "label",
                "attributes": {},
                "children": [
                    "PASSWORD",
                    {
                        "tag": "input",
                        "attributes": {
                            "type": "password",
                            "name": "user",
                            "placeholder": "user",
                            "value": "none"
                        },
                        "children": []
                    }
                ]

            },
            {
                "tag": "a",
                "attributes": {
                    "class": "btn-1"
                },
                "children": [
                    {
                        "tag": "span",
                        "attributes": {},
                        "children": ["LOGIN"]
                    }
                ]
            }
        ]
    }
])

structure.forEach(elem => {
  render($("body"), elem)
})

const render = (parent) => {
    return (child) => {
        // Creates initial elem
        const elem = $("<" + child["tag"] + "></" + child["tag"] + ">");
        parent.append(elem);

        Object.keys(child["attributes"]).forEach(attr => {
            elem.attr(attr, child["attributes"][attr])
        })

        child["children"].forEach(baby => {
            if (typeof baby == "object") {
                render(elem)(baby)
            } else {
                elem.text(elem.text() + baby)
            }
        })
    }
}
