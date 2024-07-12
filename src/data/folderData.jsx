const explorer = {
    name: "root",
    isFolder: true,
    items: [
        {
            name: "public",
            isFolder: true,
            items: [
                {
                    name: "index.html",
                    isFolder: false
                },
                {
                    name: "style.css",
                    isFolder: false
                },
                {
                    name: "Guide.txt",
                    isFolder: false
                }
            ]
        },
        {
            name: "src",
            isFolder: true,
            items: [
                {
                    name: "index.html",
                    isFolder: false
                },
                {
                    name: "style.css",
                    isFolder: false
                },
                {
                    name: "Guide.txt",
                    isFolder: false
                }
            ]
        },
        {
            name: "Assets",
            isFolder: true,
            items: [
                {
                    name: "FirstImage.png",
                    isFolder: false
                },
                {
                    name: "SecondImage.png",
                    isFolder: false
                },
                {
                    name: "ThirdImage.png",
                    isFolder: false
                }
            ]
        },
        {
            name: ".gitignore",
            isFolder: false
        },
        {
            name: "package.json",
            isFolder: false
        }
    ]
}

export default explorer;