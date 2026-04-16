try {
    document.getElementById("siteHeader").innerHTML = `
    <div class="siteheaderlogo">Hylaster</div>
    <div class="navbar">
        <a href="https://hylaster0.github.io/index.html">Home</a>
        <div class="dropdown">
            <button class="dropbtn">Pokémon TCG Hub
            <i class="fa fa-caret-down"></i>
            </button>
            <div class="dropdown-content">
                <a href="https://hylaster0.github.io/Pokemon/index.html">Hub Home</a>
                <a href="https://hylaster0.github.io/Pokemon/Standard/index.html">Standard Format</a>
                <a href="https://hylaster0.github.io/Pokemon/Alternative/Overview.html">Alt Formats</a>
                <a href="https://hylaster0.github.io/Pokemon/Guides/Guides.html">Guides</a>
            </div>
        </div>
        <a href="https://hylaster0.github.io/Original Games/Overview.html">Original Games</a>
        <a href="https://hylaster0.github.io/Translations/Overview.html">JP Song Translations</a>
        <a href="https://hylaster0.github.io/Crafting/Overview.html"">Arts & Crafts</a>
        <a href="https://hylaster0.github.io/Neopets/Overview.html">Neopets TCG</a>
    </div>
`
} catch {
    // pokemon pages will have a special header instead to tie things nicer together
    document.getElementById("pokemonHeader").innerHTML = `
        <div class="siteheaderlogo">Hylaster's PokéHub</div>
        <div class="navbar">
            <a href="https://hylaster0.github.io/Pokemon/index.html">Pokémon Hub Home</a>
            <div class="dropdown">
                <button class="dropbtn">Standard
                <i class="fa fa-caret-down"></i>
                </button>
                <div class="dropdown-content">
                    <a href="https://hylaster0.github.io/Pokemon/Standard/MetaDecks.html">Meta Decks</a>
                    <a href="https://hylaster0.github.io/Pokemon/Standard/CasualDecks.html">Casual Decks</a>
                    <a href="https://hylaster0.github.io/Pokemon/Standard/NoteworthyCards.html">Noteworthy Cards</a>
                    <a href="https://hylaster0.github.io/Pokemon/Standard/Rotation.html">Rotation</a>
                </div>
            </div>
            <div class="dropdown">
                <button class="dropbtn">Alt Formats
                <i class="fa fa-caret-down"></i>
                </button>
                <div class="dropdown-content">
                    <a href="https://hylaster0.github.io/Pokemon/Alternative/Overview.html">Alt Format Directory</a>
                    <a href="https://hylaster0.github.io/Pokemon/Alternative/Cube.html">Cube</a>
                    <a href="https://hylaster0.github.io/Pokemon/Alternative/Ace Trainer Showdown/Overview.html">Ace Trainer Showdown</a>
                    <a href="https://hylaster0.github.io/Pokemon/Alternative/Base Set Evolution/Overview.html">Base Set Evolution</a>
                </div>
            </div>
            <div class="dropdown">
                <button class="dropbtn">Guides
                <i class="fa fa-caret-down"></i>
                </button>
                <div class="dropdown-content">
                    <a href="https://hylaster0.github.io/Pokemon/Guides/Guides.html">Guides Directory</a>
                    <a href="https://hylaster0.github.io/Pokemon/Guides/Deckbuilding.html">Deckbuilding</a>
                    <a href="https://hylaster0.github.io/Pokemon/Guides/Prerelease.html">Prerelease</a>
                    <a href="https://hylaster0.github.io/Pokemon/Shopping.html">Gift Giving</a>
                    <a href="https://hylaster0.github.io/Pokemon/Events.html">Where To Play</a>
                </div>
            </div>
            <a href="https://hylaster0.github.io/index.html">Site Home</a>    
        </div>
    `
}

document.getElementById("siteFooter").innerHTML = `
    <div class="questionDiv">
        <p><a href="https://www.youtube.com/@HylasterTroupe">Youtube</a> |
        <a href="https://twitch.tv/HylasterTroupe">Twitch</a> |
        <a href="https://discord.gg/546FrPNK87">Discord</a></p>
    </div>
`