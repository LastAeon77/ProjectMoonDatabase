# Generated by Django 3.2.9 on 2021-12-03 05:35

import django.core.validators
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = []

    operations = [
        migrations.CreateModel(
            name="AbnoCards",
            fields=[
                (
                    "id",
                    models.BigAutoField(
                        auto_created=True,
                        primary_key=True,
                        serialize=False,
                        verbose_name="ID",
                    ),
                ),
                ("name", models.CharField(max_length=200, unique=True)),
                ("effects", models.TextField()),
                ("description", models.TextField()),
                ("ImgPath", models.CharField(blank=True, max_length=200)),
                (
                    "emotion_type",
                    models.CharField(
                        blank=True,
                        choices=[("BD", "Breakdown page"), ("AW", "Awakening page")],
                        default="AW",
                        max_length=2,
                    ),
                ),
                (
                    "emotion_level",
                    models.IntegerField(
                        default=1,
                        validators=[
                            django.core.validators.MaxValueValidator(10),
                            django.core.validators.MinValueValidator(0),
                        ],
                    ),
                ),
            ],
        ),
        migrations.CreateModel(
            name="Card",
            fields=[
                (
                    "id",
                    models.BigAutoField(
                        auto_created=True,
                        primary_key=True,
                        serialize=False,
                        verbose_name="ID",
                    ),
                ),
                ("Name", models.CharField(max_length=200, unique=True)),
                (
                    "Rarity",
                    models.CharField(
                        choices=[
                            ("P", "Paperback"),
                            ("H", "Hardcover"),
                            ("L", "Limited"),
                            ("O", "Objet d'art"),
                            ("E", "EGO"),
                        ],
                        default="P",
                        max_length=1,
                        null=True,
                    ),
                ),
                ("Obtainable", models.BooleanField(default=True)),
                ("Cost", models.IntegerField()),
                ("On_Play_Effect", models.TextField(blank=True, null=True)),
                ("Dice_Number", models.IntegerField(null=True)),
                ("ImgPath", models.CharField(max_length=300, null=True)),
                ("Roll1", models.CharField(blank=True, max_length=10, null=True)),
                ("Eff1", models.CharField(blank=True, max_length=200, null=True)),
                (
                    "CardType",
                    models.CharField(
                        blank=True,
                        choices=[("M", "Melee"), ("R", "Ranged")],
                        default="M",
                        max_length=1,
                        null=True,
                    ),
                ),
                (
                    "Type1",
                    models.CharField(
                        blank=True,
                        choices=[
                            ("BL", "Blunt"),
                            ("PI", "Pierce"),
                            ("SL", "Slash"),
                            ("EV", "Evade"),
                            ("BO", "Block"),
                            ("CB", "Block Counter"),
                            ("CP", "Pierce Counter"),
                            ("CS", "Slash Counter"),
                            ("CE", "Evade Counter"),
                            ("CC", "Blunt Counter"),
                        ],
                        default=None,
                        max_length=2,
                        null=True,
                    ),
                ),
                ("Roll2", models.CharField(blank=True, max_length=10, null=True)),
                ("Eff2", models.CharField(blank=True, max_length=200, null=True)),
                (
                    "Type2",
                    models.CharField(
                        blank=True,
                        choices=[
                            ("BL", "Blunt"),
                            ("PI", "Pierce"),
                            ("SL", "Slash"),
                            ("EV", "Evade"),
                            ("BO", "Block"),
                            ("CB", "Block Counter"),
                            ("CP", "Pierce Counter"),
                            ("CS", "Slash Counter"),
                            ("CE", "Evade Counter"),
                            ("CC", "Blunt Counter"),
                        ],
                        default=None,
                        max_length=2,
                        null=True,
                    ),
                ),
                ("Roll3", models.CharField(blank=True, max_length=10, null=True)),
                ("Eff3", models.CharField(blank=True, max_length=200, null=True)),
                (
                    "Type3",
                    models.CharField(
                        blank=True,
                        choices=[
                            ("BL", "Blunt"),
                            ("PI", "Pierce"),
                            ("SL", "Slash"),
                            ("EV", "Evade"),
                            ("BO", "Block"),
                            ("CB", "Block Counter"),
                            ("CP", "Pierce Counter"),
                            ("CS", "Slash Counter"),
                            ("CE", "Evade Counter"),
                            ("CC", "Blunt Counter"),
                        ],
                        default=None,
                        max_length=2,
                        null=True,
                    ),
                ),
                ("Roll4", models.CharField(blank=True, max_length=10, null=True)),
                ("Eff4", models.CharField(blank=True, max_length=200, null=True)),
                (
                    "Type4",
                    models.CharField(
                        blank=True,
                        choices=[
                            ("BL", "Blunt"),
                            ("PI", "Pierce"),
                            ("SL", "Slash"),
                            ("EV", "Evade"),
                            ("BO", "Block"),
                            ("CB", "Block Counter"),
                            ("CP", "Pierce Counter"),
                            ("CS", "Slash Counter"),
                            ("CE", "Evade Counter"),
                            ("CC", "Blunt Counter"),
                        ],
                        default=None,
                        max_length=2,
                        null=True,
                    ),
                ),
                ("Roll5", models.CharField(blank=True, max_length=10, null=True)),
                ("Eff5", models.CharField(blank=True, max_length=200, null=True)),
                (
                    "Type5",
                    models.CharField(
                        blank=True,
                        choices=[
                            ("BL", "Blunt"),
                            ("PI", "Pierce"),
                            ("SL", "Slash"),
                            ("EV", "Evade"),
                            ("BO", "Block"),
                            ("CB", "Block Counter"),
                            ("CP", "Pierce Counter"),
                            ("CS", "Slash Counter"),
                            ("CE", "Evade Counter"),
                            ("CC", "Blunt Counter"),
                        ],
                        default=None,
                        max_length=2,
                        null=True,
                    ),
                ),
                ("slug", models.SlugField(null=True, unique=True)),
            ],
        ),
        migrations.CreateModel(
            name="Character",
            fields=[
                (
                    "id",
                    models.BigAutoField(
                        auto_created=True,
                        primary_key=True,
                        serialize=False,
                        verbose_name="ID",
                    ),
                ),
                ("Name", models.CharField(max_length=100, unique=True)),
                ("Story", models.TextField(null=True)),
                ("ImgPath", models.CharField(max_length=300, null=True)),
                ("slug", models.SlugField(null=True, unique=True)),
            ],
        ),
        migrations.CreateModel(
            name="Deck",
            fields=[
                (
                    "id",
                    models.BigAutoField(
                        auto_created=True,
                        primary_key=True,
                        serialize=False,
                        verbose_name="ID",
                    ),
                ),
                ("name", models.CharField(max_length=50, unique=True)),
                ("description", models.TextField()),
                ("show", models.BooleanField(default=True)),
            ],
        ),
        migrations.CreateModel(
            name="Effects",
            fields=[
                (
                    "id",
                    models.BigAutoField(
                        auto_created=True,
                        primary_key=True,
                        serialize=False,
                        verbose_name="ID",
                    ),
                ),
                ("Name", models.CharField(max_length=200)),
                ("Description", models.TextField()),
                ("InGameId", models.IntegerField(unique=True)),
            ],
        ),
        migrations.CreateModel(
            name="Guide",
            fields=[
                (
                    "id",
                    models.BigAutoField(
                        auto_created=True,
                        primary_key=True,
                        serialize=False,
                        verbose_name="ID",
                    ),
                ),
                ("name", models.CharField(max_length=50, unique=True)),
                ("description", models.TextField()),
            ],
        ),
        migrations.CreateModel(
            name="Office",
            fields=[
                (
                    "id",
                    models.BigAutoField(
                        auto_created=True,
                        primary_key=True,
                        serialize=False,
                        verbose_name="ID",
                    ),
                ),
                ("Name", models.CharField(max_length=200, unique=True)),
                ("Info", models.TextField()),
                ("ImgPath", models.CharField(max_length=300)),
                ("slug", models.SlugField(null=True, unique=True)),
            ],
        ),
        migrations.CreateModel(
            name="Rank",
            fields=[
                (
                    "id",
                    models.BigAutoField(
                        auto_created=True,
                        primary_key=True,
                        serialize=False,
                        verbose_name="ID",
                    ),
                ),
                ("Name", models.CharField(max_length=30, unique=True)),
                ("Slogan", models.CharField(max_length=200)),
                ("Description", models.TextField()),
                ("ImgPath", models.CharField(max_length=300)),
                ("slug", models.SlugField(null=True, unique=True)),
            ],
        ),
        migrations.CreateModel(
            name="RelGuide",
            fields=[
                (
                    "id",
                    models.BigAutoField(
                        auto_created=True,
                        primary_key=True,
                        serialize=False,
                        verbose_name="ID",
                    ),
                ),
                (
                    "deck_count",
                    models.IntegerField(
                        validators=[
                            django.core.validators.MaxValueValidator(6),
                            django.core.validators.MinValueValidator(0),
                        ]
                    ),
                ),
                (
                    "deck_id",
                    models.ForeignKey(
                        on_delete=django.db.models.deletion.CASCADE, to="LoR.deck"
                    ),
                ),
                (
                    "guide_id",
                    models.ForeignKey(
                        on_delete=django.db.models.deletion.CASCADE, to="LoR.guide"
                    ),
                ),
            ],
        ),
        migrations.CreateModel(
            name="RelDeck",
            fields=[
                (
                    "id",
                    models.BigAutoField(
                        auto_created=True,
                        primary_key=True,
                        serialize=False,
                        verbose_name="ID",
                    ),
                ),
                (
                    "card_count",
                    models.IntegerField(
                        validators=[
                            django.core.validators.MaxValueValidator(4),
                            django.core.validators.MinValueValidator(0),
                        ]
                    ),
                ),
                (
                    "card_id",
                    models.ForeignKey(
                        on_delete=django.db.models.deletion.CASCADE, to="LoR.card"
                    ),
                ),
                (
                    "deck_id",
                    models.ForeignKey(
                        on_delete=django.db.models.deletion.CASCADE, to="LoR.deck"
                    ),
                ),
            ],
        ),
        migrations.CreateModel(
            name="Page",
            fields=[
                (
                    "id",
                    models.BigAutoField(
                        auto_created=True,
                        primary_key=True,
                        serialize=False,
                        verbose_name="ID",
                    ),
                ),
                ("Name", models.CharField(max_length=200, unique=True)),
                ("Story", models.TextField()),
                ("InGameId", models.IntegerField(unique=True)),
                (
                    "Rarity",
                    models.CharField(
                        choices=[
                            ("P", "Paperback"),
                            ("L", "Limited"),
                            ("H", "Hardcover"),
                            ("O", "Objet d'art"),
                            ("E", "EGO"),
                        ],
                        default="P",
                        max_length=1,
                        null=True,
                    ),
                ),
                ("slug", models.SlugField(null=True, unique=True)),
                ("HP", models.IntegerField(blank=True, null=True)),
                ("Stagger", models.IntegerField(blank=True, null=True)),
                ("SpeedMin", models.IntegerField(blank=True, null=True)),
                ("Speed", models.IntegerField(blank=True, null=True)),
                ("SlashResist", models.CharField(default="Normal", max_length=100)),
                ("PierceResist", models.CharField(default="Normal", max_length=100)),
                ("BluntResist", models.CharField(default="Normal", max_length=100)),
                (
                    "SlashStaggerResist",
                    models.CharField(default="Normal", max_length=100),
                ),
                (
                    "PierceStaggerResist",
                    models.CharField(default="Normal", max_length=100),
                ),
                (
                    "BluntStaggerResist",
                    models.CharField(default="Normal", max_length=100),
                ),
                ("RangeType", models.CharField(blank=True, max_length=100, null=True)),
                ("SpeedDiceNum", models.IntegerField(blank=True, null=True)),
                (
                    "InitialEffects",
                    models.ManyToManyField(blank=True, to="LoR.Effects"),
                ),
                (
                    "office",
                    models.ForeignKey(
                        null=True,
                        on_delete=django.db.models.deletion.CASCADE,
                        to="LoR.office",
                    ),
                ),
            ],
        ),
        migrations.AddField(
            model_name="office",
            name="Rank",
            field=models.ForeignKey(
                on_delete=django.db.models.deletion.CASCADE, to="LoR.rank"
            ),
        ),
        migrations.AddField(
            model_name="guide",
            name="Recc_Floor",
            field=models.ForeignKey(
                blank=True,
                null=True,
                on_delete=django.db.models.deletion.CASCADE,
                to="LoR.office",
            ),
        ),
    ]
