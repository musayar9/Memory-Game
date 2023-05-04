const frameworks = [
    {
        id: 1,
        name: "angular2",
        status: false,

    },
    {
        id: 2,
        name: "react",
        status: false,

    },
    {
        id: 3,
        name: "vue",
        status: false,

    },
    {
        id: 4,
        name: "grunt",
        status: false,

    },
    {
        id: 5,
        name: "babel",
        status: false,

    },
    {
        id: 6,
        name: "yarn",
        status: false,

    },
    {
        id: 7,
        name: "bower",
        status: false,

    },
    {
        id: 8,
        name: "nodejs",
        status: false,

    },
    {
        id: 9,
        name: "meteor",
        status: false,

    },
    {
        id: 10,
        name: "ionic",
        status: false,

    },

]


export const setFrameWorks = () => {
    const frameworkList = frameworks.map((framework, index) => ({
        ...framework,

        id: frameworks.length + (index + 1),
    }))
    const newFrameWorks = frameworks.concat(frameworkList)
    const newFrameWorkLists = newFrameWorks.sort(() => (Math.random() - 0.5))
    return newFrameWorkLists;
}