const { SlashCommandBuilder, ActionRowBuilder, StringSelectMenuBuilder } = require("discord.js")

const row = new ActionRowBuilder()
    .addComponents(
        new StringSelectMenuBuilder()
            .setCustomId("select")
            .setPlaceholder("Nenhuma Linguagem Selecionada")
            .addOptions({
                label: "JavaScript",
                description: "Veja a documentação referente a JavaScript",
                value: "JavaScript"
            },
            {
                label: "Python",
                description: "Veja a documentação referente a Python",
                value: "Python"
            },
            {
                label: "C#",
                description: "Veja a documentação referente a C#",
                value: "CSharp"
            },
            {
                label: "Discord.js",
                description: "Veja a documentação referente a Discord.js",
                value: "Discord.js"
            }
        )
    )
module.exports = {
    data: new SlashCommandBuilder()
        .setName("docs")
        .setDescription("Acesse a documentação da Linguagem desejada!"),

    async execute(interaction) {
        await interaction.reply({content: "Selecione uma das Linguagens abaixo", components: [row]})
    }
}