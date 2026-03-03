# ────────────────────────────────────────────────────────────────────────────────
# 📌 ressources.py
# Objectif : Afficher toutes les ressources utiles pour progresser sur MHF-Z
# Catégorie : MHFZ
# Accès : Tous
# Cooldown : 10s par utilisateur
# ────────────────────────────────────────────────────────────────────────────────

# ────────────────────────────────────────────────────────────────────────────────
# 📦 Imports nécessaires
# ────────────────────────────────────────────────────────────────────────────────
import discord
from discord import app_commands
from discord.ext import commands
from discord.ui import View
import os

from utils.discord_utils import safe_send, safe_edit, safe_respond, safe_delete


# ────────────────────────────────────────────────────────────────────────────────
# 📚 Liste des ressources MHF-Z
# ────────────────────────────────────────────────────────────────────────────────
RESSOURCES = [
    {
        "name": "📘 Newbie Guide (Fandom)",
        "description": "Guide complet pour débutants : bases, systèmes et progression.",
        "url": "https://mhfkr.fandom.com/wiki/Newbie_Guide"
    },
    {
        "name": "🎺 Sets Hunting Horn (Le Vieux Hunter)",
        "description": "Exemples de sets HH optimisés pour progression et endgame.",
        "url": "https://levieuxhunter.wordpress.com/2017/03/07/mhf-z-sets-hh-de-gros-furieux/"
    },
    {
        "name": "📖 Guide communautaire (Fist Mirror)",
        "description": "Guide général progression, mécaniques et systèmes Frontier.",
        "url": "https://fist-mirror.github.io/guide/#"
    },
    {
        "name": "📝 Guide progression Frontier (Wycademie)",
        "description": "Explication claire des rangs HR / GR et chemin optimal.",
        "url": "https://lescarnetsdelawycademie.fr/2023/08/28/guide-progression-frontier/"
    },
    {
        "name": "💬 Reddit Wiki – Progression",
        "description": "Conseils communautaires pour progresser efficacement.",
        "url": "https://www.reddit.com/r/MHF/wiki/progressing_and_levelling_up/"
    },
    {
        "name": "🎥 Vidéo Guide YouTube",
        "description": "Vidéo explicative pour mieux comprendre les bases et systèmes.",
        "url": "https://youtu.be/WGz7JU4w6aI?si=PIYEUQIg4nDlz-xU"
    },
    {
        "name": "🛡️ Stuff Pré-G (Google Doc)",
        "description": "Document détaillant les équipements recommandés avant le rang G.",
        "url": "https://docs.google.com/document/d/16ej2fucgASg9vgHLt2rjFbu_nu0KGlWB3b0_DyC9NTM/edit"
    },
    {
        "name": "🔍 Recherche d’Items (Ferias Project)",
        "description": "Base de données complète pour trouver matériaux et objets.",
        "url": "https://themaelstro.github.io/MHFZ-Ferias-English-Project/"
    }
]


# ────────────────────────────────────────────────────────────────────────────────
# 🎛️ UI — Boutons liens
# ────────────────────────────────────────────────────────────────────────────────
class RessourcesView(View):
    def __init__(self):
        super().__init__(timeout=None)

        for res in RESSOURCES:
            self.add_item(
                discord.ui.Button(
                    label=res["name"],
                    url=res["url"],
                    style=discord.ButtonStyle.link
                )
            )


# ────────────────────────────────────────────────────────────────────────────────
# 🧠 Cog principal
# ────────────────────────────────────────────────────────────────────────────────
class Ressources(commands.Cog):
    """
    Commande /ressources et !ressources — Affiche les ressources utiles pour MHF-Z
    """

    def __init__(self, bot: commands.Bot):
        self.bot = bot

    # ────────────────────────────────────────────────────────────────────────────
    # 🔹 Fonction interne commune
    # ────────────────────────────────────────────────────────────────────────────
    async def _send_ressources(self, channel: discord.abc.Messageable):
        msg = await safe_send(channel, "📚 Chargement des ressources MHF-Z...")

        embed = discord.Embed(
            title="🎯 Ressources utiles pour MHF-Z",
            description=(
                "Voici une sélection complète de guides et outils pour "
                "**Monster Hunter Frontier Z** :"
            ),
            color=0x2E8B57
        )

        for res in RESSOURCES:
            embed.add_field(
                name=res["name"],
                value=res["description"],
                inline=False
            )

        embed.set_footer(text="Communauté MHF-Z")

        view = RessourcesView()

        await safe_edit(msg, content=None, embed=embed, view=view)

    # ────────────────────────────────────────────────────────────────────────────
    # 🔹 Commande SLASH
    # ────────────────────────────────────────────────────────────────────────────
    @app_commands.command(
        name="ressources",
        description="Affiche toutes les ressources utiles pour MHF-Z."
    )
    @app_commands.checks.cooldown(rate=1, per=10.0, key=lambda i: i.user.id)
    async def slash_ressources(self, interaction: discord.Interaction):
        await interaction.response.defer()
        await self._send_ressources(interaction.channel)
        await interaction.delete_original_response()

    # ────────────────────────────────────────────────────────────────────────────
    # 🔹 Commande PREFIX
    # ────────────────────────────────────────────────────────────────────────────
    @commands.command(name="ressources")
    @commands.cooldown(1, 10.0, commands.BucketType.user)
    async def prefix_ressources(self, ctx: commands.Context):
        await self._send_ressources(ctx.channel)


# ────────────────────────────────────────────────────────────────────────────────
# 🔌 Setup du Cog
# ────────────────────────────────────────────────────────────────────────────────
async def setup(bot: commands.Bot):
    cog = Ressources(bot)
    for command in cog.get_commands():
        if not hasattr(command, "category"):
            command.category = "MHFZ"
    await bot.add_cog(cog)
