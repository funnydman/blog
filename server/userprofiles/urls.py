from django.urls import path

from . import views

urlpatterns = [
    path('api/users', views.create_user)
]
