const { SlashCommandBuilder } = require("discord.js")

module.exports = {
    data: new SlashCommandBuilder()
        .setName("playlist")
        .setDescription("Ouça a melhor playlist já criada"),

    async execute(interaction) {
        await interaction.reply("https://open.spotify.com/playlist/4iQ8xXV95Zcimz1NYhqqEJ?si=c4da28dff8894a61")
    }
}