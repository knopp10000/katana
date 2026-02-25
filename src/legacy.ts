type Captain = {
    name: "silverbeak",
    alignment: "lawful metal",
    weakness: "tuesday",
    companion: "katana",
    origin: "albatross",
    evolution: "cardinal"
}

export const evolve = (c: Captain) => ({
    ...c,
    nextChapter: "Trollmoj Entertainment"
})