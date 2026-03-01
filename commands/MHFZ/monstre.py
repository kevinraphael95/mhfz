# ────────────────────────────────────────────────────────────────────────────────
# 📌 monstre.py
# Objectif : Afficher la fiche complète d'un monstre MHF-Z via le wiki
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
from discord.ui import View, Button
import requests
from bs4 import BeautifulSoup

from utils.discord_utils import safe_send, safe_edit, safe_respond, safe_delete

# ────────────────────────────────────────────────────────────────────────────────
# 🌐 Scraping du wiki Monster Hunter
# ────────────────────────────────────────────────────────────────────────────────
WIKI_BASE = "https://monsterhunter.fandom.com/wiki/"
HEADERS = {"User-Agent": "Mozilla/5.0"}

def scrape_monstre(nom: str) -> dict | None:
    """
    Scrape la fiche d'un monstre sur le wiki Monster Hunter Fandom.
    Retourne un dict avec les infos, ou None si introuvable.
    """
    nom_url = nom.strip().title().replace(" ", "_")
    url = f"{WIKI_BASE}{nom_url}"

    try:
        response = requests.get(url, headers=HEADERS, timeout=10)
    except requests.RequestException:
        return None

    if response.status_code != 200:
        return None

    soup = BeautifulSoup(response.text, "html.parser")

    # Vérifie que la page existe vraiment (pas une page "introuvable")
    if soup.find("div", class_="noarticletext"):
        return None

    data = {"nom": nom.title(), "url": url, "champs": {}}

    # Image du monstre (thumbnail de l'infobox)
    img_tag = soup.find("figure", class_="pi-item pi-image")
    if img_tag:
        img = img_tag.find("img")
        if img:
            data["image"] = img.get("src", "")

    # Infobox (tableau à droite avec les stats)
    infobox = soup.find("aside", class_="portable-infobox")
    if infobox:
        for item in infobox.find_all("div", class_="pi-item"):
            label_tag = item.find("h3", class_="pi-data-label")
            value_tag = item.find("div", class_="pi-data-value")
            if label_tag and value_tag:
                label = label_tag.get_text(strip=True)
                value = value_tag.get_text(separator=", ", strip=True)
                if label and value:
                    data["champs"][label] = value

    # Résumé (premier paragraphe de la page)
    content = soup.find("div", class_="mw-parser-output")
    if content:
        for p in content.find_all("p"):
            texte = p.get_text(strip=True)
            if len(texte) > 80:
                data["resume"] = texte[:400] + ("..." if len(texte) > 400 else "")
                break

    return data if data["champs"] else None


def build_embed(data: dict) -> discord.Embed:
    """Construit l'embed Discord à partir des données scrapées."""
    embed = discord.Embed(
        title=f"🐉 {data['nom']}",
        url=data["url"],
        color=0xB22222
    )

    if "resume" in data:
        embed.description = data["resume"]

    if "image" in data:
        embed.set_thumbnail(url=data["image"])

    # Champs prioritaires à afficher en premier
    priorite = ["Elements", "Weakest To", "Status Effects", "Ailments", "Habitats", "Generation"]
    champs_affiches = []

    for label in priorite:
        if label in data["champs"]:
            embed.add_field(name=label, value=data["champs"][label], inline=True)
            champs_affiches.append(label)

    # Reste des champs
    for label, value in data["champs"].items():
        if label not in champs_affiches:
            embed.add_field(name=label, value=value[:256], inline=True)

    embed.set_footer(text="Source : Monster Hunter Wiki (Fandom)")
    return embed


# ────────────────────────────────────────────────────────────────────────────────
# 🎛️ UI — Bouton lien vers le wiki
# ────────────────────────────────────────────────────────────────────────────────
class MonstreView(View):
    def __init__(self, url: str):
        super().__init__(timeout=None)
        self.add_item(discord.ui.Button(
            label="📖 Voir sur le Wiki",
            url=url,
            style=discord.ButtonStyle.link
        ))


# ────────────────────────────────────────────────────────────────────────────────
# 🧠 Cog principal
# ────────────────────────────────────────────────────────────────────────────────
class Monstre(commands.Cog):
    """
    Commande /monstre et !monstre — Affiche la fiche complète d'un monstre MHF-Z
    """
    def __init__(self, bot: commands.Bot):
        self.bot = bot

    # ────────────────────────────────────────────────────────────────────────────
    # 🔹 Fonction interne commune
    # ────────────────────────────────────────────────────────────────────────────
    async def _send_monstre(self, channel: discord.abc.Messageable, nom: str):
        # Message de chargement
        msg = await safe_send(channel, f"🔍 Recherche de **{nom}** sur le wiki...")

        data = scrape_monstre(nom)

        if not data:
            await safe_edit(msg, content=f"❌ Monstre **{nom}** introuvable sur le wiki. Vérifie l'orthographe ! (en anglais)")
            return

        embed = build_embed(data)
        view = MonstreView(data["url"])

        await safe_edit(msg, content=None, embed=embed, view=view)

    # ────────────────────────────────────────────────────────────────────────────
    # 🔹 Commande SLASH
    # ────────────────────────────────────────────────────────────────────────────
    @app_commands.command(
        name="monstre",
        description="Affiche la fiche complète d'un monstre Monster Hunter (en anglais)."
    )
    @app_commands.describe(nom="Nom du monstre (ex: Akantor, Rathalos, Tigrex...)")
    @app_commands.checks.cooldown(rate=1, per=10.0, key=lambda i: i.user.id)
    async def slash_monstre(self, interaction: discord.Interaction, nom: str):
        await interaction.response.defer()
        await self._send_monstre(interaction.channel, nom)
        await interaction.delete_original_response()

    # ────────────────────────────────────────────────────────────────────────────
    # 🔹 Commande PREFIX
    # ────────────────────────────────────────────────────────────────────────────
    @commands.command(name="monstre")
    @commands.cooldown(1, 10.0, commands.BucketType.user)
    async def prefix_monstre(self, ctx: commands.Context, *, nom: str):
        await self._send_monstre(ctx.channel, nom)

    # ────────────────────────────────────────────────────────────────────────────
    # 🔹 Gestion des erreurs de cooldown
    # ────────────────────────────────────────────────────────────────────────────
    @prefix_monstre.error
    async def monstre_error(self, ctx, error):
        if isinstance(error, commands.CommandOnCooldown):
            await safe_send(ctx.channel, f"⏳ Cooldown ! Réessaie dans **{error.retry_after:.1f}s**.")

    @slash_monstre.error
    async def slash_monstre_error(self, interaction: discord.Interaction, error):
        if isinstance(error, app_commands.CommandOnCooldown):
            await interaction.response.send_message(
                f"⏳ Cooldown ! Réessaie dans **{error.retry_after:.1f}s**.",
                ephemeral=True
            )


# ────────────────────────────────────────────────────────────────────────────────
# 🔌 Setup du Cog
# ────────────────────────────────────────────────────────────────────────────────
async def setup(bot: commands.Bot):
    cog = Monstre(bot)
    for command in cog.get_commands():
        if not hasattr(command, "category"):
            command.category = "MHFZ"
    await bot.add_cog(cog)
