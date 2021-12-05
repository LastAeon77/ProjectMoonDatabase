from rest_framework import serializers
from LoR.models import Deck, Card, Rank, RelDeck, AbnoCards, Effects
from django.utils.translation import ngettext_lazy as unlaz


class CardCountSerializers(serializers.ModelSerializer):
    card_id = serializers.StringRelatedField(read_only=True)

    class Meta:
        model = RelDeck
        fields = ["card_count", "card_id"]


class CardDeckSerializers(serializers.ModelSerializer):
    class Meta:
        model = Card
        fields = ["Name", "ImgPath"]


class DeckSerializers(serializers.ModelSerializer):
    card_count = serializers.SerializerMethodField()
    cards = CardDeckSerializers(many=True, read_only=True)
    effect = serializers.StringRelatedField(many=True, read_only=True)
    Recc_Floor = serializers.StringRelatedField(read_only=True)
    Recc_Page = serializers.StringRelatedField(read_only=True)
    Recc_Rank = serializers.StringRelatedField(read_only=True)
    creator = serializers.StringRelatedField(read_only=True)

    class Meta:
        model = Deck
        fields = "__all__"

    def get_card_count(self, instance):
        reldecks = instance.reldeck_set.all().order_by("card_id")
        return CardCountSerializers(reldecks, many=True).data


class CardSerializers(serializers.ModelSerializer):
    office = serializers.StringRelatedField(read_only=True)
    rank = serializers.ReadOnlyField(source="office.Rank.Name")
    rank_picture = serializers.ReadOnlyField(source="office.Rank.ImgPath")
    office_picture = serializers.ReadOnlyField(source="office.ImgPath")
    Rarity = serializers.SerializerMethodField()
    Type1 = serializers.SerializerMethodField()
    Type2 = serializers.SerializerMethodField()
    Type3 = serializers.SerializerMethodField()
    Type4 = serializers.SerializerMethodField()
    Type5 = serializers.SerializerMethodField()
    CardType = serializers.SerializerMethodField()

    class Meta:
        model = Card
        lookup_field = "slug"
        extra_kwargs = {"url": {"lookup_field": "slug"}}
        fields = (
            "office",
            "rank",
            "rank_picture",
            "office_picture",
            "Name",
            "Obtainable",
            "Cost",
            "On_Play_Effect",
            "Dice_Number",
            "ImgPath",
            "Roll1",
            "Rarity",
            "Eff1",
            "Type1",
            "CardType",
            "Roll2",
            "Eff2",
            "Type2",
            "Roll3",
            "Eff3",
            "Type3",
            "Roll4",
            "Eff4",
            "Type4",
            "Roll5",
            "Eff5",
            "Type5",
            "slug",
        )

    def get_Rarity(self, obj):
        return obj.get_Rarity_display()

    def get_Type1(self, obj):
        return obj.get_Type1_display()

    def get_Type2(self, obj):
        return obj.get_Type2_display()

    def get_Type3(self, obj):
        return obj.get_Type3_display()

    def get_Type4(self, obj):
        return obj.get_Type4_display()

    def get_Type5(self, obj):
        return obj.get_Type5_display()

    def get_CardType(self, obj):
        return obj.get_CardType_display()


class RankSerializers(serializers.ModelSerializer):
    class Meta:
        model = Rank
        fields = "__all__"


class AbnoSerializers(serializers.ModelSerializer):
    office = serializers.StringRelatedField(read_only=True)

    class Meta:
        model = AbnoCards
        fields = "__all__"


class EffectSerializers(serializers.ModelSerializer):
    class Meta:
        model = Effects
        fields = ["Name", "Description"]


# Card serializer deck post request
class CardSerializerDeck(serializers.ModelSerializer):
    class Meta:
        model = Card
        fields = "__all__"


# RelDeck Serializer
class RelDeckSerializer(serializers.HyperlinkedModelSerializer):
    deck_id = serializers.ReadOnlyField()
    card_id = serializers.ReadOnlyField()

    class Meta:
        model = RelDeck


# Deck creator Serializer
########
# Example of validated data
# {
#         "id": 7,
#         "name": "P Space",
#         "description": "Just press P and then Spacebar",
#         "show": true,
#         "creator": 4,
#         "Recc_Floor": null,
#         "Recc_Page": null,
#         "Recc_Rank": null,
#         "cards": [
#             594,
#             589,
#             593
#         ],
#         "effect": [324]
#     },
class DeckCreatorSerializer(serializers.ModelSerializer):
    cards = RelDeckSerializer(many=True)

    def create(self, validated_data):
        cards = validated_data.pop("cards")
        deck = Deck.objects.create(**validated_data)
        return deck

    class Meta:
        model = Deck
        fields = "__all__"

