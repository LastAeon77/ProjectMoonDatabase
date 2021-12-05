from django.urls import path
from . import views
from django.contrib.staticfiles.urls import staticfiles_urlpatterns

# app_name allows for easier calling of url in html
app_name = "lor"
# these are the url patterns for each page of the website
urlpatterns = [
    path("api/deck/<int:pk>", views.deckSerail.as_view(), name="DeckAPIView"),
    path("api/card/", views.CardListView.as_view(), name="CardAPIView"),
    path("api/abno/", views.AbnoViewSet.as_view(), name="AbnoAPIView"),
    path("api/effects", views.EffectListView.as_view(), name="Effects"),
    path("api/cardid", views.CardNameID.as_view(), name="CardIDList"),
    path("api/officeid", views.OfficeID.as_view(), name="OfficeIDList"),
    path("api/pageid", views.PageID.as_view(), name="PageIDList"),
    path("api/card/<slug:slug>", views.CardView.as_view(), name="SingleCardView"),
    path("api/cardtest/", views.CardListView2.as_view(), name="CardTestAPI"),
    path("api/deckcreate/", views.DeckCreate.as_view(), name="DeckCreate"),
] + staticfiles_urlpatterns()
