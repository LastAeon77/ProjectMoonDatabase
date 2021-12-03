from django.http import HttpResponseRedirect
from django.shortcuts import render
from .models import (
    Office,
    Rank,
    Card,
    Deck,
    RelDeck,
    Page,
    Character,
    Guide,
    RelGuide,
    AbnoCards,
    Effects,
)
from rest_framework.permissions import AllowAny

# from .forms import DeckMakerForm, GuideMakerForm
from django.urls import reverse
import collections
from django.contrib.auth.decorators import login_required
from django.views import generic  # generic.DetailView and generic.ListView
from rest_framework import generics
from .serializers import (
    DeckSerializers,
    CardSerializers,
    RankSerializers,
    AbnoSerializers,
    EffectSerializers,
)

# DetailView will fetch a certain row through its unique id in url
# ListView will fetch all rows of a Relation


class rankSerial(generics.RetrieveAPIView):
    permission_classes = [
        AllowAny,
    ]
    queryset = Rank.objects.all()
    serializer_class = RankSerializers


class deckSerail(generics.RetrieveAPIView):
    permission_classes = [
        AllowAny,
    ]
    queryset = Deck.objects.all()
    serializer_class = DeckSerializers


class AbnoViewSet(generics.ListAPIView):
    permission_classes = [
        AllowAny,
    ]
    queryset = AbnoCards.objects.all()
    serializer_class = AbnoSerializers


class EffectListView(generics.ListAPIView):
    permission_classes = [
        AllowAny,
    ]
    queryset = Effects.objects.all()
    serializer_class = EffectSerializers


class CardListView(generics.ListAPIView):
    permission_classes = [
        AllowAny,
    ]
    queryset = Card.objects.all()
    serializer_class = CardSerializers


class CardView(generics.RetrieveAPIView):
    permission_classes = [
        AllowAny,
    ]
    queryset = Card.objects.all()
    serializer_class = CardSerializers
    lookup_field = "slug"

