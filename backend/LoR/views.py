import json

from .models import (
    Office,
    Rank,
    Card,
    Deck,
    RelDeck,
    Page,
    # Character,
    # Guide,
    # RelGuide,
    AbnoCards,
    Effects,
)
from rest_framework.response import Response
from rest_framework import generics
from .serializers import (
    DeckSerializers,
    CardSerializers,
    RankSerializers,
    AbnoSerializers,
    EffectSerializers,
    DeckCreatorSerializer,
    CardIDSerializer,
    PageIDSerializer,
    OfficeIDSerializer,
    CardEfficientSerializers,
)
from rest_framework.views import APIView
from rest_framework import status, permissions

# DetailView will fetch a certain row through its unique id in url
# ListView will fetch all rows of a Relation


class rankSerial(generics.ListAPIView):
    permission_classes = (permissions.AllowAny,)
    queryset = Rank.objects.all()
    serializer_class = RankSerializers


class deckSerail(generics.RetrieveAPIView):
    permission_classes = (permissions.AllowAny,)
    queryset = Deck.objects.all()
    serializer_class = DeckSerializers


class deckSerailAll(generics.ListAPIView):
    permission_classes = (permissions.AllowAny,)
    queryset = Deck.objects.all()
    serializer_class = DeckSerializers


class AbnoViewSet(generics.ListAPIView):
    permission_classes = (permissions.AllowAny,)
    queryset = AbnoCards.objects.all()
    serializer_class = AbnoSerializers


class AbnoViewOne(generics.RetrieveAPIView):
    permission_classes = (permissions.AllowAny,)
    queryset = AbnoCards.objects.all()
    serializer_class = AbnoSerializers


class EffectListView(generics.ListAPIView):
    permission_classes = (permissions.AllowAny,)
    queryset = Effects.objects.all()
    serializer_class = EffectSerializers


class CardListView(generics.ListAPIView):
    permission_classes = (permissions.AllowAny,)
    queryset = Card.objects.all()
    serializer_class = CardSerializers


class CardView(generics.RetrieveAPIView):
    permission_classes = (permissions.AllowAny,)
    queryset = Card.objects.all()
    serializer_class = CardSerializers
    lookup_field = "slug"


class CardListView2(generics.ListAPIView):
    queryset = Card.objects.all()
    serializer_class = CardSerializers


class DeckCreate(APIView):
    def post(self, request, format="json"):
        new_request = request.data.copy()
        # new_request["effect"] = list(map(int, new_request["effect"].split(",")))
        new_request["cards"] = list(map(str, new_request["cards"].split("|")))
        new_request["cards"] = list(map(json.loads, new_request["cards"]))
        new_request["creator"] = request.user.id
        curr_effects = new_request.pop(
            "effect"
        )  # Take out effect to individually save it
        curr_cards = new_request.pop("cards")  # Take out cards to individually save it
        serializer = DeckCreatorSerializer(data=new_request)
        if serializer.is_valid():
            deck = serializer.save()  # Created a deck instance
            curr_deck_pk = deck.pk
            # Starting to create multiple RelDeck instances and saving it for each card
            for ordinary_dict in curr_cards:
                new_conn = RelDeck(
                    card_id=Card.objects.get(id=int(ordinary_dict["card"])),
                    deck_id=Deck.objects.get(id=int(curr_deck_pk)),
                    card_count=ordinary_dict["count"],
                )
                if new_conn:
                    new_conn.save()
            # Add all the effects in
            for effs in curr_effects:
                deck.effect.add(Effects.objects.get(id=effs))
            if deck:
                js = serializer.data
                return Response(js, status=status.HTTP_201_CREATED)
        else:
            print(serializer.errors)
            return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


class CardNameID(generics.ListAPIView):
    permission_classes = (permissions.AllowAny,)
    queryset = Card.objects.all()
    serializer_class = CardIDSerializer


class PageID(generics.ListAPIView):
    permission_classes = (permissions.AllowAny,)
    queryset = Page.objects.all()
    serializer_class = PageIDSerializer


class OfficeFloor(generics.ListAPIView):
    permission_classes = (permissions.AllowAny,)
    queryset = Office.objects.all().filter(Rank=7)
    serializer_class = OfficeIDSerializer


class OfficeAll(generics.ListAPIView):
    permission_classes = (permissions.AllowAny,)
    queryset = Office.objects.all()
    serializer_class = OfficeIDSerializer


class CardLightListView(generics.ListAPIView):
    permission_classes = (permissions.AllowAny,)
    queryset = Card.objects.all()
    serializer_class = CardEfficientSerializers
