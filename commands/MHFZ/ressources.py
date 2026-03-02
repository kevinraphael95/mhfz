# ────────────────────────────────────────────────────────────────────────────────
# 📌 apprendre.py
# Objectif : Afficher des ressources pour apprendre et progresser sur MHF-Z
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

from utils.discord_utils import safe_send, safe_edit


# ────────────────────────────────────────────────────────────────────────────────
# 📚 Ressources d'apprentissage MHF-Z
# ────────────────────────────────────────────────────────────────────────────────

RESSOURCES = [
    {
        "name": "📘 Newbie Guide (Fandom)",
        "description": "Guide complet pour débutants : bases, systèmes, progression.",
        "url": "https://mhfkr.fandom.com/wiki/Newbie_Guide"
    },
    {
        "name": "🎺 Sets Hunting Horn (Le Vieux Hunter)",
        "description": "Exemples de sets HH optimisés pour progression et endgame.",
        "url": "https://levieuxhunter.wordpress.com/2017/03/07/mhf-z-sets-hh-de-gros-furieux/"
    },
    {
        "name": "📖 Guide communautaire (Fist Mirror)",
        "description": "Guide général progression, mécaniques, systèmes Frontier.",
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
    }
]


# ────────────────────────────────────────────────────────────────────────────────
# 🎛️ Vue avec boutons liens
# ────────────────────────────────────────────────────────────────────────────────
class ApprendreView(View):
    def __init__(self):
        super().__init__(timeout=None)

        for res in RESSOURCES:
            self.add_item(discord.ui.Button(
                label=res["name"],
                url=res["url"],
                style=discord.ButtonStyle.link
            ))


# ────────────────────────────────────────────────────────────────────────────────
# 🧠 Cog principal
# ────────────────────────────────────────────────────────────────────────────────
class Apprendre(commands.Cog):
    """
    Commande /apprendre et !apprendre — Affiche les ressources utiles pour débuter et progresser sur MHF-Z
    """
    def __init__(self, bot: commands.Bot):
        self.bot = bot

    # ────────────────────────────────────────────────────────────────────────────
    # 🔹 Fonction interne commune
    # ────────────────────────────────────────────────────────────────────────────
    async def _send_ressources(self, channel: discord.abc.Messageable):
        msg = await safe_send(channel, "📚 Chargement des ressources MHF-Z...")

        embed = discord.Embed(
            title="🎯 Ressources pour apprendre MHF-Z",
            description=(
                "Voici une sélection de guides utiles pour débuter et progresser "
                "sur **Monster Hunter Frontier Z** :"
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

        view = ApprendreView()

        await safe_edit(msg, content=None, embed=embed, view=view)

    # ────────────────────────────────────────────────────────────────────────────
    # 🔹 Commande SLASH
    # ────────────────────────────────────────────────────────────────────────────
    @app_commands.command(
        name="apprendre",
        description="Affiche des ressources pour apprendre à jouer à MHF-Z."
    )
    @app_commands.checks.cooldown(rate=1, per=10.0, key=lambda i: i.user.id)
    async def slash_apprendre(self, interaction: discord.Interaction):
        await interaction.response.defer()
        await self._send_ressources(interaction.channel)
        await interaction.delete_original_response()

    # ────────────────────────────────────────────────────────────────────────────
    # 🔹 Commande PREFIX
    # ────────────────────────────────────────────────────────────────────────────
    @commands.command(name="apprendre")
    @commands.cooldown(1, 10.0, commands.BucketType.user)
    async def prefix_apprendre(self, ctx: commands.Context):
        await self._send_ressources(ctx.channel)

    # ────────────────────────────────────────────────────────────────────────────
    # 🔹 Gestion des erreurs de cooldown
    # ────────────────────────────────────────────────────────────────────────────
    @prefix_apprendre.error
    async def apprendre_error(self, ctx, error):
        if isinstance(error, commands.CommandOnCooldown):
            await safe_send(ctx.channel, f"⏳ Cooldown ! Réessaie dans **{error.retry_after:.1f}s**.")

    @slash_apprendre.error
    async def slash_apprendre_error(self, interaction: discord.Interaction, error):
        if isinstance(error, app_commands.CommandOnCooldown):
            await interaction.response.send_message(
                f"⏳ Cooldown ! Réessaie dans **{error.retry_after:.1f}s**.",
                ephemeral=True
            )


# ────────────────────────────────────────────────────────────────────────────────
# 🔌 Setup du Cog
# ────────────────────────────────────────────────────────────────────────────────
async def setup(bot: commands.Bot):
    cog = Apprendre(bot)
    for command in cog.get_commands():
        if not hasattr(command, "category"):
            command.category = "MHFZ"
    await bot.add_cog(cog)
