from django.urls import path, include
from .views import GoogleLoginView

# app_name allows for easier calling of url in html
app_name = "nextjsdrfauth"
# these are the url patterns for each page of the website
urlpatterns = [path("google/", GoogleLoginView.as_view(), name="google")]

